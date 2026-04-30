import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

export default function CTA() {
  return (
    <Section className="bg-black min-h-screen flex items-center justify-center !py-0">
      <Container className="flex justify-center items-center">
        <h2 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-bold leading-[1.2] tracking-tight text-white text-left">
          <span className="block">I don't believe in generic solutions.</span>
          <span className="block">I build experiences that convert.</span>
        </h2>
      </Container>
    </Section>
  );
}