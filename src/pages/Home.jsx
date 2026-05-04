import Hero from "../sections/Hero/Hero";
import CTA from "../sections/CTA/CTA";
import Thumbnails from "../sections/Thumbnails/Thumbnails";
import Websites from "../sections/Websites/Websites";
import About from "../sections/About/About";
import Footer from "../sections/Footer/Footer";


export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Hero />
      <CTA />
      <Thumbnails id="projects"/>
      <Websites />
      <About />
      <Footer />
    </main>
  );
}