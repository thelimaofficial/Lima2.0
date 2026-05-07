import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

export default function CTA() {
  const line1 = "I don't believe in generic solutions.".split(" ");
  const line2 = "I build experiences that".split(" ");

  return (
    <Section className="bg-[#090909] min-h-screen flex items-center justify-center !py-0 cta-container relative z-10">
      <Container>
        <div className="flex flex-col items-center text-center w-full px-4 md:px-12">
          <h2 className="text-[32px] font-bold leading-[1.05] tracking-tight text-white sm:text-[48px] md:text-[56px] lg:text-[72px] xl:text-[88px] 2xl:text-[96px] mb-2 md:mb-4 w-full">
            {line1.map((word, i) => (
              <span key={i} className="overflow-hidden inline-block align-bottom pb-1">
                <span className="cta-word inline-block">{word}</span>
              </span>
            )).reduce((prev, curr) => [prev, " ", curr])}
          </h2>

          <h2 className="text-[32px] font-bold leading-[1.05] tracking-tight text-white sm:text-[48px] md:text-[56px] lg:text-[72px] xl:text-[88px] 2xl:text-[96px] w-full">
            {line2.map((word, i) => (
              <span key={i} className="overflow-hidden inline-block align-bottom pb-1">
                <span className="cta-word inline-block">{word}</span>
              </span>
            )).reduce((prev, curr) => [prev, " ", curr])}
            {" "}
            <span className="overflow-hidden inline-block align-bottom pb-1">
              <span className="cta-word inline-block bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent">
                convert.
              </span>
            </span>
          </h2>
        </div>
      </Container>
    </Section>
  );
}