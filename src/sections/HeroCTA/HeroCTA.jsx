import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Hero from "../Hero/Hero";
import CTA from "../CTA/CTA";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCTA() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Pinar a Hero section para que ela fique fixa enquanto o CTA rola por cima
    ScrollTrigger.create({
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top", 
      pin: true,
      pinSpacing: false, // Permite que a próxima seção (CTA) passe por cima
    });

    // 2. Animar a saída da Hero sincronizada com a entrada do CTA
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cta-container",
        start: "top bottom", // Inicia quando o topo do CTA entra na tela
        end: "top top",      // Termina quando o topo do CTA chega no topo
        scrub: true,
      }
    });

    heroTl.to(".hero-content", { yPercent: -40, opacity: 0, duration: 1 }, 0);
    heroTl.to(".hero-header", { yPercent: -100, opacity: 0, duration: 0.5 }, 0);
    heroTl.to(".hero-glow", { opacity: 0.1, scale: 1.1, duration: 1 }, 0);

    // 3. Transição suave entre Hero e CTA: O CTA expande revelando o conteúdo
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

    // 4. Foco no CTA: as palavras surgem com um atraso suave durante o scroll
    // Removido o scrub para garantir que a animação termine independentemente da rolagem
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
          start: "top 60%", // Inicia quando o CTA estiver bem visível
          toggleActions: "play none none reverse", // Toca ao descer, reverte ao subir
        }
      }
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full">
      <Hero />
      <CTA />
    </div>
  );
}
