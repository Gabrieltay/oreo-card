import { Trophy } from "lucide-react";
import FadeIn from "./FadeIn";
import { oreo } from "@/content/oreo";

export default function About() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <FadeIn>
        <h2 className="font-heading text-center text-3xl font-bold text-cocoa">
          {oreo.fullName.split(" ")[0]}&apos;s Story
        </h2>
      </FadeIn>

      <FadeIn delay={80}>
        <p className="mt-6 text-center leading-relaxed text-cocoa-light">
          {oreo.about}
        </p>
      </FadeIn>

      {oreo.achievements.length > 0 && (
        <FadeIn delay={140}>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {oreo.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-cocoa shadow-sm shadow-cocoa/5"
              >
                <Trophy size={16} className="text-mocha" />
                {achievement}
              </li>
            ))}
          </ul>
        </FadeIn>
      )}
    </section>
  );
}
