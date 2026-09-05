"use client";

import { useId, useState } from "react";

export type FaqAccordionItem = {
  q: string;
  a: string;
};

type Props = {
  items: readonly FaqAccordionItem[];
  defaultOpenIndex?: number | null;
  className?: string;
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={`h-[18px] w-[18px] shrink-0 text-forest/55 transition-transform duration-300 ease-out ${
        open ? "rotate-180" : ""
      }`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/** Efexia-style single-panel FAQ accordion (one open at a time). */
export function FaqAccordion({
  items,
  defaultOpenIndex = 0,
  className = "",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const panelId = useId();

  return (
    <div
      className={`overflow-hidden rounded-[20px] border border-midnight/10 bg-white shadow-[0_18px_44px_rgba(44,58,53,0.06)] ${className}`}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.q}
            className={
              index < items.length - 1 ? "border-b border-midnight/10" : ""
            }
          >
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between gap-[18px] bg-transparent px-[22px] py-5 text-left font-[family-name:var(--font-dm-sans)] text-[1rem] font-semibold text-midnight transition-colors hover:bg-cloud/80 sm:px-6"
              aria-expanded={isOpen}
              aria-controls={`${panelId}-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.q}</span>
              <ChevronIcon open={isOpen} />
            </button>
            <div
              id={`${panelId}-${index}`}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="m-0 px-[22px] pb-5 text-[0.95rem] leading-[1.65] font-light text-forest sm:px-6">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
