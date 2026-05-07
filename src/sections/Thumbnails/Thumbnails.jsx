import { useRef } from "react";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
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

    const TOTAL = images.length;
    const easeType = "power1.inOut";

    images.forEach((_, i) => {
      const el = imgRefs.current[i];
      if (!el) return;

      // Reseta qualquer transição residual
      gsap.set(el, { x: 0 });

      // Utiliza sub-timelines contínuas com .fromTo() para garantir estados iniciais absolutos,
      // evitando sobreposições de interpolação e desvios visuais durante o scrub do scroll.
      const tlImg = gsap.timeline();

      // Define estado inicial com base na posição da imagem
      let currentState = states.farRight;
      if (i === 0) currentState = states.center;
      if (i === 1) currentState = states.right;
      
      // Fase de espera à direita (0 a i-2)
      if (i > 2) {
        tlImg.fromTo(el, currentState, { ...states.farRight, duration: i - 2, ease: "none" });
        currentState = states.farRight;
      } else if (i === 2) {
        currentState = states.farRight;
      }

      // Transição: farRight -> right (i-2 a i-1)
      if (i > 1) {
        tlImg.fromTo(el, currentState, { ...states.right, duration: 1, ease: easeType });
        currentState = states.right;
      }

      // Transição: right -> center (i-1 a i)
      if (i > 0) {
        tlImg.fromTo(el, currentState, { ...states.center, duration: 1, ease: easeType });
        currentState = states.center;
      }

      // Transição: center -> left (i a i+1)
      if (i < TOTAL - 1) {
        tlImg.fromTo(el, currentState, { ...states.left, duration: 1, ease: easeType });
        currentState = states.left;
      }

      // Transição: left -> farLeft (i+1 a i+2)
      if (i < TOTAL - 2) {
        tlImg.fromTo(el, currentState, { ...states.farLeft, duration: 1, ease: easeType });
        currentState = states.farLeft;
      }

      // Fase de espera à esquerda (i+2 até o fim)
      if (i < TOTAL - 3) {
         const remaining = (TOTAL - 1) - (i + 2);
         tlImg.fromTo(el, currentState, { ...states.farLeft, duration: remaining, ease: "none" });
      }

      tl.add(tlImg, 0);
    });

    // Assegura a duração total exata da master timeline
    tl.to({}, { duration: 0.001 }, TOTAL - 1);

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