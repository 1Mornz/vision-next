import type { Metadata } from "next";
import ValuesPage from "@/components/pages/ValuesPage";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata("/values");

export default function Values() {
  return <ValuesPage />;
}
