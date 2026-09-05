import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PolicyDocumentPage } from "@/components/PolicyDocumentPage";
import { POLICIES, getPolicy } from "@/lib/policies";

export function generateStaticParams() {
  return POLICIES.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getPolicy(slug);
  return {
    title: doc ? doc.title : "Policies",
    description: doc?.lead,
  };
}

export default async function PolicySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getPolicy(slug);
  if (!doc) notFound();

  return <PolicyDocumentPage doc={doc} />;
}
