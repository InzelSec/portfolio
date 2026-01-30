import { Layout } from "@/components/Layout";
import { useLanguage } from "@/components/LanguageProvider";
import { Calendar, ArrowRight } from "lucide-react";

export interface Article {
  id: string;
  title: string;
  summaryPt: string;
  summaryEn: string;
  date: string;
  tags: string[];
  link: string;
}

export const articles: Article[] = [
  {
    id: "linux-privesc-suid-sgid",
    title: "Linux Privilege Escalation: SUID/SGID (with CTF examples)",
    summaryPt:
      "Guia que explica o que são SUID/SGID, como enumerar binários com find e como validar caminhos de exploração via GTFOBins, incluindo exemplos práticos de CTFs do TryHackMe.",
    summaryEn:
      "A guide that explains what SUID/SGID are, how to enumerate binaries with find, and how to validate exploitation paths with GTFOBins, including practical TryHackMe CTF examples.",
    date: "2026-01-29",
    tags: ["PrivEsc"],
    link: "https://medium.com/@inzelsec/linux-privilege-escalation-suid-sgid-with-ctf-examples-e1fd9a06868c",
  },  
  {
    id: "linux-privesc-sudo",
    title: "Linux Privilege Escalation: Sudo",
    summaryPt:
      "Guia que demonstra como enumerar permissões com sudo -l e explorar configurações inseguras, com exemplos práticos (como tcpdump -z e abuso de LD_PRELOAD quando permitido).",
    summaryEn:
      "A guide that shows how to enumerate permissions with sudo -l and abuse insecure sudo configurations, with practical examples (such as tcpdump -z and LD_PRELOAD abuse when allowed).",
    date: "2026-01-28",
    tags: ["PrivEsc"],
    link: "https://medium.com/@inzelsec/linux-privilege-escalation-sudo-with-examples-b2a1b8b6cea2",
  },
  {
    id: "linux-privesc-manual-enumeration",
    title: "Linux Privilege Escalation: Manual Enumeration & Information Gathering",
    summaryPt:
      "Guia focado em como coletar informações essenciais no Linux (sistema, serviços, permissões etc.) para facilitar o escalonamento de privilégios.",
    summaryEn:
      "A guide focused on collecting essential Linux information (system, services, permissions, etc.) to facilitate privilege escalation.",
    date: "2025-12-22",
    tags: ["PrivEsc"],
    link: "https://medium.com/@inzelsec/linux-privilege-escalation-manual-enumeration-information-gathering-2189a9b3e6bf",
  },
  {
    id: "linux-privesc-escaping-shells",
    title: "Linux Privilege Escalation: Escaping Restricted Shells",
    summaryPt:
      "Técnicas para escapar de shells restritos em sistemas Unix-like usando comandos e ferramentas disponíveis.",
    summaryEn:
      "Techniques for escaping restricted shells on Unix-like systems using available commands and tools.",
    date: "2025-12-21",
    tags: ["PrivEsc"],
    link: "https://medium.com/@inzelsec/linux-privilege-escalation-escaping-restricted-shells-fa26753a7ac6",
  },
  {
    id: "linux-privesc-transferring-files",
    title: "Linux Privilege Escalation: Transferring Files",
    summaryPt:
      "Diferentes métodos práticos para transferir arquivos durante uma sessão de escalonamento de privilégios em Linux.",
    summaryEn:
      "Different practical methods for transferring files during a Linux privilege escalation session.",
    date: "2025-12-21",
    tags: ["PrivEsc"],
    link: "https://medium.com/@inzelsec/linux-privilege-escalation-transferring-files-1810ff7ea7c5",
  },
  {
    id: "anonymous-thm",
    title: "Anonymous: TryHackMe WalkThrough",
    summaryPt:
      "Walkthrough da sala \"Anonymous\" no TryHackMe com enumeração, exploração e captura de todos os flags.",
    summaryEn:
      "Walkthrough of the \"Anonymous\" room on TryHackMe with enumeration, exploitation, and capturing all flags.",
    date: "2025-10-08",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/anonymous-tryhackme-walkthrough-f996209fea90",
  },
  {
    id: "boiler-ctf-thm",
    title: "Boiler CTF: TryHackMe WalkThrough",
    summaryPt:
      "Solução completa do desafio CTF \"Boiler\" no TryHackMe com enumeração de serviços e etapas de exploração.",
    summaryEn:
      "Complete solution of the \"Boiler\" CTF challenge on TryHackMe with service enumeration and exploitation steps.",
    date: "2025-10-08",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/boiler-ctf-tryhackme-walkthrough-9b6edb596c48",
  },
  {
    id: "wonderland-thm",
    title: "Wonderland: TryHackMe WalkThrough",
    summaryPt:
      "Passo a passo da máquina \"Wonderland\" com enumeração, exploração e estratégias de escalonamento de privilégios.",
    summaryEn:
      "Step-by-step walkthrough of the \"Wonderland\" machine with enumeration, exploitation, and privilege escalation strategies.",
    date: "2025-10-06",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/wonderland-tryhackme-walkthrough-f9730b664326",
  },
  {
    id: "brooklyn-nine-nine-thm",
    title: "Brooklyn Nine Nine: TryHackMe WalkThrough",
    summaryPt:
      "Walkthrough da máquina \"Brooklyn Nine Nine\", incluindo enumeração inicial e escalonamento de privilégios usando ferramentas e técnicas simples.",
    summaryEn:
      "Walkthrough of the \"Brooklyn Nine Nine\" machine, including initial enumeration and privilege escalation using simple tools and techniques.",
    date: "2025-10-06",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/brooklyn-nine-nine-tryhackme-walkthrough-171c74a956ea",
  },
  {
    id: "crack-the-hash-thm",
    title: "Crack the hash: TryHackMe WalkThrough",
    summaryPt:
      "Explica como identificar e quebrar diferentes tipos de hashes na sala \"Crack the Hash\" do TryHackMe usando hashcat e ferramentas de identificação.",
    summaryEn:
      "Explains how to identify and crack different hash types in the \"Crack the Hash\" TryHackMe room using hashcat and identification tools.",
    date: "2025-09-30",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/crack-the-hash-tryhackme-walkthrough-a665b0151329",
  },
  {
    id: "thompson-thm",
    title: "Thompson: TryHackMe WalkThrough",
    summaryPt:
      "Walkthrough completo da máquina \"Thompson\", cobrindo enumeração e exploração até captura dos flags.",
    summaryEn:
      "Complete walkthrough of the \"Thompson\" machine, covering enumeration and exploitation to capture the flags.",
    date: "2025-09-27",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/thompson-tryhackme-walkthrough-794841f0e227",
  },
  {
    id: "tomghost-thm",
    title: "tomghost: TryHackMe WalkThrough",
    summaryPt:
      "Solução da sala \"tomghost\" no TryHackMe, incluindo enumeração de portas e identificação de vetores de exploração.",
    summaryEn:
      "Solution for the \"tomghost\" room on TryHackMe, including port enumeration and identifying exploitation vectors.",
    date: "2025-09-26",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/tomghost-tryhackme-walkthrough-ff4491e7f120",
  },
  {
    id: "cyborg-thm",
    title: "Cyborg: TryHackMe WalkThrough",
    summaryPt:
      "Passo a passo da máquina \"Cyborg\", com uso de nmap, exploração de backups e escalonamento até capturar todos os flags.",
    summaryEn:
      "Step-by-step walkthrough of the \"Cyborg\" machine, using nmap, backup exploitation, and escalation to capture all flags.",
    date: "2025-08-21",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/cyborg-tryhackme-walkthrough-621e50d01e32",
  },
  {
    id: "skynet-thm",
    title: "Skynet: TryHackMe WalkThrough",
    summaryPt:
      "Walkthrough da máquina \"Skynet\", incluindo enumeração Nmap, análise de SMB e exploração para capturar flags de usuário e root.",
    summaryEn:
      "Walkthrough of the \"Skynet\" machine, including Nmap enumeration, SMB analysis, and exploitation to capture user and root flags.",
    date: "2025-08-10",
    tags: ["TryHackMe", "CTF"],
    link: "https://medium.com/@inzelsec/tryhackme-skynet-walkthrough-5199604541fc",
  },
];

const Articles = () => {
  const { t, language } = useLanguage();

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString(language === "pt" ? "pt-BR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getMonthYear = (dateString: string) => {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const monthName = date.toLocaleDateString(language === "pt" ? "pt-BR" : "en-US", {
      month: "long",
    });
    const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
    return `${capitalizedMonth} ${year}`;
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

  const getSummary = (article: Article) => {
    return language === "pt" ? article.summaryPt : article.summaryEn;
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

          {/* Articles List grouped by month */}
          <div className="space-y-8">
            {sortedMonths.map((month) => (
              <div key={month}>
                {/* Month separator */}
                <h2 className="mb-4 text-center text-xl font-semibold text-muted-foreground">
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
                        </div>

                        {/* Summary */}
                        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                          {getSummary(article)}
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
