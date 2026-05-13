import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nomad Transfers KG — Private Airport Transfer & Tours in Kyrgyzstan",
  description:
    "Private airport transfers and day tours in Kyrgyzstan. Manas Airport, Bishkek, Karakol, Issyk-Kul. Fixed price per car. English-speaking drivers.",
  openGraph: {
    title: "Nomad Transfers KG — Private Transfer & Tours",
    description:
      "Private airport transfers and day tours in Kyrgyzstan. Fixed price per car.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
    type: "website",
    url: "https://nomad-transfer.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomad Transfers KG",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  metadataBase: new URL("https://nomad-transfer.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
