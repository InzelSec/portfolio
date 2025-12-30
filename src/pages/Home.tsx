import { Layout } from "@/components/Layout";
import { ArrowRight, BookOpen, Code2 } from "lucide-react";

const Home = () => {
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
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              Inzel
            </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sec
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-6 text-xl font-medium text-primary sm:text-2xl">
            Offensive Security & Pentest
          </p>

          {/* Description */}
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            This website summarizes and shares my scripts, projects, articles, and what I've learned on my cybersecurity journey.
          </p>

          {/* CTA Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:max-w-2xl sm:mx-auto">
            <a
              href="/projects"
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-left shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Code2 className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">View Projects</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Explore my security tools, scripts, and development projects.
              </p>
            </a>
            
            <a
              href="/articles"
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-left shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <BookOpen className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">Read Articles</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Write-ups, tutorials, and insights from my security journey.
              </p>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
