import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

import logo from "../../assets/images/logo1.svg";

import xIcon from "../../assets/images/icons/x.webp";
import instagramIcon from "../../assets/images/icons/instagram.webp";
import linkedinIcon from "../../assets/images/icons/linkedin.webp";
import githubIcon from "../../assets/images/icons/github.webp";
import behanceIcon from "../../assets/images/icons/behance.webp";

import emailIcon from "../../assets/images/icons/email.webp";
import wppIcon from "../../assets/images/icons/wpp.webp";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    quote: "Very good designer and a pleasure to work with :)",
    name: "Motivation Mentors",
    role: "YouTuber",
    avatar: "MM",
  },
  {
    id: 2,
    quote:
      "The Lima is great to work with. Quick with communication and fast turnaround with the thumbnail design.",
    name: "The Adventure Crews",
    role: "YouTuber",
    avatar: "AC",
  },
  {
    id: 3,
    quote:
      "Listened to every detail and executed it perfectly, highly recommend.",
    name: "Vinxent",
    role: "YouTuber",
    avatar: "VI",
  },
  {
    id: 4,
    quote:
      "Professionalism from start to finish. The website he created for our company greatly boosted our credibility.",
    name: "MídiaScreen",
    role: "Empresa de Suporte Técnico",
    avatar: "MS",
  },
];

const stackConfig = [
  { rotation: -7, x: -55, y: 35, zIndex: 1 },
  { rotation: 4.5, x: 45, y: -30, zIndex: 2 },
  { rotation: -2.5, x: -20, y: 12, zIndex: 3 },
  { rotation: 1.5, x: 18, y: -12, zIndex: 4 },
];

