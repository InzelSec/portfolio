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
  link: string;
}

export const articles: Article[] = [
  {
    id: "linux-privesc-manual-enumeration",
    title: "Linux Privilege Escalation: Manual Enumeration & Information Gathering",
    summary:
      "Guia focado em como coletar informações essenciais no Linux (sistema, serviços, permissões etc.) para facilitar o escalonamento de privilégios.",
    date: "2025-12-22",
    readTime: "8 min read",
    tags: ["PrivEsc"],
    link: "https://medium.com/@inzelsec/linux-privilege-escalation-manual-enumeration-information-gathering-e071db8d0f6b",
  },
  {
    id: "linux-privesc-escaping-shells",
    title: "Linux Privilege Escalation: Escaping Restricted Shells",
    summary:
      "Técnicas para escapar de shells restritos em sistemas Unix-like usando comandos e ferramentas disponíveis.",
    date: "2025-12-21",
    readTime: "6 min read",
    tags: ["PrivEsc"],
    link: "https://medium.com/@inzelsec/linux-privilege-escalation-escaping-restricted-shells-fa26753a7ac6",
  },
  {
    id: "linux-privesc-transferring-files",
    title: "Linux Privilege Escalation: Transferring Files",
    summary:
      "Diferentes métodos práticos para transferir arquivos durante uma sessão de escalonamento de privilégios em Linux.",
    date: "2025-12-21",
    readTime: "5 min read",
    tags: ["PrivEsc"],
    link: "https://medium.com/@inzelsec/linux-privilege-escalation-transferring-files-1810ff7ea7c5",
  },
  {
    id: "anonymous-thm",
    title: "Anonymous: TryHackMe WalkThrough",
    summary:
      "Walkthrough da sala \"Anonymous\" no TryHackMe com enumeração, exploração e captura de todos os flags.",
    date: "2025-10-08",
    readTime: "10 min read",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/anonymous-tryhackme-walkthrough-f996209fea90",
  },
  {
    id: "boiler-ctf-thm",
    title: "Boiler CTF: TryHackMe WalkThrough",
    summary:
      "Solução completa do desafio CTF \"Boiler\" no TryHackMe com enumeração de serviços e etapas de exploração.",
    date: "2025-10-08",
    readTime: "12 min read",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/boiler-ctf-tryhackme-walkthrough-c8d1b4d0b9ee",
  },
  {
    id: "wonderland-thm",
    title: "Wonderland: TryHackMe WalkThrough",
    summary:
      "Passo a passo da máquina \"Wonderland\" com enumeração, exploração e estratégias de escalonamento de privilégios.",
    date: "2025-10-06",
    readTime: "15 min read",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/wonderland-tryhackme-walkthrough-f9730b664326",
  },
  {
    id: "brooklyn-nine-nine-thm",
    title: "Brooklyn Nine Nine: TryHackMe WalkThrough",
    summary:
      "Walkthrough da máquina \"Brooklyn Nine Nine\", incluindo enumeração inicial e escalonamento de privilégios usando ferramentas e técnicas simples.",
    date: "2025-10-06",
    readTime: "8 min read",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/brooklyn-nine-nine-tryhackme-walkthrough-171c74a956ea",
  },
  {
    id: "crack-the-hash-thm",
    title: "Crack the hash: TryHackMe WalkThrough",
    summary:
      "Explica como identificar e quebrar diferentes tipos de hashes na sala \"Crack the Hash\" do TryHackMe usando hashcat e ferramentas de identificação.",
    date: "2025-09-30",
    readTime: "7 min read",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/crack-the-hash-tryhackme-walkthrough-a665b0151329",
  },
  {
    id: "thompson-thm",
    title: "Thompson: TryHackMe WalkThrough",
    summary:
      "Walkthrough completo da máquina \"Thompson\", cobrindo enumeração e exploração até captura dos flags.",
    date: "2025-09-27",
    readTime: "10 min read",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/thompson-tryhackme-walkthrough-b3b8c6e2e2fc",
  },
  {
    id: "tomghost-thm",
    title: "tomghost: TryHackMe WalkThrough",
    summary:
      "Solução da sala \"tomghost\" no TryHackMe, incluindo enumeração de portas e identificação de vetores de exploração.",
    date: "2025-09-26",
    readTime: "9 min read",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/tomghost-tryhackme-walkthrough-5a71b87bf04b",
  },
  {
    id: "cyborg-thm",
    title: "Cyborg: TryHackMe WalkThrough",
    summary:
      "Passo a passo da máquina \"Cyborg\", com uso de nmap, exploração de backups e escalonamento até capturar todos os flags.",
    date: "2025-08-21",
    readTime: "11 min read",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/cyborg-tryhackme-walkthrough-621e50d01e32",
  },
  {
    id: "skynet-thm",
    title: "Skynet: TryHackMe WalkThrough",
    summary:
      "Walkthrough da máquina \"Skynet\", incluindo enumeração Nmap, análise de SMB e exploração para capturar flags de usuário e root.",
    date: "2025-08-10",
    readTime: "12 min read",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/tryhackme-skynet-walkthrough-5199604541fc",
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

  const getMonthYear = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "pt" ? "pt-BR" : "en-US", {
      year: "numeric",
      month: "long",
    });
  };

  // Group articles by month
  const groupedArticles = articles.reduce((acc, article) => {
    const monthYear = getMonthYear(article.date);
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(article);
    return acc;
  }, {} as Record<string, Article[]>);

  // Sort months (most recent first)
  const sortedMonths = Object.keys(groupedArticles).sort((a, b) => {
    const dateA = new Date(groupedArticles[a][0].date);
    const dateB = new Date(groupedArticles[b][0].date);
    return dateB.getTime() - dateA.getTime();
  });

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

          {/* Articles List grouped by month */}
          <div className="space-y-8">
            {sortedMonths.map((month) => (
              <div key={month}>
                {/* Month separator */}
                <h2 className="mb-4 text-center text-lg font-semibold text-muted-foreground">
                  {month}
                </h2>

                <div className="space-y-4">
                  {groupedArticles[month].map((article) => (
                    <article
                      key={article.id}
                      className="group rounded-lg border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                    >
                      <a href={article.link} target="_blank" rel="noopener noreferrer" className="block">
                        {/* Title */}
                        <h3 className="mb-2 text-xl font-semibold text-card-foreground transition-colors group-hover:text-primary">
                          {article.title}
                        </h3>

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
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Articles;
