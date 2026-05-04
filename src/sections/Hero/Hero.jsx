import logo from "../../assets/images/logo1.svg";
import Button from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

export default function Hero() {
  return (
    <Section className="min-h-screen text-white overflow-hidden flex items-center py-24 md:py-32">

      {/* BACKGROUND ANIMADO */}
      <div className="glow-bg">
        <div className="glow-layer glow-1"></div>
        <div className="glow-layer glow-2"></div>
        <div className="glow-layer glow-3"></div>
      </div>

      {/* HEADER */}
      <div className="absolute top-0 left-0 w-full py-6 sm:py-8 z-40">
        <Container className="flex justify-between items-center">
          <img src={logo} alt="Lima Logo" className="h-8 sm:h-10 md:h-12 lg:h-14" />
          <Button variant="secondary" size="small" href="https://x.com/thelimaofficial" target="_blank" rel="noopener noreferrer">
            Get in touch
          </Button>
        </Container>
      </div>

      {/* CONTEÚDO */}
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-24 relative z-10 flex flex-col items-center text-center mt-16 sm:mt-0">

          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-bold leading-[1.1] tracking-tight mb-6 md:mb-8">
            Helping companies build <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent">digital products</span> that actually convert<span className="text-[#ff8700]">.</span>
          </h1>

          <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-[#c1c1c1] mb-10 max-w-[650px] leading-relaxed mx-auto">
            Strategy, design and development combined to create fast,<br className="hidden md:block" />
            scalable and conversion-focused digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4 sm:px-0">
            <Button variant="primary" size="normal" href="#projects">
              View Projects
            </Button>
            
            <Button variant="secondary" size="normal" href="https://x.com/thelimaofficial" target="_blank" rel="noopener noreferrer">
              Get in touch&nbsp;&nbsp;
            </Button>
          </div>
      </div>
    </Section>
  );
}