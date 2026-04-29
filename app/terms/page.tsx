import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { getLegalDoc } from "@/lib/legal";

export const metadata: Metadata = { title: "Terms" };
export const dynamic = "force-static";

export default async function TermsPage() {
  const doc = await getLegalDoc("terms");
  return <LegalLayout doc={doc} />;
}
