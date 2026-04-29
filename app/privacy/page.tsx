import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { getLegalDoc } from "@/lib/legal";

export const metadata: Metadata = { title: "Privacy" };
export const dynamic = "force-static";

export default async function PrivacyPage() {
  const doc = await getLegalDoc("privacy");
  return <LegalLayout doc={doc} />;
}
