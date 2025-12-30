import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center gap-1 rounded-full bg-secondary p-1 transition-colors hover:bg-secondary/80"
      aria-label="Toggle theme"
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full transition-all ${
          theme === "light"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground"
        }`}
      >
        <Sun className="h-3.5 w-3.5" />
      </span>
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full transition-all ${
          theme === "dark"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground"
        }`}
      >
        <Moon className="h-3.5 w-3.5" />
      </span>
    </button>
  );
}
