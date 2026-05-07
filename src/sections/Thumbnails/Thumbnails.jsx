import Container from "../../components/Container/Container";
import { useRef } from "react";
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

    // Strict States with 3D Effect (Coverflow + Arc)
    const states = {
      farLeft:  { xPercent: -160, yPercent: -35, scale: 0.65, opacity: 0,   filter: "blur(6px)", rotationY: 35,  rotationZ: -4, zIndex: -1 },
      left:     { xPercent: -105, yPercent: -42, scale: 0.8,  opacity: 0.5, filter: "blur(2px)", rotationY: 20,  rotationZ: -2, zIndex: 0 },
      center:   { xPercent: -50,  yPercent: -50, scale: 1,    opacity: 1,   filter: "blur(0px)", rotationY: 0,   rotationZ: 0,  zIndex: 10 },
      right:    { xPercent: 5,    yPercent: -42, scale: 0.8,  opacity: 0.5, filter: "blur(2px)", rotationY: -20, rotationZ: 2,  zIndex: 0 },
      farRight: { xPercent: 60,   yPercent: -35, scale: 0.65, opacity: 0,   filter: "blur(6px)", rotationY: -35, rotationZ: 4,  zIndex: -1 },
    };

    const hiddenLeft = { ...states.farLeft, xPercent: -215, opacity: 0, filter: "blur(10px)" };
    const hiddenRight = { ...states.farRight, xPercent: 115, opacity: 0, filter: "blur(10px)" };

    const TOTAL = images.length;
    
    // Builds the complete track of positions based on number of images
    const track = new Array(TOTAL);
    for (let j = 0; j < TOTAL; j++) {
      if (j === 3) track[j] = states.center;
      else if (j === 2) track[j] = states.left;
      else if (j === 1) track[j] = states.farLeft;
      else if (j === 4) track[j] = states.right;
      else if (j === 5) track[j] = states.farRight;
      else if (j < 1) track[j] = hiddenLeft;
      else if (j > 5) track[j] = hiddenRight;
    }

    // Initial State Setup
    images.forEach((_, i) => {
      const el = imgRefs.current[i];
      if (!el) return;

      gsap.set(el, { left: "50%", top: "50%", yPercent: -50, position: "absolute", force3D: true, transformOrigin: "center center" });

      const startPos = ((i + 3) % TOTAL + TOTAL) % TOTAL;
      gsap.set(el, track[startPos]);
    });

    const LOOPS = 1; // How many times the images will spin completely
    const totalSteps = TOTAL * LOOPS;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalSteps * 650}`, // Proportionally increases scroll duration
        scrub: 0.5,
        pin: true,
        fastScrollEnd: true,
      }
    });

    // Continuous and Infinite Mapping
    for (let step = 1; step <= totalSteps; step++) {
      images.forEach((_, i) => {
        const el = imgRefs.current[i];
        if (!el) return;

        const prevPos = ((i + 3 - (step - 1)) % TOTAL + TOTAL) % TOTAL;
        const newPos = ((i + 3 - step) % TOTAL + TOTAL) % TOTAL;

        // If image reached invisible left edge, teleport it to the right edge
        if (prevPos === 0 && newPos === TOTAL - 1) {
          tl.set(el, track[newPos], step - 1);
        } else {
          tl.fromTo(el, { ...track[prevPos] }, { ...track[newPos], duration: 1, ease: "power1.inOut" }, step - 1);
        }
      });
    }

  }, { scope: sectionRef });

  return (
    <section id={id} className="w-full bg-[#090909]" ref={sectionRef}>
      <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden">
        {/* HEADING */}
        
        <div className="relative z-10 shrink-0 pt-12">
          <Container>
            <h2 className="mb-2 text-3xl font-semibold text-white md:text-4xl">
              Thumbnails
            </h2>
            <h3 className="text-4xl font-bold uppercase tracking-tight text-white md:text-6xl">
              BUILT FOR <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent">CLICKS</span>
            </h3>
          </Container>
        </div>

        {/* CAROUSEL AREA */}

        <div className="relative flex flex-1 items-center justify-center">
          {/* GSAP Animated Dynamic Carousel */}
          <div ref={containerRef} className="relative flex justify-center items-center w-full mx-auto h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px]" style={{ perspective: "1200px" }}>
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
        </div>
      </div>
    </section>
  );
}