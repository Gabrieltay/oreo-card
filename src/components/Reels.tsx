"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "./FadeIn";
import InstagramEmbed from "./InstagramEmbed";
import { oreo } from "@/content/oreo";

export default function Reels() {
  const [index, setIndex] = useState(0);
  const count = oreo.reels.length;

  const goTo = (next: number) => {
    setIndex(((next % count) + count) % count);
  };

  if (count === 0) return null;

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
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {oreo.reels.map((reel) => (
              <div key={reel.url} className="w-full shrink-0 px-1">
                <InstagramEmbed url={reel.url} />
              </div>
            ))}
          </div>
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous reel"
              className="absolute top-1/2 -left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-cocoa shadow-md shadow-cocoa/10"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next reel"
              className="absolute top-1/2 -right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-cocoa shadow-md shadow-cocoa/10"
            >
              <ChevronRight size={18} />
            </button>

            <div className="mt-4 flex justify-center gap-2">
              {oreo.reels.map((reel, i) => (
                <button
                  key={reel.url}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to reel ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-cocoa" : "w-2 bg-cocoa/25"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
