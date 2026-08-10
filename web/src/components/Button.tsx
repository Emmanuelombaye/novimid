import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "sage" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#2C3A35] text-[#FFFFFF] hover:bg-forest active:bg-forest focus-visible:outline-midnight",
  sage: "bg-[#6B8F71] text-[#FFFFFF] hover:bg-sage-mid active:bg-sage-mid focus-visible:outline-sage",
  ghost:
    "bg-transparent text-midnight hover:text-sage focus-visible:outline-midnight",
  light:
    "bg-[#FFFFFF] text-[#2C3A35] hover:bg-cloud active:bg-cloud focus-visible:outline-white",
};

type Props = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: Props) {
  const classes = [
    "inline-flex min-h-12 items-center justify-center rounded-[var(--radius-btn)] px-6 py-3 text-[15px] font-light tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variants[variant],
    className,
  ].join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
