import { Layout } from "@/components/Layout";
import { useLanguage } from "@/components/LanguageProvider";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Net Listener",
    description:
      "A Python implementation of a basic reverse shell listener, similar to a Netcat listener. The script listens for incoming reverse shell connections and provides an interactive command interface once a connection is established.\n\nBuilt to reinforce concepts related to reverse shells, command execution, and post-exploitation workflows in controlled environments.",
    descriptionPt:
      "Uma implementação em Python de um listener básico de reverse shell, similar ao Netcat. O script escuta conexões de reverse shell e fornece uma interface de comando interativa após a conexão ser estabelecida.\n\nConstruído para reforçar conceitos relacionados a reverse shells, execução de comandos e fluxos de pós-exploração em ambientes controlados.",
    technologies: ["Python"],
    link: "https://github.com/InzelSec/net-listener/blob/main/README.md",
  },
  {
    id: 2,
    title: "Port Scanner",
    description:
      "A Python implementation of a simple port scanner, inspired by tools like Nmap. It supports scanning common ports, specific port lists, and port ranges, with configurable aggressiveness levels similar to Nmap's -T timing options.\n\nDesigned for learning and practical understanding of TCP port scanning behavior and network reconnaissance fundamentals.",
    descriptionPt:
      "Uma implementação em Python de um scanner de portas simples, inspirado em ferramentas como Nmap. Suporta escaneamento de portas comuns, listas específicas e intervalos de portas, com níveis de agressividade configuráveis similares às opções de timing -T do Nmap.\n\nProjetado para aprendizado e compreensão prática do comportamento de escaneamento de portas TCP e fundamentos de reconhecimento de rede.",
    technologies: ["Python"],
    link: "https://github.com/InzelSec/port-scanner/blob/main/README.md",
  },
  {
    id: 3,
    title: "ICMP Ping",
    description:
      "A Python implementation of the classic ping command built using raw sockets. The tool sends ICMP Echo Requests and displays detailed responses including sequence number (icmp_seq), time-to-live (ttl), and round-trip time (RTT) in milliseconds.",
    descriptionPt:
      "Uma implementação em Python do comando ping clássico construído usando raw sockets. A ferramenta envia ICMP Echo Requests e exibe respostas detalhadas incluindo número de sequência (icmp_seq), time-to-live (ttl) e tempo de ida e volta (RTT) em milissegundos.",
    technologies: ["Python"],
    link: "https://github.com/InzelSec/icmp-ping/blob/main/README.md",
  },
  {
    id: 4,
    title: "Aurora",
    description:
      "A desktop application designed to support professors in managing semester-long academic projects in higher education. The platform centralizes course organization, student grouping, grading, attendance tracking, and academic documentation in a single environment.",
    descriptionPt:
      "Uma aplicação desktop projetada para apoiar professores na gestão de projetos acadêmicos semestrais no ensino superior. A plataforma centraliza organização de cursos, agrupamento de alunos, notas, controle de presença e documentação acadêmica em um único ambiente.",
    purpose:
      "To streamline the academic management of semester projects by providing professors and coordinators with structured tools for planning, evaluation, and collaboration, reducing manual processes and improving institutional oversight.",
    purposePt:
      "Otimizar a gestão acadêmica de projetos semestrais fornecendo a professores e coordenadores ferramentas estruturadas para planejamento, avaliação e colaboração, reduzindo processos manuais e melhorando a supervisão institucional.",
    link: "https://github.com/laislemos801/Aurora/blob/main/README.md",
  },
  {
    id: 5,
    title: "StarFocus",
    description:
      "An Android application designed to help children with ADHD organize their tasks using gamification techniques. Features include task management, reward systems, and progress tracking.",
    descriptionPt:
      "Uma aplicação Android projetada para ajudar crianças com TDAH a organizar suas tarefas usando técnicas de gamificação. Inclui gerenciamento de tarefas, sistemas de recompensa e acompanhamento de progresso.",
    purpose:
      "University integrative project aimed at providing practical support for children with attention difficulties through an engaging mobile experience.",
    purposePt:
      "Projeto integrador universitário voltado para fornecer suporte prático a crianças com dificuldades de atenção através de uma experiência mobile envolvente.",
    technologies: ["Android", "Kotlin", "Firebase", "Material Design"],
    link: "https://github.com/PI4-T1/StarFocus/blob/main/README.md",
  },
  {
    id: 6,
    title: "Orbs",
    description:
      "A web application for personal finance organization targeted at young adults. Includes features for tracking goals, expenses, income, and provides AI-based financial recommendations.",
    descriptionPt:
      "Uma aplicação web para organização de finanças pessoais voltada para jovens adultos. Inclui recursos para acompanhamento de metas, despesas, receitas e fornece recomendações financeiras baseadas em IA.",
    purpose:
      "To help young adults develop better financial habits through intuitive tracking and intelligent insights.",
    purposePt:
      "Ajudar jovens adultos a desenvolver melhores hábitos financeiros através de acompanhamento intuitivo e insights inteligentes.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API"],
    link: "https://github.com/Luyzao/Orbs-FrontEnd/blob/main/README.md",
  },
];

const Projects = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <div className="container-custom py-16">
        <div className="animate-fade-in">
          {/* Page Header */}
          <div className="mb-12 flex items-center justify-between">
            <h1 className="text-4xl font-bold text-foreground">{t.projects.title}</h1>
            <a
              href="https://github.com/inzelsec"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border-2 border-primary/60 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>

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
                  <h2 className="text-2xl font-semibold text-card-foreground">
                    {project.title}
                  </h2>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-colors group-hover:text-foreground">
                    <Github className="h-5 w-5" />
                  </div>
                </div>

                {/* Description */}
                <p className="mb-4 whitespace-pre-line text-base leading-relaxed text-card-foreground">
                  {language === "pt" && project.descriptionPt ? project.descriptionPt : project.description}
                </p>

                {/* Purpose (if exists) */}
                {project.purpose && (
                  <div className="mb-4">
                    <h3 className="mb-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                      {t.projects.purpose}
                    </h3>
                    <p className="text-sm text-card-foreground">
                      {language === "pt" && project.purposePt ? project.purposePt : project.purpose}
                    </p>
                  </div>
                )}

                {/* Technologies (if exists) */}
                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                      {t.projects.technologies}
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
