import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata("/contact");

export default function Contact() {
  return <ContactPage />;
}
