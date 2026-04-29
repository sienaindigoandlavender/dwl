import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { getLegalDoc } from "@/lib/legal";

export const metadata: Metadata = { title: "Intellectual Property" };
export const dynamic = "force-static";

export default async function IntellectualPropertyPage() {
  const doc = await getLegalDoc("intellectual-property");
  return <LegalLayout doc={doc} />;
}
