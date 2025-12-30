import { Layout } from "@/components/Layout";
import { ExternalLink, Github, Star, Globe } from "lucide-react";

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
    links: {
      github: "https://github.com/alexinsel/starfocus",
    },
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
    links: {
      github: "https://github.com/alexinsel/orbs",
      live: "https://orbs.finance",
    },
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
              <article
                key={project.id}
                className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.emoji}</span>
                    <h2 className="text-2xl font-semibold text-card-foreground">
                      {project.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        aria-label="View live site"
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
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
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
