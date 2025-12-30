import { Layout } from "@/components/Layout";
import { useLanguage } from "@/components/LanguageProvider";
import { Search as SearchIcon, Calendar, Clock } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { articles } from "./Articles";

const Search = () => {
  const [query, setQuery] = useState("");
  const { t, language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "pt" ? "pt-BR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const filteredArticles = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerms = query.toLowerCase().trim();
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerms) ||
        article.summary.toLowerCase().includes(searchTerms) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchTerms))
    );
  }, [query]);

  return (
    <Layout>
      <div className="container-custom py-16">
        <div className="animate-fade-in">
          {/* Page Header */}
          <h1 className="mb-2 text-4xl font-bold text-foreground">{t.search.title}</h1>
          <p className="mb-12 text-lg text-muted-foreground">
            {t.search.subtitle}
          </p>

          {/* Search Input */}
          <div className="mx-auto mb-12 max-w-xl">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder={t.search.placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-card py-4 pl-12 pr-4 text-base text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Results */}
          <div className="mx-auto max-w-xl">
            {query.trim() === "" ? (
              <p className="text-center text-muted-foreground">
                {t.search.startTyping}
              </p>
            ) : filteredArticles.length === 0 ? (
              <p className="text-center text-muted-foreground">
                {t.search.noResults.replace("{query}", query)}
              </p>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {filteredArticles.length !== 1 
                    ? t.search.foundResultsPlural.replace("{count}", String(filteredArticles.length))
                    : t.search.foundResults.replace("{count}", String(filteredArticles.length))}
                </p>
                {filteredArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/articles/${article.id}`}
                    className="block rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
                  >
                    <h3 className="mb-1 font-medium text-card-foreground">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
