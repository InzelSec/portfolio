import { Layout } from "@/components/Layout";
import { useLanguage } from "@/components/LanguageProvider";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "active-directory-enumeration",
    title: "Active Directory Enumeration: A Practical Guide",
    summary:
      "A comprehensive walkthrough of techniques for enumerating Active Directory environments during penetration tests, including tools like BloodHound, PowerView, and manual methods.",
    date: "2024-12-15",
    readTime: "12 min read",
    tags: [],
  },
  {
    id: "linux-privilege-escalation",
    title: "Linux Privilege Escalation Cheatsheet",
    summary:
      "Essential techniques and commands for escalating privileges on Linux systems, from SUID binaries to kernel exploits and misconfigurations.",
    date: "2024-11-28",
    readTime: "8 min read",
    tags: ["PrivEsc"],
  },
  {
    id: "web-app-recon-methodology",
    title: "Web Application Reconnaissance Methodology",
    summary:
      "My personal methodology for conducting thorough reconnaissance on web applications, including subdomain enumeration, technology fingerprinting, and content discovery.",
    date: "2024-11-10",
    readTime: "15 min read",
    tags: [],
  },
  {
    id: "htb-writeup-keeper",
    title: "HackTheBox Writeup: Keeper",
    summary:
      "A detailed writeup of the Keeper machine from HackTheBox, covering initial enumeration, exploiting default credentials, and extracting KeePass master passwords.",
    date: "2024-10-22",
    readTime: "10 min read",
    tags: ["HackTheBox", "CTF"],
  },
];

const Articles = () => {
  const { t, language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "pt" ? "pt-BR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout>
      <div className="container-custom py-16">
        <div className="animate-fade-in">
          {/* Page Header */}
          <div className="mb-12 flex items-center justify-between">
            <h1 className="text-4xl font-bold text-foreground">{t.articles.title}</h1>
            <a
              href="https://medium.com/@inzelsec"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
              Medium
            </a>
          </div>

          {/* Articles List */}
          <div className="space-y-6">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <Link to={`/articles/${article.id}`} className="block">
                  {/* Title */}
                  <h2 className="mb-2 text-xl font-semibold text-card-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </h2>

                  {/* Meta */}
                  <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {formatDate(article.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                    {article.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      {t.articles.readMore} <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Articles;
