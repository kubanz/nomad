import type { Metadata } from "next";
import InvoiceGenerator from "./InvoiceGenerator";

export const metadata: Metadata = {
  title: "Invoice Generator — Nomad Transfer",
  robots: { index: false, follow: false },
};

export default function InvoicePage() {
  return <InvoiceGenerator />;
}
