"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import {
  yuccaExploreCategories,
  type YuccaExploreCategory,
  type YuccaTone,
} from "@/lib/yuccaExplore";

type Props = {
  /** Controlled active tone from parent page */
  activeTone?: YuccaTone;
  onToneChange?: (tone: YuccaTone) => void;
  /** @deprecated use onToneChange */
  onNovimidChange?: (novimidId: "metabolic" | "peptides" | "hormones") => void;
};

/** Exact Try Yucca explore block — tabs + split hero only */
export function YuccaTreatmentsExplore({
  activeTone,
  onToneChange,
  onNovimidChange,
}: Props) {
  const [internal, setInternal] = useState<YuccaTone>("wl");
  const active = activeTone ?? internal;
  const activeIndex = yuccaExploreCategories.findIndex((c) => c.id === active);
  const cat =
    yuccaExploreCategories.find((c) => c.id === active) ?? yuccaExploreCategories[0];

  function select(next: YuccaExploreCategory) {
    if (activeTone === undefined) setInternal(next.id);
    onToneChange?.(next.id);
    onNovimidChange?.(next.novimidId);
  }

  return (
    <div className="yucca-explore retro-explore-tabs-wrap mx-auto w-full max-w-[72rem]">
      <div
        className="explore-tab-menu mx-auto mb-4 grid sm:mb-5"
        data-active-index={Math.max(0, activeIndex)}
        role="tablist"
        aria-label="Treatment categories"
      >
        {yuccaExploreCategories.map((c) => {
          const on = c.id === active;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={on}
              data-active={on ? "true" : "false"}
              data-tone={c.tone}
              onClick={() => select(c)}
              className="explore-tab-link relative flex min-h-[4.5625rem] cursor-pointer items-center overflow-hidden rounded-xl p-4 text-sm font-semibold leading-none tracking-[-0.02em] text-[#2c3a35]"
            >
              <span className="explore-tab-border" aria-hidden />
              <span className="explore-tab-fill" aria-hidden />
              <span className="relative z-[2] max-w-[55%]">{c.tab}</span>
              <span
                className={`explore-tab-img pointer-events-none absolute bottom-0 h-[4.5rem] w-[52%] max-h-[4.5rem] ${
                  c.tone === "sermorelin" ? "right-[-14px]" : "right-0"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.tabImage}
                  alt=""
                  className="h-full w-full object-cover object-[center_28%]"
                />
              </span>
            </button>
          );
        })}
      </div>

      <YuccaPane key={cat.id} cat={cat} />
    </div>
  );
}

function YuccaPane({ cat }: { cat: YuccaExploreCategory }) {
  const hasProducts = Boolean(cat.products?.length);

  return (
    <section
      className="explore-hero-section bg-white pb-10 lg:pb-12"
      data-explore-pane={cat.tone}
    >
      <div className="explore-hero-container mx-auto w-full max-w-[72rem]">
        <div className="explore-hero-grid flex flex-col gap-5 sm:gap-7">
          {/* Left product stage — stays full-width until CSS grid (≥1120px) to avoid crush */}
          <div
            className="explore-card explore-hero-card relative flex h-[27.5rem] w-full flex-col justify-between overflow-hidden rounded-3xl px-6 pt-6 pb-5 text-xs font-medium tracking-[-0.01em] text-[#2c3a35] sm:h-auto sm:min-h-0 sm:px-7 sm:pt-8 sm:pb-7"
            data-card={cat.tone}
            style={
              {
                "--yucca-product": `url(${cat.productBg})`,
              } as CSSProperties
            }
          >
            <h2
              className="explore-hero-card-title relative z-[2] mx-auto m-0 shrink-0 text-center text-[1.75rem] leading-[1] font-medium tracking-[-0.04em] text-[#2c3a35] sm:text-[2.5rem] lg:text-[2.625rem]"
              style={{ maxWidth: `${cat.titleMaxCh}ch` }}
            >
              {cat.title}
            </h2>

            <div
              className="explore-hero-card-stage min-h-[10rem] flex-1 sm:min-h-[11rem] lg:min-h-[14rem]"
              aria-hidden
            />

            {cat.priceBadge ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cat.priceBadge}
                alt=""
                className="explore-hero-card-price-badge pointer-events-none absolute z-[2] object-contain"
              />
            ) : null}

            <div className="explore-hero-card-footer relative z-[2] flex w-full items-center justify-between gap-3 text-xs font-medium leading-none tracking-[-0.01em]">
              <div className="min-w-0 shrink">
                <strong className="font-medium">{cat.footerSocialBold}</strong>
                {cat.footerSocialSuffix}
              </div>
              <div className="flex shrink-0 items-center gap-1.5">
                <span
                  className={`explore-hero-chip inline-flex items-center justify-center rounded-full px-1.5 py-1 text-xs font-medium leading-none tracking-tight whitespace-nowrap ${cat.chipClass}`}
                >
                  {cat.chip}
                </span>
                <span className="explore-hero-stock inline-flex items-center gap-1.5 rounded-full bg-[#d4ffd6] px-2 py-1 text-xs font-medium leading-none tracking-tight whitespace-nowrap text-[#14884c]">
                  <span className="explore-stock-dot block h-1.5 w-1.5 rounded-full bg-[#14884c]" />
                  {cat.stock}
                </span>
              </div>
            </div>
          </div>

          {/* Right open column — container for includes/guarantee side-by-side */}
          <div className="explore-hero-content flex w-full min-w-0 flex-col">
            <p
              className={`explore-hero-copy text-base leading-[1.5] tracking-[-0.01em] text-neutral-900 ${
                hasProducts ? "mb-4 sm:mb-6 lg:mb-0" : "mb-4 sm:mb-6 lg:mb-8"
              }`}
            >
              {cat.summary}
            </p>

            {hasProducts ? (
              <div className="explore-hero-products my-[18px] mb-6 flex flex-row flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8">
                {cat.products!.map((p) => (
                  <div key={p.name} className="explore-hero-product flex min-w-0 items-center gap-2">
                    <div
                      className="explore-hero-product-thumb relative aspect-square w-[34px] max-w-[34px] shrink-0 overflow-clip rounded-full"
                      style={{ background: p.thumbBg }}
                    >
                      <Image
                        src={p.thumb}
                        alt=""
                        width={34}
                        height={34}
                        className="block h-full w-full object-cover"
                      />
                    </div>
                    <div className="explore-hero-product-copy min-w-0">
                      <p className="explore-hero-product-name text-sm font-medium leading-snug text-neutral-900">
                        {p.name}
                      </p>
                      <p className="explore-hero-product-desc text-sm leading-[1.5] text-neutral-900/70">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="explore-hero-includes">
              <div className="explore-hero-plans">
                <div className="explore-hero-plans-label text-sm tracking-[-0.01em] text-neutral-900/40">
                  All plans include:
                </div>
                <div className="explore-hero-plan-list mt-2.5 flex flex-col gap-3">
                  {cat.includes.map((label) => (
                    <div
                      key={label}
                      className="explore-hero-plan-item flex items-center gap-3 text-sm tracking-[-0.01em] text-neutral-900"
                    >
                      <span className="explore-hero-plan-icon flex aspect-square w-6 min-w-6 shrink-0 items-center justify-center overflow-clip rounded-full bg-neutral-200 text-neutral-900">
                        <IncludeGlyph label={label} />
                      </span>
                      <span className="explore-hero-plan-label min-w-0">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="explore-hero-guarantee">
                <div className="explore-hero-guarantee-card text-center text-xs leading-[1.5] tracking-[-0.01em] text-neutral-900">
                  <div className="explore-hero-guarantee-heading mb-2.5 inline-flex items-center justify-center gap-[5px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/brand/Novimid_LOGOMARK-FLAT.svg"
                      alt="novimid"
                      className="explore-hero-guarantee-logo block h-auto w-14"
                    />
                    <span className="explore-hero-guarantee-rule block h-px w-[13px] rotate-90 bg-neutral-900/28" />
                    <span className="explore-hero-guarantee-word text-[14px] font-medium italic text-neutral-900">
                      Guarantee
                    </span>
                  </div>
                  <p className="m-0">{cat.guarantee}</p>
                </div>
              </div>
            </div>

            <div className="explore-hero-divider mb-9 hidden h-px w-full bg-[#eee] md:block" />

            <div className="explore-hero-pricing explore-hero-pricing--badge-only order-first mb-6 md:order-none md:mb-0">
              <div className="explore-hero-price-row explore-hero-price-row--badge-only mb-4 flex items-center justify-between md:mb-0">
                <span className="explore-hero-price-label text-sm tracking-[-0.01em] text-neutral-900/40">
                  Starting as low as:
                </span>
                {cat.priceBadge ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={cat.priceBadge}
                    alt=""
                    className="explore-hero-price-badge h-[72px] w-[72px] object-contain sm:h-[103px] sm:w-[103px]"
                  />
                ) : null}
              </div>
              <Link
                href="/start"
                className={`explore-hero-cta explore-hero-cta--${cat.ctaTone} flex w-full items-center justify-center rounded-full border-2 border-[#2c3a35] px-6 py-4 text-base font-bold leading-none tracking-[-0.01em] shadow-[3px_4px_0_0_#2c3a35] transition-[transform,box-shadow] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_2px_0_0_#2c3a35]`}
              >
                See if I qualify
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IncludeGlyph({ label }: { label: string }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
  };
  if (label.includes("Consultation") || label.includes("consultation")) {
    return (
      <svg {...common}>
        <path d="M4.5 9.5c-1.2 0-2.2-.9-2.2-2.2V5A2 2 0 0 1 4.3 3h.7" strokeLinecap="round" />
        <path d="M9.5 9.5c1.2 0 2.2-.9 2.2-2.2V5A2 2 0 0 0 9.7 3h-.7" strokeLinecap="round" />
        <path d="M5 8h4" strokeLinecap="round" />
      </svg>
    );
  }
  if (label.includes("Shipping") || label.includes("shipping")) {
    return (
      <svg {...common}>
        <path d="M1 7h6l2-3h3" strokeLinecap="round" />
        <path d="M8 7l1.2 3H2.5L3.5 7" strokeLinecap="round" />
      </svg>
    );
  }
  if (label.includes("Support") || label.includes("support")) {
    return (
      <svg {...common}>
        <path d="M2 7a5 5 0 0 1 10 0" strokeLinecap="round" />
        <path d="M2 7v2a1.5 1.5 0 0 0 1.5 1.5H4V7H3.5A1.5 1.5 0 0 0 2 8.5Z" />
        <path d="M12 7v2a1.5 1.5 0 0 1-1.5 1.5H10V7h.5A1.5 1.5 0 0 1 12 8.5Z" />
      </svg>
    );
  }
  if (label.includes("Portal") || label.includes("portal")) {
    return (
      <svg width={14} height={14} viewBox="0 0 17 17" fill="none" stroke="currentColor" strokeWidth={1.25}>
        <path
          d="M3.10939 13.701C3.57963 12.7748 4.29717 11.9969 5.18247 11.4535C6.06777 10.9101 7.08625 10.6224 8.12501 10.6224C9.16378 10.6224 10.1823 10.9101 11.0676 11.4535C11.9529 11.9969 12.6704 12.7748 13.1406 13.701M15.625 8.125C15.625 12.2671 12.2671 15.625 8.125 15.625C3.98286 15.625 0.625 12.2671 0.625 8.125C0.625 3.98286 3.98286 0.625 8.125 0.625C12.2671 0.625 15.625 3.98286 15.625 8.125ZM11.25 7.5C11.25 9.22589 9.85089 10.625 8.125 10.625C6.39911 10.625 5 9.22589 5 7.5C5 5.77411 6.39911 4.375 8.125 4.375C9.85089 4.375 11.25 5.77411 11.25 7.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4.5 9.5c-1.2 0-2.2-.9-2.2-2.2V5A2 2 0 0 1 4.3 3h.7" strokeLinecap="round" />
      <path d="M9.5 9.5c1.2 0 2.2-.9 2.2-2.2V5A2 2 0 0 0 9.7 3h-.7" strokeLinecap="round" />
      <path d="M5 8h4" strokeLinecap="round" />
    </svg>
  );
}
