import { Layout } from "@/components/Layout";
import { useLanguage } from "@/components/LanguageProvider";
import { ArrowRight, BookOpen, Code2, User } from "lucide-react";
import { Linkedin, Github, Mail, Youtube } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/alex-c-insel-9674b0288/", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/inzelsec", icon: Github },
  { name: "Medium", href: "https://medium.com/@inzelsec", icon: () => (
    <span className="text-2xl font-bold">M</span>
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
              className="h-24 w-24 rounded-xl opacity-90"
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
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/50 text-foreground/70">
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

        </div>
      </section>
    </Layout>
  );
};

export default Home;
