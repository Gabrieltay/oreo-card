import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";
import type { ComponentType } from "react";
import { Link as LinkIcon, Mail, Globe } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "./icons";
import { oreo, type SocialLink } from "@/content/oreo";

const ICONS: Record<SocialLink["icon"], ComponentType<{ size?: number }>> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Youtube: YoutubeIcon,
  Link: LinkIcon,
  Mail,
  Globe,
};

export default function NameCard({ qrValue }: { qrValue: string }) {
  return (
    <main className="relative flex h-dvh flex-col items-center justify-center gap-[clamp(10px,2.8vh,24px)] overflow-hidden bg-gradient-to-b from-blush via-cream to-mint px-6 py-[clamp(12px,4vh,28px)] text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 -z-10 h-56 w-56 rounded-full bg-lavender/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-20 -z-10 h-56 w-56 rounded-full bg-mint/60 blur-3xl"
      />

      <Link
        href="/"
        className="absolute top-[clamp(10px,3vh,20px)] left-6 text-xs font-semibold text-cocoa-light underline-offset-4 hover:underline"
      >
        ← Full profile
      </Link>

      <div className="relative h-[clamp(64px,16vh,104px)] w-[clamp(64px,16vh,104px)] shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg shadow-cocoa/10">
        <Image
          src={oreo.heroPhoto.src}
          alt={oreo.heroPhoto.alt}
          fill
          priority
          sizes="104px"
          className="object-cover"
        />
      </div>

      <div>
        <h1 className="font-heading text-[clamp(1.5rem,5.5vh,2.25rem)] leading-tight font-bold text-cocoa">
          {oreo.fullName}
        </h1>
        <p className="mt-1 text-[clamp(0.8rem,2.2vh,1rem)] text-cocoa-light">
          {oreo.tagline}
        </p>
      </div>

      <div className="rounded-2xl bg-white p-[clamp(10px,2.2vh,16px)] shadow-md shadow-cocoa/10">
        <QRCode
          value={qrValue}
          size={256}
          style={{
            height: "clamp(112px, 24vh, 168px)",
            width: "clamp(112px, 24vh, 168px)",
          }}
          fgColor="#3a2e26"
          viewBox="0 0 256 256"
        />
      </div>
      <p className="text-[clamp(0.65rem,1.8vh,0.75rem)] font-medium tracking-wide text-cocoa-light uppercase">
        Scan for all my links
      </p>

      <div className="flex shrink-0 items-center justify-center gap-3">
        {oreo.social.map((link) => {
          const Icon = ICONS[link.icon];
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-[clamp(32px,6.5vh,40px)] w-[clamp(32px,6.5vh,40px)] items-center justify-center rounded-full bg-cocoa text-cream shadow-sm shadow-cocoa/10 transition hover:bg-cocoa-light"
            >
              <Icon size={16} />
            </a>
          );
        })}
      </div>

      <p className="text-[clamp(0.65rem,1.8vh,0.75rem)] text-cocoa-light">
        {oreo.location}
      </p>
    </main>
  );
}
