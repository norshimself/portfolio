import type {
  NavLink,
  ExperienceItem,
  WorkItem,
  ServiceItem,
  TechItem,
  ProcessStep,
  AwardItem,
  FAQItem,
} from '@/types';

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home', icon: 'icon-home-solid' },
  { href: '#experience', label: 'Experience', icon: 'icon-toolbox-solid' },
  { href: '#services', label: 'Services', icon: 'icon-stream-solid' },
  { href: '#works', label: 'Selected Work', icon: 'icon-tasks-solid' },
  { href: '#faqs', label: 'FAQs', icon: 'icon-comment-alt-solid' },
  { href: '#contact', label: 'Contact', icon: 'icon-envelope-solid' },
];

export const rightNavLinks: NavLink[] = [
  { href: '#home', label: 'Home', icon: 'icon-home-solid' },
  { href: '#services', label: 'Services', icon: 'icon-stream-solid' },
  { href: '#works', label: 'Selected Work', icon: 'icon-tasks-solid' },
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
      'Built resilient ingestion connectors for 10+ third-party data sources (SPA, SSR and REST), expanding the platform’s coverage.',
      'Engineered fault-tolerant pipelines that stay reliable under rate-limiting, anti-bot protections, and regional access constraints.',
      'Refactored a legacy codebase to improve performance, readability, and long-term maintainability.',
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

// Ordered most-recent first. Date ranges other than Integrivo are estimates —
// replace them with your real start/end months.
export const works: WorkItem[] = [
  {
    image: '/assets/images/works/integrivo.webp',
    category: 'Data Engineering',
    title: 'Integrivo',
    date: 'Jan 2026 – Present',
    href: 'https://www.integrivo.com/',
    // TODO: replace with your real role, what you built, and a measurable result.
    role: 'Backend / Data Engineer',
    description: 'Engineered data ingestion and processing pipelines that collect, normalize, and serve data from multiple sources.',
    stack: ['Python', 'PostgreSQL', 'Docker'],
  },
  {
    image: '/assets/images/works/titrit.webp',
    category: 'Travel & Luxury',
    title: 'Titrit Luxury Camp',
    date: 'Nov 2025 – Feb 2026',
    href: 'https://www.titritluxury.ma/',
    // TODO: replace with your real role, what you built, and a measurable result.
    role: 'Full-Stack Developer',
    description: 'Designed and built the marketing site and booking experience for a luxury desert camp, focused on fast load times and a polished, conversion-oriented UI.',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS'],
  },
  {
    image: '/assets/images/works/rayonnage.webp',
    category: 'E-commerce / Industrial',
    title: 'Rayonnage Plus',
    date: 'May 2025 – Aug 2025',
    href: 'https://www.rayonnageplus.ma/en',
    // TODO: replace with your real role, what you built, and a measurable result.
    role: 'Full-Stack Developer',
    description: 'Delivered an e-commerce catalog for industrial shelving products, with multilingual support and a responsive storefront.',
    stack: ['Next.js', 'TypeScript'],
  },
  {
    image: '/assets/images/works/seven24.webp',
    category: 'Web Application',
    title: 'Seven24',
    date: 'May 2024 – Aug 2024',
    href: 'https://www.seven24.ma/',
    // TODO: replace with your real role, what you built, and a measurable result.
    role: 'Full-Stack Developer',
    description: 'Built a web application covering both the user-facing frontend and the backend APIs, with authentication and data persistence.',
    stack: ['React', 'NestJS', 'PostgreSQL'],
  },
];

export const services: ServiceItem[] = [
  {
    id: 1,
    icon: 'icon-crop-alt-solid',
    title: 'Full-Stack Development',
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
      'High-throughput Data Ingestion',
      'Automated ETL Pipelines',
      'Resilience to Rate-limiting & Anti-bot',
      'Third-party API Integration',
      'Data Normalization & Validation',
      'Schema Design (SQL & NoSQL)',
      'Proxy & Request Orchestration',
    ],
  },
  {
    id: 4,
    icon: 'icon-chess-knight-solid',
    title: 'DevOps & Cloud',
    items: ['Docker & CI/CD Pipelines', 'AWS Deployment', 'Cloudflare Security'],
  },
];

