/**
 * Portfolio content
 *
 * Text fields accept either a plain string (same text in both languages, e.g. names,
 * company names, paper titles) or { en, pt } with one version per language.
 * Dates use "YYYY-MM" (or just "YYYY") and are formatted per language by the components.
 * `language` on papers and events is a language code: "en" or "pt".
 */
import type { Lang, Localized } from "@/i18n/config";

const IFAL: Localized = {
  en: "Federal Institute of Education, Science and Technology of Alagoas (IFAL)",
  pt: "Instituto Federal de Educação, Ciência e Tecnologia de Alagoas (IFAL)",
};

const UFAL: Localized = {
  en: "Federal University of Alagoas",
  pt: "Universidade Federal de Alagoas",
};

const MACEIO: Localized = { en: "Maceió, Alagoas, Brazil", pt: "Maceió, Alagoas, Brasil" };
const PALMEIRA: Localized = {
  en: "Palmeira dos Índios, Alagoas, Brazil",
  pt: "Palmeira dos Índios, Alagoas, Brasil",
};

const FULL_TIME: Localized = { en: "Full-time", pt: "Tempo integral" };
const PART_TIME: Localized = { en: "Part-time", pt: "Meio período" };

const INVITED_SPEAKER: Localized = { en: "Invited Speaker", pt: "Palestrante convidada" };
const PANELIST: Localized = { en: "Panelist", pt: "Painelista" };

export const profile = {
  name: "Ana Ferreira",
  title: {
    en: "Researcher · Developer · Accessibility Specialist",
    pt: "Pesquisadora · Desenvolvedora · Especialista em Acessibilidade",
  } as Localized,
  affiliation: UFAL,
  group: "EASY - Engineering and Systems" as Localized,
  shortBio: {
    en: "I work at the intersection of academic research, software development, and inclusive technology - building digital experiences that are accessible by design.",
    pt: "Trabalho na interseção entre pesquisa acadêmica, desenvolvimento de software e tecnologia inclusiva, criando experiências digitais acessíveis desde a concepção.",
  } as Localized,
  email: "alsf@ic.ufal.br",
  location: { en: "Brazil", pt: "Brasil" } as Localized,
  links: {
    email: "mailto:alsf@ic.ufal.br",
    linkedin: "https://www.linkedin.com/in/anaferreira015",
    github: "https://github.com/AnaFerreira015",
    orcid: "https://orcid.org/0009-0005-6732-8240",
    researchgate: "https://www.researchgate.net/profile/Ana-Ferreira-405",
    cv: "#", // TODO: link to PDF (can be { en, pt } later if you have one CV per language)
    scholar: "https://scholar.google.com.br/citations?hl=en&user=Q5FnKKQAAAAJ",
  },
};

export const about = {
  paragraphs: [
    {
      en: "I am a researcher and developer with a strong focus on digital accessibility and inclusive technology. My work bridges human-centered research and hands-on engineering, helping organizations design products that work for everyone.",
      pt: "Sou pesquisadora e desenvolvedora com forte foco em acessibilidade digital e tecnologia inclusiva. Meu trabalho une a pesquisa centrada em pessoas e a engenharia na prática, ajudando organizações a criar produtos que funcionem para todo mundo.",
    },
    {
      en: "Across academia and industry, I have contributed to research projects, published peer-reviewed work, and shipped accessible software - from web platforms to assistive tools. I believe that great technology is invisible, equitable, and built with care.",
      pt: "Na academia e no mercado, contribuí com projetos de pesquisa, publiquei trabalhos revisados por pares e entreguei software acessível, de plataformas web a ferramentas assistivas. Acredito que uma boa tecnologia é invisível, equitativa e feita com cuidado.",
    },
  ] as Localized[],
  highlights: [
    {
      label: { en: "Years in research & dev", pt: "Anos em pesquisa e desenvolvimento" } as Localized,
      value: "6+",
    },
    { label: { en: "Talks & workshops", pt: "Palestras e workshops" } as Localized, value: "10+" },
  ],
};

