import { Linkedin, Github, Mail, Youtube } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/alexinsel", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/alexinsel", icon: Github },
  { name: "Medium", href: "https://medium.com/@alexinsel", icon: () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
  ) },
  { name: "YouTube", href: "https://youtube.com/@alexinsel", icon: Youtube },
  { name: "Email", href: "mailto:alex@inzelsec.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
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
