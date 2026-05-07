import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import HeroCTA from "../sections/HeroCTA/HeroCTA";
import Thumbnails from "../sections/Thumbnails/Thumbnails";
import Websites from "../sections/Websites/Websites";
import About from "../sections/About/About";
import FeedbacksFooterSection from "../sections/FeedbacksFooterSection/FeedbacksFooterSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef(null);

  // Home scope setup - other global animations can go here
  useGSAP(() => {
    // ... Any page level animations if needed
  }, { scope: mainRef });

  return (
    <main ref={mainRef} className="bg-black text-white overflow-x-hidden relative">
      <HeroCTA />
      <Thumbnails id="projects"/>
      <Websites />
      <About />
      <FeedbacksFooterSection />
    </main>
  );
}