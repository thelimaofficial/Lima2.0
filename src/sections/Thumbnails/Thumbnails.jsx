import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

import img1 from "../../assets/images/carousel/1.webp";
import img2 from "../../assets/images/carousel/2.webp";
import img3 from "../../assets/images/carousel/3.webp";

export default function Thumbnails({ id }) {
  return (
    <Section id={id} className="bg-[#0f0f0f] py-20 md:py-28 lg:py-32 overflow-hidden">
      <Container>
        <div className="mb-16 md:mb-20">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold text-white mb-2 leading-tight">
            Thumbnails
          </h2>
          <h3 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold text-white uppercase leading-[1.1] tracking-tight">
            BUILT FOR <span className="text-[#FF8700]">CLICKS</span>
          </h3>
        </div>
      </Container>

      {/* Static mock for the future animated carousel - OUTSIDE Container */}
      <div className="relative flex justify-center items-center w-full mx-auto h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
        {/* Left Thumbnail */}
        <div className="absolute left-[-15%] md:left-[0%] w-[60%] md:w-[45%] z-0 opacity-60 blur-[2px] transform scale-75 md:scale-[0.85] transition-all duration-300">
          <img src={img1} alt="Thumbnail Left" className="w-full rounded-2xl md:rounded-[32px] shadow-xl object-cover" />
        </div>

        {/* Right Thumbnail */}
        <div className="absolute right-[-15%] md:right-[0%] w-[60%] md:w-[45%] z-0 opacity-60 blur-[2px] transform scale-75 md:scale-[0.85] transition-all duration-300">
          <img src={img3} alt="Thumbnail Right" className="w-full rounded-2xl md:rounded-[32px] shadow-xl object-cover" />
        </div>

        {/* Center Thumbnail */}
        <div className="relative z-10 w-[70%] md:w-[50%] shadow-[0_0_80px_rgba(0,0,0,0.8)] rounded-2xl md:rounded-[40px] overflow-hidden transition-all duration-300 transform scale-100 md:scale-105">
          <img src={img2} alt="Thumbnail Center" className="w-full h-auto object-cover relative z-10" />
        </div>
      </div>
    </Section>
  );
}