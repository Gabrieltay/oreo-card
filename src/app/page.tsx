import Hero from "@/components/Hero";
import QuickFacts from "@/components/QuickFacts";
import Gallery from "@/components/Gallery";
import Reels from "@/components/Reels";
import About from "@/components/About";
import FollowLinks from "@/components/FollowLinks";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <QuickFacts />
      <Gallery />
      <Reels />
      <About />
      <FollowLinks />
    </main>
  );
}
