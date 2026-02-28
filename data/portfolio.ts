import type {
  NavLink,
  ExperienceItem,
  WorkItem,
  ServiceItem,
  TechItem,
  ProcessStep,
  AwardItem,
  PricingPlan,
  FAQItem,
  BudgetRange,
} from '@/types';

const BASE = 'https://wpriverthemes.com/jayden/wp-content/themes/jayden';

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home', icon: 'icon-home-solid' },
  { href: '#experience', label: 'Experience', icon: 'icon-toolbox-solid' },
  { href: '#works', label: 'Projects I worked on', icon: 'icon-tasks-solid' },
  { href: '#services', label: 'Services', icon: 'icon-stream-solid' },
  { href: '#faqs', label: 'FAQs', icon: 'icon-comment-alt-solid' },
  { href: '#contact', label: 'Contact', icon: 'icon-envelope-solid' },
];

export const rightNavLinks: NavLink[] = [
  { href: '#home', label: 'Home', icon: 'icon-home-solid' },
  { href: '#works', label: 'Projects I worked on', icon: 'icon-tasks-solid' },
  { href: '#services', label: 'Services', icon: 'icon-stream-solid' },
  { href: '#faqs', label: 'FAQs', icon: 'icon-comment-alt-solid' },
  { href: '#contact', label: 'Contact', icon: 'icon-envelope-solid' },
];

export const socialLinks = [
  { icon: 'icon-linkedin-in', href: 'https://linkedin.com/in/nasroallah-el-idrissi', label: 'LinkedIn' },
  { icon: 'icon-github', href: 'https://github.com/NorsHimself', label: 'GitHub' },
  { icon: 'icon-envelope', href: 'mailto:nasroallah.elidrissi@gmail.com', label: 'Email' },
];

export const experiences: ExperienceItem[] = [
  {
    company: 'ROLLEE',
    role: 'Backend Engineer',
    period: '04/2025 – 10/2025',
    location: 'Paris, Île-de-France, France (Remote)',
    website: 'getrollee.com',
    responsibilities: [
      'Integrated 10+ complex data sources with SPA, SSR and RESTful APIs to enhance platform capabilities.',
      'Engineered solutions to successfully identify and bypass CAPTCHA, bot-detection, and region-blocking mechanisms.',
      'Refactored legacy codebase to significantly improve system efficiency, readability, and maintainability.',
    ],
  },
  {
    company: 'BLUEDOVE - Mohammed VI Polytechnic University',
    role: 'Software Engineer',
    period: '05/2024 – 01/2025',
    location: 'Ben Guerir, Morocco',
    website: 'bluedove.ma',
    responsibilities: [
      'Developed robust data processing pipelines to validate, transform, and normalize API responses for seamless storage across relational and NoSQL databases.',
      'Built a real-time communication system utilizing WebSockets and NestJS to ensure efficient data synchronization.',
      'Deployed and managed cloud-based databases, including PostgreSQL and Supabase, to handle large-scale data securely.',
    ],
  },
  {
    company: 'BLUEDOVE - Mohammed VI Polytechnic University',
    role: 'Software Engineer Intern',
    period: '12/2023 – 05/2024',
    location: 'Ben Guerir, Morocco',
    website: 'bluedove.ma',
    responsibilities: [
      'Spearheaded full-stack application development using ReactJS, TailwindCSS, NestJS, and RESTful APIs.',
      'Integrated and processed data from diverse third-party APIs by leveraging reverse engineering and comprehensive testing to overcome limited documentation.',
    ],
  },
];

