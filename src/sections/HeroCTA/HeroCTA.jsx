import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Hero from "../Hero/Hero";
import CTA from "../CTA/CTA";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCTA({ id }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Pin the Hero section so it stays fixed while CTA scrolls over
    ScrollTrigger.create({
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top", 
      pin: true,
      pinSpacing: false, // Allows the next section (CTA) to pass over
    });

    // 2. Animate Hero exit synced with CTA entry
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cta-container",
        start: "top bottom", // Starts when CTA top enters screen
        end: "top top",      // Ends when CTA top reaches top
        scrub: true,
      }
    });

    heroTl.to(".hero-content", { yPercent: -40, opacity: 0, duration: 1 }, 0);
    heroTl.to(".hero-header", { yPercent: -100, opacity: 0, duration: 0.5 }, 0);
    heroTl.to(".hero-glow", { opacity: 0.1, scale: 1.1, duration: 1 }, 0);

    // 3. Smooth transition between Hero and CTA: CTA expands revealing content
    gsap.fromTo(".cta-container",
      { clipPath: "inset(15% 5% 0% 5% round 48px)" },
      {
        clipPath: "inset(0% 0% 0% 0% round 0px)",
        ease: "none",
        scrollTrigger: {
          trigger: ".cta-container",
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      }
    );

    // 4. Focus on CTA: words appear with a slight delay during scroll
    // Scrub removed to ensure animation finishes independent of scroll
    gsap.fromTo(".cta-word",
      { yPercent: 120, rotationZ: 5, opacity: 0 },
      {
        yPercent: 0,
        rotationZ: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-container",
          start: "top 60%", // Starts when CTA is well visible
          toggleActions: "play none none reverse", // Play on scroll down, reverse on up
        }
      }
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full">
      <Hero id={id} />
      <CTA />
    </div>
  );
}
