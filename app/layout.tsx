import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nomad Transfer — Private Transfers & Tours in Kyrgyzstan",
  description:
    "Private transfers and day tours in Kyrgyzstan. Manas Airport, Bishkek, Karakol, Issyk-Kul. Fixed price per car. English-speaking drivers.",
  openGraph: {
    title: "Nomad Transfer — Private Transfers & Tours in Kyrgyzstan",
    description:
      "Private transfers and day tours in Kyrgyzstan. Fixed price per car.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Nomad Transfer — Private Transfers in Kyrgyzstan",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com",
    siteName: "Nomad Transfer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomad Transfer — Private Transfers in Kyrgyzstan",
    description: "Private transfers and day tours in Kyrgyzstan. Fixed price per car.",
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
