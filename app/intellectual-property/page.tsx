import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { getLegalDoc } from "@/lib/legal";

export const metadata: Metadata = { title: "Intellectual Property" };

export default function IntellectualPropertyPage() {
  return <LegalLayout doc={getLegalDoc("intellectual-property")} />;
}
