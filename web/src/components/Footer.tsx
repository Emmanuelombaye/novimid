"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/content";
import { FooterTrustBadges } from "./FooterTrustBadges";
import { LegitScriptBadge } from "./LegitScriptBadge";

const treatments = [
  { href: "/treatments", title: "Personalized GLP-1 care", sub: "Metabolic" },
  { href: "/treatments", title: "Personalized peptide therapy", sub: "Peptides" },
  { href: "/treatments", title: "Personalized TRT", sub: "Hormones" },
] as const;

const company = [
  { href: "/about", label: "About us" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/providers", label: "Providers" },
  { href: "/start", label: "Get started" },
  { href: "/faq", label: "FAQ" },
] as const;

const medical = [
  { href: "/telehealth", label: "Consent to telehealth" },
  { href: "/compounding-disclosure", label: "Compounding disclosure" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of service" },
] as const;

const bottomLegal = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/telehealth", label: "Telehealth" },
  { href: "/compounding-disclosure", label: "Compounding" },
] as const;

function IconIg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function IconFb() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconLi() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 9.5H4V20h2.5V9.5ZM5.25 4a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM20 20h-2.5v-5.2c0-1.7-.7-2.3-1.7-2.3-1.1 0-1.8.8-1.8 2.4V20H11.5V9.5H14v1.2c.5-.8 1.5-1.5 3-1.5 2.3 0 3 1.5 3 4.3V20Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  const pathname = usePathname();
  if (pathname === "/start") return null;

  const year = new Date().getFullYear();

  return (
    <footer className="bg-cloud px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8 lg:pb-12 lg:pt-14">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[12px] border-[0.5px] border-mist bg-white px-6 py-8 sm:rounded-[24px] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-8 xl:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="novimid home">
              <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-[4px]">
                <Image
                  src="/brand/Novimid_ICON-DARK.svg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </span>
              <span className="font-[family-name:var(--font-dm-sans)] text-[1.25rem] font-light tracking-[-0.02em] text-midnight">
                novimid
              </span>
            </Link>
            <p className="mt-3 text-[12px] font-light leading-relaxed text-fog">
              © {year} novimid. All rights reserved.
            </p>

            <div className="mt-5 flex items-center gap-2.5 text-midnight">
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border-[0.5px] border-mist transition-colors hover:border-sage hover:text-sage"
                aria-label="Instagram"
              >
                <IconIg />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border-[0.5px] border-mist transition-colors hover:border-sage hover:text-sage"
                aria-label="Facebook"
              >
                <IconFb />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border-[0.5px] border-mist transition-colors hover:border-sage hover:text-sage"
                aria-label="LinkedIn"
              >
                <IconLi />
              </a>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <LegitScriptBadge size="sm" />
              <div className="flex flex-col gap-1.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-midnight/20 bg-[#FAFBF9] px-3 py-1 text-[11px] font-bold text-midnight shadow-2xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse" />
                  LegitScript Certified
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-midnight/20 bg-white px-3 py-1 text-[11px] font-bold text-midnight shadow-2xs">
                  🔒 HIPAA Compliant
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-midnight/20 bg-[#DCE8DD] px-3 py-1 text-[11px] font-bold text-midnight shadow-2xs">
                  ✓ California 503A Pharmacy
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-xs text-[12px] font-light leading-relaxed text-forest">
              {brand.positioning}. Telehealth and compounding when clinically indicated.
            </p>
          </div>

          <div>
            <p className="label-caps">Treatments</p>
            <ul className="mt-3.5 space-y-3.5">
              {treatments.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="group block">
                    <span className="block text-[14px] font-light text-midnight transition-colors group-hover:text-sage">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-[12px] font-light text-fog">{item.sub}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-caps">novimid</p>
            <ul className="mt-3.5 space-y-1">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-[14px] font-light text-midnight transition-colors hover:text-sage"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-caps">Medical</p>
            <ul className="mt-3.5 space-y-1">
              {medical.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-[14px] font-light text-midnight transition-colors hover:text-sage"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <FooterTrustBadges tone="light" hipaaHref="/privacy" />

        <div className="mt-10 border-t-[0.5px] border-mist pt-6 sm:mt-12 sm:pt-7">
          <p className="text-[12px] font-light leading-relaxed text-fog">
            Draft marketing site — physician and legal review required before public launch.
          </p>
        </div>
      </div>

      <nav
        className="mx-auto mt-5 flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-2 sm:mt-6"
        aria-label="Legal"
      >
        {bottomLegal.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[11px] font-light text-fog underline-offset-2 hover:text-midnight hover:underline sm:text-[12px]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
