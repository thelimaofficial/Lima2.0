import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

export default function CTA() {
  return (
    <Section className="bg-[#0f0f0f] min-h-screen flex items-center justify-center py-20 md:py-28 lg:py-32">
      <Container className="flex justify-center items-center">
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold leading-[1.2] tracking-tight text-white text-left">
          <span className="block">I don't believe in generic solutions.</span>
          <span className="block">I build experiences that convert.</span>
        </h2>
      </Container>
    </Section>
  );
}