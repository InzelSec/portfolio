import { Layout } from "@/components/Layout";
import { useLanguage } from "@/components/LanguageProvider";
import { ArrowRight, BookOpen, Code2 } from "lucide-react";

const Home = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="container-custom flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-20">
        <div className="animate-fade-in text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/logo.png" 
              alt="InzelSec Logo" 
              className="h-28 w-28 opacity-90"
            />
          </div>

          {/* Title with enhanced styling */}
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-foreground">Inzel</span>
            <span className="text-primary">Sec</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-6 text-xl font-medium text-primary sm:text-2xl">
            {t.home.subtitle}
          </p>

          {/* Description */}
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.home.description}
          </p>

          {/* CTA Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:max-w-2xl sm:mx-auto">
            <a
              href="/projects"
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Code2 className="h-7 w-7" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">{t.home.projects}</h3>
              <ArrowRight className="mx-auto mt-4 h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </a>
            
            <a
              href="/articles"
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <BookOpen className="h-7 w-7" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">{t.home.articles}</h3>
              <ArrowRight className="mx-auto mt-4 h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
