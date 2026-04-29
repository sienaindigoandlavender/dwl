import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { getLegalDoc } from "@/lib/legal";

export const metadata: Metadata = { title: "Disclaimer" };
export const dynamic = "force-static";

export default async function DisclaimerPage() {
  const doc = await getLegalDoc("disclaimer");
  return <LegalLayout doc={doc} />;
}
