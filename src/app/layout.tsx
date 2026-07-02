import type { Metadata } from "next";
import { Fredoka, Quicksand } from "next/font/google";
import "./globals.css";
import { oreo } from "@/content/oreo";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const title = `${oreo.fullName} 🐰`;
const description = `${oreo.tagline} Meet ${oreo.name}, a Holland Lop from ${oreo.location} — facts, photos, and links all in one place.`;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://oreothesweetbun.vercel.app"
  ),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "profile",
    images: [
      {
        url: oreo.heroPhoto.src,
        width: 1280,
        height: 1280,
        alt: oreo.heroPhoto.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [oreo.heroPhoto.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream text-cocoa">
        {children}
      </body>
    </html>
  );
}
