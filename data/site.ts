// Central site configuration — single source of truth for SEO metadata,
// structured data, and the sitemap/robots/manifest route handlers.

export const siteConfig = {
  name: 'Nasroallah Elidrissi',
  jobTitle: 'Software Engineer',
  url: 'https://nasroallah.tech',
  locale: 'en_US',
  email: 'nasroallah.elidrissi@gmail.com',
  title: 'Nasroallah Elidrissi – Software Engineer',
  description:
    'Personal portfolio of Nasroallah Elidrissi, a Software Engineer specialized in backend architecture, data engineering, and full-stack development.',
  shortDescription:
    'Results-driven Software Engineer with expertise in full-stack development, backend architecture, and data integration.',
  keywords: [
    'Nasroallah Elidrissi',
    'software engineer',
    'backend engineer',
    'data engineer',
    'full-stack developer',
    'backend architecture',
    'data engineering',
    'NestJS',
    'Next.js',
    'TypeScript',
    'PostgreSQL',
    'portfolio',
  ],
  location: {
    city: 'Casablanca',
    country: 'Morocco',
    countryCode: 'MA',
  },
  social: {
    linkedin: 'https://linkedin.com/in/nasroallah-el-idrissi',
    github: 'https://github.com/NorsHimself',
  },
} as const;
