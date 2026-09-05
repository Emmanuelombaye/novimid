"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { howSteps } from "@/lib/how-it-works";
import { SiteImage } from "./SiteImage";

const STICKY_VH = 23;
const EXTRA_PX = 350;

/**
 * How-it-works sticky stack:
 * sticky top 23vh + 50vh gaps; prior cards scrub to opacity 0 / scale 0.88 via ScrollTrigger.
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
        gsap.set(card, { clearProps: "opacity,transform" });
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

        const tween = gsap.to(card, {
          opacity: 0,
          scale: 0.88,
          ease: "none",
          scrollTrigger: {
            trigger: next,
            start: () =>
              `top ${window.innerHeight * (STICKY_VH / 100) + card.offsetHeight + EXTRA_PX}px`,
            end: () =>
              `top ${window.innerHeight * (STICKY_VH / 100) + card.offsetHeight / 2}px`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
      });

      root.dataset.hiwInit = "true";
      ScrollTrigger.refresh();
    };

    init();

    const onChange = () => init();
    desktopMq.addEventListener("change", onChange);
    motionMq.addEventListener("change", onChange);

    return () => {
      desktopMq.removeEventListener("change", onChange);
      motionMq.removeEventListener("change", onChange);
      kill();
    };
  }, []);

  return (
    <section ref={rootRef} className="hiw-hero">
      <div className="relative flex flex-col gap-16 min-[992px]:gap-[50vh]">
        {howSteps.map((step, i) => {
          const isLast = i === howSteps.length - 1;
          return (
            <div
              key={step.n}
              className={`hiw-step ${
                isLast
                  ? "min-[992px]:relative"
                  : "min-[992px]:sticky min-[992px]:top-[23vh]"
              }`}
              style={{ zIndex: i + 1 }}
            >
              <article className="hiw-step-card flex flex-col items-stretch gap-5 sm:gap-6 min-[992px]:flex-row min-[992px]:items-center min-[992px]:gap-11">
                <div className="relative min-w-0 flex-[1.3] overflow-hidden rounded-[20px] border-[0.5px] border-midnight bg-[#DCE8DD] sm:rounded-[28px] min-[992px]:min-w-0 min-[992px]:max-w-[38.75rem]">
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
                    <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
                      {step.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border-[0.5px] border-midnight/15 bg-white/95 px-3 py-1 text-[11px] font-light text-midnight backdrop-blur-sm"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="min-w-0 flex-1 bg-white min-[992px]:max-w-[29rem]">
                  <p className="text-[12px] font-light tracking-[0.14em] text-sage-mid uppercase">
                    Step {step.n}
                  </p>
                  <h2 className="mt-3 font-[family-name:var(--font-dm-sans)] text-[clamp(1.65rem,3.5vw,1.875rem)] font-light leading-none tracking-tight text-midnight">
                    {step.title}{" "}
                    <em className="font-[family-name:var(--font-dm-serif)] italic text-sage">
                      {step.titleItalic}
                    </em>
                  </h2>
                  <p className="mt-4 text-[15px] font-light leading-relaxed text-forest">
                    {step.body}
                  </p>

                  {step.callout ? (
                    <div className="mt-6 inline-block rounded-[16px] border-[0.5px] border-mist bg-cloud py-5 pr-8 pl-6 sm:pr-10 sm:pl-8">
                      <p className="text-[clamp(1.5rem,3vw,2.4rem)] font-light leading-none text-midnight">
                        {step.callout.value}
                      </p>
                      <p className="mt-2 max-w-sm text-[13px] font-light leading-snug text-forest">
                        {step.callout.label}
                      </p>
                    </div>
                  ) : null}

                  {step.n === "01" ? (
                    <Link
                      href="/treatments"
                      className="mt-6 inline-flex h-11 items-center text-[15px] font-light text-sage underline-offset-4 hover:underline"
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
