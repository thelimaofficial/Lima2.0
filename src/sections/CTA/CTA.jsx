import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

export default function CTA() {
  return (
    <Section className="bg-[#090909] min-h-screen flex items-center justify-center !py-0">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[36px] font-bold leading-[1.05] tracking-tight text-white sm:text-[52px] md:text-[64px] lg:text-[80px] xl:text-[96px]">I don't believe in generic solutions.</h2>

          <h2 className="text-[36px] font-bold leading-[1.05] tracking-tight text-white sm:text-[52px] md:text-[64px] lg:text-[80px] xl:text-[96px]">
            I build experiences that{" "}
            <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent">convert.</span>
          </h2>
        </div>
      </Container>
    </Section>
  );
}