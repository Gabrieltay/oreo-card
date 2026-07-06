import type { Metadata } from "next";
import NameCard from "@/components/NameCard";
import { oreo } from "@/content/oreo";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://oreo-card.vercel.app";
const siteUrl = `${baseUrl.replace(/\/$/, "")}/card`;

const title = `${oreo.fullName}'s Digital Namecard 🐰`;
const description = `Scan the QR code to find all of ${oreo.fullName}'s links in one place.`;

export const metadata: Metadata = {
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

export default function CardPage() {
  return <NameCard qrValue={siteUrl} />;
}