export default function FeedbacksFooterSection({ id }) {
  const wrapperRef = useRef(null);

  const headingRef = useRef(null);
  const cardsAreaRef = useRef(null);

  const cardsRef = useRef([]);

  const footerRef = useRef(null);
  const footerGlowRef = useRef(null);
  const footerTopRef = useRef(null);
  const footerLogoRef = useRef(null);
  const footerCtaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      // =========================
      // INITIAL STATES
      // =========================

      cards.forEach((card, i) => {
        const cfg = stackConfig[i] || {
          rotation: 0,
          x: 0,
          y: 0,
          zIndex: i,
        };

        gsap.set(card, {
          y: window.innerHeight * 1.1,
          x: cfg.x * 0.2,
          rotation: cfg.rotation * 0.4,
          opacity: 0,
          zIndex: cfg.zIndex,
          force3D: true,
        });
      });

      gsap.set(footerRef.current, {
        y: 80,
        opacity: 0,
      });

      gsap.set(footerGlowRef.current, {
        opacity: 0,
        scale: 0.94,
      });

      gsap.set(
        [
          footerTopRef.current,
          footerLogoRef.current,
          footerCtaRef.current,
        ],
        {
          y: 40,
          opacity: 0,
        }
      );

      // =========================
      // TIMELINE
      // =========================

      const cardStep = 1;
      const cardEntry = 0.8;

      const transitionStart =
        testimonials.length * cardStep + 0.5;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${window.innerHeight * 4}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });

      // =========================
      // CARDS STACK
      // =========================

      cards.forEach((card, i) => {
        const cfg = stackConfig[i];

        tl.to(
          card,
          {
            y: cfg.y,
            x: cfg.x,
            rotation: cfg.rotation,
            opacity: 1,
            ease: "power3.out",
            duration: cardEntry,
          },
          i * cardStep
        );
      });

      // =========================
      // EXIT FEEDBACKS
      // =========================

      tl.to(
        [headingRef.current, cardsAreaRef.current],
        {
          y: -120,
          opacity: 0,
          ease: "power2.inOut",
          duration: 0.9,
        },
        transitionStart
      );

      // =========================
      // FOOTER ENTER
      // =========================

      tl.to(
        footerRef.current,
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
        },
        transitionStart + 0.15
      );

      tl.to(
        footerGlowRef.current,
        {
          opacity: 1,
          scale: 1,
          ease: "power1.out",
          duration: 1,
        },
        transitionStart + 0.2
      );

      tl.to(
        [
          footerTopRef.current,
          footerLogoRef.current,
          footerCtaRef.current,
        ],
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          ease: "power3.out",
          duration: 0.8,
        },
        transitionStart + 0.35
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id={id}
      ref={wrapperRef}
      className="w-full bg-[#090909]"
    >
      <div className="relative flex h-screen w-full flex-col overflow-hidden">
        {/* ========================= */}
        {/* HEADING */}
        {/* ========================= */}

        <div
          ref={headingRef}
          className="relative z-10 shrink-0 pt-12"
        >
          <Container>
            <h2 className="mb-2 text-3xl font-semibold text-white md:text-4xl">
              Feedbacks
            </h2>

            <h3 className="text-4xl font-bold uppercase tracking-tight text-white md:text-6xl">
              WHAT CLIENTS{" "}
              <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent">
                SAY.
              </span>
            </h3>
          </Container>
        </div>

        {/* ========================= */}
        {/* CARDS AREA */}
        {/* ========================= */}

        <div
          ref={cardsAreaRef}
          className="relative flex flex-1 items-center justify-center"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="absolute w-[clamp(300px,48vw,560px)] rounded-[24px] border border-white/10 bg-gradient-to-br from-[#1c1c1c] to-[#131313] p-[clamp(28px,3.5vw,44px)] shadow-[0_24px_64px_rgba(0,0,0,0.6)]"
            >
              {/* QUOTE ICON */}

              <svg
                width="30"
                height="23"
                viewBox="0 0 36 28"
                fill="none"
                className="mb-[18px]"
              >
                <path
                  d="M0 28V17.6C0 14.4.667 11.467 2 8.8 3.333 6.133 5.133 3.933 7.4 2.2 9.667.467 12.267-.267 15.2.067L14 4.4C11.733 4.133 9.8 4.867 8.2 6.6 6.6 8.267 5.8 10.333 5.8 12.8H11.8V28H0ZM20.2 28V17.6C20.2 14.4 20.867 11.467 22.2 8.8 23.533 6.133 25.333 3.933 27.6 2.2 29.867.467 32.467-.267 35.4.067L34.2 4.4C31.933 4.133 30 4.867 28.4 6.6 26.8 8.267 26 10.333 26 12.8H32V28H20.2Z"
                  fill="#ff6a00"
                  fillOpacity="0.65"
                />
              </svg>

              {/* TEXT */}

              <p className="mb-7 text-[clamp(15px,1.6vw,19px)] leading-[1.7] text-[#e2e2e2]">
                {t.quote}
              </p>

              {/* DIVIDER */}

              <div className="mb-6 h-px bg-gradient-to-r from-[#ff6a0050] to-white/5" />

              {/* USER */}

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F85300] to-[#FF8700] text-xs font-bold tracking-wider text-white shadow-[0_0_18px_rgba(255,106,0,0.4)]">
                  {t.avatar}
                </div>

                <div>
                  <p className="mb-1 text-sm font-semibold text-white">
                    {t.name}
                  </p>

                  <p className="text-xs text-[#6f6f6f]">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================= */}
        {/* FOOTER */}
        {/* ========================= */}

        <footer
          ref={footerRef}
          className="absolute inset-0 z-20 flex flex-col overflow-hidden px-0 py-10"
        >
          {/* GLOW */}

          <div
            ref={footerGlowRef}
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          >
            <div className="glow-layer glow-1 opacity-60" />
            <div className="glow-layer glow-2 opacity-60" />
            <div className="glow-layer glow-3 opacity-60" />
          </div>

          <Container className="relative z-10 flex flex-grow flex-col justify-between">
            {/* TOP */}

            <div
              ref={footerTopRef}
              className="flex flex-col items-start justify-between gap-8 xl:flex-row xl:items-center xl:gap-0"
            >
              {/* SOCIALS */}

              <div className="flex items-center gap-4">
                {[
                  {
                    href: "https://x.com/thelimaofficial",
                    src: xIcon,
                    alt: "X",
                  },
                  {
                    href: "#",
                    src: instagramIcon,
                    alt: "Instagram",
                  },
                  {
                    href: "#",
                    src: linkedinIcon,
                    alt: "LinkedIn",
                  },
                  {
                    href: "#",
                    src: githubIcon,
                    alt: "GitHub",
                  },
                  {
                    href: "#",
                    src: behanceIcon,
                    alt: "Behance",
                  },
                ].map(({ href, src, alt }) => (
                  <a
                    key={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80"
                  >
                    <img
                      src={src}
                      alt={alt}
                      className="h-10 w-10 object-contain"
                    />
                  </a>
                ))}
              </div>

              {/* CONTACT */}

              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center lg:gap-10">
                <a
                  href="mailto:thelimart@outlook.com"
                  className="flex items-center gap-3 text-lg text-[#c1c1c1] transition-colors hover:text-white"
                >
                  <img
                    src={emailIcon}
                    alt="Email"
                    className="h-10 w-10 object-contain"
                  />

                  <span>thelimart@outlook.com</span>
                </a>

                <a
                  href="https://wa.me/5511963815913"
                  className="flex items-center gap-3 text-lg text-[#c1c1c1] transition-colors hover:text-white"
                >
                  <img
                    src={wppIcon}
                    alt="WhatsApp"
                    className="h-10 w-10 object-contain"
                  />

                  <span>+55 (11) 96381-5913</span>
                </a>
              </div>
            </div>

            {/* BOTTOM */}

            <div className="mt-auto flex flex-col items-end justify-between gap-10 pt-12 lg:flex-row lg:gap-0">
              {/* LOGO */}

              <div
                ref={footerLogoRef}
                className="order-2 flex flex-col items-center lg:order-1 lg:items-start"
              >
                <img
                  src={logo}
                  alt="Lima Logo"
                  className="mb-4 h-20 origin-center object-contain sm:h-28 lg:h-32 lg:origin-left"
                />

                <div className="text-center text-sm text-[#888] lg:text-left">
                  © 2026 Lima. All rights reserved.
                </div>
              </div>

              {/* CTA */}

              <div
                ref={footerCtaRef}
                className="order-1 flex w-full flex-col items-center text-center lg:order-2 lg:w-auto lg:items-end lg:text-right"
              >
                <h2 className="mb-8 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[68px]">
                  Let's build something
                  <br />
                  that actually{" "}
                  <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent">
                    converts.
                  </span>
                </h2>

                <div className="mb-6 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:gap-6 lg:justify-end">
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

                <div className="text-sm text-[#888]">
                  <a
                    href="#"
                    className="transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </a>

                  {" • "}Developed by{" "}

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white transition-opacity hover:opacity-80"
                  >
                    Alwer
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </section>
  );
}