export const works: WorkItem[] = [
  {
    image: '/assets/images/works/titrit.png',
    category: 'Travel & Luxury',
    title: 'Titrit Luxury Camp',
    date: '02/2026',
    href: 'https://www.titritluxury.ma/',
  },
  {
    image: '/assets/images/works/seven24.png',
    category: 'Web Application',
    title: 'Seven24',
    date: '2024',
    href: 'https://www.seven24.ma/',
  },
  {
    image: '/assets/images/works/integrivo.png',
    category: 'Data Engineering',
    title: 'Integrivo',
    date: '01/2026',
    href: 'https://www.integrivo.com/',
  },
  {
    image: '/assets/images/works/rayonnage.png',
    category: 'E-commerce / Industrial',
    title: 'Rayonnage Plus',
    date: '2025',
    href: 'https://www.rayonnageplus.ma/en',
  },
];

export const services: ServiceItem[] = [
  {
    id: 1,
    icon: 'icon-crop-alt-solid',
    title: 'Full-Stack Web Dev',
    items: [
      'React & Next.js Ecosystem',
      'NestJS / Express / Node.js',
      'TypeScript & Modern JS (ES6+)',
      'State Management (Zustand/Query)',
      'TailwindCSS & Framer Motion',
      'PWA & Responsive Design',
      'Authentication (NextAuth/JWT)',
    ],
  },
  {
    id: 2,
    icon: 'icon-pen-nib-solid',
    title: 'Backend Architecture',
    items: [
      'Scalable REST & GraphQL APIs',
      'Microservices Architecture',
      'PostgreSQL, MySQL & MongoDB',
      'Redis & ScyllaDB Caching',
      'Real-time WebSockets/gRPC',
      'RabbitMQ & Message Queues',
      'OAuth2 & OpenID Connect',
    ],
  },
  {
    id: 3,
    icon: 'icon-ribbon-solid',
    title: 'Data Engineering',
    items: [
      'High-scale Web Scraping',
      'Captcha & Bot-detection Bypass',
      'Automated Data Pipelines',
      'ETL Processes (Extract/Transform/Load)',
      'API Reverse Engineering',
      'Data Normalization/Validation',
      'Proxy Management & Rotation',
    ],
  },
  {
    id: 4,
    icon: 'icon-chess-knight-solid',
    title: 'DevOps & Cloud',
    items: ['Docker & CI/CD Pipelines', 'AWS Deployment', 'Cloudflare Security'],
  },
];

export const playgroundImages = [
  `${BASE}/images/section/playground-1.jpg`,
  `${BASE}/images/section/playground-2.jpg`,
  `${BASE}/images/section/playground-3.jpg`,
  `${BASE}/images/section/playground-4.jpg`,
];

