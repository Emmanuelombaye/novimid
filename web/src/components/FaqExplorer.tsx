"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { faqCategories } from "@/lib/content";
import { Reveal } from "./Reveal";

type FlatItem = {
  q: string;
  a: string;
  categoryId: string;
  categoryLabel: string;
};

export function FaqExplorer() {
  const [active, setActive] = useState(0);
  const [query, setQuery] = useState("");
  const category = faqCategories[active] ?? faqCategories[0];
  const searching = query.trim().length > 0;

  const visible = useMemo((): FlatItem[] => {
    const q = query.trim().toLowerCase();

    if (!q) {
      return category.items.map((item) => ({
        ...item,
        categoryId: category.id,
        categoryLabel: category.label,
      }));
    }

    return faqCategories.flatMap((cat) =>
      cat.items
        .filter(
          (item) =>
            item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q),
        )
        .map((item) => ({
          ...item,
          categoryId: cat.id,
          categoryLabel: cat.label,
        })),
    );
  }, [category, query]);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative">
        <label htmlFor="faq-search" className="sr-only">
          Search FAQs
        </label>
        <input
          id="faq-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions…"
          className="h-12 w-full rounded-full border-[0.5px] border-mist bg-white pr-4 pl-11 text-[14px] font-light text-midnight outline-none placeholder:text-fog focus:border-sage sm:h-14 sm:text-[15px]"
        />
        <span
          className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sage-mid"
          aria-hidden
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1" />
            <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </span>
      </div>

      {searching && (
        <p className="mt-3 text-center text-[12px] font-light text-fog">
          {visible.length === 0
            ? "No matches — try a different word or clear search."
            : `${visible.length} result${visible.length === 1 ? "" : "s"} across all topics`}
        </p>
      )}

      <div
        className={`mt-6 flex w-full items-center gap-1 overflow-x-auto rounded-full border-[0.5px] border-mist bg-white p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          searching ? "pointer-events-none opacity-45" : ""
        }`}
        role="tablist"
        aria-label="FAQ topics"
        aria-disabled={searching}
      >
        {faqCategories.map((tab, i) => {
          const on = !searching && active === i;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={on}
              disabled={searching}
              onClick={() => setActive(i)}
              className={`min-w-0 flex-1 whitespace-nowrap rounded-full px-3 py-2.5 text-[12px] font-light text-midnight transition-colors sm:px-4 sm:text-[13px] ${
                on ? "bg-midnight text-white" : "bg-transparent hover:bg-cloud"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:gap-3.5">
        {visible.length === 0 ? (
          <div className="rounded-[12px] border-[0.5px] border-mist bg-white px-6 py-10 text-center">
            <p className="text-[15px] font-light text-forest">No questions match that search.</p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-4 text-[13px] font-light text-sage underline-offset-4 hover:underline"
            >
              Clear search
            </button>
          </div>
        ) : (
          visible.map((item, i) => (
            <Reveal
              key={`${item.categoryId}-${item.q}`}
              delayMs={Math.min(i * 35, 140)}
            >
              <details className="group rounded-[12px] border-[0.5px] border-mist bg-white open:border-sage/40">
                <summary className="cursor-pointer list-none px-5 py-4 marker:content-none sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    <span className="min-w-0">
                      {searching && (
                        <span className="mb-2 inline-block rounded-full border-[0.5px] border-mist px-2.5 py-0.5 text-[10px] font-light tracking-[0.06em] text-sage-mid uppercase">
                          {item.categoryLabel}
                        </span>
                      )}
                      <span className="block pt-0.5 font-[family-name:var(--font-dm-sans)] text-[15px] font-light leading-snug tracking-[-0.01em] text-midnight sm:text-[16px]">
                        {item.q}
                      </span>
                    </span>
                    <span
                      className="faq-toggle flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[0.5px] border-mist font-[family-name:var(--font-dm-sans)] text-[18px] leading-none text-midnight transition-colors group-open:border-sage group-open:bg-sage group-open:text-white"
                      aria-hidden
                    >
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">×</span>
                    </span>
                  </span>
                </summary>
                <div className="border-t-[0.5px] border-mist px-5 pt-3 pb-5 sm:px-6 sm:pb-6">
                  <p className="faq-answer max-w-2xl text-[14px] font-light leading-relaxed text-forest sm:text-[15px]">
                    {item.a}
                  </p>
                </div>
              </details>
            </Reveal>
          ))
        )}
      </div>

      <div className="mt-12 rounded-[16px] border-[0.5px] border-mist bg-white px-6 py-8 text-center sm:mt-14 sm:px-10 sm:py-10">
        <p className="label-caps">Still have questions</p>
        <h2 className="mt-3 font-[family-name:var(--font-dm-sans)] text-[clamp(1.35rem,3vw,1.75rem)] font-light tracking-[-0.02em] text-midnight">
          A care coordinator can help
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[14px] font-light leading-relaxed text-forest sm:text-[15px]">
          Start intake and your team will clarify eligibility, shipping, and what to expect before
          your physician consult.
        </p>
        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/start"
            className="inline-flex h-11 items-center justify-center rounded-full bg-sage px-7 text-[14px] font-light text-white transition-colors hover:bg-sage-mid sm:h-12 sm:text-[15px]"
          >
            Start your protocol
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex h-11 items-center justify-center rounded-full border-[0.5px] border-mist bg-cloud px-7 text-[14px] font-light text-midnight transition-colors hover:border-sage/40 sm:h-12 sm:text-[15px]"
          >
            How it works
          </Link>
        </div>
      </div>
    </div>
  );
}