// level: 'core' = daily / interview-ready depth · 'proficient' = comfortable, regular use · 'familiar' = exposure / occasional use
export const techStack: TechItem[] = [
  // Languages
  { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', description: 'Strongly typed programming', category: 'Languages', level: 'core' },
  { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', description: 'Web & Core Logic', category: 'Languages', level: 'core' },
  { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', description: 'Scripting & Data', category: 'Languages', level: 'core' },
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', description: 'High-perf Runtime', category: 'Languages', level: 'core' },
  { name: 'Shell', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg', description: 'Automation & Scripting', category: 'Languages', level: 'proficient' },
  { name: 'Go', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg', description: 'Cloud-native Backend', category: 'Languages', level: 'familiar' },
  { name: 'C++', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', description: 'System Programming', category: 'Languages', level: 'familiar' },
  { name: 'C', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', description: 'Low-level Execution', category: 'Languages', level: 'familiar' },
  { name: 'Assembly', image: 'https://www.google.com/s2/favicons?domain=nasm.us&sz=128', description: 'Hardware Instructions', category: 'Languages', level: 'familiar' },

  // Frameworks & Tools
  { name: 'NestJS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg', description: 'Enterprise Backend', category: 'Frameworks', level: 'core' },
  { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', description: 'Production React', category: 'Frameworks', level: 'core' },
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', description: 'UI Library', category: 'Frameworks', level: 'core' },
  { name: 'TailwindCSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', description: 'Utility-first CSS', category: 'Frameworks', level: 'core' },
  { name: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', description: 'Node.js Web Framework', category: 'Frameworks', level: 'proficient' },
  { name: 'FastAPI', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', description: 'High-perf Python APIs', category: 'Frameworks', level: 'proficient' },
  { name: 'Vite', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg', description: 'Next-gen Frontend Tooling', category: 'Frameworks', level: 'proficient' },
  { name: 'Django', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', description: 'Rapid Backend Web', category: 'Frameworks', level: 'familiar' },
  { name: 'Flask', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg', description: 'Python Microframework', category: 'Frameworks', level: 'familiar' },
  { name: 'Gin', image: 'https://www.google.com/s2/favicons?domain=gin-gonic.com&sz=128', description: 'Go Web Framework', category: 'Frameworks', level: 'familiar' },
  { name: 'PostCSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postcss/postcss-original.svg', description: 'CSS Tooling', category: 'Frameworks', level: 'familiar' },
  { name: 'Nx', image: 'https://www.google.com/s2/favicons?domain=nx.dev&sz=128', description: 'Smart Monorepos', category: 'Frameworks', level: 'familiar' },

  // Databases & Storage
  { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', description: 'Relational Source', category: 'Databases & Storage', level: 'core' },
  { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', description: 'NoSQL Document Store', category: 'Databases & Storage', level: 'core' },
  { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', description: 'Relational Database', category: 'Databases & Storage', level: 'proficient' },
  { name: 'Supabase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg', description: 'BAAS Postgres', category: 'Databases & Storage', level: 'proficient' },
  { name: 'MariaDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg', description: 'Open-source SQL', category: 'Databases & Storage', level: 'familiar' },
  { name: 'ScyllaDB', image: 'https://www.google.com/s2/favicons?domain=scylladb.com&sz=128', description: 'Wide-column Store', category: 'Databases & Storage', level: 'familiar' },
  { name: 'Firebase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', description: 'Google Cloud BAAS', category: 'Databases & Storage', level: 'familiar' },

  // DevOps & Cloud
  { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', description: 'Containerization', category: 'DevOps & Cloud', level: 'core' },
  { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', description: 'Version Control', category: 'DevOps & Cloud', level: 'core' },
  { name: 'Linux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', description: 'Operating System', category: 'DevOps & Cloud', level: 'proficient' },
  { name: 'AWS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', description: 'Cloud Data & Compute', category: 'DevOps & Cloud', level: 'proficient' },
  { name: 'Github Actions', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg', description: 'CI/CD Pipelines', category: 'DevOps & Cloud', level: 'proficient' },
  { name: 'Nginx', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg', description: 'Reverse Proxy & Load', category: 'DevOps & Cloud', level: 'proficient' },
  { name: 'Kubernetes', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg', description: 'Container Orchestration', category: 'DevOps & Cloud', level: 'familiar' },
  { name: 'ArgoCD', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg', description: 'GitOps Continuous', category: 'DevOps & Cloud', level: 'familiar' },
  { name: 'Terraform', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg', description: 'Infrastructure as Code', category: 'DevOps & Cloud', level: 'familiar' },
  { name: 'Microsoft Azure', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg', description: 'Cloud computing platform', category: 'DevOps & Cloud', level: 'familiar' },
  { name: 'DigitalOcean', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg', description: 'Developer Cloud', category: 'DevOps & Cloud', level: 'familiar' },
  { name: 'Heroku', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg', description: 'Cloud PaaS', category: 'DevOps & Cloud', level: 'familiar' },
  { name: 'Jenkins', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg', description: 'Automation Server', category: 'DevOps & Cloud', level: 'familiar' },
  { name: 'Prometheus', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg', description: 'Monitoring & Alerts', category: 'DevOps & Cloud', level: 'familiar' },
  { name: 'Grafana', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg', description: 'Analytics Dashboards', category: 'DevOps & Cloud', level: 'familiar' },
  { name: 'Apache', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg', description: 'Web Server', category: 'DevOps & Cloud', level: 'familiar' },

  // Architecture & APIs
  { name: 'RESTful API', image: 'https://www.google.com/s2/favicons?domain=restfulapi.net&sz=128', description: 'App Communication', category: 'APIs & Arch', level: 'core' },
  { name: 'GraphQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg', description: 'API Query Language', category: 'APIs & Arch', level: 'proficient' },
  { name: 'Kafka', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg', description: 'Event Streaming', category: 'APIs & Arch', level: 'familiar' },

  // Testing & Security
  { name: 'Playwright', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg', description: 'Modern E2E Testing', category: 'Testing & Security', level: 'proficient' },
  { name: 'Postman', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', description: 'API Platform', category: 'Testing & Security', level: 'proficient' },
  { name: 'GDB', image: 'https://www.google.com/s2/favicons?domain=gnu.org&sz=128', description: 'GNU Debugger', category: 'Testing & Security', level: 'familiar' },
  { name: 'Wireshark', image: 'https://www.google.com/s2/favicons?domain=wireshark.org&sz=128', description: 'Network Protocol Analyzer', category: 'Testing & Security', level: 'familiar' },
  { name: 'Burp Suite', image: 'https://www.google.com/s2/favicons?domain=portswigger.net&sz=128', description: 'Web Security Testing', category: 'Testing & Security', level: 'familiar' },
  { name: 'HTTP Toolkit', image: 'https://www.google.com/s2/favicons?domain=httptoolkit.com&sz=128', description: 'HTTP Debugging', category: 'Testing & Security', level: 'familiar' },
  { name: 'ADB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg', description: 'Android Debug Bridge', category: 'Testing & Security', level: 'familiar' },

  // Tools & Workflows
  { name: 'Jira', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg', description: 'Project Tracking', category: 'Tools & Workflows', level: 'proficient' },
  { name: 'Notion', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg', description: 'Workspace & Docs', category: 'Tools & Workflows', level: 'proficient' },
  { name: 'Slack', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg', description: 'Team Communication', category: 'Tools & Workflows', level: 'proficient' },
  { name: 'Deno', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/denojs/denojs-original.svg', description: 'JS/TS Runtime', category: 'Tools & Workflows', level: 'familiar' },
];

export const processSteps: ProcessStep[] = [
  {
    step: 'Step 1',
    title: 'Map it out',
    description: 'I start with the data and the API shape — pick the right stack, model it properly, plan the endpoints. Get this right and nothing needs a rewrite three months later.',
    iconClass: 'gradient-icon-1',
  },
  {
    step: 'Step 2',
    title: 'Build the core',
    description: 'APIs get written, third-party sources get wired in, real-time gets added where it actually matters. This is where most of the work — and most of the fun — lives.',
    iconClass: 'gradient-icon-2',
  },
  {
    step: 'Step 3',
    title: 'Make it solid',
    description: 'Tests on the paths that matter, slow queries tuned, endpoints locked down, and pipelines that keep working when the data is messy and the rate limits kick in.',
    iconClass: 'gradient-icon-3',
  },
  {
    step: 'Step 4',
    title: 'Ship it',
    description: 'Containerized with Docker, deploys made boring through CI/CD, running on the cloud with monitoring that warns me before users ever notice.',
    iconClass: 'gradient-icon-4',
  },
];

export const awards: AwardItem[] = [
  { number: 1, title: '1337FIL (42Network) - Digital Technology Architect Program', date: 'Present' },
  { number: 2, title: 'Mohammed VI Polytechnic University - Top Innovator', date: '2024' },
];

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What kind of role are you looking for?',
    answer: 'Full-time backend or full-stack engineering, ideally somewhere data-heavy. I care more about an interesting problem and a team I can learn from than the exact job title.',
  },
  {
    id: 'faq-2',
    question: "What's your strongest stack?",
    answer: 'TypeScript with NestJS and Next.js, plus Python on the backend. PostgreSQL and MongoDB for data, all containerized with Docker. That is the part I would happily defend in an interview — the rest I pick up as the work needs it.',
  },
  {
    id: 'faq-3',
    question: 'What are you actually good at?',
    answer: 'Making unreliable things reliable: third-party integrations, data pipelines, and APIs that keep working when the data is messy and the traffic is not. I am drawn to the unglamorous parts most people avoid.',
  },
  {
    id: 'faq-4',
    question: 'Do you work remotely and across time zones?',
    answer: 'Yes. I am based in Casablanca (GMT+1) and already work async with a Paris-based team. Remote, hybrid, or relocation for the right role are all on the table.',
  },
  {
    id: 'faq-5',
    question: 'How soon can you start?',
    answer: 'Soon, and I like to move quickly. Send me the details of the role and I will tell you honestly whether I am the right fit.',
  },
];
