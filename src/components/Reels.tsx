"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "./FadeIn";
import InstagramEmbed from "./InstagramEmbed";
import { oreo } from "@/content/oreo";

export default function Reels() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const node = scrollerRef.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>("[data-reel-card]");
    const amount = (card?.offsetWidth ?? 340) + 16;
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
              className="w-[326px] shrink-0 snap-center"
            >
              <div data-reel-card>
                <InstagramEmbed url={reel.url} />
              </div>
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
