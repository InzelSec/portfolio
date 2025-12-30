import { Layout } from "@/components/Layout";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Net Listener",
    emoji: "🎧",
    description:
      "A Python implementation of a basic reverse shell listener, similar to a Netcat listener. The script listens for incoming reverse shell connections and provides an interactive command interface once a connection is established.\n\nBuilt to reinforce concepts related to reverse shells, command execution, and post-exploitation workflows in controlled environments.",
    link: "https://github.com/InzelSec/net-listener/blob/main/README.md",
  },
  {
    id: 2,
    title: "Port Scanner",
    emoji: "🔍",
    description:
      "A Python implementation of a simple port scanner, inspired by tools like Nmap. It supports scanning common ports, specific port lists, and port ranges, with configurable aggressiveness levels similar to Nmap's -T timing options.\n\nDesigned for learning and practical understanding of TCP port scanning behavior and network reconnaissance fundamentals.",
    link: "https://github.com/InzelSec/port-scanner/blob/main/README.md",
  },
  {
    id: 3,
    title: "ICMP Ping",
    emoji: "📡",
    description:
      "A Python implementation of the classic ping command built using raw sockets. The tool sends ICMP Echo Requests and displays detailed responses including sequence number (icmp_seq), time-to-live (ttl), and round-trip time (RTT) in milliseconds.",
    link: "https://github.com/InzelSec/icmp-ping/blob/main/README.md",
  },
  {
    id: 4,
    title: "Aurora",
    emoji: "🌅",
    description:
      "A desktop application designed to support professors in managing semester-long academic projects in higher education. The platform centralizes course organization, student grouping, grading, attendance tracking, and academic documentation in a single environment.",
    purpose:
      "To streamline the academic management of semester projects by providing professors and coordinators with structured tools for planning, evaluation, and collaboration, reducing manual processes and improving institutional oversight.",
    link: "https://github.com/laislemos801/Aurora/blob/main/README.md",
  },
  {
    id: 5,
    title: "StarFocus",
    emoji: "⭐",
    description:
      "An Android application designed to help children with ADHD organize their tasks using gamification techniques. Features include task management, reward systems, and progress tracking.",
    purpose:
      "University integrative project aimed at providing practical support for children with attention difficulties through an engaging mobile experience.",
    technologies: ["Android", "Kotlin", "Firebase", "Material Design"],
    link: "https://github.com/PI4-T1/StarFocus/blob/main/README.md",
  },
  {
    id: 6,
    title: "Orbs",
    emoji: "🪐",
    description:
      "A web application for personal finance organization targeted at young adults. Includes features for tracking goals, expenses, income, and provides AI-based financial recommendations.",
    purpose:
      "To help young adults develop better financial habits through intuitive tracking and intelligent insights.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API"],
    link: "https://github.com/Luyzao/Orbs-FrontEnd/blob/main/README.md",
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
                className="group block rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md"
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
                <p className="mb-4 whitespace-pre-line text-base leading-relaxed text-card-foreground">
                  {project.description}
                </p>

                {/* Purpose (if exists) */}
                {project.purpose && (
                  <div className="mb-4">
                    <h3 className="mb-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                      Purpose
                    </h3>
                    <p className="text-sm text-card-foreground">{project.purpose}</p>
                  </div>
                )}

                {/* Technologies (if exists) */}
                {project.technologies && project.technologies.length > 0 && (
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
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
