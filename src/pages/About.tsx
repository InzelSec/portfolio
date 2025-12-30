import { Layout } from "@/components/Layout";
import { Linkedin, Github, Mail, Youtube, Globe } from "lucide-react";

const contactLinks = [
  {
    name: "TryHackMe",
    href: "https://tryhackme.com/p/alexinsel",
    icon: Globe,
    description: "View my profile and progress",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/alexinsel",
    icon: Linkedin,
    description: "Connect professionally",
  },
  {
    name: "GitHub",
    href: "https://github.com/alexinsel",
    icon: Github,
    description: "Explore my repositories",
  },
  {
    name: "Medium",
    href: "https://medium.com/@alexinsel",
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
    description: "Read my articles",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@alexinsel",
    icon: Youtube,
    description: "Watch my content",
  },
  {
    name: "Email",
    href: "mailto:alex@inzelsec.com",
    icon: Mail,
    description: "Get in touch",
  },
];

const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Advanced (C1)" },
  { name: "Spanish", level: "Intermediate" },
  { name: "German", level: "Intermediate" },
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
                <p className="mb-4 text-base leading-relaxed text-card-foreground">
                  I'm <strong>Alex Insel</strong>, a Software Engineering student and self-taught penetration tester 
                  focused on offensive security. My journey into cybersecurity began with a curiosity about how systems 
                  can be exploited and how to defend against such attacks.
                </p>
                <p className="mb-4 text-base leading-relaxed text-card-foreground">
                  Prior to my current studies, I served as a <strong>Reserve Officer (Aspirante R/2)</strong> in the 
                  Brazilian Army through the NPOR program, where I developed discipline, leadership skills, and a 
                  methodical approach to problem-solving that translates well into security research.
                </p>
                <p className="text-base leading-relaxed text-card-foreground">
                  Currently, I'm focused on developing <strong>CPTS-level skills</strong> and practical offensive 
                  security techniques. I enjoy documenting my learning process through articles and building tools 
                  that help me and others in the security community.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">Contact</h2>
            
            {/* TryHackMe Badge */}
            <div className="mb-6">
              <a 
                href="https://tryhackme.com/p/alexinsel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="https://tryhackme-badges.s3.amazonaws.com/alexinsel.png" 
                  alt="TryHackMe Badge" 
                  className="h-auto max-w-full"
                />
              </a>
            </div>

            {/* Contact Links */}
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
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
