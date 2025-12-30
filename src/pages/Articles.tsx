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
              className="flex items-center gap-2 rounded-lg border-2 border-primary/60 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <span className="text-base font-bold">M</span>
              Medium
            </a>
          </div>

          {/* Articles List */}
          <div className="space-y-6">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group rounded-lg border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
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
