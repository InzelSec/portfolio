import { Layout } from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="container-custom flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-20">
        <div className="animate-fade-in text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <img 
              src="/logo.png" 
              alt="InzelSec Logo" 
              className="h-24 w-24 opacity-90"
            />
          </div>

          {/* Title */}
          <h1 className="mb-3 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Inzel<span className="text-primary">Sec</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-6 text-xl font-medium text-primary sm:text-2xl">
            Offensive Security & Pentest
          </p>

          {/* Description */}
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            This website summarizes and shares my scripts, projects, articles, and what I've learned on my cybersecurity journey.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/projects"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Projects
            </a>
            <a
              href="/articles"
              className="rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              Read Articles
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
