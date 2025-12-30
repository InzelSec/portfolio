import { Layout } from "@/components/Layout";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "StarFocus",
    emoji: "⭐",
    description:
      "An Android application designed to help children with ADHD organize their tasks using gamification techniques. Features include task management, reward systems, and progress tracking.",
    purpose:
      "University integrative project aimed at providing practical support for children with attention difficulties through an engaging mobile experience.",
    technologies: ["Android", "Kotlin", "Firebase", "Material Design"],
    link: "https://github.com/alexinsel/starfocus",
  },
  {
    id: 2,
    title: "Orbs",
    emoji: "🪐",
    description:
      "A web application for personal finance organization targeted at young adults. Includes features for tracking goals, expenses, income, and provides AI-based financial recommendations.",
    purpose:
      "To help young adults develop better financial habits through intuitive tracking and intelligent insights.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API"],
    link: "https://github.com/alexinsel/orbs",
  },
];

const Projects = () => {
  return (
    <Layout>
      <div className="container-custom py-16">
        <div className="animate-fade-in">
          {/* Page Header */}
          <h1 className="mb-2 text-4xl font-bold text-foreground">Projects</h1>
          <p className="mb-12 text-lg text-muted-foreground">
            A collection of projects I've built and contributed to
          </p>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md"
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.emoji}</span>
                    <h2 className="text-2xl font-semibold text-card-foreground">
                      {project.title}
                    </h2>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-colors group-hover:text-foreground">
                    <Github className="h-5 w-5" />
                  </div>
                </div>

                {/* Description */}
                <p className="mb-4 text-base leading-relaxed text-card-foreground">
                  {project.description}
                </p>

                {/* Purpose */}
                <div className="mb-4">
                  <h3 className="mb-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Purpose
                  </h3>
                  <p className="text-sm text-card-foreground">{project.purpose}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
