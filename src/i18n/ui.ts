import type { Lang } from "./config";

/**
 * Interface text (headings, labels, buttons).
 * Portfolio content (bio, jobs, papers...) lives in src/data/portfolio.ts.
 */
const en = {
  "projects": {
    "eyebrow": "Selected work",
    "title": "Projects you can explore",
    "lede": "Web applications, reusable components and tools I built.",
    "featured": "Featured",
    "more": "More projects",
    "visit": "Open application",
    "account": "Account required",
    "prototype": "Prototype",
    "preview": "Screenshot of"
  },
  "research": {
    "eyebrow": "Research",
    "title": "Research that informs my work",
    "lede": "Accessibility and software quality connect my academic research to the interfaces I build."
  }
,
  meta: {
    title: "Ana Ferreira | Front-end Developer",
    description:
      "Front-end developer working with React, TypeScript and accessibility. Explore my projects, professional experience and research.",
  },
  skipLink: "Skip to main content",
  opensInNewTab: "(opens in new tab)",
  present: "Present",
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  languageNames: { en: "English", pt: "Portuguese" } as Record<Lang, string>,
  header: {
    navLabel: "Primary",
    mobileNavLabel: "Mobile",
    nav: {
      about: "About",
      projects: "Projects", research: "Research", contact: "Contact",
      publications: "Papers",
      events: "Events",
      experience: "Experience",
    },
    toDark: "Switch to dark theme",
    toLight: "Switch to light theme",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    linksLabel: "Contact and profile links",
    email: "Send email",
    linkedin: "LinkedIn profile",
    github: "GitHub profile",
    scholar: "Google Scholar profile",
    orcid: "ORCID profile",
    researchgate: "ResearchGate profile",
    portraitAlt: "Portrait of",
    viewProjects: "View projects", contact: "Get in touch",
  },
  about: {
    eyebrow: "About",
    title: "About me",
    cv: "Download full CV (PDF)",
  },
  interests: {
    eyebrow: "Research interests",
    title: "What I think about, write about, and build.",
    lede: "My work sits at the crossroads of human-centered research and engineering practice - informed by accessibility, ethics, and a belief that the best technology is the kind everyone can use.",
  },
  education: {
    eyebrow: "Education",
    title: "Academic foundations.",
    lede: "Formal training in informatics with a focus on human-computer interaction and inclusive design.",
  },
  publications: {
    eyebrow: "Papers",
    title: "Featured publications",
  },
  events: {
    eyebrow: "Events",
    title: "Recent & upcoming",
  },
  experience: {
    eyebrow: "Experience",
    title: "Professional experience",
    project: "Project",
    projects: "Projects",
  },
  accessibility: {
    eyebrow: "Accessibility",
    title: "Built to be inclusive",
    p1: "This website was built following accessibility and inclusive design principles - semantic HTML, keyboard-navigable components, sufficient color contrast, visible focus states, readable typography, and respect for reduced-motion preferences.",
    p2Before: "Accessibility is an ongoing practice. If you encounter any barrier or have feedback, please",
    p2Link: "get in touch",
    p2After: ". Your input helps make the web more inclusive for everyone.",
    testingTitle: "Quality and accessibility testing",
    testingP1:
      "This portfolio is supported by automated unit, component, end-to-end, and accessibility tests. The test suite checks content integrity, navigation structure, external links, keyboard navigation, responsive behavior, and accessibility issues.",
    testingP2:
      "Accessibility is tested with axe-based tools in both component tests and browser-based end-to-end tests. Automated testing supports the review process, but it does not replace manual testing with keyboard navigation, assistive technologies, and real user feedback.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's collaborate",
    lede: "Let's talk about front-end development opportunities, web projects and accessible interfaces.",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Built with care for accessibility and performance.",
  },
  notFound: {
    message: "Oops! Page not found",
    home: "Return to Home",
  },
};

export type UI = typeof en;

