"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/content";
import { FooterLegalBar } from "./FooterLegalBar";
import { FooterTrustBadges } from "./FooterTrustBadges";

const treatments = [
  { href: "/treatments", title: "Semaglutide", sub: "Weight Management" },
  { href: "/treatments", title: "Tirzepatide", sub: "Weight Management" },
] as const;

const company = [
  { href: "/about", label: "About us" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/providers", label: "Providers" },
  { href: "/start", label: "Get started" },
  { href: "/faq", label: "FAQ" },
] as const;

const policies = [
  { href: "/policies", label: "All policies" },
  { href: "/policies/consent-to-telehealth", label: "Telehealth Consent" },
  { href: "/policies/hipaa-notice", label: "HIPAA Notice" },
  { href: "/policies/terms-of-use", label: "Terms of Use" },
  { href: "/policies/provider-network", label: "Provider Network" },
  { href: "/policies/fda-and-medical-disclaimer", label: "Medical Disclaimer" },
  { href: "/policies/privacy-policy", label: "Privacy Policy" },
] as const;

const bottomLegal = [
  { href: "/policies/terms-of-use", label: "Terms of Use" },
  { href: "/policies/privacy-policy", label: "Privacy Policy" },
  { href: "/policies/consent-to-telehealth", label: "Telehealth Consent" },
  { href: "/policies/hipaa-notice", label: "HIPAA Notice" },
  { href: "/policies/fda-and-medical-disclaimer", label: "Medical Disclaimer" },
  { href: "/policies/provider-network", label: "Provider Network" },
] as const;

export function Footer() {
  const pathname = usePathname();
  if (pathname === "/start") return null;

  const year = new Date().getFullYear();

  return (
    <footer className="bg-cloud px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8 lg:pb-12 lg:pt-14">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[12px] border-[0.5px] border-mist bg-white px-6 py-8 sm:rounded-[24px] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8 xl:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3" aria-label={`${brand.displayName} home`}>
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[6px]">
                <Image
                  src="/brand/Novimid_ICON-DARK.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </span>
              <span className="font-[family-name:var(--font-dm-sans)] text-[1.4rem] font-medium tracking-[-0.02em] text-midnight">
                {brand.displayName}
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-[14px] font-medium leading-snug text-midnight">
              {brand.positioning}
            </p>
            <p className="mt-2 max-w-xs text-[13px] font-light leading-relaxed text-forest">
              Clinician-guided telehealth. Compounded medications when clinically indicated through licensed U.S. pharmacy partners. Completing intake does not guarantee a prescription.
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
            <p className="label-caps">{brand.displayName}</p>
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
            <p className="label-caps">Policies</p>
            <ul className="mt-3.5 space-y-1">
              {policies.map((item) => (
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

        <FooterTrustBadges
          tone="light"
          hipaaHref="/policies/hipaa-notice"
          providerNetworkHref="/policies/provider-network"
        />

        <div className="mt-10 border-t-[0.5px] border-mist pt-6 sm:mt-12 sm:pt-7">
          <p className="text-[12px] font-light leading-relaxed text-fog">
            Compounded medications are prepared for individual patients pursuant to a valid prescription and are not FDA-approved.
            They do not undergo FDA review for safety, effectiveness, or manufacturing. Eligibility and treatment decisions are made by a licensed clinician.
          </p>
          <FooterLegalBar
            copyright={`© ${year} ${brand.displayName}. All rights reserved.`}
            note="Licensed clinical review required. Treatment not guaranteed."
          />
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
