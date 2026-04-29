import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { getLegalDoc } from "@/lib/legal";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return <LegalLayout doc={getLegalDoc("disclaimer")} />;
}
