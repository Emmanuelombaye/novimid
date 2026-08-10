import Link from "next/link";
import { clinicalTools } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { SiteImage } from "./SiteImage";

type Props = {
  showIntro?: boolean;
  showLink?: boolean;
};

function ToolCard({
  tool,
  priority = false,
}: {
  tool: (typeof clinicalTools)[number];
  priority?: boolean;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border-[0.5px] border-mist bg-white">
      <div className="relative aspect-[4/3] bg-midnight sm:aspect-square">
        <SiteImage
          image={tool.image}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="object-cover"
          sizes="(max-width: 768px) 82vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="type-h3">{tool.title}</h3>
        <p className="type-body mt-3 flex-1">{tool.body}</p>
      </div>
    </article>
  );
}

export function ClinicalTools({ showIntro = true, showLink = true }: Props) {
  return (
    <div>
      {showIntro ? (
        <Reveal>
          <SectionLabel>Clinical tools</SectionLabel>
          <h2 className="type-h2 mt-4 md:text-[1.75rem]">
            The tools your physician may use
          </h2>
          <p className="type-body mt-5 max-w-2xl">
            We lead with physician-directed optimization — then describe the clinical
            tools available when they fit your protocol.
          </p>
          <p className="mt-3 text-[13px] font-light text-fog md:hidden">
            Swipe to explore each therapy.
          </p>
        </Reveal>
      ) : null}

      {/* Mobile: horizontal snap — phone-first */}
      <div
        className={`snap-rail md:hidden ${showIntro ? "mt-6" : "mt-0"}`}
        role="list"
      >
        {clinicalTools.map((tool, i) => (
          <div key={tool.title} className="snap-card" role="listitem">
            <Reveal delayMs={i * 40}>
              <ToolCard tool={tool} priority={i === 0} />
            </Reveal>
          </div>
        ))}
      </div>

      {/* Desktop / tablet grid */}
      <div
        className={`hidden gap-4 md:grid md:grid-cols-3 md:gap-6 ${
          showIntro ? "md:mt-12" : ""
        }`}
      >
        {clinicalTools.map((tool, i) => (
          <Reveal key={tool.title} delayMs={i * 70}>
            <ToolCard tool={tool} />
          </Reveal>
        ))}
      </div>

      {showLink ? (
        <Reveal className="mt-8">
          <Link
            href="/treatments"
            className="inline-flex min-h-12 items-center text-[15px] font-light text-sage underline-offset-4 hover:underline"
          >
            View treatments
          </Link>
        </Reveal>
      ) : null}
    </div>
  );
}
