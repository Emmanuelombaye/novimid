import Link from "next/link";
import { POLICIES } from "@/lib/policies";

export function PoliciesIndexPage() {
  return (
    <main className="bg-white">
      <section className="border-b-[0.5px] border-mist bg-cloud">
        <div className="shell py-12 sm:py-16">
          <p className="label-caps">Novimid</p>
          <h1 className="type-h1 mt-3 text-midnight">Policies</h1>
          <p className="mt-4 max-w-2xl text-[15px] font-light leading-relaxed text-forest">
            Read each compliance document on this website. These pages are the hosted copies of our
            Telehealth Consent, HIPAA Notice, Terms of Use, Provider Network, Medical Disclaimer, and
            Privacy Policy.
          </p>
        </div>
      </section>

      <section className="shell py-10 sm:py-14">
        <ul className="grid gap-4 sm:grid-cols-2">
          {POLICIES.map((doc) => (
            <li key={doc.slug}>
              <Link
                href={doc.href}
                className="group flex h-full flex-col rounded-[16px] border-[0.5px] border-mist bg-white p-6 transition-colors hover:border-sage"
              >
                <span className="label-caps text-fog">{doc.eyebrow}</span>
                <strong className="mt-2 font-[family-name:var(--font-dm-sans)] text-[1.1rem] font-medium tracking-[-0.01em] text-midnight">
                  {doc.title}
                </strong>
                <span className="mt-2 flex-1 text-[14px] font-light leading-relaxed text-forest">
                  {doc.lead}
                </span>
                <em className="mt-4 text-[13px] font-light not-italic text-sage group-hover:text-midnight">
                  Read on site →
                </em>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
