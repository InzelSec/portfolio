import { Layout } from "@/components/Layout";
import { Linkedin, Github, Mail, Youtube } from "lucide-react";

const contactLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alex-c-insel-9674b0288/",
    icon: Linkedin,
    description: "Connect professionally",
  },
  {
    name: "GitHub",
    href: "https://github.com/inzelsec",
    icon: Github,
    description: "Explore my repositories",
  },
  {
    name: "Medium",
    href: "https://medium.com/@inzelsec",
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
    description: "Read my articles",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@inzelsec",
    icon: Youtube,
    description: "Watch my content",
  },
  {
    name: "Email",
    href: "mailto:contact@inzelsec.com",
    icon: Mail,
    description: "Get in touch",
  },
];

const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Advanced-Fluent" },
  { name: "Spanish", level: "Intermediate" },
  { name: "German", level: "Basic-Intermediate" },
  { name: "Russian", level: "Basic" },
];

const certifications = [
  {
    provider: "INE Security",
    certs: ["eJPT"],
  },
  {
    provider: "Red Hat",
    certs: ["Fundamentals of Containers, Kubernetes and OpenShift"],
  },
  {
    provider: "TryHackMe",
    certs: ["Jr Penetration Tester Path"],
  },
  {
    provider: "Google — Google Cybersecurity Professional Certificate",
    certs: [
      "Foundations of Cybersecurity",
      "Play It Safe: Manage Security Risks",
      "Connect and Protect: Networks and Network Security",
      "Tools of the Trade: Linux and SQL",
      "Assets, Threats, and Vulnerabilities",
      "Sound the Alarm: Detection and Response",
      "Automate Cybersecurity Tasks with Python",
      "Put It to Work: Prepare for Cybersecurity Jobs",
    ],
  },
  {
    provider: "IBM",
    certs: [
      "Cybersecurity Compliance Framework & System Administration",
      "Cybersecurity Roles, Processes & Operating System",
      "Introduction to Agile Development and Scrum",
      "Introduction to Cloud Computing",
      "Introduction to Cybersecurity Tools & Cyber Attacks",
      "Introduction to DevOps",
    ],
  },
];

const About = () => {
  return (
    <Layout>
      <div className="container-custom py-16">
        <div className="animate-fade-in">
          {/* Page Header */}
          <h1 className="mb-2 text-4xl font-bold text-foreground">About</h1>
          <p className="mb-12 text-lg text-muted-foreground">
            Get to know more about my background and journey
          </p>

          {/* Biography Section */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">Biography</h2>
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed text-card-foreground">
                  I'm <strong>Alex Insel</strong>, a Brazilian Software Engineering student, former Reserve Officer 
                  (Aspirante R/2) in the Brazilian Army, and a self-taught penetration tester focused on offensive 
                  security. This site brings together my work in offensive security and penetration testing as the 
                  primary focus, alongside software development. You'll find tools I've built, research I've conducted, 
                  and write-ups documenting my learning process.
                </p>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">Certifications & Courses</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <div
                  key={cert.provider}
                  className="rounded-lg border border-border bg-card p-5 shadow-sm"
                >
                  <h3 className="mb-3 font-semibold text-primary">{cert.provider}</h3>
                  <ul className="space-y-1">
                    {cert.certs.map((item) => (
                      <li key={item} className="text-sm text-card-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">Contact</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-secondary"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">{link.name}</p>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>

          {/* Languages Section */}
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-foreground">Languages</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="rounded-lg border border-border bg-card p-4 shadow-sm"
                >
                  <p className="font-medium text-card-foreground">{lang.name}</p>
                  <p className="text-sm text-muted-foreground">{lang.level}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
