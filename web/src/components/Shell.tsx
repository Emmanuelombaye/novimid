import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
};

/** Consistent max-width + mobile gutters across the site */
export function Shell({ children, className = "", as = "div" }: Props) {
  const Tag = as;
  return (
    <Tag className={`shell ${className}`.trim()}>{children}</Tag>
  );
}
