import { Cake, Carrot, Heart, MapPin, PawPrint, Scale } from "lucide-react";
import FadeIn from "./FadeIn";
import { oreo, type QuickFact } from "@/content/oreo";

const ICONS: Record<QuickFact["icon"], typeof PawPrint> = {
  PawPrint,
  Cake,
  Scale,
  Carrot,
  Heart,
  MapPin,
};

export default function QuickFacts() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <FadeIn>
        <h2 className="font-heading text-center text-3xl font-bold text-cocoa">
          Quick Facts
        </h2>
      </FadeIn>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {oreo.quickFacts.map((fact, i) => {
          const Icon = ICONS[fact.icon];
          return (
            <FadeIn key={fact.label} delay={i * 60}>
              <div className="flex items-center gap-4 rounded-2xl bg-white/70 p-4 shadow-sm shadow-cocoa/5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush/60 text-cocoa">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium uppercase tracking-wide text-cocoa-light">
                    {fact.label}
                  </p>
                  <p className="font-semibold text-cocoa">{fact.value}</p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
