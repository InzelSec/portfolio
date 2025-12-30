import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center gap-1 rounded-full bg-secondary p-1 transition-colors hover:bg-secondary/80"
      aria-label="Toggle language"
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold transition-all ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground"
        }`}
      >
        EN
      </span>
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold transition-all ${
          language === "pt"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground"
        }`}
      >
        PT
      </span>
    </button>
  );
}
