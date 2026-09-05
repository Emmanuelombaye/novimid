"use client";

import { usePathname } from "next/navigation";

const items = [
  "Licensed U.S. clinicians",
  "Secure clinical intake",
  "Pharmacy partners when prescribed",
  "Compounded only when indicated",
  "No prescription guaranteed by intake",
] as const;

export function TrustTicker() {
  const pathname = usePathname();
  if (pathname === "/start") return null;

  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-b-[0.5px] border-mist bg-cloud">
      <div className="trust-marquee flex w-max gap-8 py-2.5 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-2 text-[11px] font-normal tracking-[0.08em] text-sage-mid uppercase"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage" aria-hidden />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
