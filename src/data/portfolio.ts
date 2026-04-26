/**
 * Portfolio content
 */

export const profile = {
  name: "Ana Ferreira",
  title: "Researcher · Developer · Accessibility Specialist",
  affiliation: "Federal University of Alagoas",
  group: "EASY - Engineering and Systems",
  shortBio:
    "I work at the intersection of academic research, software development, and inclusive technology - building digital experiences that are accessible by design.",
  email: "alsf@ic.ufal.br",
  location: "Brazil",
  links: {
    email: "mailto:alsf@ic.ufal.br",
    linkedin: "https://www.linkedin.com/in/anaferreira015",
    github: "https://github.com/AnaFerreira015",
    orcid: "https://orcid.org/0009-0005-6732-8240",
    researchgate: "https://www.researchgate.net/profile/Ana-Ferreira-405", 
    cv: "#", // TODO: link to PDF
    scholar: "https://scholar.google.com.br/citations?hl=en&user=Q5FnKKQAAAAJ",
  },
};

export const about = {
  paragraphs: [
    "I am a researcher and developer with a strong focus on digital accessibility and inclusive technology. My work bridges human-centered research and hands-on engineering, helping organizations design products that work for everyone.",
    "Across academia and industry, I have contributed to research projects, published peer-reviewed work, and shipped accessible software - from web platforms to assistive tools. I believe that great technology is invisible, equitable, and built with care.",
  ],
  highlights: [
    { label: "Years in research & dev", value: "6+" },
    { label: "Talks & workshops", value: "10+" },
  ],
};

export const researchInterests = [
  {
    title: "Digital Accessibility",
    description: "Inclusive design, WCAG, assistive technology, accessible web platforms.",
  },
  {
    title: "Human–Computer Interaction",
    description: "User experience research, interaction design, participatory methods.",
  },
  {
    title: "Inclusive Technology",
    description: "Designing tools that serve people with diverse abilities and contexts.",
  },
  {
    title: "Web Engineering",
    description: "Modern frontend architectures, performance, semantic and accessible UI.",
  },
  {
    title: "Educational Technology",
    description: "Accessible learning experiences and digital literacy.",
  },
  {
    title: "Ethics in Technology",
    description: "Responsible AI, equity, and the social impact of digital systems.",
  },
];

export const education = [
  // {
  //   degree: "PhD in Informatics / HCI",
  //   institution: "University Name",
  //   period: "20XX - Present",
  //   detail:
  //     "Thesis on accessibility and inclusive design in interactive systems. Advisor: Prof. Name.",
  // },
  {
    degree: "MSc in Computer Science",
    institution: "Federal University of Alagoas",
    period: "2025 - Present",
    detail: "Specialization in Human-Computer Interaction and Accessibility.",
  },
  {
    degree: "Postgraduate Certificate in Information Technology",
    institution: "Faculdade Venda Nova do Imigrante - FAVENI",
    period: "2023 - 2025",
    detail: "Specialization in Human-Computer Interaction and Accessibility.",
  },
  {
    degree: "BSc in Computer Science",
    institution: "Federal University of Alagoas",
    period: "2018 - 2024",
    detail: "Final project focused on accessible web technologies.",
  },
  {
    degree: "Computer Technician",
    institution: "Federal Institute of Education, Science and Technology of Alagoas",
    period: "2014 - 2018",
    // detail: "Final project focused on accessible web technologies.",
  },
];

export const publications = [
  {
    title: "A11yArgus: Automated Detection and Empirical Analysis of Accessibility Issues in Android Apps",
    authors: "Ana Ferreira; Márcio Ribeiro; Breno Miranda; Rohit Gheyi; Ivan Machado; Baldoino Fonseca",
    venue: "CHASE'26: 19th International Conference on Cooperative and Human Aspects of Software Engineering",
    year: "2026",
    language: "English",
    link: "https://doi.org/10.1145/3794860.3794906",
  },
  {
    title: "Making Websites More Accessible For Blind People With Automatic HTML Code Transformations",
    authors: "Ferreira, Ana; Ribeiro, Márcio",
    venue: "Brazilian Conference on Software: Practice and Theory (CBSoft)",
    year: "2023",
    language: "English",
    link: "https://doi.org/10.5753/cbsoft_estendido.2023.235743",
  },
  {
    title: "Desenvolvimento de uma API REST para um Sistema Acadêmico de Terceiros.",
    authors: "AS Ferreira; JM Nicacio; GV Ferreira; GM Santos Filho; VS Rodrigues",
    venue: "Computing & System Journal (C&S)/Revista de Sistemas e Computação (RSC)",
    year: "2018",
    language: "Portuguese",
    link: "https://revistas.unifacs.br/index.php/rsc/article/view/5862",
  },
  {
    title: "Em Busca de uma API REST para um Sistema Acadêmico de Terceiros",
    authors: "Ana Ferreira; Jalves Nicacio; Glauber Ferreira; Greyson Santos Filho; Vanderson Rodrigues",
    venue: "Regional School of Computing Bahia, Alagoas and Sergipe (ERBASE)",
    year: "2018",
    language: "Portuguese",
    link: "https://sol.sbc.org.br/index.php/erbase/article/view/8537",
  },
];

