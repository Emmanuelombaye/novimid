"use client";

/**
 * Authentic LegitScript Certified SVG Badge Component
 * Based on official healthcare compliance certification standards
 */
export function LegitScriptBadge({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dimensions = {
    sm: { width: 110, height: 130 },
    md: { width: 140, height: 165 },
    lg: { width: 170, height: 200 },
  }[size];

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 140 165"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-md transition-transform duration-300 hover:scale-105"
      >
        {/* Outer Hexagon Shell */}
        <path
          d="M70 4L133 40.5V113.5L70 160L7 113.5V40.5L70 4Z"
          fill="#0D1F38"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Molecular Honeycomb Nodes */}
        <g fill="#38BDF8">
          <circle cx="50" cy="40" r="4.5" />
          <circle cx="59" cy="35" r="4.5" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="68" cy="40" r="4.5" />
          <circle cx="41" cy="46" r="4.5" />
          <circle cx="50" cy="52" r="4.5" stroke="#FFFFFF" strokeWidth="1" />
        </g>

        {/* Brand Text */}
        <text
          x="77"
          y="47"
          fill="#FFFFFF"
          fontSize="15"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-0.3"
        >
          Legit<tspan fill="#38BDF8">Script</tspan>
        </text>

        {/* "Certified" Subtitle */}
        <text
          x="70"
          y="74"
          fill="#FFFFFF"
          fontSize="17"
          fontWeight="600"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="0.2"
        >
          Certified
        </text>

        {/* Green Verified Hexagon Check Badge */}
        <path
          d="M70 102L91 114V138L70 150L49 138V114L70 102Z"
          fill="#4ADE80"
          stroke="#16A34A"
          strokeWidth="1.5"
        />

        {/* Checkmark Icon */}
        <path
          d="M62 125.5L67.5 131L78 120.5"
          stroke="#0F172A"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/** Horizontal Certification Trust Pill with LegitScript, HIPAA & 503A badges */
export function ComplianceTrustBar({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 ${className}`}>
      {/* LegitScript Pill */}
      <div className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-midnight bg-[#0D1F38] px-4 py-2 text-white shadow-[3px_3px_0_0_#1F2A37]">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4ADE80] text-[#0D1F38] font-black text-[12px]">
          ✓
        </div>
        <span className="text-[12.5px] font-bold text-white tracking-tight">
          LegitScript <span className="text-[#38BDF8]">Certified</span>
        </span>
      </div>

      {/* HIPAA Compliant Pill */}
      <div className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-midnight bg-white px-4 py-2 text-midnight shadow-[3px_3px_0_0_#1F2A37]">
        <span className="text-[13px]">🔒</span>
        <span className="text-[12.5px] font-bold text-midnight">HIPAA Compliant Privacy</span>
      </div>

      {/* California 503A Pharmacy Pill */}
      <div className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-midnight bg-[#DCE8DD] px-4 py-2 text-midnight shadow-[3px_3px_0_0_#1F2A37]">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sage text-[10px] font-bold text-midnight">
          ✓
        </span>
        <span className="text-[12.5px] font-bold text-midnight">California 503A Compounding</span>
      </div>

      {/* Board Certified MD Network */}
      <div className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-midnight bg-white px-4 py-2 text-midnight shadow-[3px_3px_0_0_#1F2A37]">
        <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
        <span className="text-[12.5px] font-bold text-midnight">Board-Certified US Physicians</span>
      </div>
    </div>
  );
}
