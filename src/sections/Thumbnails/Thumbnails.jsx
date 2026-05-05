import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import img1 from "../../assets/images/carousel/1.webp";
import img2 from "../../assets/images/carousel/2.webp";
import img3 from "../../assets/images/carousel/3.webp";
import img4 from "../../assets/images/carousel/4.webp";
import img5 from "../../assets/images/carousel/5.webp";
import img6 from "../../assets/images/carousel/6.webp";
import img7 from "../../assets/images/carousel/7.webp";

const images = [img1, img2, img3, img4, img5, img6, img7];

gsap.registerPlugin(ScrollTrigger);

export default function Thumbnails({ id }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const imgRefs = useRef([]);

  useGSAP(() => {
    if (imgRefs.current.length === 0) return;

    // Estados Estritos
    const states = {
      farLeft:  { xPercent: -170, scale: 0.7,  opacity: 0,   filter: "blur(4px)", zIndex: -1 },
      left:     { xPercent: -110, scale: 0.85, opacity: 0.6, filter: "blur(2px)", zIndex: 0 },
      center:   { xPercent: -50,  scale: 1,    opacity: 1,   filter: "blur(0px)", zIndex: 10 },
      right:    { xPercent: 10,   scale: 0.85, opacity: 0.6, filter: "blur(2px)", zIndex: 0 },
      farRight: { xPercent: 70,   scale: 0.7,  opacity: 0,   filter: "blur(4px)", zIndex: -1 },
    };

    // Configuração do Estado Inicial
    images.forEach((_, i) => {
      const el = imgRefs.current[i];
      if (!el) return;

      gsap.set(el, { left: "50%", top: "50%", yPercent: -50, position: "absolute", force3D: true });

      if (i === 0) {
        gsap.set(el, states.center);
      } else if (i === 1) {
        gsap.set(el, states.right);
      } else {
        gsap.set(el, states.farRight);
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${images.length * 1000}`,
        scrub: 0.5,
        pin: true,
        fastScrollEnd: true,
      }
    });

    // Mapeamento Contínuo por Imagem (O "Trilho")
    // Em vez de misturar ordens, damos a cada imagem seu próprio trilho de animação do início ao fim.
    images.forEach((_, i) => {
      const el = imgRefs.current[i];
      if (!el) return;

      const TOTAL = images.length;
      const easeType = "power1.inOut";

      // Passo 1: Vem da Direita Extrema para a Direita (Começa no tempo i-2)
      if (i - 2 >= 0) {
        tl.fromTo(el, states.farRight, { ...states.right, duration: 1, ease: easeType, immediateRender: false }, i - 2);
      }
      
      // Passo 2: Vem da Direita para o Centro (Começa no tempo i-1)
      if (i - 1 >= 0) {
        tl.fromTo(el, states.right, { ...states.center, duration: 1, ease: easeType, immediateRender: false }, i - 1);
      }

      // Passo 3: Vai do Centro para a Esquerda (Começa no tempo i)
      if (i < TOTAL - 1) {
        tl.fromTo(el, states.center, { ...states.left, duration: 1, ease: easeType, immediateRender: false }, i);
      }

      // Passo 4: Vai da Esquerda para a Esquerda Extrema (Começa no tempo i+1)
      if (i + 1 < TOTAL - 1) {
        tl.fromTo(el, states.left, { ...states.farLeft, duration: 1, ease: easeType, immediateRender: false }, i + 1);
      }
    });

  }, { scope: sectionRef });

  return (
    <Section id={id} className="bg-[#090909] min-h-screen flex flex-col justify-center py-20 md:py-28 lg:py-32 overflow-hidden" ref={sectionRef}>
      <Container>
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
            Thumbnails
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">
            BUILT FOR <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent">CLICKS</span>
          </h3>
        </div>
      </Container>

      {/* GSAP Animated Dynamic Carousel */}
      <div ref={containerRef} className="relative flex justify-center items-center w-full mx-auto h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
        {images.map((src, index) => (
          <div 
            key={index} 
            ref={el => imgRefs.current[index] = el} 
            className="w-[70%] md:w-[45%] rounded-2xl md:rounded-[40px] shadow-2xl overflow-hidden"
            style={{ willChange: "transform, filter, opacity, z-index" }}
          >
            <img 
              src={src} 
              alt={`Thumbnail ${index + 1}`} 
              decoding="async"
              loading="lazy"
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
      </div>
    </Section>
  );
}