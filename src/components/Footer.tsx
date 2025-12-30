import { Linkedin, Github, Mail, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/alex-c-insel-9674b0288/", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/inzelsec", icon: Github },
  { name: "Medium", href: "https://medium.com/@inzelsec", icon: () => (
    <span className="text-base font-bold">M</span>
  ) },
  { name: "YouTube", href: "https://youtube.com/@inzelsec", icon: Youtube },
  { name: "Email", href: "mailto:contact@inzelsec.com", icon: Mail },
];

interface FooterProps {
  showBorder?: boolean;
}

export function Footer({ showBorder = true }: FooterProps) {
  return (
    <footer className={cn("py-8", showBorder && "border-t border-border")}>
      <div className="container-custom">
        <div className="flex flex-col items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alex Insel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
