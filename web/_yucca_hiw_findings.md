# Yucca How-It-Works sticky step-stack animation

Source files: _yucca_hiw.html, _yucca_hiw_inline.css, _yucca_hiw.css, _yucca_Hero.js (GSAP animation), _yucca_hiw_step.html.

## 1. Parent wrapper (steps column)

Inside .hiw-hero / .u-container-large:

`flex flex-col gap-16 desktop:gap-[50vh] relative`

- flex flex-col: vertical stack
- gap-16: mobile/tablet spacing
- desktop:gap-[50vh]: desktop scroll room for sticky stack
- relative: positioning context

## 2. Step sticky classes

Steps 1-4: `hiw-step desktop:sticky desktop:top-[23vh]`

Last step: `hiw-step desktop:relative` (not sticky; normal flow so stack can release).

Inner card: `article.hiw-step-card` (column on small screens, row on desktop).

Sticky is desktop-prefixed only (Tailwind desktop = 992px).

## 3. JS that scales/fades previous cards

Not inlined in the HTML. Lives in `/_astro/Hero.astro_astro_type_script_index_0_lang.BAA-eGOb.js` (saved as _yucca_Hero.js).

Uses GSAP + ScrollTrigger (dynamic import).

Gate: skip if max-width 991.98px OR prefers-reduced-motion: reduce.

Algorithm:
1. root = .hiw-hero; steps = root.querySelectorAll(.hiw-step)
2. For each step i with next step i+1:
   - card = step.querySelector(.hiw-step-card)
   - gsap.to(card, { opacity: 0, scale: 0.88, ease: none, scrubbed ScrollTrigger })
   - trigger = next step element
   - STICKY_VH=23, EXTRA_PX=350
   - start: top [innerHeight*(23/100) + card.offsetHeight + 350]px
   - end: top [innerHeight*(23/100) + card.offsetHeight/2]px
3. Last card has no next step so never fades.

HTML alone has no getBoundingClientRect/rAF for HIW; those only appear in nav/reviews scripts.

## 4. CSS for .hiw-step-card opacity/transform

Inline page CSS at min-width 992px:
.hiw-step-card[data-astro-cid-ccihfs37] { transform-origin: center; will-change: opacity, transform; }

No static opacity/scale on the card; GSAP writes inline styles. how-it-works.D7cmT7eP.css is retro theme only.

## 5. Mobile vs desktop

- Desktop >=992px: sticky top 23vh, gap 50vh, GSAP fade/scale active (unless reduced motion), will-change applied.
- Mobile/tablet <992px: no sticky (desktop: prefixes), gap-16 only, GSAP skipped via matchMedia max-width 991.98px.
- Last step always desktop:relative; on mobile all steps are normal flow.

## 6. Minimal recreation recipe

HTML: section.hiw-hero > div.flex.flex-col.gap-16.lg:gap-[50vh].relative > N times div.hiw-step (first N-1: lg:sticky lg:top-[23vh]; last: lg:relative) > article.hiw-step-card

CSS desktop: .hiw-step-card transform-origin center; will-change opacity, transform.

JS: if width<=991.98 or reduced-motion, return. For each card with a next step, scrub opacity 1->0 and scale 1->0.88 while next step travels from start (23vh + cardHeight + 350px) to end (23vh + cardHeight/2). Use GSAP ScrollTrigger or equivalent. Kill triggers on unmount.

## Beautified core loop (from Hero.js)

const STICKY_VH = 23; const EXTRA_PX = 350;
steps.forEach((step, i) => {
  const card = step.querySelector(".hiw-step-card");
  const next = steps[i + 1];
  if (!card || !next) return;
  gsap.to(card, {
    opacity: 0, scale: 0.88, ease: "none",
    scrollTrigger: {
      trigger: next, scrub: true, invalidateOnRefresh: true,
      start: () => "top " + (innerHeight*(STICKY_VH/100) + card.offsetHeight + EXTRA_PX) + "px",
      end: () => "top " + (innerHeight*(STICKY_VH/100) + card.offsetHeight/2) + "px",
    },
  });
});

Note: _yucca_hiw_script.js from an earlier parse was a style-tag mis-extract, not HIW motion JS.

## Mechanism summary

Desktop sticky stack at top 23vh with 50vh gaps. As each following step approaches, GSAP ScrollTrigger scrubs the previous .hiw-step-card to opacity 0 and scale 0.88. The last card is relative and never fades. Mobile: plain stacked list, no sticky, no GSAP.

## Raw _yucca_Hero.js

`js
globalThis.process??={};globalThis.process.env??={};const v=(function(){const n=typeof document<"u"&&document.createElement("link").relList;return n&&n.supports&&n.supports("modulepreload")?"modulepreload":"preload"})(),P=function(t){return"/"+t},g={},w=function(n,c,m){let a=Promise.resolve();if(c&&c.length>0){let l=function(r){return Promise.all(r.map(i=>Promise.resolve(i).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};var p=l;document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),e=o?.nonce||o?.getAttribute("nonce");a=l(c.map(r=>{if(r=P(r),r in g)return;g[r]=!0;const i=r.endsWith(".css"),u=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${u}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":v,i||(s.as="script"),s.crossOrigin="",s.href=r,e&&s.setAttribute("nonce",e),document.head.appendChild(s),i)return new Promise((y,E)=>{s.addEventListener("load",y),s.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${r}`)))})}))}function d(o){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=o,window.dispatchEvent(e),!e.defaultPrevented)throw o}return a.then(o=>{for(const e of o||[])e.status==="rejected"&&d(e.reason);return n().catch(d)})};function _(){return!(window.matchMedia("(max-width: 991.98px)").matches||window.matchMedia("(prefers-reduced-motion: reduce)").matches)}let f=[];async function h(){const t=document.querySelector(".hiw-hero");if(!t||t.dataset.hiwInit==="true")return;const n=Array.from(t.querySelectorAll(".hiw-step"));if(!n.length)return;if(!_()){t.dataset.hiwInit="true";return}const[{gsap:c},{ScrollTrigger:m}]=await Promise.all([w(()=>import("./index.C9xqZp_Z.js"),[]),w(()=>import("./ScrollTrigger.CneVbVDO.js"),[])]);c.registerPlugin(m);const a=23,d=350;n.forEach((p,o)=>{const e=p.querySelector(".hiw-step-card"),l=n[o+1];if(!e||!l)return;const r=c.to(e,{opacity:0,scale:.88,ease:"none",scrollTrigger:{trigger:l,start:()=>`top ${window.innerHeight*(a/100)+e.offsetHeight+d}px`,end:()=>`top ${window.innerHeight*(a/100)+e.offsetHeight/2}px`,scrub:!0,invalidateOnRefresh:!0}});r.scrollTrigger&&f.push(r.scrollTrigger)}),t.dataset.hiwInit="true"}function S(){f.forEach(t=>{try{t.kill()}catch{}}),f=[],document.querySelectorAll(".hiw-hero").forEach(t=>{delete t.dataset.hiwInit})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h();document.addEventListener("astro:before-swap",S);document.addEventListener("astro:page-load",h);

`
