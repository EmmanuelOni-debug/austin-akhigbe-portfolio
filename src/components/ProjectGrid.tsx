import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Dashboards built to be used."
          description="A small set of Power BI projects — each one a full build from raw data to finished report."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-12 md:gap-x-8 md:gap-y-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
