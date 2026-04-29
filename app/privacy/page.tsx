import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { getLegalDoc } from "@/lib/legal";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return <LegalLayout doc={getLegalDoc("privacy")} />;
}