const pt: UI = {
  "projects": {
    "eyebrow": "Projetos",
    "title": "Projetos que você pode explorar",
    "lede": "Aplicações web, componentes reutilizáveis e ferramentas que desenvolvi.",
    "featured": "Em destaque",
    "more": "Outros projetos",
    "visit": "Acessar aplicação",
    "account": "Requer conta",
    "prototype": "Protótipo",
    "preview": "Captura de tela de"
  },
  "research": {
    "eyebrow": "Pesquisa",
    "title": "Pesquisa que acompanha a prática",
    "lede": "Acessibilidade e qualidade de software conectam minha pesquisa às interfaces que desenvolvo."
  }
,
  meta: {
    title: "Ana Ferreira | Desenvolvedora Front-end",
    description:
      "Desenvolvedora front-end com experiência em React, TypeScript e acessibilidade. Conheça meus projetos, experiência profissional e pesquisa.",
  },
  skipLink: "Pular para o conteúdo principal",
  opensInNewTab: "(abre em nova aba)",
  present: "Atual",
  months: ["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."],
  languageNames: { en: "Inglês", pt: "Português" },
  header: {
    navLabel: "Principal",
    mobileNavLabel: "Menu móvel",
    nav: {
      about: "Sobre",
      projects: "Projetos", research: "Pesquisa", contact: "Contato",
      publications: "Artigos",
      events: "Eventos",
      experience: "Experiência",
    },
    toDark: "Ativar tema escuro",
    toLight: "Ativar tema claro",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  hero: {
    linksLabel: "Links de contato e perfis",
    email: "Enviar e-mail",
    linkedin: "Perfil no LinkedIn",
    github: "Perfil no GitHub",
    scholar: "Perfil no Google Acadêmico",
    orcid: "Perfil no ORCID",
    researchgate: "Perfil no ResearchGate",
    portraitAlt: "Retrato de",
    viewProjects: "Ver projetos", contact: "Entrar em contato",
  },
  about: {
    eyebrow: "Sobre",
    title: "Sobre mim",
    cv: "Baixar CV completo (PDF)",
  },
  interests: {
    eyebrow: "Interesses de pesquisa",
    title: "O que eu estudo, escrevo e construo.",
    lede: "Meu trabalho fica no encontro entre a pesquisa centrada em pessoas e a prática de engenharia, guiado pela acessibilidade, pela ética e pela convicção de que a melhor tecnologia é aquela que todo mundo consegue usar.",
  },
  education: {
    eyebrow: "Formação",
    title: "Base acadêmica.",
    lede: "Formação em computação com foco em interação humano-computador e design inclusivo.",
  },
  publications: {
    eyebrow: "Artigos",
    title: "Publicações em destaque",
  },
  events: {
    eyebrow: "Eventos",
    title: "Recentes e próximos",
  },
  experience: {
    eyebrow: "Experiência",
    title: "Experiência profissional",
    project: "Projeto",
    projects: "Projetos",
  },
  accessibility: {
    eyebrow: "Acessibilidade",
    title: "Feito para ser inclusivo",
    p1: "Este site foi construído seguindo princípios de acessibilidade e design inclusivo: HTML semântico, componentes navegáveis por teclado, contraste de cores adequado, foco visível, tipografia legível e respeito à preferência por movimento reduzido.",
    p2Before: "Acessibilidade é uma prática contínua. Se você encontrar alguma barreira ou tiver sugestões,",
    p2Link: "entre em contato",
    p2After: ". Seu retorno ajuda a tornar a web mais inclusiva para todas as pessoas.",
    testingTitle: "Testes de qualidade e acessibilidade",
    testingP1:
      "Este portfólio conta com testes automatizados de unidade, de componentes, end-to-end e de acessibilidade. A suíte verifica a integridade do conteúdo, a estrutura de navegação, os links externos, a navegação por teclado, o comportamento responsivo e problemas de acessibilidade.",
    testingP2:
      "A acessibilidade é testada com ferramentas baseadas no axe, tanto nos testes de componentes quanto nos testes end-to-end no navegador. Os testes automatizados apoiam a revisão, mas não substituem testes manuais com teclado, tecnologias assistivas e o retorno de pessoas usuárias.",
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos colaborar",
    lede: "Vamos conversar sobre oportunidades em desenvolvimento front-end, projetos web e interfaces acessíveis.",
  },
  footer: {
    rights: "Todos os direitos reservados.",
    built: "Feito com cuidado para acessibilidade e desempenho.",
  },
  notFound: {
    message: "Ops! Página não encontrada",
    home: "Voltar para o início",
  },
};

export const ui: Record<Lang, UI> = { en, pt };
