export type Language = "en" | "pt";

type TranslationSchema = {
  nav: {
    home: string;
    about: string;
    projects: string;
    articles: string;
    search: string;
  };
  home: {
    subtitle: string;
    description: string;
    projects: string;
    articles: string;
  };
  about: {
    title: string;
    subtitle: string;
    biography: string;
    biographyText: string;
    contact: string;
    languages: string;
    certifications: string;
    contactDescriptions: {
      linkedin: string;
      github: string;
      medium: string;
      youtube: string;
      email: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    purpose: string;
    technologies: string;
  };
  articles: {
    title: string;
    subtitle: string;
    readMore: string;
  };
  search: {
    title: string;
    subtitle: string;
    placeholder: string;
    startTyping: string;
    noResults: string;
    foundResults: string;
    foundResultsPlural: string;
  };
  footer: {
    rights: string;
  };
};

export const translations: Record<Language, TranslationSchema> = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      articles: "Articles",
      search: "Search",
    },
    // Home page
    home: {
      subtitle: "Offensive Security & Pentest",
      description:
        "This website summarizes and shares my scripts, projects, articles, and what I've learned on my cybersecurity journey.",
      projects: "Projects",
      articles: "Articles",
    },
    // About page
    about: {
      title: "About",
      subtitle: "Get to know more about my background and journey",
      biography: "Biography",
      biographyText:
        "I'm <strong>Alex Insel</strong>, a Brazilian Software Engineering student, former Reserve Officer (Aspirante R/2) in the Brazilian Army, and a self-taught penetration tester focused on offensive security. This site brings together my work in offensive security and penetration testing as the primary focus, alongside software development. You'll find tools I've built, research I've conducted, and write-ups documenting my learning process.",
      contact: "Contact",
      languages: "Languages",
      certifications: "Certifications & Courses",
      contactDescriptions: {
        linkedin: "Connect professionally",
        github: "Explore my repositories",
        medium: "Read my articles",
        youtube: "Watch my content",
        email: "Get in touch",
      },
    },
    // Projects page
    projects: {
      title: "Projects",
      subtitle: "A collection of projects I've built and contributed to",
      purpose: "Purpose",
      technologies: "Technologies",
    },
    // Articles page
    articles: {
      title: "Articles",
      subtitle: "Write-ups, tutorials, and notes from my security research",
      readMore: "Read more",
    },
    // Search page
    search: {
      title: "Search",
      subtitle: "Find articles by title, content, or tags",
      placeholder: "Search articles...",
      startTyping: "Start typing to search through articles",
      noResults: 'No articles found for "{query}"',
      foundResults: "Found {count} result",
      foundResultsPlural: "Found {count} results",
    },
    // Footer
    footer: {
      rights: "All rights reserved.",
    },
  },
  pt: {
    // Navigation
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      articles: "Artigos",
      search: "Buscar",
    },
    // Home page
    home: {
      subtitle: "Segurança Ofensiva & Pentest",
      description:
        "Este site resume e compartilha meus scripts, projetos, artigos e o que aprendi em minha jornada de cibersegurança.",
      projects: "Projetos",
      articles: "Artigos",
    },
    // About page
    about: {
      title: "Sobre",
      subtitle: "Conheça mais sobre minha trajetória e experiência",
      biography: "Biografia",
      biographyText:
        "Sou <strong>Alex Insel</strong>, estudante brasileiro de Engenharia de Software, Aspirante a Oficial da Reserva (R/2) do Exército Brasileiro, e pentester autodidata focado em segurança ofensiva. Este site reúne meu trabalho em segurança ofensiva e testes de penetração como foco principal, junto com desenvolvimento de software. Você encontrará ferramentas que construí, pesquisas que realizei e write-ups documentando meu processo de aprendizado.",
      contact: "Contato",
      languages: "Idiomas",
      certifications: "Certificações & Cursos",
      contactDescriptions: {
        linkedin: "Conecte-se profissionalmente",
        github: "Explore meus repositórios",
        medium: "Leia meus artigos",
        youtube: "Assista meu conteúdo",
        email: "Entre em contato",
      },
    },
    // Projects page
    projects: {
      title: "Projetos",
      subtitle: "Uma coleção de projetos que construí e contribuí",
      purpose: "Propósito",
      technologies: "Tecnologias",
    },
    // Articles page
    articles: {
      title: "Artigos",
      subtitle: "Write-ups, tutoriais e notas da minha pesquisa em segurança",
      readMore: "Leia mais",
    },
    // Search page
    search: {
      title: "Buscar",
      subtitle: "Encontre artigos por título, conteúdo ou tags",
      placeholder: "Buscar artigos...",
      startTyping: "Comece a digitar para buscar artigos",
      noResults: 'Nenhum artigo encontrado para "{query}"',
      foundResults: "Encontrado {count} resultado",
      foundResultsPlural: "Encontrados {count} resultados",
    },
    // Footer
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
};

export type Translations = TranslationSchema;
