import Image from "next/image";
import { oreo } from "@/content/oreo";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pt-16 pb-10 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blush via-cream to-mint"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-lavender/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 -z-10 h-72 w-72 rounded-full bg-mint/60 blur-3xl"
      />

      <div className="relative mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-xl shadow-cocoa/10 sm:h-56 sm:w-56">
        <Image
          src={oreo.heroPhoto.src}
          alt={oreo.heroPhoto.alt}
          fill
          priority
          sizes="224px"
          className="object-cover"
        />
      </div>

      <h1 className="font-heading text-5xl font-bold text-cocoa sm:text-6xl">
        {oreo.name}
      </h1>
      <p className="mt-3 max-w-xs text-lg text-cocoa-light sm:max-w-sm sm:text-xl">
        {oreo.tagline}
      </p>

      <a
        href="#follow"
        className="mt-8 rounded-full bg-cocoa px-6 py-3 text-sm font-semibold text-cream shadow-md transition hover:bg-cocoa-light"
      >
        Say hi to {oreo.name} 👋
      </a>
    </section>
  );
}
