import type { Lang } from "./config";

/**
 * Interface text (headings, labels, buttons).
 * Portfolio content (bio, jobs, papers...) lives in src/data/portfolio.ts.
 */
const en = {
  meta: {
    title: "Ana Ferreira | Researcher, Developer & Accessibility Specialist",
    description:
      "Personal portfolio of Ana Ferreira | researcher, developer, and accessibility specialist working at the intersection of HCI, inclusive design, and modern web engineering.",
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
      about: "Bio",
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
  },
  about: {
    eyebrow: "01 - About",
    title: "About me",
    cv: "Download full CV (PDF)",
  },
  interests: {
    eyebrow: "02 - Research interests",
    title: "What I think about, write about, and build.",
    lede: "My work sits at the crossroads of human-centered research and engineering practice - informed by accessibility, ethics, and a belief that the best technology is the kind everyone can use.",
  },
  education: {
    eyebrow: "03 - Education",
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
    lede: "I'm always happy to discuss research collaborations, accessibility consulting, speaking opportunities, or interesting problems in inclusive technology.",
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
  meta: {
    title: "Ana Ferreira | Pesquisadora, Desenvolvedora e Especialista em Acessibilidade",
    description:
      "Portfólio de Ana Ferreira | pesquisadora, desenvolvedora e especialista em acessibilidade, atuando na interseção entre IHC, design inclusivo e engenharia web moderna.",
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
      about: "Bio",
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
  },
  about: {
    eyebrow: "01 - Sobre",
    title: "Sobre mim",
    cv: "Baixar CV completo (PDF)",
  },
  interests: {
    eyebrow: "02 - Interesses de pesquisa",
    title: "O que eu estudo, escrevo e construo.",
    lede: "Meu trabalho fica no encontro entre a pesquisa centrada em pessoas e a prática de engenharia, guiado pela acessibilidade, pela ética e pela convicção de que a melhor tecnologia é aquela que todo mundo consegue usar.",
  },
  education: {
    eyebrow: "03 - Formação",
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
    lede: "Estou sempre aberta a conversar sobre colaborações de pesquisa, consultoria em acessibilidade, convites para palestras ou problemas interessantes em tecnologia inclusiva.",
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
