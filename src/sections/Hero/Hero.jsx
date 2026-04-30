import logo from "../../assets/images/logo1.svg";
import Button from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

export default function Hero() {
  return (
    <Section className="h-screen text-white overflow-hidden flex items-center !py-0">

      {/* BACKGROUND ANIMADO */}
      <div className="glow-bg">
        <div className="glow-layer glow-1"></div>
        <div className="glow-layer glow-2"></div>
        <div className="glow-layer glow-3"></div>
      </div>

      {/* HEADER */}
      <div className="absolute top-0 left-0 w-full p-10 lg:px-24 z-40 flex justify-between items-center">
        <img src={logo} alt="Lima Logo" className="h-10 md:h-14" />
        <Button variant="secondary" size="small">
          Get in touch
        </Button>
      </div>

      {/* CONTEÚDO */}
      <Container className="relative z-10 flex flex-col items-center text-center">

          <h1 className="text-xl md:text-[80px] font-bold leading-none tracking-tighter mb-8">
            Helping companies build <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent">digital products</span> that actually convert<span className="text-[#ff8700]">.</span>
          </h1>

          <p className="text-[17px] md:text-[20px] text-[#c1c1c1] mb-8 max-w-[650px]">
            Strategy, design and development combined to create fast,<br className="hidden md:block" />
            scalable and conversion-focused digital experiences.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Button variant="primary" size="normal">
              View Projects
            </Button>
            
            <Button variant="secondary" size="normal">
              Get in touch
            </Button>
          </div>
      </Container>
    </Section>
  );
}