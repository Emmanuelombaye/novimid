(function(){const intakeCanonicalHost = "quiz.tryyucca.com";
const websiteGetStartedEventIdPrefix = "website:get_started:";
const routerPopupEnabled = false;

  (function () {
    // Astro re-emits this inline <script> on every View-Transition swap.
    // Without this guard, every navigation registers a new copy of the
    // event listeners below — leading to N dataLayer.push events per
    // nav after N navs. Guard at the top so the IIFE body runs exactly
    // once per session.
    if (window.__yuccaAnalyticsInit) return;
    window.__yuccaAnalyticsInit = true;

    // Intake hosts this forwarder matches. The canonical host comes from
    // `src/lib/intake.ts` (via define:vars) so an intake-domain swap
    // propagates here automatically; the literals are legacy/planned
    // subdomains kept for transition safety. Match by hostname exactly
    // so a third-party that happened to put one of these strings in
    // their domain doesn't trigger our event.
    var INTAKE_HOSTS = [
      'quiz.tryyucca.com',
      'intake.tryyucca.com',
      'medical.tryyucca.com',
      // Axis (V2) intake — Texas hand-offs from the router pop-up land here.
      // Both must be present so Axis-bound Continue clicks fire get_started and
      // receive corr/attribution, exactly like the Bask quiz hosts above.
      'start.tryyucca.com',
      'staging.start.tryyucca.com',
    ];
    if (intakeCanonicalHost && INTAKE_HOSTS.indexOf(intakeCanonicalHost) === -1) {
      INTAKE_HOSTS.push(intakeCanonicalHost);
    }
    var INTAKE_HOST_RE = new RegExp(
      '^(' + INTAKE_HOSTS.join('|').replace(/\./g, '\\.') + ')$',
      'i'
    );
    // CSS-selector fragment that matches anchors pointing at any
    // intake host — combined into a single querySelectorAll call
    // inside rewriteAllIntakeAnchors. `a[href*="…"]` is a substring
    // match, so the regex above is the canonical filter.
    var INTAKE_ANCHOR_SELECTOR = INTAKE_HOSTS.map(function (h) {
      return 'a[href*="' + h + '"]';
    }).join(', ');

    // Attribution params captured into `_yucca_attrib` AND forwarded onto
    // outbound intake URLs (see getOutboundParams). Live receivers still
    // read the landing URL, so the full list must be URL-decorated:
    //   - The Bask V1 quiz (quiz.tryyucca.com) captures utm_* / click IDs
    //     from its landing URL into realtime_sessions.url_params (~91% of
    //     V1 attribution). V1 has no cookie reader and no corr join.
    //   - The V2 intake's Everflow click integration reads
    //     _ef_transaction_id / oid / affid / source_id / sub1-5 / uid from
    //     the intake landing URL; without them affiliate clicks collapse
    //     to the organic fallback offer.
    //
    // Per-platform reference (keep this comment in sync when the list
    // grows or a platform renames its param):
    //   - Google Ads        → gclid, gbraid (iOS), wbraid (web→app)
    //   - Meta (FB/IG)      → fbclid, plus _fbp first-party cookie
    //   - Microsoft Ads     → msclkid
    //   - TikTok            → ttclid
    //   - Reddit            → rdt_cid
    //   - LinkedIn          → li_fat_id (first-party ad tracking)
    //   - Pinterest         → epik
    //   - Promo banners     → coupon
    //   - Everflow (affiliate) → _ef_transaction_id (click ID, set by
    //                         Everflow at click time), `oid` (offer
    //                         ID), `affid` (affiliate ID), plus
    //                         `sub1`–`sub5` (affiliate's custom
    //                         sub-tracking — placement, creative,
    //                         geo, etc.; partner-defined). The whole
    //                         set travels together on every Everflow
    //                         landing URL; downstream conversion
    //                         needs them to credit the right
    //                         affiliate / sub against the right offer.
    //   - GA4 first-party   → _ga (used by GTM cross-domain linker)
    var FORWARDED = [
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
      'coupon',
      // A creator's name. Carried so the quiz can rename what the automatic
      // coupon is CALLED on screen. It is never a coupon and never priced.
      'creator',
      'gclid', 'gbraid', 'wbraid',
      'fbclid', '_fbp',
      'msclkid',
      'ttclid',
      'rdt_cid',
      'li_fat_id',
      'epik',
      '_ef_transaction_id', 'oid', 'affid', 'source_id',
      'sub1', 'sub2', 'sub3', 'sub4', 'sub5',
      'uid', 'gad_source',
      '_ga',
    ];
    // Compact operational subset kept for a future compact-only handoff.
    // NOT currently used as a droplist: getOutboundParams forwards the FULL
    // FORWARDED list because live receivers still parse the landing URL
    // (see the comment above FORWARDED). Compact-only handoff may return
    // once every receiver merges the `_yucca_attrib` cookie / corr join —
    // Bask V1 does not today.
    var OPERATIONAL_FORWARDED = ['coupon'];
    // Cookie writes above ~4 KB are silently rejected by browsers. Keep a
    // deterministic encoded-value budget below that boundary and add fields
    // in business priority order so oversized campaigns lose auxiliary
    // metadata before click IDs / UTMs.
    var ATTRIBUTION_COOKIE_BUDGET = 3400;
    var ATTRIBUTION_VALUE_MAX = 256;
    var ATTRIBUTION_PRIORITY = [
      'gclid', 'fbclid', '_ef_transaction_id',
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
      'gbraid', 'wbraid', 'msclkid', 'ttclid', 'rdt_cid', 'li_fat_id', 'epik',
      'oid', 'affid', 'source_id', 'sub1', 'sub2', 'sub3', 'sub4', 'sub5',
      'uid', 'gad_source', 'coupon', '_fbp', '_ga',
    ];

    // Cross-subdomain cookie at `.tryyucca.com` so attribution survives
    // hops to `quiz.tryyucca.com` (intake), `portal.tryyucca.com`
    // (patient portal), and any future subdomain. 30 days is well
    // within fbclid's 90-day attribution window.
    var COOKIE_NAME = '_yucca_attrib';
    var COOKIE_DAYS = 30;
    var VISITOR_COOKIE_NAME = 'yucca_visitor_id';
    var VISITOR_COOKIE_DAYS = 365;
    var VISITOR_STORAGE_KEY = 'yucca_visitor_id';
    // Funnel Intelligence join keys live outside the attribution cookie:
    // `visitor_id` and `corr` are session identity, not campaign metadata.
    // A signed QA token is operational test lineage, so it must survive a
    // production-site handoff too. The V2 intake verifies its signature
    // server-side; downstream code may only use it to force test mode ON.
    var CORR_STORAGE_KEY = 'yucca_corr';
    var LANDING_PATH_STORAGE_KEY = 'yucca_landing_path';
    // The 30-day cookie is cross-tab. This copy is tab-scoped so concurrent
    // campaign tabs cannot overwrite the context attached to each handoff.
    var TAB_ATTRIBUTION_STORAGE_KEY = 'yucca_attrib_tab';
    var CORR_COOKIE_NAME = 'yucca_corr';
    var LANDING_PATH_COOKIE_NAME = 'yucca_landing_path';
    var SIGNED_TEST_STORAGE_KEY = 'yucca_signed_test';
    var SIGNED_TEST_TOKEN_RE = /^v1\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{32,}$/;
    var AXIS_DATA_LAYER_SCHEMA_VERSION = '2026-06-29';
    var AXIS_GTM_EVENT_PREFIX = 'axis';
    var AXIS_WEBSITE_SOURCE = 'website_browser';
    var DATA_LAYER_DEBUG_HOSTS = {
      'staging.tryyucca.com': true,
    };

    // dataLayer init — must exist before anything pushes.
    window.dataLayer = window.dataLayer || [];

    // ── 0. Side-effect isolation ─────────────────────────────────────

    /**
     * Runs `fn` and swallows any exception so one tracking target
     * failing (extension blocking heap, CSP rejecting an inline call,
     * GTM stub not yet loaded, etc.) doesn't suppress the others that
     * run after it. Failures still surface in the console so
     * diagnosing isn't blind. Navigation is never affected — the
     * default `<a href>` click action proceeds independently of this
     * capture-phase listener.
     */
    function safe(label, fn) {
      try {
        fn();
      } catch (err) {
        if (window.console && typeof console.warn === 'function') {
          console.warn('[Analytics] ' + label + ' failed:', err);
        }
      }
    }

    // ── 1. Cookie helpers ────────────────────────────────────────────

    function readCookie(name) {
      var match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
      return match ? decodeURIComponent(match[1]) : '';
    }

    function writeCookie(name, value, days) {
      var d = new Date(Date.now() + days * 86400000);
      // Set domain to `.tryyucca.com` on production / preview hosts so
      // the cookie is readable from any subdomain. Omit the domain on
      // localhost (CF Builds preview workers run on *.workers.dev and
      // also need the no-domain fallback — those hostnames don't
      // match `.tryyucca.com`).
      var hostname = window.location.hostname;
      var parts = [
        name + '=' + encodeURIComponent(value),
        'expires=' + d.toUTCString(),
        'path=/',
        'SameSite=Lax',
      ];
      if (hostname.endsWith('tryyucca.com')) parts.push('domain=.tryyucca.com');
      if (window.location.protocol === 'https:') parts.push('Secure');
      document.cookie = parts.join('; ');
    }

    function writeCrossSubdomainSessionCookie(name, value) {
      var hostname = window.location.hostname;
      var parts = [
        name + '=' + encodeURIComponent(value),
        'path=/',
        'SameSite=Lax',
      ];
      if (hostname.endsWith('tryyucca.com')) parts.push('domain=.tryyucca.com');
      if (window.location.protocol === 'https:') parts.push('Secure');
      document.cookie = parts.join('; ');
    }

    function randomId(prefix) {
      var value = '';
      if (window.crypto && typeof window.crypto.randomUUID === 'function') {
        value = window.crypto.randomUUID();
      } else {
        value = Date.now().toString(36) + Math.random().toString(36).slice(2);
      }
      return prefix + '_' + value;
    }

    function validFunnelId(value) {
      return typeof value === 'string' &&
        value.length >= 8 &&
        value.length <= 200 &&
        /^[A-Za-z0-9._:-]+$/.test(value);
    }

    function getSessionItem(key) {
      try {
        return window.sessionStorage ? window.sessionStorage.getItem(key) : null;
      } catch (_) {
        return null;
      }
    }

    function setSessionItem(key, value) {
      try {
        if (window.sessionStorage) window.sessionStorage.setItem(key, value);
      } catch (_) {
        /* storage disabled */
      }
    }

    function corrFromUrl() {
      try {
        return new URLSearchParams(window.location.search).get('corr') || '';
      } catch (_) {
        return '';
      }
    }

    function signedTestFromUrl() {
      try {
        var value = new URLSearchParams(window.location.search).get('test') || '';
        var trimmed = value.trim();
        return SIGNED_TEST_TOKEN_RE.test(trimmed) ? trimmed : '';
      } catch (_) {
        return '';
      }
    }

    // Marks browser-side dataLayer pushes as testing on QA / preview
    // hosts (pushAxisGetStarted's `testing` flag). Signed QA tokens on
    // the production host are a separate, server-verified lineage that
    // rides `testToken` on the spine beacons; this host check only
    // covers the hosts that are QA by definition.
    function isWebsiteQaHost() {
      var hostname = window.location.hostname;
      return hostname === 'localhost' ||
        hostname === '127.0.0.1' ||
        hostname === '[::1]' ||
        hostname === 'staging.tryyucca.com' ||
        hostname.endsWith('.tryyucca.pages.dev') ||
        hostname.endsWith('.workers.dev');
    }

    function getOrMintVisitorId() {
      var existing = readCookie(VISITOR_COOKIE_NAME);
      if (validFunnelId(existing)) {
        setSessionItem(VISITOR_STORAGE_KEY, existing);
        return existing;
      }
      var stored = getSessionItem(VISITOR_STORAGE_KEY);
      if (validFunnelId(stored)) {
        writeCookie(VISITOR_COOKIE_NAME, stored, VISITOR_COOKIE_DAYS);
        return stored;
      }
      var id = randomId('yv');
      setSessionItem(VISITOR_STORAGE_KEY, id);
      writeCookie(VISITOR_COOKIE_NAME, id, VISITOR_COOKIE_DAYS);
      return id;
    }

    function getOrMintCorrelationId() {
      var fromUrl = corrFromUrl();
      if (validFunnelId(fromUrl)) {
        setSessionItem(CORR_STORAGE_KEY, fromUrl);
        writeCrossSubdomainSessionCookie(CORR_COOKIE_NAME, fromUrl);
        return fromUrl;
      }
      var stored = getSessionItem(CORR_STORAGE_KEY);
      if (validFunnelId(stored)) {
        writeCrossSubdomainSessionCookie(CORR_COOKIE_NAME, stored);
        return stored;
      }
      var id = randomId('yc');
      setSessionItem(CORR_STORAGE_KEY, id);
      writeCrossSubdomainSessionCookie(CORR_COOKIE_NAME, id);
      return id;
    }

    function currentFunnelIdentity() {
      return {
        visitorId: getOrMintVisitorId(),
        correlationId: getOrMintCorrelationId(),
      };
    }

    function canonicalMarketingLandingPath(value) {
      if (typeof value !== 'string') return '';
      var path = value.trim();
      if (path === '/' || path === '/es' || path === '/es/') return '/';
      // Locale is a presentation concern, not a separate LP identity. Preserve
      // only the finite Home/LP attribution surface and let the website-session
      // correlation classify all other marketing pages without copying an
      // arbitrary path across subdomains.
      if (path.indexOf('/es/lp/') === 0) path = path.slice(3);
      if (path === '/lp' || path.indexOf('/lp/') === 0) {
        return path.length <= 200 ? path : '';
      }
      return '';
    }

    function currentSourcePath() {
      return canonicalMarketingLandingPath(window.location.pathname || '/');
    }

    function splitterHomeAssignmentPath() {
      var path = canonicalMarketingLandingPath(readCookie(LANDING_PATH_COOKIE_NAME));
      return /^\/lp\/(?:wl|lon|mr)\/home\/$/.test(path) ? path : '';
    }

    function getOrSetLandingPath() {
      var stored = getSessionItem(LANDING_PATH_STORAGE_KEY);
      var canonicalStored = canonicalMarketingLandingPath(stored);
      if (canonicalStored) {
        setSessionItem(LANDING_PATH_STORAGE_KEY, canonicalStored);
        writeCrossSubdomainSessionCookie(LANDING_PATH_COOKIE_NAME, canonicalStored);
        return canonicalStored;
      }
      // `/lp/<code>/home/` is an SSR-only splitter alias that redirects to
      // `/` before this script can run. The alias writes the existing
      // first-party landing cookie, so a fresh tab can recover the assigned
      // LP identity without adding a visible query parameter to the homepage.
      var cookiePath = splitterHomeAssignmentPath();
      if (cookiePath) {
        setSessionItem(LANDING_PATH_STORAGE_KEY, cookiePath);
        writeCrossSubdomainSessionCookie(LANDING_PATH_COOKIE_NAME, cookiePath);
        return cookiePath;
      }
      var path = currentSourcePath();
      if (path) {
        setSessionItem(LANDING_PATH_STORAGE_KEY, path);
        writeCrossSubdomainSessionCookie(LANDING_PATH_COOKIE_NAME, path);
      }
      return path;
    }

    function currentSignedTestToken() {
      var fromUrl = signedTestFromUrl();
      if (fromUrl) {
        setSessionItem(SIGNED_TEST_STORAGE_KEY, fromUrl);
        return fromUrl;
      }
      var stored = getSessionItem(SIGNED_TEST_STORAGE_KEY);
      return SIGNED_TEST_TOKEN_RE.test(stored || '') ? stored : '';
    }

    function currentAcquisitionSource() {
      var params = new URLSearchParams(window.location.search || '');
      var stored = readTabAttribution();
      var attribution = stored.last || stored.first || {};
      function value(key) {
        return params.get(key) || attribution[key] || null;
      }
      return (
        value('utm_source') ||
        value('source_id') ||
        (value('gclid') || value('gbraid') || value('wbraid') ? 'google' : null) ||
        (value('fbclid') ? 'meta' : null)
      );
    }

    function trackingUrl(value) {
      try {
        var url = value instanceof URL ? value : new URL(value);
        return url.origin + url.pathname;
      } catch (_) {
        return '';
      }
    }

    function compactObject(input) {
      var out = {};
      var keys = Object.keys(input || {});
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = input[key];
        if (value !== undefined && value !== null && value !== '') out[key] = value;
      }
      return out;
    }

    function axisBrowserEventName(eventKey) {
      return AXIS_GTM_EVENT_PREFIX + '.' + eventKey;
    }

    function axisGetStartedEventId(correlationId) {
      return correlationId ? websiteGetStartedEventIdPrefix + correlationId : null;
    }

    function shouldLogAxisDataLayer() {
      return DATA_LAYER_DEBUG_HOSTS[window.location.hostname] === true;
    }

    function axisDataLayerDebugSummary(payload) {
      var axis = payload.axis || {};
      return compactObject({
        trigger: payload.event,
        axis_event: payload.axis_event,
        event_id: payload.event_id,
        dedup_policy: axis.dedup_policy,
        dedup_key: axis.dedup_key,
        correlation_id: payload.correlation_id,
        category_code: payload.category_code,
        variant: payload.variant,
        cta_location: payload.cta_location,
        testing: payload.testing === true ? true : undefined,
      });
    }

    function logAxisDataLayerPush(triggerEvent, payload) {
      if (!shouldLogAxisDataLayer()) return;
      var summary = axisDataLayerDebugSummary(payload);
      var openGroup = console.groupCollapsed || console.group;
      if (openGroup) {
        openGroup.call(console, '[Axis dataLayer] ' + triggerEvent, summary);
        console.log('payload', payload);
        if (console.groupEnd) console.groupEnd();
      } else {
        console.log('[Axis dataLayer] ' + triggerEvent, summary, payload);
      }
    }

    // ── 1b. Language preference (cross-subdomain) ─────────────────────

    /**
     * Mirror the language the user is CURRENTLY viewing into the
     * `yucca-lang-preference` cookie at `.tryyucca.com`, so the intake
     * (`quiz.tryyucca.com`) can open in the same language. Runs on every
     * page load + view-transition swap, so the cookie always matches the
     * page — whether the user picked a language in the nav dropdown
     * (which also writes it synchronously on click) or just landed on a
     * Spanish URL from an ad / search. `/es` or `/es/...` → 'es';
     * everything else → 'en' (the site default). 1-year TTL. Reuses
     * `writeCookie`'s domain logic, so on localhost / *.workers.dev the
     * `domain` attribute is omitted (the browser would reject it
     * otherwise) and the cookie still works for that host.
     */
    function syncLangPreference() {
      var isEs = /^\/es(\/|$)/.test(window.location.pathname);
      writeCookie('yucca-lang-preference', isEs ? 'es' : 'en', 365);
    }

    // ── 2. Attribution helpers ───────────────────────────────────────

    /**
     * Reads the attribution cookie. Migrates legacy Webflow shape
     * (flat `{utm_source, gclid, …}`) into the new
     * `{first, last, visits}` shape on the fly so users carrying the
     * old cookie don't lose attribution.
     */
    function readAttribution() {
      try {
        var raw = readCookie(COOKIE_NAME);
        if (!raw) return { first: null, last: null, visits: 0 };
        var data = JSON.parse(raw);
        if (data && (data.first || data.last)) return data;
        // Legacy flat shape — promote to first + last.
        var hasAny = false;
        for (var i = 0; i < FORWARDED.length; i++) {
          if (data[FORWARDED[i]] != null) { hasAny = true; break; }
        }
        if (hasAny) return { first: data, last: data, visits: 1 };
        return { first: null, last: null, visits: 0 };
      } catch (_) {
        return { first: null, last: null, visits: 0 };
      }
    }

    function readTabAttribution() {
      try {
        var raw = getSessionItem(TAB_ATTRIBUTION_STORAGE_KEY);
        if (raw) {
          var data = JSON.parse(raw);
          if (data && (data.first || data.last)) return data;
        }
      } catch (_) {
        /* malformed or blocked session storage falls back to the cookie */
      }
      return readAttribution();
    }

    function writeTabAttribution(obj) {
      try {
        setSessionItem(TAB_ATTRIBUTION_STORAGE_KEY, JSON.stringify(obj));
      } catch (_) {
        /* the shared cookie remains the compatibility fallback */
      }
    }

    function writeAttribution(obj) {
      try {
        writeCookie(
          COOKIE_NAME,
          JSON.stringify(compactAttributionForCookie(obj)),
          COOKIE_DAYS
        );
      } catch (_) {
        /* cookie write failed (e.g. disabled in browser) — attribution
           works for this page-load only */
      }
    }

    function compactAttributionForCookie(input) {
      var first = {};
      var last = {};
      // On the first touch refreshAttribution assigns the same object to first
      // and last. Store it once; readAttribution already falls back last→first.
      // This avoids spending half the cookie budget duplicating identical data.
      var includeLast = !(input && input.first && input.first === input.last);
      var visits = Number.isFinite(input && input.visits)
        ? Math.max(0, Math.min(Math.floor(input.visits), 999999))
        : 0;

      function candidate() {
        return {
          first: Object.keys(first).length > 0 ? first : null,
          last: Object.keys(last).length > 0 ? last : null,
          visits: visits,
        };
      }

      function fits() {
        return encodeURIComponent(JSON.stringify(candidate())).length <=
          ATTRIBUTION_COOKIE_BUDGET;
      }

      function tryAdd(target, source, key) {
        if (!source || typeof source[key] !== 'string') return;
        var value = source[key].trim();
        if (!value) return;
        target[key] = value.slice(0, ATTRIBUTION_VALUE_MAX);
        if (!fits()) delete target[key];
      }

      for (var i = 0; i < ATTRIBUTION_PRIORITY.length; i++) {
        var key = ATTRIBUTION_PRIORITY[i];
        tryAdd(first, input && input.first, key);
        if (includeLast) tryAdd(last, input && input.last, key);
      }

      // Timestamp is useful for first/last recency but never more important
      // than attribution itself. Add it only after all prioritized fields.
      if (input && input.first && Number.isFinite(input.first.ts)) {
        first.ts = input.first.ts;
        if (!fits()) delete first.ts;
      }
      if (includeLast && input && input.last && Number.isFinite(input.last.ts)) {
        last.ts = input.last.ts;
        if (!fits()) delete last.ts;
      }

      return candidate();
    }

    /**
     * Picks attribution params out of the current URL. Returns an
     * empty object if no tracked params are present (i.e. this is
     * an organic visit, not an inbound ad click).
     */
    function captureFromUrl() {
      var current = new URLSearchParams(window.location.search);
      var inbound = {};
      var hasAny = false;
      for (var i = 0; i < FORWARDED.length; i++) {
        var k = FORWARDED[i];
        var v = current.get(k);
        if (v !== null) {
          inbound[k] = v.slice(0, ATTRIBUTION_VALUE_MAX);
          hasAny = true;
        }
      }
      return hasAny ? inbound : null;
    }

    /**
     * On every page load: if the URL carries tracked params, refresh
     * the cookie. First touch is preserved (never overwritten);
     * last touch is updated to the freshest values; visits counter
     * bumps. Idempotent — a URL with no params is a no-op.
     */
    function refreshAttribution() {
      var inbound = captureFromUrl();
      if (!inbound) return;
      var stored = readAttribution();
      inbound.ts = Date.now();
      if (!stored.first) stored.first = inbound;
      stored.last = inbound;
      stored.visits = (stored.visits || 0) + 1;
      writeAttribution(stored);

      // A fresh inbound URL is this tab's first touch even if another tab has
      // already refreshed the shared cookie. Later inbound URLs in this tab
      // update last touch without rewriting its first touch.
      var tabStored = null;
      try {
        var tabRaw = getSessionItem(TAB_ATTRIBUTION_STORAGE_KEY);
        tabStored = tabRaw ? JSON.parse(tabRaw) : null;
      } catch (_) {
        tabStored = null;
      }
      if (!tabStored || (!tabStored.first && !tabStored.last)) {
        tabStored = { first: inbound, last: inbound, visits: 1 };
      } else {
        if (!tabStored.first) tabStored.first = inbound;
        tabStored.last = inbound;
        tabStored.visits = (tabStored.visits || 0) + 1;
      }
      writeTabAttribution(tabStored);
    }

    /**
     * Returns the params to inject into outbound intake URLs.
     * Last-touch wins (ad platforms match conversions against the
     * most-recent click ID on the landing URL). Forwards the FULL
     * FORWARDED list, not the compact OPERATIONAL_FORWARDED subset:
     * the Bask V1 quiz and the V2 intake's Everflow integration both
     * read attribution from the landing URL today (see the comment
     * above FORWARDED). The `_yucca_attrib` cookie still travels in
     * parallel for receivers that can merge it.
     */
    function getOutboundParams() {
      var stored = readTabAttribution();
      var src = stored.last || stored.first;
      var out = {};
      if (src) {
        for (var i = 0; i < FORWARDED.length; i++) {
          var k = FORWARDED[i];
          if (src[k] != null) out[k] = src[k];
        }
      }
      var identity = currentFunnelIdentity();
      if (identity.visitorId) out.visitor_id = identity.visitorId;
      if (identity.correlationId) out.corr = identity.correlationId;
      var signedTest = currentSignedTestToken();
      if (signedTest) out.test = signedTest;
      var sourcePath = getOrSetLandingPath();
      if (sourcePath) out.source_path = sourcePath;
      return out;
    }

    function rewriteAnchor(a, inbound) {
      try {
        var url = new URL(a.href);
        if (!INTAKE_HOST_RE.test(url.hostname)) return;
        // Don't clobber params already on the destination — preserves
        // any campaign-specific params a caller hardcoded into the
        // intake URL (treatment routing now lives in the path, not as
        // a `?treatment=…` query).
        var keys = Object.keys(inbound);
        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          if (!url.searchParams.has(k)) {
            url.searchParams.set(k, inbound[k]);
          }
        }
        a.href = url.toString();
      } catch (_) {
        /* invalid href — leave it alone */
      }
    }

    function rewriteAllIntakeAnchors() {
      var inbound = getOutboundParams();
      // Language forwarding: on Spanish pages (`/es` or `/es/...`) every
      // intake hand-off must carry `lang=es` so the intake opens in
      // Spanish. Spanish pages already bake the param in at build time
      // via `buildIntakeUrl({ lang: 'es' })`; this runtime pass is the
      // safety net for any anchor a shared component emitted without it.
      // `rewriteAnchor` never clobbers an existing param, so build-time
      // values win. English pages send nothing — the intake's own
      // default is English.
      if (/^\/es(\/|$)/.test(window.location.pathname)) {
        inbound.lang = 'es';
      }
      if (Object.keys(inbound).length === 0) return;
      var anchors = document.querySelectorAll(INTAKE_ANCHOR_SELECTOR);
      for (var i = 0; i < anchors.length; i++) {
        rewriteAnchor(anchors[i], inbound);
      }
    }

    // Exposed for the router pop-up: its Continue anchor's href is set
    // client-side at selection time (after the load-time pass has run), so the
    // pop-up calls this to decorate that freshly-pointed intake anchor with
    // attribution + identity params before the user clicks through.
    // Idempotent and never clobbers existing params, so re-running is safe.
    window.__yuccaRewriteIntakeAnchors = rewriteAllIntakeAnchors;
    // Also exposed for the router pop-up: it opens on ANY intake-bound CTA, so
    // it reuses this canonical intake-host test rather than duplicating the list.
    window.__yuccaIntakeHostRe = INTAKE_HOST_RE;

    // ── 2. View-Transitions page_view ────────────────────────────────

    function dispatchPageView() {
      window.dataLayer.push({
        event: 'page_view',
        page_path: window.location.pathname,
        page_url: window.location.href,
        page_title: document.title,
      });
    }

    // ── 3. View-Transitions scroll discipline ────────────────────────

    /**
     * Astro's ClientRouter handles scroll internally, but its single
     * `scrollTo` write inside `moveToLocation` was getting clobbered:
     *
     *   - On FORWARD nav, the persisted footer's view-transition morph
     *     was visibly dragging the previous page's scroll position
     *     into the destination, so clicking a footer link landed the
     *     user at the footer of the new page.
     *   - On BACK / FORWARD (traverse), Astro reads scroll from
     *     `history.state.scrollY` and writes it once — but at that
     *     instant the new page often hasn't laid out to full height
     *     yet, so scrollTo(8441) gets clamped to whatever the
     *     in-progress layout supports (often ~0). The end state ignores
     *     the user's previous scroll position even though
     *     `history.state` holds the right value.
     *
     * Fix: re-apply scroll at THREE lifecycle points — `astro:before-
     * swap`, `astro:after-swap`, `astro:page-load`. Idempotent and
     * cheap. The function reads `history.state.scrollY` directly
     * (Astro keeps it up to date on every nav), so on traverse it
     * restores to the saved position; on forward, history.state for
     * the new entry was just pushed with `scrollY: 0` by Astro, so
     * it lands at the top. Single source of truth.
     *
     * Anchor links (`#hash`) are deferred to Astro / the browser.
     *
     * Use the OPTIONS form `window.scrollTo({ top, behavior: 'instant' })`
     * not the legacy `window.scrollTo(x, y)`. The legacy form respects
     * the root's CSS `scroll-behavior: smooth` and animates the
     * scroll — burning ~500ms during which the user sees the page
     * gliding from the footer to the top. The options form with
     * `behavior: 'instant'` overrides the CSS rule and jumps
     * synchronously, which is what we want for every nav (forward
     * push, traverse restore, state-hash same-page).
     */
    function instantScrollTo(y) {
      window.scrollTo({ top: y, left: 0, behavior: 'instant' });
    }

    /**
     * Find the DOM element a URL hash targets (`#foo` → element with
     * id="foo"). Returns null when the hash is empty, an invalid
     * selector, or points to no element. "State hash" patterns like
     * `/explore-treatments#longevity` return null because no element
     * actually carries that id — it's just used by the tab component
     * to remember the selected tab.
     */
    function findHashTarget() {
      if (!window.location.hash) return null;
      try {
        return document.querySelector(window.location.hash);
      } catch (_) {
        return null;
      }
    }

    function applyTargetScroll() {
      // Real anchor target — scroll the element into view. Astro's
      // ClientRouter doesn't do this itself on push/replace navs
      // because it uses `pushState` (which doesn't trigger the
      // browser's anchor scroll), so we have to.
      var anchor = findHashTarget();
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'instant', block: 'start' });
        return;
      }
      // No hash or no matching element. Use the scroll position
      // Astro keeps in history.state:
      //   - new push/replace entry → scrollY: 0
      //   - traverse entry → the scrollY saved when the user last left
      var target = 0;
      if (history.state && typeof history.state.scrollY === 'number') {
        target = history.state.scrollY;
      }
      instantScrollTo(target);
    }

    // ── 4. get_started CTA click event ───────────────────────────────

    /**
     * Fires `get_started` to both `dataLayer` (for GTM-managed tags —
     * GA4, Meta CAPI, ad pixels) AND directly to Heap on every click that
     * resolves to an intake-subdomain anchor (quiz / intake / medical).
     * Payload mirrors the Webflow legacy event name + shape so existing
     * GTM tags and ad-platform conversion configs keep firing:
     *
     *   { event, site_source_url, site_source_path,
     *     site_destination_url, site_cta_text }
     *
     * Bound at the document level in capture phase, so it lands BEFORE
     * the browser tears down the page for the cross-subdomain
     * navigation — important for events that need to ship before
     * unload (`dataLayer.push` is synchronous but GTM's outbound
     * pings need a moment to leave the page).
     *
     * `cta_treatment` / `cta_location` are also pushed for
     * granularity (cohort by ad CTA vs in-page CTA, treatment-specific
     * CVR, etc.) but the four `site_*` fields are the canonical
     * shape and what existing GTM configs read.
     *
     * Why we ALSO call `heap.track` directly here instead of relying on
     * the GTM `Heap - get_started` tag: routing through GTM had two
     * known failure modes — (1) the tag's macros resolved to literal
     * strings like `variant: "undefined"` when the dataLayer variable
     * was unset, and (2) intermittent identity attach issues we hit
     * on the prior Webflow stack (events landing in Heap detached from
     * the anonymous user). Calling `heap.track` from this same handler
     * that already wrote the dataLayer event guarantees a single source
     * of truth for both Heap and GTM, with Heap's cookie identity
     * (set with `cookieDomain: '.tryyucca.com'`) attached at call time.
     * The corresponding GTM tag `Heap - get_started` should be paused
     * to avoid double-counting.
     */
    /**
     * Intake path → abbreviated treatment code lookup. The short paths
     * (`/wl`, `/lon`, `/mr`) appear in the URL the browser navigates to,
     * so they're already public on the wire. On dataLayer / GTM we keep
     * the same opaque short code shape for downstream dashboards.
     *
     * Keep this map in sync with the `IntakeTreatment` union in
     * `src/lib/intake.ts` and the `code` field on `GoalPopup`'s
     * `goals` array.
     */
    var TREATMENT_CODE_BY_SLUG = {
      wl: 'wl',
      lon: 'lon',
      mr: 'mr',
      im: 'im',
      weightloss: 'wl',
      longevity: 'lon',
      musclerecovery: 'mr',
      immunity: 'im',
    };

    function treatmentCodeFromUrl(url) {
      if (!url) return null;
      var slug = (url.pathname || '').replace(/^\/+|\/+$/g, '').toLowerCase();
      return Object.prototype.hasOwnProperty.call(TREATMENT_CODE_BY_SLUG, slug)
        ? TREATMENT_CODE_BY_SLUG[slug]
        : null;
    }

    function funnelRouteFromUrl(url) {
      var path = (url && url.pathname ? url.pathname : '').toLowerCase();
      var segments = path.split('/').filter(Boolean);
      for (var i = segments.length - 1; i >= 0; i--) {
        var segment = segments[i];
        if (Object.prototype.hasOwnProperty.call(TREATMENT_CODE_BY_SLUG, segment)) {
          return {
            categoryCode: TREATMENT_CODE_BY_SLUG[segment],
            variant: i > 0 ? segments[i - 1] : null,
          };
        }
      }
      return { categoryCode: null, variant: null };
    }

    function everflowContextFromUrl(url) {
      var out = {};
      var stored = readTabAttribution();
      var attribution = stored.last || stored.first || {};
      var keys = ['_ef_transaction_id', 'oid', 'affid', 'source_id', 'sub1', 'sub2', 'sub3', 'sub4', 'sub5'];
      for (var i = 0; i < keys.length; i++) {
        var value = url && url.searchParams ? url.searchParams.get(keys[i]) : null;
        if (!value) value = attribution[keys[i]];
        if (value) out[keys[i]] = value.slice(0, 200);
      }
      return out;
    }

    // Signed QA token for the spine beacon, WITHOUT the QA-host gate that
    // currentSignedTestToken applies: the server treats the token as
    // force-test-ON only, and the session tracker already sends it ungated,
    // so get_started must match or QA clicks on the prod host would count
    // as real while their sessions count as test, skewing the CTR split.
    function signedTestTokenForBeacon() {
      var fromUrl = signedTestFromUrl();
      if (fromUrl) return fromUrl;
      var stored = getSessionItem(SIGNED_TEST_STORAGE_KEY);
      return SIGNED_TEST_TOKEN_RE.test(stored || '') ? stored : '';
    }

    function sendFunnelIntelligenceGetStarted(route, destination) {
      var identity = currentFunnelIdentity();
      if (!validFunnelId(identity.correlationId) || !validFunnelId(identity.visitorId)) return;
      var everflow = everflowContextFromUrl(destination);
      var sourcePath = currentSourcePath();
      var landingPath = getOrSetLandingPath();
      var testToken = signedTestTokenForBeacon();
      var attribution = readTabAttribution();
      var body = JSON.stringify({
        correlationId: identity.correlationId,
        visitorId: identity.visitorId,
        categoryCode: route && route.categoryCode ? route.categoryCode : undefined,
        variant: route && route.variant ? route.variant : undefined,
        acquisitionSource: currentAcquisitionSource() || undefined,
        sourcePath: sourcePath,
        landingPath: landingPath,
        destinationPath: destination && destination.pathname ? destination.pathname.slice(0, 200) : undefined,
        // Hostname of the intake anchor the user clicked: lets Axis
        // split get_started by destination (V1 quiz vs V2 start).
        destinationHost: destination && destination.hostname ? destination.hostname.slice(0, 255) : undefined,
        everflow: Object.keys(everflow).length > 0 ? everflow : undefined,
        firstTouch: attribution.first || undefined,
        lastTouch: attribution.last || attribution.first || undefined,
        testToken: testToken || undefined,
      });
      var url = '/api/funnel-intelligence/event/';
      if (navigator.sendBeacon) {
        try {
          var blob = new Blob([body], { type: 'application/json' });
          if (navigator.sendBeacon(url, blob)) return;
        } catch (_) {
          /* fall back to fetch */
        }
      }
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
        body: body,
      }).catch(function () {
        /* analytics only */
      });
    }

    function pushAxisGetStarted(input) {
      var identity = currentFunnelIdentity();
      if (!validFunnelId(identity.correlationId)) return;
      var eventKey = 'get_started';
      var triggerEvent = axisBrowserEventName(eventKey);
      var eventId = axisGetStartedEventId(identity.correlationId);
      var route = input.route || {};
      var categoryCode = route.categoryCode || input.ctaTreatment || undefined;
      var timestamp = new Date().toISOString();
      var isTest = isWebsiteQaHost() || undefined;
      var axisRoute = compactObject({
        variant: route.variant,
        treatment_code: categoryCode,
      });
      var axisSession = compactObject({
        correlation_id: identity.correlationId,
        visitor_id: identity.visitorId,
      });
      var payload = compactObject({
        event: triggerEvent,
        site: 'website',
        axis_event: eventKey,
        event_name: eventKey,
        event_id: eventId,
        eventId: eventId,
        correlation_id: identity.correlationId,
        visitor_id: identity.visitorId,
        category_code: categoryCode,
        variant: route.variant,
        cta_location: input.ctaLocation,
        cta_text: input.ctaText,
        site_source_url: trackingUrl(window.location.href),
        site_source_path: window.location.pathname,
        site_destination_url: trackingUrl(input.anchor.href),
        site_cta_text: input.ctaText,
        timestamp: timestamp,
        testing: isTest,
        axis: compactObject({
          schema_version: AXIS_DATA_LAYER_SCHEMA_VERSION,
          source: AXIS_WEBSITE_SOURCE,
          event_key: eventKey,
          event_id: eventId,
          dedup_policy: 'once_per_session',
          dedup_key: 'correlation_id',
          site: 'website',
          route: Object.keys(axisRoute).length > 0 ? axisRoute : undefined,
          session: Object.keys(axisSession).length > 0 ? axisSession : undefined,
          testing: isTest,
        }),
      });

      window.dataLayer.push(payload);
      logAxisDataLayerPush(triggerEvent, payload);
    }

    function onClick(event) {
      // closest() handles clicks on children of the anchor (icons, spans).
      var a = event.target && event.target.closest
        ? event.target.closest('a[href]')
        : null;
      if (!a) return;
      var dest;
      try {
        dest = new URL(a.href);
      } catch (_) {
        return;
      }
      if (!INTAKE_HOST_RE.test(dest.hostname)) return;

      // Router: on pages that mount the pop-up, intake-bound CTAs open the
      // treatment/state selector instead of handing off directly. The real
      // get_started fires on the pop-up's Continue anchor, which lives INSIDE
      // #goal-popup — so skip any intake anchor outside it when the pop-up is
      // present. Direct intake links on pop-up-less pages still fire here.
      //
      // Gated on routerPopupEnabled (build-time kill-switch): with the router
      // OFF (production parity) the legacy pop-up's treatment cards ARE direct
      // intake anchors that must fire get_started here, and there is no
      // Continue anchor to fire on — so this skip must NOT run, or get_started
      // would be lost on every direct CTA. With the router ON, keep the
      // current semantics (fire only on the pop-up Continue).
      if (
        routerPopupEnabled &&
        a.closest &&
        !a.closest('#goal-popup') &&
        document.getElementById('goal-popup')
      ) {
        return;
      }

      var text = (a.textContent || '').trim();

      // Path-derived treatment code (e.g. `wl` for `/weightloss`).
      // Earlier shape read `?treatment=…` from the query string, but
      // the intake routing switched to path segments in May 2026 —
      // see `src/lib/intake.ts` — and the query-string read was
      // returning `null` for every click. Path-derived + abbreviated
      // is also the HIPAA-friendlier shape: opaque on the wire,
      // requires the internal lookup table above to decode.
      var ctaTreatment = treatmentCodeFromUrl(dest);
      var funnelRoute = funnelRouteFromUrl(dest);
      var ctaLocation = a.getAttribute('data-cta-location') || null;
      var ctaText = text || null;

      // Each of the four tracking targets is isolated with `safe()` so
      // one failing (an extension nuking heap, GTM not booted yet, a CSP
      // blocking an inline call, the funnel endpoint being down) doesn't
      // suppress the others. Navigation continues regardless.

      // 1. Legacy dataLayer push — existing GTM tags continue to consume
      //    the Webflow-compatible `get_started` event unchanged.
      safe('get_started dataLayer push', function () {
        window.dataLayer.push({
          event: 'get_started',
          site_source_url: trackingUrl(window.location.href),
          site_source_path: window.location.pathname,
          site_destination_url: trackingUrl(a.href),
          site_cta_text: ctaText,
          cta_treatment: ctaTreatment,
          cta_location: ctaLocation,
        });
      });

      // 1b. Axis V2 dataLayer push — namespaced event for the new GTM
      //     triggers, with the same event_id the website Worker sends to
      //     Axis server-side for Meta Pixel/CAPI dedupe.
      safe('axis.get_started dataLayer push', function () {
        pushAxisGetStarted({
          anchor: a,
          route: funnelRoute,
          ctaTreatment: ctaTreatment,
          ctaLocation: ctaLocation,
          ctaText: ctaText,
        });
      });

      // 2. Direct heap.track — bypasses the GTM Heap tag (which was
      //    losing identity / emitting `"undefined"` macros). The Heap
      //    snippet defines `window.heap.track` as a queue-pushing stub
      //    before the SDK fully loads, so this call is safe at any
      //    time: if the SDK isn't ready, the call sits in `heapReadyCb`
      //    and flushes once `heap_config.js` finishes loading. Identity
      //    attaches via the `.tryyucca.com` cookie set by the snippet,
      //    so this anonymous event will be merged with the user's
      //    identity once the quiz calls `heap.identify(email)` later
      //    in the funnel.
      safe('get_started heap.track', function () {
        if (window.heap && typeof window.heap.track === 'function') {
          window.heap.track('get_started', {
            site_source_url: trackingUrl(window.location.href),
            site_source_path: window.location.pathname,
            site_destination_url: trackingUrl(a.href),
            site_cta_text: ctaText,
            cta_treatment: ctaTreatment,
            cta_location: ctaLocation,
          });
        }
      });

      // 3. Funnel-tracking page row — synthetic "page" so the CTA click
      //    appears in `staging.session_pages` between the user's last
      //    marketing page and the intake's first screen. Host-prefixed
      //    (`tryyucca.com/getstarted/<code>`) to match the marketing
      //    root convention and stay unambiguously distinct from any
      //    intake path. The treatment code (wl/lon/mr/im — same opaque
      //    2-char shape used in dataLayer/Heap) is appended when the
      //    destination path resolves to a known treatment slug; CTAs
      //    pointing at the intake root (or any unknown slug) fall back
      //    to the bare `tryyucca.com/getstarted` so funnel cohorts can
      //    be split by treatment without losing the unattributed clicks.
      //    PageTracker.astro uses keepalive so the request survives
      //    the cross-subdomain nav.
      safe('get_started page tracker', function () {
        if (typeof window.yuccaTrackPageView === 'function') {
          var page = ctaTreatment
            ? 'tryyucca.com/getstarted/' + ctaTreatment
            : 'tryyucca.com/getstarted';
          window.yuccaTrackPageView(page);
        }
      });

      // 4. Funnel Intelligence spine event. Same-origin first, then the
      // website Worker forwards to Axis with its M2M key.
      safe('get_started funnel intelligence', function () {
        sendFunnelIntelligenceGetStarted(funnelRoute, dest);
      });
    }

    // ── Wire-up ──────────────────────────────────────────────────────

    // First load: GTM has already fired its own page_view, so we only
    // refresh the attribution cookie + patch outbound anchors. Subsequent
    // View-Transition swaps emit `astro:after-swap` and we re-run both
    // (the URL may have changed and brought new tracked params).
    safe('init funnel identity', currentFunnelIdentity);
    safe('init landing path', getOrSetLandingPath);
    safe('init signed test token', currentSignedTestToken);
    safe('init refreshAttribution', refreshAttribution);
    safe('init rewriteAllIntakeAnchors', rewriteAllIntakeAnchors);
    safe('init syncLangPreference', syncLangPreference);

    // Apply scroll at three lifecycle points so nothing (Astro
    // internals, View-Transition morph, late layout shifts) can clobber
    // it back. Idempotent — triple-firing is fine. Each call is
    // isolated so a failure in one step (e.g. attribution cookie write
    // blocked by storage policy) doesn't suppress the page_view dispatch
    // or the anchor rewriting on the same swap.
    document.addEventListener('astro:before-swap', function () {
      safe('before-swap applyTargetScroll', applyTargetScroll);
    });
    document.addEventListener('astro:after-swap', function () {
      safe('after-swap applyTargetScroll', applyTargetScroll);
      safe('after-swap refreshAttribution', refreshAttribution);
      safe('after-swap rewriteAllIntakeAnchors', rewriteAllIntakeAnchors);
      safe('after-swap syncLangPreference', syncLangPreference);
      safe('after-swap dispatchPageView', dispatchPageView);
    });
    document.addEventListener('astro:page-load', function () {
      safe('page-load applyTargetScroll', applyTargetScroll);
    });

    /**
     * Same-page hash navigation: Astro's ClientRouter short-circuits
     * this case (see router.js `samePage` branch) and skips firing
     * `astro:before/after-swap`. It also uses `history.pushState` to
     * update the URL, which **does NOT fire `hashchange`** (only
     * popstate or manual `location.hash = ...` do). So we can't catch
     * it with a hashchange listener either.
     *
     * Catch it at the click. For any anchor click whose destination is
     * same-origin + same-path + has a hash, schedule a scroll-to-top
     * for the next tick (so Astro's own click handler runs first and
     * updates the URL). Then check if the new hash maps to a real
     * element on the page:
     *   - real element (e.g. blog TOC `#section-3`) → leave it; the
     *     browser will already have scrolled to it (when CSS
     *     `scroll-behavior: smooth` lands, smoothly).
     *   - no matching element (e.g. /explore-treatments tab-state
     *     hashes like `#longevity`) → snap to top.
     *
     * Also keep a `hashchange` listener as belt-and-suspenders for
     * cases where the URL is changed manually via `location.hash =`
     * (which DOES fire hashchange).
     */
    function handleSamePageHashScroll() {
      var anchor = findHashTarget();
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'instant', block: 'start' });
        return;
      }
      instantScrollTo(0);
    }

    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;
      var url;
      try {
        url = new URL(a.href);
      } catch (_) {
        return;
      }
      // Only same-origin internal links.
      if (url.origin !== window.location.origin) return;
      // Different-path navs are handled by the astro:after-swap path.
      if (url.pathname !== window.location.pathname) return;
      // Same-path nav — Astro's ClientRouter short-circuits the swap
      // entirely (no `astro:after-swap` fires), so the user ends up
      // parked wherever they clicked from with the URL unchanged.
      // That's surprising on links to the page you're already viewing
      // (e.g. footer "Sermorelin" link while on /sermorelin — Webflow
      // and the legacy site do a fresh visit). Mimic that fresh-visit
      // feel by scrolling to top (or the hash target, if any). Defer
      // one tick so Astro's own click handler runs first and updates
      // history if needed.
      setTimeout(function () {
        if (url.hash) {
          handleSamePageHashScroll();
        } else {
          instantScrollTo(0);
        }
      }, 0);
    });

    window.addEventListener('hashchange', handleSamePageHashScroll);

    // Capture phase so the event lands BEFORE the navigation tears
    // down the page. `passive: true` since we never call preventDefault.
    document.addEventListener('click', onClick, { capture: true, passive: true });
  })();
})();