export const researchInterests: { title: Localized; description: Localized }[] = [
  {
    title: { en: "Digital Accessibility", pt: "Acessibilidade Digital" },
    description: {
      en: "Inclusive design, WCAG, assistive technology, accessible web platforms.",
      pt: "Design inclusivo, WCAG, tecnologias assistivas, plataformas web acessíveis.",
    },
  },
  {
    title: { en: "Human–Computer Interaction", pt: "Interação Humano-Computador" },
    description: {
      en: "User experience research, interaction design, participatory methods.",
      pt: "Pesquisa de experiência do usuário, design de interação, métodos participativos.",
    },
  },
  // {
  //   title: { en: "Inclusive Technology", pt: "Tecnologia Inclusiva" },
  //   description: {
  //     en: "Designing tools that serve people with diverse abilities and contexts.",
  //     pt: "Ferramentas pensadas para pessoas com diferentes habilidades e contextos.",
  //   },
  // },
  {
    title: { en: "Web Engineering", pt: "Engenharia Web" },
    description: {
      en: "Modern frontend architectures, performance, semantic and accessible UI.",
      pt: "Arquiteturas frontend modernas, desempenho, interfaces semânticas e acessíveis.",
    },
  },
  // {
  //   title: { en: "Educational Technology", pt: "Tecnologia Educacional" },
  //   description: {
  //     en: "Accessible learning experiences and digital literacy.",
  //     pt: "Experiências de aprendizagem acessíveis e letramento digital.",
  //   },
  // },
  // {
  //   title: { en: "Ethics in Technology", pt: "Ética na Tecnologia" },
  //   description: {
  //     en: "Responsible AI, equity, and the social impact of digital systems.",
  //     pt: "IA responsável, equidade e o impacto social dos sistemas digitais.",
  //   },
  // },
];

export type EducationItem = {
  degree: Localized;
  institution: Localized;
  start: string;
  /** Omit while ongoing ("Present" / "Atual"). */
  end?: string;
  detail?: Localized;
};

export const education: EducationItem[] = [
  {
    degree: { en: "MSc in Computer Science", pt: "Mestrado em Ciência da Computação" },
    institution: UFAL,
    start: "2025",
    detail: {
      en: "Specialization in Human-Computer Interaction and Accessibility.",
      pt: "Ênfase em Interação Humano-Computador e Acessibilidade.",
    },
  },
  {
    degree: {
      en: "Postgraduate Certificate in Information Technology",
      pt: "Especialização em Tecnologia da Informação",
    },
    institution: "Faculdade Venda Nova do Imigrante - FAVENI",
    start: "2023",
    end: "2025",
    detail: {
      en: "Specialization in Human-Computer Interaction and Accessibility.",
      pt: "Ênfase em Interação Humano-Computador e Acessibilidade.",
    },
  },
  {
    degree: { en: "BSc in Computer Science", pt: "Bacharelado em Ciência da Computação" },
    institution: UFAL,
    start: "2018",
    end: "2024",
    detail: {
      en: "Final project focused on accessible web technologies.",
      pt: "Trabalho de conclusão de curso focado em tecnologias web acessíveis.",
    },
  },
  {
    degree: { en: "Computer Technician", pt: "Técnico em Informática" },
    institution: {
      en: "Federal Institute of Education, Science and Technology of Alagoas",
      pt: "Instituto Federal de Educação, Ciência e Tecnologia de Alagoas",
    },
    start: "2014",
    end: "2018",
  },
];

export type Publication = {
  /** Kept in the original language of the paper. */
  title: string;
  authors: string;
  venue: Localized;
  year: string;
  /** Language the paper is written in. */
  language: Lang;
  link: string;
};

export const publications: Publication[] = [
  {
    title: "A11yArgus: Automated Detection and Empirical Analysis of Accessibility Issues in Android Apps",
    authors: "Ana Ferreira; Márcio Ribeiro; Breno Miranda; Rohit Gheyi; Ivan Machado; Baldoino Fonseca",
    venue: "CHASE'26: 19th International Conference on Cooperative and Human Aspects of Software Engineering",
    year: "2026",
    language: "en",
    link: "https://doi.org/10.1145/3794860.3794906",
  },
  {
    title: "Making Websites More Accessible For Blind People With Automatic HTML Code Transformations",
    authors: "Ferreira, Ana; Ribeiro, Márcio",
    venue: {
      en: "Brazilian Conference on Software: Practice and Theory (CBSoft)",
      pt: "Congresso Brasileiro de Software: Teoria e Prática (CBSoft)",
    },
    year: "2023",
    language: "pt",
    link: "https://doi.org/10.5753/cbsoft_estendido.2023.235743",
  },
  {
    title: "Desenvolvimento de uma API REST para um Sistema Acadêmico de Terceiros.",
    authors: "AS Ferreira; JM Nicacio; GV Ferreira; GM Santos Filho; VS Rodrigues",
    venue: "Computing & System Journal (C&S)/Revista de Sistemas e Computação (RSC)",
    year: "2018",
    language: "pt",
    link: "https://revistas.unifacs.br/index.php/rsc/article/view/5862",
  },
  {
    title: "Em Busca de uma API REST para um Sistema Acadêmico de Terceiros",
    authors: "Ana Ferreira; Jalves Nicacio; Glauber Ferreira; Greyson Santos Filho; Vanderson Rodrigues",
    venue: {
      en: "Regional School of Computing Bahia, Alagoas and Sergipe (ERBASE)",
      pt: "Escola Regional de Computação Bahia, Alagoas e Sergipe (ERBASE)",
    },
    year: "2018",
    language: "pt",
    link: "https://sol.sbc.org.br/index.php/erbase/article/view/8537",
  },
];

