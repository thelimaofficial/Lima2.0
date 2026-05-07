import logo from "../../assets/images/logo1.svg";
import Button from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

export default function Hero() {
  return (
    <Section className="h-screen text-white overflow-hidden flex items-center !py-0 hero-section">

      {/* ANIMATED BACKGROUND */}
      <div className="glow-bg hero-glow">
        <div className="glow-layer glow-1"></div>
        <div className="glow-layer glow-2"></div>
        <div className="glow-layer glow-3"></div>
      </div>

      {/* HEADER */}
      <div className="absolute top-0 left-0 w-full p-10 lg:px-24 z-40 flex justify-between items-center hero-header">
        <img src={logo} alt="Lima Logo" className="h-12 md:h-16" />
        <Button variant="secondary" size="small">
          Get in touch
        </Button>
      </div>

      {/* CONTENT */}
      <Container className="relative z-10 hero-content">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          <h1 className="text-[40px] md:text-[70px] font-bold leading-[1.05] tracking-tighter mb-8 max-w-[1100px]">
            Helping companies build <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent whitespace-nowrap">digital products</span> that actually convert<span className="text-[#ff8700]">.</span>
          </h1>

          <p className="text-[17px] md:text-[22px] text-[#c1c1c1] mb-10 max-w-[700px] mx-auto leading-relaxed">
            Strategy, design and development combined to create fast,
            scalable and conversion-focused digital experiences.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button variant="primary" size="normal" href="#projects">
              View Projects
            </Button>

            <Button variant="secondary" size="normal">
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}