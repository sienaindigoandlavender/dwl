import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { getLegalDoc } from "@/lib/legal";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return <LegalLayout doc={getLegalDoc("terms")} />;
}