export type EventItem = {
  /** "YYYY-MM" */
  date: string;
  name: Localized;
  role: Localized;
  /** Language the talk was given in. */
  language: Lang;
  link: string;
};

export const events: EventItem[] = [
  {
    date: "2026-04",
    name: "CHASE - International Conference on Cooperative and Human Aspects of Software Engineering",
    role: { en: "Paper Presentation", pt: "Apresentação de artigo" },
    language: "en",
    link: "#",
  },
  {
    date: "2022-12",
    name: "DevFest Sul - BR",
    role: INVITED_SPEAKER,
    language: "pt",
    link: "#",
  },
  {
    date: "2022-11",
    name: "Semana de Sistemas de Informação - USP",
    role: INVITED_SPEAKER,
    language: "pt",
    link: "#",
  },
  {
    date: "2022-11",
    name: "PrograMaria",
    role: INVITED_SPEAKER,
    language: "pt",
    link: "#",
  },
  {
    date: "2022-10",
    name: "Semana de Computação - UFAL",
    role: INVITED_SPEAKER,
    language: "pt",
    link: "#",
  },
  {
    date: "2022-09",
    name: "Roga Developer Experience",
    role: PANELIST,
    language: "pt",
    link: "#",
  },
  {
    date: "2021-10",
    name: "Semana de Computação - UFAL",
    role: PANELIST,
    language: "pt",
    link: "#",
  },
  {
    date: "2019-10",
    name: {
      en: "Federal Institute of Education, Science and Technology of Alagoas",
      pt: "Instituto Federal de Educação, Ciência e Tecnologia de Alagoas",
    },
    role: INVITED_SPEAKER,
    language: "pt",
    link: "#",
  },
  {
    date: "2019-09",
    name: "Semana de Computação - UFAL",
    role: INVITED_SPEAKER,
    language: "pt",
    link: "#",
  },
  {
    date: "2019-03",
    name: "Google Developer Group",
    role: INVITED_SPEAKER,
    language: "pt",
    link: "#",
  },
  // {
  //   date: "2022-11",
  //   name: "University Workshop on Inclusive Design",
  //   role: { en: "Workshop Lead", pt: "Condução de workshop" },
  //   language: "en",
  //   link: "#",
  // },
];

export type ExperienceItem = {
  role: Localized;
  company: Localized;
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM". Omit while ongoing ("Present" / "Atual"). */
  end?: string;
  employmentType?: Localized;
  location?: Localized;
  /** Projects worked on in this role. */
  projects?: Localized[];
  /** Short paragraph. Use this, `highlights`, or both. */
  description?: Localized;
  /** Bullet points. */
  highlights?: Localized[];
  tags: Localized[];
};

const EASY: Localized = {
  en: "EASY - Engineering and Systems Research Center",
  pt: "EASY - Centro de Pesquisa em Engenharia e Sistemas",
};

const RESEARCH_GRANT: Localized = { en: "Research grant", pt: "Bolsista" };

