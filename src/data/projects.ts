import type { Localized } from "@/i18n/config";

export type Project = { id: string; name: string; description: Localized; category: Localized; url: string; image: string; featured: boolean; status: "account" | "prototype" | null; technologies: string[] };

export const projects: Project[] = [
  {
    "id": "arretado-de-barato",
    "name": "Arretado de Barato",
    "description": {
      "pt": "Produtos e combustíveis em Alagoas: busca por município, comparação de preços e lista de compras.",
      "en": "Products and fuel in Alagoas: search by city, compare prices and organize a shopping list."
    },
    "category": {
      "pt": "Dados públicos",
      "en": "Public data"
    },
    "url": "https://arretado-de-barato.ferreira-af.workers.dev/",
    "image": "/projects/arretado-de-barato.webp",
    "featured": true,
    "status": null,
    "technologies": [
      "React",
      "TypeScript",
      "TanStack Start",
      "TanStack Query",
      "Tailwind CSS"
    ]
  },
  {
    "id": "cereja-ui",
    "name": "Cereja UI",
    "description": {
      "pt": "Biblioteca de componentes React para interfaces e mídia, com exemplos interativos e orientações de acessibilidade.",
      "en": "A React component library for interfaces and media, with interactive examples and accessibility guidance."
    },
    "category": {
      "pt": "Biblioteca de componentes",
      "en": "Component library"
    },
    "url": "https://cereja-ui.ferreira-af.workers.dev/",
    "image": "/projects/cereja-ui.webp",
    "featured": true,
    "status": null,
    "technologies": [
      "React",
      "TypeScript",
      "Radix UI",
      "HLS.js",
      "dash.js"
    ]
  },
  {
    "id": "controle-de-ponto",
    "name": "Controle de Ponto",
    "description": {
      "pt": "Registro de entradas, pausas e saídas, acompanhamento do saldo de horas e histórico com exportação em CSV.",
      "en": "Clock-ins, breaks and clock-outs, with hour balances and a history that can be exported as CSV."
    },
    "category": {
      "pt": "Produtividade",
      "en": "Productivity"
    },
    "url": "https://controle-de-ponto.ferreira-af.workers.dev/app",
    "image": "/projects/controle-de-ponto.webp",
    "featured": true,
    "status": "account",
    "technologies": [
      "React",
      "TypeScript",
      "TanStack Start",
      "Firebase",
      "Tailwind CSS"
    ]
  },
  {
    "id": "trajeto",
    "name": "Trajeto",
    "description": {
      "pt": "Visualização dos deslocamentos da Linha do Tempo do Google Maps por mês, com processamento do arquivo no próprio dispositivo.",
      "en": "Explore Google Maps Timeline journeys by month, processing the imported file on your own device."
    },
    "category": {
      "pt": "Visualização de dados",
      "en": "Data visualization"
    },
    "url": "https://trajeto.ferreira-af.workers.dev/",
    "image": "/projects/trajeto.webp",
    "featured": false,
    "status": null,
    "technologies": [
      "React",
      "TypeScript",
      "TanStack Start",
      "Leaflet",
      "Tailwind CSS"
    ]
  },
  {
    "id": "vet-em-casa",
    "name": "Vet em Casa",
    "description": {
      "pt": "Apresentação de serviços veterinários domiciliares e pet sitting, com acesso à área de clientes.",
      "en": "A website for at-home veterinary care and pet sitting, with access to a customer area."
    },
    "category": {
      "pt": "Serviços veterinários",
      "en": "Veterinary services"
    },
    "url": "https://vet-em-casa.ferreira-af.workers.dev/",
    "image": "/projects/vet-em-casa.webp",
    "featured": false,
    "status": null,
    "technologies": [
      "React",
      "Supabase"
    ]
  },
  {
    "id": "elosa-florentino-app",
    "name": "Instituto Elosa Florentino",
    "description": {
      "pt": "Portal de atendimento do instituto em Maribondo, com orientações ao público e acesso de pacientes a consultas e resultados.",
      "en": "A care portal for the institute in Maribondo, with public information and patient access to appointments and results."
    },
    "category": {
      "pt": "Portal de atendimento",
      "en": "Care portal"
    },
    "url": "https://elosa-florentino-app.ferreira-af.workers.dev/",
    "image": "/projects/elosa-florentino-app.webp",
    "featured": false,
    "status": null,
    "technologies": [
      "React",
      "TypeScript",
      "TanStack Start",
      "Supabase",
      "Tailwind CSS"
    ]
  },
  {
    "id": "editor-documentos-mantine",
    "name": "Editor de documentos",
    "description": {
      "pt": "Protótipo com Mantine para editar texto rico e metadados, visualizar o documento ao vivo e exportar a prévia em PDF.",
      "en": "A Mantine prototype for editing rich text and metadata, with a live document preview and PDF export."
    },
    "category": {
      "pt": "Edição de conteúdo",
      "en": "Content editing"
    },
    "url": "https://editor-documentos-mantine.ferreira-af.workers.dev/",
    "image": "/projects/editor-documentos-mantine.webp",
    "featured": false,
    "status": "prototype",
    "technologies": [
      "React",
      "Mantine",
      "Tiptap"
    ]
  }
];