export const techStack: TechItem[] = [
  // Languages
  { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', description: 'Strongly typed programming' },
  { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', description: 'Web & Core Logic' },
  { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', description: 'Scripting & AI/ML' },
  { name: 'Go', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg', description: 'Cloud-native Backend' },
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', description: 'High-perf Runtime' },
  { name: 'C++', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', description: 'System Programming' },
  { name: 'Shell', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg', description: 'Automation & Scripting' },
  
  // Frameworks & Tools
  { name: 'NestJS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg', description: 'Enterprise Backend' },
  { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', description: 'Production React' },
  { name: 'FastAPI', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', description: 'High-perf Python APIs' },
  { name: 'Django', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', description: 'Rapid Backend Web' },
  { name: 'ArgoCD', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg', description: 'GitOps Continuous' },
  { name: 'Prometheus', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg', description: 'Monitoring & Alerts' },
  { name: 'Grafana', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg', description: 'Analytics Dashboards' },
  { name: 'Playwright', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg', description: 'Modern E2E Testing' },

  // DevOps & Infra
  { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', description: 'Containerization' },
  { name: 'AWS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', description: 'Cloud Infra' },
  { name: 'Github Actions', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg', description: 'CI/CD Pipelines' },
  { name: 'Nginx', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg', description: 'Reverse Proxy & Load' },

  // Databases & Storage
  { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', description: 'Relational Source' },
  { name: 'MariaDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg', description: 'Open-source SQL' },
  { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', description: 'NoSQL Document Store' },
  { name: 'Supabase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg', description: 'BAAS Postgres' },
  { name: 'Firebase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', description: 'Google Cloud BAAS' },
];

export const processSteps: ProcessStep[] = [
  {
    step: 'Step 1',
    title: 'System\nArchitecture',
    description: 'Designing scalable data models, selecting appropriate tech stacks, and planning API endpoints for secure robust data flow.',
    iconClass: 'gradient-icon-1',
  },
  {
    step: 'Step 2',
    title: 'Integration &\nDevelopment',
    description: 'Building RESTful APIs, integrating third-party data sources, and configuring real-time WebSocket communication channels.',
    iconClass: 'gradient-icon-2',
  },
  {
    step: 'Step 3',
    title: 'Testing &\nSecurity',
    description: 'Implementing thorough unit tests, optimizing queries, bypassing bot-detection correctly, and securing endpoints.',
    iconClass: 'gradient-icon-3',
  },
  {
    step: 'Step 4',
    title: 'Deployment &\nDevOps',
    description: 'Containerizing applications via Docker, setting up CI/CD pipelines, and deploying to cloud infrastructure like AWS.',
    iconClass: 'gradient-icon-4',
  },
];

export const awards: AwardItem[] = [
  { number: 1, title: '1337FIL (42Network) - Digital Technology Architect Program', date: 'Present' },
  { number: 2, title: 'Mohammed VI Polytechnic University - Top Innovator', date: '2024' },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Backend Architecture',
    price: '$60',
    period: '/ hour',
    description: 'Need a scalable REST API or complex data processing pipeline?',
    features: [
      'Custom Node.js / Python backend',
      'Database integration (SQL/NoSQL)',
      'Third-party API integration',
      'Cloud Deployment setup',
      'High security standards',
      '30-day post-delivery support',
    ],
  },
  {
    name: 'Full-Stack Development',
    price: '$85',
    period: '/ hour',
    description: 'Need a complete end-to-end web application from scratch?',
    features: [
      'React / Next.js frontend UI',
      'NestJS / Express backend',
      'Real-time WebSockets',
      'Docker & CI/CD Pipeline targeting AWS',
      'Cloudflare and SMTP configuration',
      '90-day post-delivery support',
    ],
  },
];

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: "What is your primary tech stack?",
    answer: 'I primarily work with TypeScript, Node.js, NestJS, and Next.js for full-stack applications. For data and backend, I frequently use Python, PostgreSQL, and Supabase. Everything is containerized and deployed via Docker.',
  },
  {
    id: 'faq-2',
    question: 'Do you handle third-party integrations?',
    answer: 'Yes, extensively. I specialize in integrating complex data sources, automating data pipelines, and implementing synchronization across various platforms including handling reverse engineering for poorly documented APIs.',
  },
  {
    id: 'faq-3',
    question: 'How do you approach application security?',
    answer: 'Security is implemented at multiple layers. I use well-tested frameworks, sanitize inputs, enforce authentication/authorization, and typically deploy behind WAFs like Cloudflare to filter malicious traffic and handle bot mitigation.',
  },
  {
    id: 'faq-4',
    question: "Can you help deploy the application?",
    answer: 'Absolutely. I have strong experience with DevOps, utilizing Docker, Docker Compose, CI/CD pipelines, and deploying to cloud providers like AWS or managing services through ArgoCD and Nginx.',
  },
  {
    id: 'faq-5',
    question: 'Are you open to remote work?',
    answer: 'Yes, I am highly experienced in remote work environments, having successfully collaborated with teams across different time zones, such as my role as a Backend Engineer for Paris-based ROLLEE.',
  },
];

export const budgetRanges: BudgetRange[] = [
  { label: '< $1,000', value: '< $1,000' },
  { label: '$1,000 - $5,000', value: '$1,000 - $5,000' },
  { label: '$5,000 - $10,000', value: '$5,000 - $10,000' },
  { label: '$10,000 - $20,000', value: '$10,000 - $20,000' },
  { label: '> $20,000', value: '> $20,000' },
];
