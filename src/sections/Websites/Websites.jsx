import Container from "../../components/Container/Container";
import ProjectCard from "./ProjectCard";

import web1 from "../../assets/images/websites/web1.webp";
import web2 from "../../assets/images/websites/web2.webp";
import web3 from "../../assets/images/websites/web3.webp";

const projects = [
  {
    id: 1,
    image: web1,
  },
  {
    id: 2,
    image: web2,
  },
  {
    id: 3,
    image: web3,
  },
];

export default function Websites() {
  return (
    <section
      aria-label="Website projects"
      className="bg-[#090909] py-20 md:py-28 overflow-hidden"
    >
      {/* ========================= */}
      {/* HEADING */}
      {/* ========================= */}

      <Container>
        <div className="mb-16 max-w-[900px] md:mb-24">
          <h2 className="mb-2 text-3xl font-semibold text-white md:text-4xl">
            Websites
          </h2>

          <h3 className="text-4xl font-bold uppercase tracking-tight text-white md:text-6xl">
            BUILT TO{" "}

            <span className="bg-gradient-to-r from-[#F85300] to-[#FF8700] bg-clip-text text-transparent">
              CONVERT
            </span>
          </h3>
        </div>
      </Container>

      {/* ========================= */}
      {/* PROJECTS */}
      {/* ========================= */}

      <div className="space-y-20 md:space-y-28 lg:space-y-36">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}