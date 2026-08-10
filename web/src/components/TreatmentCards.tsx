"use client";

import Link from "next/link";
import { clinicalTools } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SiteImage } from "./SiteImage";

export function TreatmentCards() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
      {clinicalTools.map((tool, i) => (
        <Reveal
          key={tool.title}
          delayMs={i * 90}
          className="treatment-card group overflow-hidden rounded-[22px] border-[0.5px] border-mist bg-cloud sm:rounded-[24px]"
        >
          <div className="media-frame relative aspect-[4/3] overflow-hidden bg-midnight sm:aspect-[5/4]">
            <SiteImage
              image={tool.image}
              fill
              loading="lazy"
              className="media-zoom object-cover"
            />
          </div>
          <div className="p-5 sm:p-6">
            <p className="label-caps">Personalized</p>
            <h3 className="mt-2 text-[1.25rem] font-normal text-midnight">{tool.title}</h3>
            <p className="mt-3 text-[14px] font-light leading-relaxed text-forest">
              {tool.body}
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <Link
                href="/start"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#2C3A35] px-4 text-[13px] font-normal text-[#FFFFFF] transition-transform duration-300 hover:-translate-y-0.5"
              >
                See if I qualify
              </Link>
              <Link
                href="/treatments"
                className="inline-flex h-11 items-center justify-center rounded-full border-[0.5px] border-mist bg-white px-4 text-[13px] font-normal text-midnight transition-colors hover:border-sage"
              >
                Learn more
              </Link>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