export const experience: ExperienceItem[] = [
  {
    role: { en: "Mid-level Software Tester", pt: "Testadora de Software Pleno" },
    company: EASY,
    start: "2026-07",
    employmentType: RESEARCH_GRANT,
    location: MACEIO,
    projects: [
      {
        en: "Research and Development of a Solution for Generating Ophthalmological Reports",
        pt: "Pesquisa e Desenvolvimento de Solução para Geração de Laudos Oftalmológicos",
      },
    ],
    highlights: [
      {
        en: "Created test processes and plans for a platform that supports the generation of ophthalmological reports.",
        pt: "Criação de processos e planos de teste para plataforma de apoio à geração de laudos oftalmológicos.",
      },
      {
        en: "Executed test cases, logged defects, and analyzed test suite quality using metrics such as code coverage and mutation testing.",
        pt: "Execução de casos de teste, registro de defeitos e análise da qualidade da suíte de testes por meio de métricas como cobertura de código e testes de mutação.",
      },
    ],
    tags: [
      { en: "Software testing", pt: "Testes de software" },
      { en: "Test planning", pt: "Planejamento de testes" },
      { en: "Code coverage", pt: "Cobertura de código" },
      { en: "Mutation testing", pt: "Testes de mutação" },
    ],
  },
  {
    role: { en: "Mid-level Front-end Developer", pt: "Desenvolvedora Front-end Pleno" },
    company: EASY,
    start: "2025-03",
    end: "2026-04",
    employmentType: RESEARCH_GRANT,
    location: MACEIO,
    projects: [
      {
        en: "Intelligent Document Development Platform",
        pt: "Plataforma Inteligente de Desenvolvimento de Documentos",
      },
      {
        en: "14th National Conference on Social Assistance",
        pt: "14ª Conferência Nacional de Assistência Social",
      },
    ],
    highlights: [
      {
        en: "Designed, developed, and maintained robust, scalable web applications.",
        pt: "Projeto, desenvolvimento e manutenção de aplicações web robustas e escaláveis.",
      },
      {
        en: "Collaborated with designers, product managers, and other developers to meet project requirements.",
        pt: "Colaboração com designers, gerentes de produto e demais desenvolvedores para garantir o atendimento aos requisitos dos projetos.",
      },
      {
        en: "Optimized the performance of existing applications, fixed bugs, and delivered continuous improvements.",
        pt: "Otimização de performance de aplicações existentes, resolução de bugs e implementação de melhorias contínuas.",
      },
      {
        en: "Wrote automated tests, implemented security measures, and produced technical documentation to ensure maintainability.",
        pt: "Escrita de testes automatizados, implementação de medidas de segurança e elaboração de documentação técnica para garantir manutenibilidade.",
      },
    ],
    tags: [
      { en: "Front-end development", pt: "Desenvolvimento front-end" },
      "Performance",
      { en: "Automated testing", pt: "Testes automatizados" },
      { en: "Technical documentation", pt: "Documentação técnica" },
    ],
  },
  {
    role: { en: "Front-end Developer", pt: "Desenvolvedora Front-end" },
    company: "eSapiens Tecnologia S.A.",
    start: "2023-09",
    end: "2026-02",
    employmentType: FULL_TIME,
    location: { en: "Brazil", pt: "Brasil" },
    description: {
      en: "Worked as a front-end developer, contributing to the development and maintenance of web applications and interfaces, with experience connected to PHP, Node.js, and frontend development practices.",
      pt: "Atuei como desenvolvedora front-end, contribuindo para o desenvolvimento e a manutenção de aplicações e interfaces web, com experiência ligada a PHP, Node.js e boas práticas de desenvolvimento frontend.",
    },
    tags: [
      { en: "Front-end development", pt: "Desenvolvimento front-end" },
      "PHP",
      "Node.js",
      { en: "Web applications", pt: "Aplicações web" },
    ],
  },
  {
    role: { en: "Mid-level Full Stack Developer", pt: "Desenvolvedora Full Stack Pleno" },
    company: "Hand Talk",
    start: "2023-01",
    end: "2023-07",
    employmentType: FULL_TIME,
    location: { en: "Remote", pt: "Remoto" },
    description: {
      en: "Worked as a mid-level full stack developer, contributing to backend and full stack product development in an accessibility-focused technology company.",
      pt: "Atuei como desenvolvedora full stack pleno, contribuindo para o desenvolvimento backend e full stack de produtos em uma empresa de tecnologia focada em acessibilidade.",
    },
    tags: [
      { en: "Back-end development", pt: "Desenvolvimento back-end" },
      "Node.js",
      "Full stack",
      { en: "Accessibility", pt: "Acessibilidade" },
    ],
  },
  {
    role: { en: "Junior Full Stack Developer", pt: "Desenvolvedora Full Stack Júnior" },
    company: "Hand Talk",
    start: "2021-05",
    end: "2023-01",
    employmentType: FULL_TIME,
    location: MACEIO,
    description: {
      en: "Developed and maintained full stack features, working across backend services, databases, and web applications while supporting product evolution and accessibility-related initiatives.",
      pt: "Desenvolvi e mantive funcionalidades full stack, atuando em serviços de backend, bancos de dados e aplicações web, apoiando a evolução do produto e iniciativas relacionadas à acessibilidade.",
    },
    tags: [
      { en: "Back-end development", pt: "Desenvolvimento back-end" },
      "SQL",
      "Full stack",
      { en: "Web applications", pt: "Aplicações web" },
    ],
  },
  {
    role: { en: "Junior Full Stack Developer", pt: "Desenvolvedora Full Stack Júnior" },
    company: "Hand Talk",
    start: "2020-07",
    end: "2021-05",
    employmentType: PART_TIME,
    location: MACEIO,
    description: {
      en: "Contributed to backend and full stack development with a strong connection to W3C accessibility practices and inclusive digital experiences.",
      pt: "Contribuí com o desenvolvimento backend e full stack, com forte ligação às práticas de acessibilidade do W3C e a experiências digitais inclusivas.",
    },
    tags: [
      { en: "Back-end development", pt: "Desenvolvimento back-end" },
      { en: "W3C Accessibility", pt: "Acessibilidade W3C" },
      "Full stack",
      "A11y",
    ],
  },
  {
    role: { en: "Full Stack Developer Intern", pt: "Estagiária de Desenvolvimento Full Stack" },
    company: "Hand Talk",
    start: "2018-07",
    end: "2020-07",
    employmentType: { en: "Internship", pt: "Estágio" },
    location: MACEIO,
    description: {
      en: "Started as a full stack development intern, supporting backend and web development tasks and building practical experience in production software projects.",
      pt: "Comecei como estagiária de desenvolvimento full stack, apoiando tarefas de backend e desenvolvimento web e ganhando experiência prática em projetos de software em produção.",
    },
    tags: [
      { en: "Back-end development", pt: "Desenvolvimento back-end" },
      "PHP",
      "Full stack",
      { en: "Software development", pt: "Desenvolvimento de software" },
    ],
  },
  {
    role: { en: "Student Researcher", pt: "Estudante Pesquisadora" },
    company: IFAL,
    start: "2017-08",
    end: "2018-05",
    employmentType: PART_TIME,
    location: PALMEIRA,
    description: {
      en: "Developed a set of web services to enable access to academic data from IFAL's integrated academic management system. The project supported students, professors, technicians, and IT analysts in building software that reused institutional academic data for research, development, and innovation initiatives. The work followed agile practices based on Scrum, with frequent deliveries, testing, and documentation throughout the project.",
      pt: "Desenvolvi um conjunto de serviços web para permitir o acesso aos dados do sistema integrado de gestão acadêmica do IFAL. O projeto apoiou estudantes, professores, técnicos e analistas de TI na criação de software que reaproveitasse dados acadêmicos institucionais em iniciativas de pesquisa, desenvolvimento e inovação. O trabalho seguiu práticas ágeis baseadas em Scrum, com entregas frequentes, testes e documentação ao longo de todo o projeto.",
    },
    tags: [
      { en: "REST API", pt: "API REST" },
      { en: "API design", pt: "Design de APIs" },
      { en: "Web services", pt: "Serviços web" },
      "Scrum",
      { en: "Research", pt: "Pesquisa" },
    ],
  },
  {
    role: {
      en: "Teaching Assistant - Object-Oriented Programming",
      pt: "Monitora - Programação Orientada a Objetos",
    },
    company: IFAL,
    start: "2017-06",
    end: "2017-12",
    employmentType: PART_TIME,
    location: PALMEIRA,
    description: {
      en: "Served as a teaching assistant for the Object-Oriented Programming course, supporting students with programming concepts and course activities under the supervision of Professor Jalves Mendonça Nicácio.",
      pt: "Atuei como monitora da disciplina de Programação Orientada a Objetos, apoiando estudantes com conceitos de programação e atividades da disciplina, sob supervisão do professor Jalves Mendonça Nicácio.",
    },
    tags: [
      { en: "Object-Oriented Programming", pt: "Programação Orientada a Objetos" },
      { en: "Teaching", pt: "Ensino" },
      { en: "Mentoring", pt: "Mentoria" },
      { en: "Programming", pt: "Programação" },
    ],
  },
  {
    role: {
      en: "Teaching Assistant - Algorithms and Data Structures",
      pt: "Monitora - Algoritmos e Estruturas de Dados",
    },
    company: IFAL,
    start: "2016-09",
    end: "2017-03",
    employmentType: PART_TIME,
    location: PALMEIRA,
    description: {
      en: "Served as a teaching assistant for Algorithms and Data Structures, supporting students in foundational computing topics under the supervision of Professor Emerson Ferreira.",
      pt: "Atuei como monitora da disciplina de Algoritmos e Estruturas de Dados, apoiando estudantes em tópicos fundamentais de computação, sob supervisão do professor Emerson Ferreira.",
    },
    tags: [
      { en: "Algorithms", pt: "Algoritmos" },
      { en: "Data Structures", pt: "Estruturas de Dados" },
      { en: "Teaching", pt: "Ensino" },
      { en: "Programming", pt: "Programação" },
    ],
  },
];
