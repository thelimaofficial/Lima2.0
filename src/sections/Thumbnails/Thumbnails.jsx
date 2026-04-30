import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

import img1 from "../../assets/images/carousel/1.webp";
import img2 from "../../assets/images/carousel/2.webp";
import img3 from "../../assets/images/carousel/3.webp";

export default function Thumbnails({ id }) {
  return (
    <Section id={id} className="bg-[#0f0f0f] py-24 md:py-32 overflow-hidden">
      <div className="w-full px-4 md:px-10 lg:px-16 xl:px-24 mx-auto max-w-[1800px]">
        <div className="mb-16 md:mb-20">
          <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-1 leading-tight">
            Thumbnails
          </h2>
          <h3 className="text-[40px] sm:text-[52px] md:text-[64px] font-bold text-white uppercase leading-[1.1] tracking-tight">
            BUILT FOR <span className="text-[#FF8700]">CLICKS</span>
          </h3>
        </div>

        {/* Static mock for the future animated carousel */}
        <div className="relative flex justify-center items-center w-full mx-auto h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
          {/* Left Thumbnail */}
          <div className="absolute left-[-5%] sm:left-[-2%] md:left-[2%] w-[55%] md:w-[40%] z-0 brightness-50 transform scale-[0.85] transition-all duration-300">
            <img src={img1} alt="Thumbnail Left" className="w-full rounded-2xl md:rounded-[32px] shadow-xl object-cover" />
          </div>

          {/* Right Thumbnail */}
          <div className="absolute right-[-5%] sm:right-[-2%] md:right-[2%] w-[55%] md:w-[40%] z-0 brightness-50 transform scale-[0.85] transition-all duration-300">
            <img src={img3} alt="Thumbnail Right" className="w-full rounded-2xl md:rounded-[32px] shadow-xl object-cover" />
          </div>

          {/* Center Thumbnail */}
          <div className="relative z-10 w-[65%] md:w-[45%] shadow-[0_0_80px_rgba(0,0,0,0.6)] rounded-2xl md:rounded-[40px] overflow-hidden transition-all duration-300 transform scale-105">
            <img src={img2} alt="Thumbnail Center" className="w-full h-auto object-cover relative z-10" />
          </div>
        </div>
      </div>
    </Section>
  );
}