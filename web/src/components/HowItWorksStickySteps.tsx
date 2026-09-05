"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { howSteps } from "@/lib/how-it-works";
import { SiteImage } from "./SiteImage";

const STICKY_TOP = "18vh";

/**
 * How-it-works sticky stack:
 * Desktop (≥992px): prior cards scrub to opacity 0 before the next sticks over them.
 * Mobile: clean vertical stack — no sticky, no overlap.
 */
export function HowItWorksStickySteps() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const desktopMq = window.matchMedia("(min-width: 992px)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const triggers: ScrollTrigger[] = [];

    const clearCards = () => {
      root.querySelectorAll<HTMLElement>(".hiw-step-card").forEach((card) => {
        gsap.set(card, { clearProps: "opacity,transform,filter,pointerEvents" });
      });
    };

    const kill = () => {
      triggers.splice(0).forEach((t) => t.kill());
      clearCards();
      delete root.dataset.hiwInit;
    };

    const init = () => {
      kill();
      if (!desktopMq.matches || motionMq.matches) {
        root.dataset.hiwInit = "skipped";
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const steps = Array.from(root.querySelectorAll<HTMLElement>(".hiw-step"));
      steps.forEach((step, i) => {
        const card = step.querySelector<HTMLElement>(".hiw-step-card");
        const next = steps[i + 1];
        if (!card || !next) return;

        const tween = gsap.fromTo(
          card,
          { opacity: 1, scale: 1, filter: "blur(0px)" },
          {
            opacity: 0,
            scale: 0.94,
            filter: "blur(2px)",
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: next,
              // Start fading as soon as the next step enters the lower viewport —
              // finish by the time it reaches the sticky top (prevents text collision).
              start: "top 92%",
              end: `top ${STICKY_TOP}`,
              scrub: 0.45,
              invalidateOnRefresh: true,
            },
            onUpdate: function onUpdate() {
              card.style.pointerEvents = this.progress > 0.55 ? "none" : "auto";
            },
          }
        );

        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
      });

      root.dataset.hiwInit = "true";
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    init();

    const onChange = () => init();
    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => init(), 180);
    };

    desktopMq.addEventListener("change", onChange);
    motionMq.addEventListener("change", onChange);
    window.addEventListener("resize", onResize);

    return () => {
      desktopMq.removeEventListener("change", onChange);
      motionMq.removeEventListener("change", onChange);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeTimer);
      kill();
    };
  }, []);

  return (
    <section ref={rootRef} className="hiw-hero">
      <div className="hiw-steps relative flex flex-col gap-14 sm:gap-16 min-[992px]:gap-[58vh]">
        {howSteps.map((step, i) => {
          const isLast = i === howSteps.length - 1;
          const imageLeft = !step.reverse;

          return (
            <div
              key={step.n}
              className={`hiw-step ${
                isLast
                  ? "min-[992px]:relative"
                  : "min-[992px]:sticky min-[992px]:top-[18vh]"
              }`}
              style={{ zIndex: i + 1 }}
            >
              <article
                className={`hiw-step-card flex flex-col items-stretch gap-5 rounded-[22px] border-[0.5px] border-mist bg-white p-4 shadow-[0_10px_40px_rgba(44,58,53,0.06)] sm:gap-6 sm:rounded-[28px] sm:p-5 min-[992px]:flex-row min-[992px]:items-center min-[992px]:gap-10 min-[992px]:p-6 ${
                  imageLeft ? "" : "min-[992px]:flex-row-reverse"
                }`}
              >
                <div className="relative min-w-0 flex-[1.25] overflow-hidden rounded-[18px] border-[0.5px] border-midnight/10 bg-[#DCE8DD] sm:rounded-[22px] min-[992px]:max-w-[38rem]">
                  <div className="media-frame relative aspect-[4/3]">
                    <SiteImage
                      image={step.image}
                      fill
                      className="object-cover"
                      sizes={step.image.sizes}
                      priority={i === 0}
                    />
                  </div>
                  {step.chips ? (
                    <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5 sm:inset-x-4 sm:bottom-4 sm:gap-2">
                      {step.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border-[0.5px] border-midnight/15 bg-white/95 px-2.5 py-1 text-[10px] font-light text-midnight backdrop-blur-sm sm:px-3 sm:text-[11px]"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="hiw-step-copy min-w-0 flex-1 px-1 pb-1 sm:px-2 min-[992px]:max-w-[28rem] min-[992px]:px-1">
                  <p className="text-[11px] font-medium tracking-[0.16em] text-sage-mid uppercase sm:text-[12px] sm:font-light sm:tracking-[0.14em]">
                    Step {step.n}
                  </p>
                  <h2 className="mt-2.5 font-[family-name:var(--font-dm-sans)] text-[clamp(1.55rem,4.2vw,1.875rem)] font-light leading-[1.05] tracking-tight text-midnight sm:mt-3">
                    {step.title}{" "}
                    <em className="font-[family-name:var(--font-dm-serif)] italic text-sage">
                      {step.titleItalic}
                    </em>
                  </h2>
                  <p className="mt-3.5 text-[14px] font-light leading-relaxed text-forest sm:mt-4 sm:text-[15px]">
                    {step.body}
                  </p>

                  {step.callout ? (
                    <div className="mt-5 inline-block max-w-full rounded-[14px] border-[0.5px] border-mist bg-cloud py-4 pr-6 pl-5 sm:mt-6 sm:rounded-[16px] sm:py-5 sm:pr-8 sm:pl-6">
                      <p className="text-[clamp(1.35rem,3.5vw,2.1rem)] font-light leading-none text-midnight">
                        {step.callout.value}
                      </p>
                      <p className="mt-2 max-w-sm text-[12px] font-light leading-snug text-forest sm:text-[13px]">
                        {step.callout.label}
                      </p>
                    </div>
                  ) : null}

                  {step.n === "01" ? (
                    <Link
                      href="/treatments"
                      className="mt-5 inline-flex h-11 items-center text-[14px] font-light text-sage underline-offset-4 hover:underline sm:mt-6 sm:text-[15px]"
                    >
                      Explore treatments →
                    </Link>
                  ) : null}
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
