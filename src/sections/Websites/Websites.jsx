import ProjectCard from "./ProjectCard";
import Container from "../../components/Container/Container";
import web1 from "../../assets/images/websites/web1.webp";
import web2 from "../../assets/images/websites/web2.webp";
import web3 from "../../assets/images/websites/web3.webp";

export default function Websites() {
  const projects = [
    { id: 1, image: web1, alt: "MidiaScreen Website Project" },
    { id: 2, image: web2, alt: "The Lima Digital Products Project" },
    { id: 3, image: web3, alt: "Alwer Digital Experiences Project" },
  ];

  return (
    <section className="py-24 bg-[#090909] relative z-10 w-full" id="websites">
      <Container className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
          Websites
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">
          BUILT TO <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent">CONVERT</span>
        </h3>
      </Container>
      
      <div className="flex flex-col items-center w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} image={project.image} alt={project.alt} />
        ))}
      </div>
    </section>
  );
}
