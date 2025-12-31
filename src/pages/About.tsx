import { Layout } from "@/components/Layout";
import { useLanguage } from "@/components/LanguageProvider";
import { Linkedin, Github, Mail, Youtube } from "lucide-react";

const contactLinks = [
  {
    name: "LinkedIn",
    key: "linkedin" as const,
    href: "https://www.linkedin.com/in/alex-c-insel-9674b0288/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    key: "github" as const,
    href: "https://github.com/inzelsec",
    icon: Github,
  },
  {
    name: "Medium",
    key: "medium" as const,
    href: "https://medium.com/@inzelsec",
    icon: () => (
      <span className="text-lg font-bold">M</span>
    ),
  },
  {
    name: "YouTube",
    key: "youtube" as const,
    href: "https://www.youtube.com/@InzelSec",
    icon: Youtube,
  },
  {
    name: "Email",
    key: "email" as const,
    href: "mailto:inzelsec@gmail.com",
    icon: Mail,
  },
];

const languages = [
  { name: "English", namePt: "Inglês", level: "Advanced/Fluent", levelPt: "Avançado/Fluente" },
  { name: "Spanish", namePt: "Espanhol", level: "Basic-Intermediate", levelPt: "Básico-Intermediário" },
  { name: "German", namePt: "Alemão", level: "Basic-Intermediate", levelPt: "Básico-Intermediário" },
  { name: "Russian", namePt: "Russo", level: "Basic", levelPt: "Básico" },
  { name: "Portuguese", namePt: "Português", level: "Native", levelPt: "Nativo" },

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
  const { t, language } = useLanguage();

  return (
    <Layout>
      <div className="container-custom py-16">
        <div className="animate-fade-in">
          {/* Page Header */}
          <h1 className="mb-12 text-4xl font-bold text-foreground">{t.about.title}</h1>

          {/* Biography Section */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">{t.about.biography}</h2>
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed text-card-foreground">
                  {t.about.biographyTextBefore}
                  <strong>{t.about.biographyName}</strong>
                  {t.about.biographyTextAfter}
                </p>
              </div>
            </div>
          </section>

          {/* Languages Section */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">{t.about.languages}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="rounded-lg border border-border bg-card p-4 shadow-sm"
                >
                  <p className="font-medium text-card-foreground">
                    {language === "pt" ? lang.namePt : lang.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === "pt" ? lang.levelPt : lang.level}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">{t.about.certifications}</h2>
            <div className="space-y-8">
              {certifications.map((cert) => (
                <div key={cert.provider}>
                  <h3 className="mb-3 text-lg font-semibold text-primary">{cert.provider}</h3>
                  <ul className="space-y-2 pl-4">
                    {cert.certs.map((item) => (
                      <li key={item} className="text-base text-card-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-foreground">{t.about.contact}</h2>
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
                      <p className="text-sm text-muted-foreground">
                        {t.about.contactDescriptions[link.key]}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
