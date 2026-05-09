import { useRef, useEffect } from "react";
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

  // Scroll to hash or top on mount
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const scrollToTarget = () => {
      const hash = window.location.hash;
      if (hash && hash !== "#home") {
        const target = document.querySelector(hash);
        if (target) {
          if (window.lenis) {
            window.lenis.scrollTo(target, { immediate: true });
          } else {
            target.scrollIntoView({ behavior: "instant" });
          }
        }
      } else {
        if (window.lenis) {
          window.lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      }
    };

    setTimeout(scrollToTarget, 50);

    return () => {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    <main id="home" ref={mainRef} className="bg-black text-white overflow-x-hidden relative">
      <HeroCTA />
      <Thumbnails id="projects"/>
      <Websites />
      <About />
      <FeedbacksFooterSection />
    </main>
  );
}

