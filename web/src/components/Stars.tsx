type StarsProps = {
  /** Number of filled stars (default 5) */
  value?: number;
  /** Visual size */
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  /** Accessible label; omit to hide from AT when decorative */
  label?: string;
};

const boxDimensions = {
  xs: { box: "w-3.5 h-3.5 rounded-[2px]", icon: 9 },
  sm: { box: "w-4.5 h-4.5 rounded-[3px]", icon: 11 },
  md: { box: "w-5.5 h-5.5 rounded-[3px]", icon: 13 },
  lg: { box: "w-6.5 h-6.5 rounded-[4px]", icon: 15 },
} as const;

/** Clean white 5-point star icon inside Trustpilot green box */
function StarIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/** Authentic Trustpilot-style 5-star row (Green square boxes with white stars) */
export function Stars({
  value = 5,
  size = "sm",
  className = "",
  label = "5 stars",
}: StarsProps) {
  const dim = boxDimensions[size];
  const filled = Math.max(0, Math.min(5, Math.round(value)));

  return (
    <span
      className={`inline-flex items-center gap-[2.5px] ${className}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`flex items-center justify-center ${dim.box} ${
            i < filled
              ? "bg-[#00B67A] text-white"
              : "bg-[#374151] text-white/50"
          }`}
        >
          <StarIcon size={dim.icon} />
        </span>
      ))}
    </span>
  );
}

/** Trustpilot green square star mark for trust badges */
export function StarMark({
  size = "md",
  className = "",
}: {
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}) {
  const dim = boxDimensions[size];
  return (
    <span
      className={`inline-flex items-center justify-center ${dim.box} bg-[#00B67A] text-white ${className}`}
      aria-hidden
    >
      <StarIcon size={dim.icon} />
    </span>
  );
}

/** Do not show fabricated Trustpilot scores — reserved until real review data exists. */
export function TrustpilotBadge(_props?: {
  rating?: string;
  reviewsCount?: string;
  className?: string;
}) {
  return null;
}
