import { Layout } from "@/components/Layout";
import { useLanguage } from "@/components/LanguageProvider";
import { ArrowRight, BookOpen, Code2, User } from "lucide-react";
import { Linkedin, Github, Mail, Youtube } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/alex-c-insel-9674b0288/", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/inzelsec", icon: Github },
  { name: "Medium", href: "https://medium.com/@inzelsec", icon: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
  ) },
  { name: "YouTube", href: "https://youtube.com/@inzelsec", icon: Youtube },
  { name: "Email", href: "mailto:contact@inzelsec.com", icon: Mail },
];

const Home = () => {
  const { t } = useLanguage();

  return (
    <Layout showFooterBorder={false}>
      <section className="container-custom flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-12">
        <div className="animate-fade-in text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <img 
              src="/logo.png" 
              alt="InzelSec Logo" 
              className="h-24 w-24 opacity-90"
            />
          </div>

          {/* Title with glow effect */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-primary drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">Inzel</span>
            <span className="text-primary drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">Sec</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-4 text-lg font-medium text-primary sm:text-xl">
            {t.home.subtitle}
          </p>

          {/* Description */}
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t.home.description}
          </p>

          {/* CTA Cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-3 sm:max-w-3xl sm:mx-auto">
            <a
              href="/about"
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex justify-center mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/50 text-muted-foreground">
                  <User className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">{t.nav.about}</h3>
              <ArrowRight className="mx-auto mt-3 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </a>

            <a
              href="/projects"
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex justify-center mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Code2 className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">{t.home.projects}</h3>
              <ArrowRight className="mx-auto mt-3 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </a>
            
            <a
              href="/articles"
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex justify-center mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <BookOpen className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">{t.home.articles}</h3>
              <ArrowRight className="mx-auto mt-3 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center justify-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-3 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  aria-label={link.name}
                >
                  <Icon className="h-8 w-8" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
