import { useRef, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

import aboutImg from "../../assets/images/About.webp";

gsap.registerPlugin(ScrollTrigger);

export default function About({ id }) {
  const sectionRef = useRef(null);

  const contentRef = useRef(null);

  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // INITIAL STATES

      gsap.set(contentRef.current, {
        y: 0,
        opacity: 1,
      });

      // FLOATING IMAGE

      gsap.to(imageRef.current, {
        y: -18,

        duration: 2.5,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",
      });

      // SECTION EXIT

      gsap.to(contentRef.current, {
        y: -80,

        opacity: 0,

        ease: "power2.out",

        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top 15%",

          end: "bottom top",

          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      id={id}
      ref={sectionRef}
      className="bg-[#090909] py-20 md:py-28 lg:py-32"
    >
      <Container>
        <div
          ref={contentRef}
          className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12"
        >
          {/* LEFT */}

          <div className="flex w-full justify-center lg:w-[45%]">
            <div
              ref={imageRef}
              className="relative aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-[2rem]"
            >
              <img
                src={aboutImg}
                alt="Lima - Designer and Developer"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex w-full max-w-2xl flex-col items-start text-left lg:w-[55%]">
            <h2 className="mb-2 text-3xl font-semibold text-white md:text-4xl">
              About me
            </h2>

            <h3 className="mb-8 text-4xl font-bold uppercase tracking-tight text-white md:text-6xl">
              I DESIGN AND BUILD
              <br />

              <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent">
                DIGITAL PRODUCTS
              </span>

              <br />

              THAT CONVERT

              <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent">
                .
              </span>
            </h3>

            <div className="max-w-[550px] space-y-6 text-[16px] leading-relaxed text-[#c1c1c1] md:text-[18px]">
              <p>
                I'm Lima, a designer and developer focused on
                creating high-performing digital experiences.
                I combine strategy, design and code to build
                products that are not only beautiful, but
                functional.
              </p>

              <p>
                I don't separate design from development.
                I use both to create faster, more effective
                solutions that deliver real results.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}