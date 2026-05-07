import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({ image, alt }) {
  const wrapperRef = useRef(null);

  const cardRef = useRef(null);

  const imageRef = useRef(null);

  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // =========================
      // INITIAL STATES
      // =========================

      gsap.set(cardRef.current, {
        scale: 0.86,
        borderRadius: "28px",
        transformOrigin: "center center",
        force3D: true,
      });

      gsap.set(imageRef.current, {
        scale: 1.12,
        force3D: true,
      });

      gsap.set(overlayRef.current, {
        opacity: 0.45,
      });

      // =========================
      // TIMELINE
      // =========================

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,

          start: "top 85%",

          end: "top 30%",

          scrub: 1,

          invalidateOnRefresh: true,
        },
      });

      // =========================
      // CARD SCALE
      // =========================

      tl.to(
        cardRef.current,
        {
          scale: 1,

          borderRadius: "0px",

          ease: "none",

          duration: 1,
        },
        0
      );

      // =========================
      // IMAGE SCALE
      // =========================

      tl.to(
        imageRef.current,
        {
          scale: 1,

          ease: "none",

          duration: 1,
        },
        0
      );

      // =========================
      // OVERLAY FADE
      // =========================

      tl.to(
        overlayRef.current,
        {
          opacity: 0,

          ease: "none",

          duration: 1,
        },
        0
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative mb-16 overflow-hidden md:mb-24"
    >
      <div className="flex justify-center px-4 md:px-8">
        {/* CARD */}

        <div
          ref={cardRef}
          className="
            relative
            w-full
            overflow-hidden
            bg-[#0A0A0A]
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          "
        >
          {/* IMAGE */}

          <img
            ref={imageRef}
            src={image}
            alt={alt || "Project preview"}
            className="
              block
              w-full
              h-auto
              object-cover
              select-none
              pointer-events-none
            "
            draggable="false"
          />

          {/* DARK OVERLAY */}

          <div
            ref={overlayRef}
            className="
              absolute
              inset-0
              bg-black
            "
          />
        </div>
      </div>
    </section>
  );
}