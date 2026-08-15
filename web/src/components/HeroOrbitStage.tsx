"use client";

import Image from "next/image";

const OUTER_PHRASE =
  "PHYSICIAN-LED • GLP-1 • PEPTIDES • TRT • 503A • CALIFORNIA • TELEHEALTH • ";
const INNER_PHRASE =
  "PERSONALIZED • EVIDENCE-BASED • COMPOUNDED • CLINICAL • OVERSIGHT • ";

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
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-full w-full overflow-visible"
      >
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

export function HeroOrbitStage() {
  return (
    <div className="hero-orbit-stage pointer-events-none select-none" aria-hidden>
      <div className="hero-orbit-stage-inner">
        <OrbitRing phrase={OUTER_PHRASE} radius={118} />
        <OrbitRing phrase={INNER_PHRASE} radius={88} reverse />

        {/* Primary product cluster — GLP-1 vials + pen */}
        <div className="hero-orbit-product hero-orbit-product--main animate-float-slow">
          <Image
            src="/images/novimid-card-glp1.png"
            alt=""
            width={1024}
            height={1024}
            className="h-auto w-auto max-h-full max-w-full object-contain"
            priority
          />
        </div>

        {/* Secondary floating vial — depth */}
        <div className="hero-orbit-product hero-orbit-product--accent animate-float-reverse">
          <Image
            src="/images/icon-vial-a-v2.png"
            alt=""
            width={256}
            height={256}
            className="h-auto w-[72px] opacity-90 drop-shadow-lg sm:w-[88px]"
          />
        </div>

        {/* Soft glow behind products */}
        <div className="hero-orbit-glow" />
      </div>
    </div>
  );
}
