import { parsePolicyBody, type PolicyDoc } from "@/lib/policies";

function linkify(text: string) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return parts.map((part, index) =>
    /^https?:\/\//.test(part) ? (
      <a
        key={`${part}-${index}`}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sage underline underline-offset-2 hover:text-midnight"
      >
        {part}
      </a>
    ) : (
      part
    ),
  );
}

export function PolicyBody({ doc }: { doc: PolicyDoc }) {
  const blocks = parsePolicyBody(doc.body);

  return (
    <div className="space-y-4 text-[15px] font-light leading-relaxed text-forest">
      {blocks.map((block, index) => {
        if (block.type === "h") {
          return (
            <h2
              key={`${doc.slug}-h-${index}`}
              className="pt-4 font-[family-name:var(--font-dm-sans)] text-[1.05rem] font-medium tracking-[-0.01em] text-midnight first:pt-0"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={`${doc.slug}-ul-${index}`} className="list-disc space-y-2 pl-5">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={`${doc.slug}-p-${index}`}>{linkify(block.text)}</p>
        );
      })}
    </div>
  );
}
