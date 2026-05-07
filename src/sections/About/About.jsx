
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import aboutImg from "../../assets/images/About.webp";
import { motion } from "motion/react";

export default function About({ id }) {
  return (
    <Section id={id} className="bg-[#090909] py-20 md:py-28 lg:py-32 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">

          {/* Left Column: Image */}
          <motion.div
            className="w-full lg:w-[45%] flex justify-center lg:justify-mid"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-15%" }}
          >
            <motion.div
              className="relative w-full max-w-[480px] aspect-[4/5] rounded-[2rem] overflow-hidden"
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            >
              <img
                src={aboutImg}
                alt="Lima - Designer and Developer"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            className="w-full lg:w-[55%] flex flex-col items-start text-left max-w-2xl"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true, margin: "-15%" }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
              About me
            </h2>

            <h3 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-8">
              I DESIGN AND BUILD<br />
              <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent">DIGITAL PRODUCTS</span><br />
              THAT CONVERT<span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent">.</span>
            </h3>

            <div className="text-[16px] md:text-[18px] text-[#c1c1c1] leading-relaxed space-y-6 max-w-[550px]">
              <p>
                I'm Lima, a designer and developer focused on creating high-performing digital experiences. I combine strategy, design and code to build products that are not only beautiful, but functional.
              </p>
              <p>
                I don't separate design from development I use both to create faster, more effective solutions that deliver real results.
              </p>
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
