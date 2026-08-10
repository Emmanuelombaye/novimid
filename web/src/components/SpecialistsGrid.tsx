"use client";

import Image from "next/image";
import Link from "next/link";
import { specialists } from "@/lib/specialists";
import { Reveal } from "./Reveal";

type Props = {
  showProviderLink?: boolean;
};

/**
 * Hims-exact specialist grid structure:
 * cream portrait card + role/specialty pipes + name/bio below.
 * Different people than Hims; illustrative until counsel confirms.
 */
export function SpecialistsGrid({ showProviderLink = true }: Props) {
  return (
    <section className="bg-[#F9F7F2] py-16 sm:py-20 lg:py-[5.5rem]">
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-[40rem] text-center">
            <h2 className="font-[family-name:var(--font-dm-sans)] text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
              <span className="block text-[#A67C52]">The best care</span>
              <span className="block text-[#111111]">by the best in medicine</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[32rem] text-[15px] font-normal leading-[1.45] text-[#5C5C5C] sm:text-[16px]">
              Meet the team of leading specialists with decades of combined experience across key
              specialties.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-10 min-[480px]:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-x-3 xl:gap-x-4">
          {specialists.map((doc, i) => (
            <Reveal key={doc.name} delayMs={i * 45} className="flex flex-col">
              {/* Upper cream panel */}
              <div
                className="relative flex h-[11.75rem] overflow-hidden rounded-[1.25rem] sm:h-[12.5rem]"
                style={{
                  background:
                    "linear-gradient(180deg, #F3EDE3 0%, #E8DFD2 55%, #DFD3C3 100%)",
                }}
              >
                <div className="relative h-full w-[48%] shrink-0">
                  <Image
                    src={doc.image.src}
                    alt={doc.image.alt}
                    fill
                    className="object-cover object-[center_12%]"
                    sizes="(max-width:640px) 45vw, (max-width:1024px) 22vw, 200px"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center py-4 pr-3.5 pl-1.5 sm:pr-4">
                  <p className="font-[family-name:var(--font-dm-sans)] text-[13px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#111111] sm:text-[14px]">
                    {doc.role}
                  </p>
                  <ul className="mt-2.5 space-y-[6px]">
                    {doc.specialties.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2 font-[family-name:var(--font-dm-sans)] text-[11.5px] font-normal leading-snug text-[#1A1A1A] sm:text-[12px]"
                      >
                        <span
                          className="mt-[3px] h-[11px] w-[2.5px] shrink-0 rounded-[1px] bg-[#A67C52]"
                          aria-hidden
                        />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Name + bio under card */}
              <h3 className="mt-3.5 font-[family-name:var(--font-dm-sans)] text-[14px] font-semibold tracking-[-0.01em] text-[#111111] sm:text-[15px]">
                {doc.name}
              </h3>
              <p className="mt-1.5 font-[family-name:var(--font-dm-sans)] text-[12px] font-normal leading-[1.45] text-[#6B6B6B] sm:text-[12.5px]">
                {doc.bio}
              </p>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-lg text-center text-[11px] font-normal italic text-[#8A8A8A]">
          Profiles shown for design. Named provider biographies are confirmed by the clinical team
          before public launch.
        </p>

        {showProviderLink ? (
          <div className="mt-5 flex justify-center">
            <Link
              href="/providers"
              className="font-[family-name:var(--font-dm-sans)] text-[14px] font-medium text-[#A67C52] underline-offset-4 hover:underline"
            >
              Meet providers →
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
