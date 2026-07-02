"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImagePlus, Play } from "lucide-react";
import FadeIn from "./FadeIn";
import { oreo } from "@/content/oreo";

export default function Reels() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const node = scrollerRef.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>("[data-reel-card]");
    const amount = (card?.offsetWidth ?? 208) + 16;
    node.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  if (oreo.reels.length === 0) return null;

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <FadeIn>
        <h2 className="font-heading text-center text-3xl font-bold text-cocoa">
          Reels
        </h2>
        <p className="mt-2 text-center text-cocoa-light">
          {oreo.name}&rsquo;s best moments, straight from Instagram
        </p>
      </FadeIn>

      <div className="relative mt-8">
        <div
          ref={scrollerRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
        >
          {oreo.reels.map((reel, i) => (
            <FadeIn
              key={reel.url}
              delay={i * 60}
              className="shrink-0 snap-center"
            >
              <a
                data-reel-card
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch on Instagram: ${reel.caption}`}
                className="group relative block aspect-[9/16] w-44 overflow-hidden rounded-2xl bg-cream-dark shadow-sm shadow-cocoa/5 sm:w-52"
              >
                {reel.thumbnail ? (
                  <Image
                    src={reel.thumbnail}
                    alt={reel.caption}
                    fill
                    sizes="(max-width: 640px) 176px, 208px"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-lavender/50 to-blush/50 text-cocoa-light">
                    <ImagePlus size={22} />
                    <span className="px-3 text-center text-xs">
                      Add a thumbnail
                    </span>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa/70 via-transparent to-transparent" />

                <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-cocoa transition group-hover:scale-105">
                  <Play size={14} fill="currentColor" />
                </div>

                <p className="absolute inset-x-3 bottom-3 line-clamp-2 text-sm font-medium text-white">
                  {reel.caption}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>

        {oreo.reels.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous reel"
              className="absolute top-1/2 -left-3 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-cocoa shadow-md shadow-cocoa/10 sm:flex"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next reel"
              className="absolute top-1/2 -right-3 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-cocoa shadow-md shadow-cocoa/10 sm:flex"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
