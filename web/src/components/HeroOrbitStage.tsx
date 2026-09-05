"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const OUTER_PHRASE =
  "PHYSICIAN-LED • SEMAGLUTIDE • TIRZEPATIDE • TELEHEALTH • 503A • USA • ";
const INNER_PHRASE =
  "PERSONALIZED • EVIDENCE-BASED • COMPOUNDED • CLINICAL • OVERSIGHT • ";

type OrbitSlide =
  | { id: string; kind: "product"; src: string; alt: string }
  | { id: string; kind: "lifestyle"; src: string; alt: string }
  | { id: string; kind: "logo" };

const ORBIT_SLIDES: OrbitSlide[] = [
  { id: "sema", kind: "product", src: "/images/orbit/vial-semaglutide.png", alt: "Semaglutide injectable solution vial" },
  { id: "woman", kind: "lifestyle", src: "/images/orbit/life-woman.png", alt: "" },
  { id: "tirz", kind: "product", src: "/images/orbit/vial-tirzepatide.png", alt: "Tirzepatide injectable solution vial" },
  { id: "man", kind: "lifestyle", src: "/images/orbit/life-man.png", alt: "" },
  { id: "pair", kind: "product", src: "/images/orbit/vials-pair.png", alt: "Semaglutide and Tirzepatide vials" },
  { id: "logo", kind: "logo" },
  { id: "couple", kind: "lifestyle", src: "/images/orbit/life-couple.png", alt: "" },
  { id: "care-w", kind: "lifestyle", src: "/images/orbit/life-care-woman.jpg", alt: "" },
  { id: "care-m", kind: "lifestyle", src: "/images/orbit/life-care-man.jpg", alt: "" },
];

const SLIDE_MS = 5200;
const FADE_MS = 1100;

function OrbitRing({
  phrase,
  radius,
  className,
  reverse,
}: {
  phrase: string;
  radius: number;
  className?: string;
  reverse?: boolean;
}) {
  const size = radius * 2 + 40;
  const center = size / 2;
  const pathId = `orbit-${radius}-${reverse ? "r" : "f"}`;

  return (
    <div
      className={`hero-orbit-ring ${reverse ? "hero-orbit-ring--reverse" : ""} ${className ?? ""}`}
      aria-hidden
    >
      <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full overflow-visible">
        <defs>
          <path
            id={pathId}
            d={`M ${center},${center} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text className="hero-orbit-text">
          <textPath href={`#${pathId}`} startOffset="0%">
            {phrase.repeat(2)}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

function LogoSlide({ active }: { active: boolean }) {
  return (
    <div
      className={`hero-orbit-logo ${active ? "hero-orbit-logo--active" : ""}`}
      aria-hidden
    >
      <span className="hero-orbit-logo__mark">
        <Image
          src="/brand/Novimid_ICON-DARK.svg"
          alt=""
          width={96}
          height={96}
          className="hero-orbit-logo__icon"
          priority
        />
      </span>
      <span className="hero-orbit-logo__word">novimid</span>
    </div>
  );
}

export function HeroOrbitStage() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % ORBIT_SLIDES.length);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <div className="hero-orbit-stage pointer-events-none select-none" aria-hidden>
      <div className="hero-orbit-stage-inner">
        <OrbitRing phrase={OUTER_PHRASE} radius={118} />
        <OrbitRing phrase={INNER_PHRASE} radius={88} reverse />

        <div className="hero-orbit-product hero-orbit-product--main">
          <div className="hero-orbit-slideshow" style={{ ["--orbit-fade-ms" as string]: `${FADE_MS}ms` }}>
            {ORBIT_SLIDES.map((slide, i) => {
              const active = i === index;
              return (
                <div
                  key={slide.id}
                  className={`hero-orbit-slide hero-orbit-slide--${slide.kind}${
                    active ? " is-active" : ""
                  }`}
                  aria-hidden={!active}
                >
                  {slide.kind === "logo" ? (
                    <LogoSlide active={active} />
                  ) : (
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={1024}
                      height={1024}
                      className="hero-orbit-slide__img"
                      sizes="(max-width: 639px) 72vw, (max-width: 1023px) 40vw, min(520px, 42vw)"
                      priority={i === 0}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="hero-orbit-glow" />
      </div>
    </div>
  );
}
