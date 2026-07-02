"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ImagePlus } from "lucide-react";
import FadeIn from "./FadeIn";
import { oreo } from "@/content/oreo";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  const activePhoto = openIndex !== null ? oreo.gallery[openIndex] : null;

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <FadeIn>
        <h2 className="font-heading text-center text-3xl font-bold text-cocoa">
          Gallery
        </h2>
      </FadeIn>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {oreo.gallery.map((photo, i) => (
          <FadeIn key={photo.alt} delay={i * 50}>
            <button
              type="button"
              onClick={() => photo.src && setOpenIndex(i)}
              disabled={!photo.src}
              className="group relative aspect-square w-full overflow-hidden rounded-2xl bg-cream-dark shadow-sm shadow-cocoa/5 disabled:cursor-default"
              aria-label={photo.src ? `View photo: ${photo.alt}` : photo.alt}
            >
              {photo.src ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-lavender/50 to-blush/50 text-cocoa-light">
                  <ImagePlus size={22} />
                  <span className="px-3 text-center text-xs">
                    Add photo
                  </span>
                </div>
              )}
            </button>
          </FadeIn>
        ))}
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-cocoa/80 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close photo"
            className="absolute top-6 right-6 rounded-full bg-white/90 p-2 text-cocoa"
          >
            <X size={20} />
          </button>
          <div
            className="relative aspect-square w-full max-w-lg overflow-hidden rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt}
              fill
              sizes="512px"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