export const events = [
  {
    date: "Apr 2026",
    name: "CHASE - International Conference on Cooperative and Human Aspects of Software Engineering",
    role: "Paper Presentation",
    language: "English",
    link: "#",
  },
  {
    date: "Dec 2022",
    name: "DevFest Sul - BR",
    role: "Invited Speaker",
    language: "Portuguese",
    link: "#",
  },
  {
    date: "Nov 2022",
    name: "Semana de Sistemas de Informação - USP",
    role: "Invited Speaker",
    language: "Portuguese",
    link: "#",
  },
  {
    date: "Nov 2022",
    name: "PrograMaria",
    role: "Invited Speaker",
    language: "Portuguese",
    link: "#",
  },
  {
    date: "Oct 2022",
    name: "Semana de Computação - UFAL",
    role: "Invited Speaker",
    language: "Portuguese",
    link: "#",
  },
  {
    date: "Sep 2022",
    name: "Roga Developer Experience",
    role: "Panelist",
    language: "Portuguese",
    link: "#",
  },
  {
    date: "Oct 2021",
    name: "Semana de Computação - UFAL",
    role: "Panelist",
    language: "Portuguese",
    link: "#",
  },
  {
    date: "Oct 2019",
    name: "Federal Institute of Education, Science and Technology of Alagoas",
    role: "Invited Speaker",
    language: "Portuguese",
    link: "#",
  },
  {
    date: "Sep 2019",
    name: "Semana de Computação - UFAL",
    role: "Invited Speaker",
    language: "Portuguese",
    link: "#",
  },
  {
    date: "Mar 2019",
    name: "Google Developer Group",
    role: "Invited Speaker",
    language: "Portuguese",
    link: "#",
  },
  // {
  //   date: "Nov 2022",
  //   name: "University Workshop on Inclusive Design",
  //   role: "Workshop Lead",
  //   link: "#",
  // },
];

export const experience = [
  {
    role: "Mid-level Full Stack Developer",
    company: "Hand Talk",
    period: "Jan 2023 - Jul 2023",
    employmentType: "Full-time",
    location: "Remote",
    description:
      "Worked as a mid-level full stack developer, contributing to backend and full stack product development in an accessibility-focused technology company.",
    tags: ["Back-end development", "Node.js", "Full stack", "Accessibility"],
  },
  {
    role: "Junior Full Stack Developer",
    company: "Hand Talk",
    period: "May 2021 - Jan 2023",
    employmentType: "Full-time",
    location: "Maceió, Alagoas, Brazil",
    description:
      "Developed and maintained full stack features, working across backend services, databases, and web applications while supporting product evolution and accessibility-related initiatives.",
    tags: ["Back-end development", "SQL", "Full stack", "Web applications"],
  },
  {
    role: "Junior Full Stack Developer",
    company: "Hand Talk",
    period: "Jul 2020 - May 2021",
    employmentType: "Part-time",
    location: "Maceió, Alagoas, Brazil",
    description:
      "Contributed to backend and full stack development with a strong connection to W3C accessibility practices and inclusive digital experiences.",
    tags: ["Back-end development", "W3C Accessibility", "Full stack", "A11y"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Hand Talk",
    period: "Jul 2018 - Jul 2020",
    employmentType: "Internship",
    location: "Maceió, Alagoas, Brazil",
    description:
      "Started as a full stack development intern, supporting backend and web development tasks and building practical experience in production software projects.",
    tags: ["Back-end development", "PHP", "Full stack", "Software development"],
  },
  {
    role: "Student Researcher",
    company: "Federal Institute of Education, Science and Technology of Alagoas (IFAL)",
    period: "Aug 2017 - May 2018",
    employmentType: "Part-time",
    location: "Palmeira dos Índios, Alagoas, Brazil",
    description:
      "Developed a set of web services to enable access to academic data from IFAL's integrated academic management system. The project supported students, professors, technicians, and IT analysts in building software that reused institutional academic data for research, development, and innovation initiatives. The work followed agile practices based on Scrum, with frequent deliveries, testing, and documentation throughout the project.",
    tags: ["REST API", "API design", "Web services", "Scrum", "Research"],
  },
  {
    role: "Teaching Assistant - Object-Oriented Programming",
    company: "Federal Institute of Education, Science and Technology of Alagoas (IFAL)",
    period: "Jun 2017 - Dec 2017",
    employmentType: "Part-time",
    location: "Palmeira dos Índios, Alagoas, Brazil",
    description:
      "Served as a teaching assistant for the Object-Oriented Programming course, supporting students with programming concepts and course activities under the supervision of Professor Jalves Mendonça Nicácio.",
    tags: ["Object-Oriented Programming", "Teaching", "Mentoring", "Programming"],
  },
  {
    role: "Teaching Assistant - Algorithms and Data Structures",
    company: "Federal Institute of Education, Science and Technology of Alagoas (IFAL)",
    period: "Sep 2016 - Mar 2017",
    employmentType: "Part-time",
    location: "Palmeira dos Índios, Alagoas, Brazil",
    description:
      "Served as a teaching assistant for Algorithms and Data Structures, supporting students in foundational computing topics under the supervision of Professor Emerson Ferreira.",
    tags: ["Algorithms", "Data Structures", "Teaching", "Programming"],
  },
];
