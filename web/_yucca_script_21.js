
  (() => {
    if (window.__ycTrack) return; // ClientRouter re-executes inline scripts
    window.__ycTrack = true;

    // Trailing slash: Astro 308-redirects /e to /e/. The redirect preserves
    // the method and body, but posting straight to /e/ saves a round trip on
    // EVERY event and removes any dependence on beacon redirect-following.
    var EP = '/e/';
    var V = 1; // bump when this script changes (props.v; cannot be backfilled)

    var send = function (name, props, url, beacon) {
      try {
        var body = JSON.stringify({
          id: crypto.randomUUID(),
          ts: Date.now(),
          name: name,
          v: V,
          u: url,
          r: document.referrer || null,
          props: props || {},
        });
        // Typeless Blob: some WebKit versions reject sendBeacon with a JSON
        // content-type. The collector parses the body regardless.
        if (beacon && navigator.sendBeacon) navigator.sendBeacon(EP, new Blob([body]));
        else fetch(EP, { method: 'POST', body: body, keepalive: true });
      } catch (_) {
        /* never break the page for a beacon */
      }
    };

    var pageUrl = null;
    var engaged = 0;
    var last = Date.now();
    var visible = !document.hidden;
    var scroll = 0;
    var open = false;

    var depth = function () {
      var h = document.documentElement.scrollHeight;
      return h > 0
        ? Math.min(100, Math.round((100 * (window.scrollY + window.innerHeight)) / h))
        : 100;
    };
    var tick = function () {
      var n = Date.now();
      if (visible && open) engaged += n - last;
      last = n;
    };
    setInterval(tick, 1000);
    addEventListener(
      'scroll',
      function () {
        scroll = Math.max(scroll, depth());
      },
      { passive: true },
    );

    var view = function () {
      if (location.href === pageUrl) return; // idempotent per URL
      pageUrl = location.href;
      engaged = 0;
      scroll = 0;
      last = Date.now();
      open = true;
      send('page_view', {}, pageUrl);
    };

    // Sends a DELTA and re-arms (see header). pageUrl, NOT location.href.
    var exit = function (beacon) {
      if (!open || !pageUrl) return;
      open = false;
      tick();
      send(
        'page_exit',
        { engaged_ms: engaged, max_scroll_pct: Math.max(scroll, depth()) },
        pageUrl,
        beacon !== false,
      );
      engaged = 0;
    };

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        visible = false;
        exit();
      } else {
        visible = true;
        last = Date.now();
        open = true;
      }
    });
    addEventListener('pagehide', function () {
      exit();
    });
    // bfcache restore: the default back-navigation on iOS Safari resumes the
    // page without re-running scripts. Re-arm so engagement keeps counting.
    addEventListener('pageshow', function (e) {
      if (e.persisted) {
        open = true;
        last = Date.now();
      }
    });

    // Bubble phase (NOT capture), so the site's own interceptors run first
    // and e.defaultPrevented is knowable: GoalPopup preventDefault()s intake
    // anchors to open a popup instead — that click never leaves the page and
    // must not count.
    addEventListener('click', function (e) {
      if (e.defaultPrevented) return;
      var a = e.target && e.target.closest && e.target.closest('a[href]');
      if (!a) return;
      var u;
      try {
        u = new URL(a.href, location.href);
      } catch (_) {
        return;
      }
      if (u.host === location.host) return;
      send(
        'click_out',
        { destination_host: u.host, destination_path: u.pathname, destination_query: u.search },
        location.href,
        true,
      );
    });

    addEventListener('astro:before-swap', function () {
      exit(false);
      pageUrl = null;
    });
    addEventListener('astro:page-load', view);
    view(); // no-ops if astro:page-load already ran
  })();
