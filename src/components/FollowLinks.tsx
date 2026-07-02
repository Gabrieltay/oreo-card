import type { ComponentType } from "react";
import { Link as LinkIcon, Mail, Globe, QrCode } from "lucide-react";
import NextLink from "next/link";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "./icons";
import FadeIn from "./FadeIn";
import { oreo, type SocialLink } from "@/content/oreo";

const ICONS: Record<SocialLink["icon"], ComponentType<{ size?: number }>> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Youtube: YoutubeIcon,
  Link: LinkIcon,
  Mail,
  Globe,
};

export default function FollowLinks() {
  return (
    <section
      id="follow"
      className="mx-auto max-w-2xl px-6 pt-8 pb-20 text-center"
    >
      <FadeIn>
        <h2 className="font-heading text-3xl font-bold text-cocoa">
          Follow {oreo.name}
        </h2>
        <p className="mt-2 text-cocoa-light">
          For more flops, snacks, and adventures
        </p>
      </FadeIn>

      <FadeIn delay={80}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {oreo.social.map((link) => {
            const Icon = ICONS[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-cocoa px-6 py-3 text-sm font-semibold text-cream shadow-md shadow-cocoa/10 transition hover:bg-cocoa-light"
              >
                <Icon size={18} />
                {link.label}
              </a>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn delay={140}>
        <NextLink
          href="/card"
          className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-cocoa/20 px-6 py-3 text-sm font-semibold text-cocoa transition hover:border-cocoa/40"
        >
          <QrCode size={18} />
          Digital namecard
        </NextLink>
      </FadeIn>
    </section>
  );
}
