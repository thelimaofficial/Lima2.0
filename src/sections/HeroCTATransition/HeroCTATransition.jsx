import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo from "../../assets/images/logo1.svg";

import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCTATransition() {
  const wrapperRef = useRef(null);

  // HERO
  const glowBgRef = useRef(null);
  const heroContentRef = useRef(null);

  // CTA
  const ctaRef = useRef(null);
  const ctaButtonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // INITIAL STATES

      gsap.set(heroContentRef.current, {
        y: 0,
        opacity: 1,
      });

      gsap.set(ctaRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.96,
        filter: "blur(8px)",
        force3D: true,
      });

      gsap.set(ctaButtonRef.current, {
        y: 30,
        opacity: 0,
      });

      // MASTER TIMELINE

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,

          start: "top top",

          end: `+=${window.innerHeight * 5}`,

          scrub: 1.2,

          pin: true,

          pinSpacing: true,

          invalidateOnRefresh: true,
        },
      });

      // HERO EXIT

      tl.to(
        heroContentRef.current,
        {
          y: -140,

          opacity: 0,

          ease: "power2.out",

          duration: 1.4,
        },
        0
      );

      // GLOW DIM

      tl.to(
        glowBgRef.current,
        {
          opacity: 0.18,

          ease: "power1.out",

          duration: 1.6,
        },
        0
      );

      // CTA ENTER

      tl.to(
        ctaRef.current,
        {
          y: 0,

          opacity: 1,

          scale: 1,

          filter: "blur(0px)",

          ease: "power3.out",

          duration: 1.6,
        },
        0.8
      );

      // CTA BUTTON

      tl.to(
        ctaButtonRef.current,
        {
          y: 0,

          opacity: 1,

          ease: "power3.out",

          duration: 1,
        },
        1.2
      );

      // HOLD PHASE

      tl.to({}, { duration: 2.5 });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative w-full bg-[#090909]"
    >
      <div className="relative h-screen overflow-hidden">
        {/* ========================= */}
        {/* GLOW BACKGROUND */}
        {/* ========================= */}

        <div
          ref={glowBgRef}
          className="glow-bg absolute inset-0"
        >
          <div className="glow-layer glow-1" />
          <div className="glow-layer glow-2" />
          <div className="glow-layer glow-3" />
        </div>

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <header className="absolute left-0 top-0 z-40 w-full py-6 sm:py-8">
          <Container className="flex items-center justify-between">
            <img
              src={logo}
              alt="Lima Logo"
              className="h-8 sm:h-10 md:h-12 lg:h-14"
            />

            <Button
              variant="secondary"
              size="small"
              href="https://x.com/thelimaofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </Button>
          </Container>
        </header>

        {/* ========================= */}
        {/* HERO CONTENT */}
        {/* ========================= */}

        <div
          ref={heroContentRef}
          className="
            absolute
            inset-0
            z-10
            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              mx-auto
              flex
              w-full
              max-w-[1400px]
              flex-col
              items-center
              px-6
              text-center
              sm:px-8
              md:px-12
              lg:px-24
            "
          >
            <h1
              className="
                mb-6
                text-[32px]
                font-bold
                leading-[1.05]
                tracking-tight
                text-white

                sm:text-[40px]

                md:mb-8
                md:text-[48px]

                lg:text-[64px]
              "
            >
              Helping companies build{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-[#F85300]
                  to-[#FF8700]
                  bg-clip-text
                  text-transparent
                "
              >
                digital products
              </span>

              {" "}that actually convert

              <span className="text-[#ff8700]">
                .
              </span>
            </h1>

            <p
              className="
                mx-auto
                mb-10
                max-w-[650px]
                text-[15px]
                leading-relaxed
                text-[#c1c1c1]

                sm:text-[16px]

                lg:text-[18px]
              "
            >
              Strategy, design and development combined
              to create fast, scalable and
              conversion-focused digital experiences.
            </p>

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-4

                sm:flex-row
                sm:gap-6
              "
            >
              <Button
                variant="primary"
                size="normal"
                href="#projects"
              >
                View Projects
              </Button>

              <Button
                variant="secondary"
                size="normal"
                href="https://x.com/thelimaofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* CTA */}
        {/* ========================= */}

        <div
          ref={ctaRef}
          className="
            absolute
            inset-0
            z-20
            flex
            items-center
            justify-center
          "
        >
          <Container>
            <div
              className="
                flex
                flex-col
                items-center
                text-center
              "
            >
              <h2
                className="
                  text-[36px]
                  font-bold
                  leading-[1.05]
                  tracking-tight
                  text-white

                  sm:text-[52px]

                  md:text-[64px]

                  lg:text-[80px]

                  xl:text-[96px]
                "
              >
                I don't believe in
                <br />
                generic solutions.
              </h2>

              <h2
                className="
                  text-[36px]
                  font-bold
                  leading-[1.05]
                  tracking-tight
                  text-white

                  sm:text-[52px]

                  md:text-[64px]

                  lg:text-[80px]

                  xl:text-[96px]
                "
              >
                I build experiences that{" "}

                <span
                  className="
                    bg-gradient-to-r
                    from-[#F85300]
                    to-[#FF8700]
                    bg-clip-text
                    text-transparent
                  "
                >
                  convert.
                </span>
              </h2>

              <div
                ref={ctaButtonRef}
                className="mt-10 sm:mt-12"
              >
                <Button
                  variant="primary"
                  size="normal"
                  href="#projects"
                >
                  View Projects
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}