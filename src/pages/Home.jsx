import Hero from "../sections/Hero/Hero";
import CTA from "../sections/CTA/CTA";
import Thumbnails from "../sections/Thumbnails/Thumbnails";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <CTA />
      <Thumbnails />
    </main>
  );
}