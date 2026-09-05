"use client";

import Link from "next/link";
import { POLICIES, type PolicyDoc } from "@/lib/policies";
import { PolicyBody } from "./PolicyBody";

export function PolicyDocumentPage({ doc }: { doc: PolicyDoc }) {
  const handlePrint = () => window.print();

  return (
    <main className="bg-white">
      <section className="border-b-[0.5px] border-mist bg-cloud">
        <div className="shell py-12 sm:py-16">
          <p className="label-caps">{doc.eyebrow}</p>
          <h1 className="type-h1 mt-3 max-w-3xl text-midnight">{doc.title}</h1>
          <p className="mt-4 max-w-2xl text-[15px] font-light leading-relaxed text-forest">
            {doc.lead}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border-[0.5px] border-mist bg-white px-3 py-1 text-[12px] font-light text-fog">
              Last updated: {doc.updated}
            </span>
            <button
              type="button"
              onClick={handlePrint}
              className="rounded-full border-[0.5px] border-mist bg-white px-3 py-1 text-[12px] font-light text-midnight transition-colors hover:border-sage hover:text-sage"
            >
              Print / Save
            </button>
          </div>
        </div>
      </section>

      <nav
        className="sticky top-0 z-10 border-b-[0.5px] border-mist bg-white/95 backdrop-blur"
        aria-label="Compliance documents"
      >
        <div className="shell flex gap-1 overflow-x-auto py-3">
          {POLICIES.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              className={`shrink-0 rounded-full px-3 py-1.5 text-[12px] font-light transition-colors ${
                item.slug === doc.slug
                  ? "bg-sage text-white"
                  : "text-forest hover:bg-cloud hover:text-midnight"
              }`}
            >
              {item.navLabel}
            </Link>
          ))}
        </div>
      </nav>

      <section className="shell py-10 sm:py-14">
        <article className="mx-auto max-w-3xl rounded-[16px] border-[0.5px] border-mist bg-white p-6 sm:p-10">
          <PolicyBody doc={doc} />
          <hr className="my-8 border-mist" />
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-[13px] font-light text-fog">All compliance documents</span>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/policies"
                className="rounded-full border-[0.5px] border-mist px-3 py-1.5 text-[12px] font-light text-midnight transition-colors hover:border-sage hover:text-sage"
              >
                Document library
              </Link>
              <Link
                href="/start"
                className="rounded-full bg-sage px-3 py-1.5 text-[12px] font-medium text-white transition-colors hover:bg-forest"
              >
                Get started
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
