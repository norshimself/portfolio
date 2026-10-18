import type {
  NavLink,
  ExperienceItem,
  WorkItem,
  ServiceItem,
  TechItem,
  ProcessStep,
  AwardItem,
  EducationItem,
  FAQItem,
} from '@/types';

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home', icon: 'home' },
  { href: '#works', label: 'Featured Work', icon: 'works' },
  { href: '#experience', label: 'Experience', icon: 'experience' },
  { href: '#services', label: 'Expertise', icon: 'services' },
  { href: '#tech', label: 'Tech Stack', icon: 'tech' },
  { href: '#about', label: 'About & Education', icon: 'about' },
  { href: '#contact', label: 'Contact', icon: 'contact' },
];
// A focused five-destination mobile / desktop dock.
export const rightNavLinks: NavLink[] = [
  { href: '#home', label: 'Home', icon: 'home' },
  { href: '#works', label: 'Work', icon: 'works' },
  { href: '#experience', label: 'Experience', icon: 'experience' },
  { href: '#services', label: 'Expertise', icon: 'services' },
  { href: '#contact', label: 'Contact', icon: 'contact' },
];

export const socialLinks = [
  { icon: 'icon-linkedin-in', href: 'https://linkedin.com/in/nasroallah-el-idrissi', label: 'LinkedIn' },
  { icon: 'icon-github', href: 'https://github.com/NorsHimself', label: 'GitHub' },
  { icon: 'icon-envelope', href: 'mailto:nasroallah.elidrissi@gmail.com', label: 'Email' },
];

// CONTENT DRAFT: replace the fictional roles, employers, dates and achievements below.
// Do not publish sample content as real professional experience.
export const experiences: ExperienceItem[] = [
  {
    company: 'Company 01 — Replace Me',
    role: 'Job Title — Replace Me',
    period: 'MMM YYYY – MMM YYYY',
    location: 'City / Remote',
    responsibilities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace with the engineering problem you solved.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Describe your specific contribution.',
      'Ut enim ad minim veniam, quis nostrud exercitation. Add a verified result or technical trade-off.',
    ],
  },
  {
    company: 'Company 02 — Replace Me',
    role: 'Job Title — Replace Me',
    period: 'MMM YYYY – MMM YYYY',
    location: 'City / Remote',
    responsibilities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Describe the product context and your responsibility.',
      'Duis aute irure dolor in reprehenderit in voluptate. Explain the system or workflow you improved.',
      'Excepteur sint occaecat cupidatat non proident. Replace with measurable impact, if available.',
    ],
  },
  {
    company: 'Company 03 — Replace Me',
    role: 'Job Title — Replace Me',
    period: 'MMM YYYY – MMM YYYY',
    location: 'City / Remote',
    responsibilities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Add the team, system or project context.',
      'Ut enim ad minim veniam, quis nostrud exercitation. Explain the architecture and ownership.',
      'Duis aute irure dolor in reprehenderit. Add an outcome you can substantiate.',
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: '1337 Coding School (42 Network)',
    program: 'Digital Technology Architect Program',
    // TODO: set your real start year if different.
    period: '2023 – Present',
    location: 'Ben Guerir, Morocco · UM6P Campus',
    website: '1337.ma',
    details: [
      'Peer-to-peer, project-based curriculum with no lectures or teachers — learning driven entirely by building real projects in C, C++, and beyond.',
      'Hands-on mastery of systems programming, algorithms, Unix, and networking through progressively harder graded projects.',
      'Developed strong autonomy, problem-solving, and collaboration skills within the global 42 Network community.',
    ],
  },
];

// CONTENT DRAFT: these existing images are TEMPORARY preview assets.
// Replace image, category, title, date, role, description, stack and add href when ready.
// Draft cards are not clickable, preventing stale project links.
export const works: WorkItem[] = [
  {
    image: '/assets/images/works/placeholder-01.svg',
    category: 'Category — Replace Me',
    title: 'Featured Project 01',
    date: 'Date — Replace Me',
    role: 'Your role — Replace Me',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace with the problem, solution and actual result.',
    stack: ['Technology 01', 'Technology 02'],
  },
  {
    image: '/assets/images/works/placeholder-02.svg',
    category: 'Category — Replace Me',
    title: 'Featured Project 02',
    date: 'Date — Replace Me',
    role: 'Your role — Replace Me',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Describe architecture decisions and impact.',
    stack: ['Technology 01', 'Technology 02'],
  },
  {
    image: '/assets/images/works/placeholder-03.svg',
    category: 'Category — Replace Me',
    title: 'Featured Project 03',
    date: 'Date — Replace Me',
    role: 'Your role — Replace Me',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation. Add your contribution and measurable outcomes.',
    stack: ['Technology 01', 'Technology 02'],
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
  { name: 'TypeScript', image: '/assets/icons/tech/typescript/typescript-original.svg', description: 'Strongly typed programming', category: 'Languages', level: 'core' },
  { name: 'JavaScript', image: '/assets/icons/tech/javascript/javascript-original.svg', description: 'Web & Core Logic', category: 'Languages', level: 'core' },
  { name: 'Python', image: '/assets/icons/tech/python/python-original.svg', description: 'Scripting & Data', category: 'Languages', level: 'core' },
  { name: 'Node.js', image: '/assets/icons/tech/nodejs/nodejs-original.svg', description: 'High-perf Runtime', category: 'Languages', level: 'core' },
  { name: 'Shell', image: '/assets/icons/tech/bash/bash-original.svg', description: 'Automation & Scripting', category: 'Languages', level: 'proficient' },
  { name: 'Go', image: '/assets/icons/tech/go/go-original-wordmark.svg', description: 'Cloud-native Backend', category: 'Languages', level: 'familiar' },
  { name: 'C++', image: '/assets/icons/tech/cplusplus/cplusplus-original.svg', description: 'System Programming', category: 'Languages', level: 'proficient' },
  { name: 'C', image: '/assets/icons/tech/c/c-original.svg', description: 'Low-level Execution', category: 'Languages', level: 'proficient' },
  { name: 'Assembly', description: 'Hardware Instructions', category: 'Languages', level: 'familiar' },

  // Frameworks & Tools
  { name: 'NestJS', image: '/assets/icons/tech/nestjs/nestjs-original.svg', description: 'Enterprise Backend', category: 'Frameworks', level: 'core' },
  { name: 'Next.js', image: '/assets/icons/tech/nextjs/nextjs-original.svg', description: 'Production React', category: 'Frameworks', level: 'core' },
  { name: 'React', image: '/assets/icons/tech/react/react-original.svg', description: 'UI Library', category: 'Frameworks', level: 'core' },
  { name: 'TailwindCSS', image: '/assets/icons/tech/tailwindcss/tailwindcss-original.svg', description: 'Utility-first CSS', category: 'Frameworks', level: 'core' },
  { name: 'Express.js', image: '/assets/icons/tech/express/express-original.svg', description: 'Node.js Web Framework', category: 'Frameworks', level: 'proficient' },
  { name: 'FastAPI', image: '/assets/icons/tech/fastapi/fastapi-original.svg', description: 'High-perf Python APIs', category: 'Frameworks', level: 'proficient' },
  { name: 'Vite', image: '/assets/icons/tech/vitejs/vitejs-original.svg', description: 'Next-gen Frontend Tooling', category: 'Frameworks', level: 'proficient' },
  { name: 'Django', image: '/assets/icons/tech/django/django-plain.svg', description: 'Rapid Backend Web', category: 'Frameworks', level: 'familiar' },
  { name: 'Flask', image: '/assets/icons/tech/flask/flask-original.svg', description: 'Python Microframework', category: 'Frameworks', level: 'familiar' },
  { name: 'Gin', description: 'Go Web Framework', category: 'Frameworks', level: 'familiar' },
  { name: 'PostCSS', image: '/assets/icons/tech/postcss/postcss-original.svg', description: 'CSS Tooling', category: 'Frameworks', level: 'familiar' },
  { name: 'Nx', description: 'Smart Monorepos', category: 'Frameworks', level: 'familiar' },

  // Databases & Storage
  { name: 'PostgreSQL', image: '/assets/icons/tech/postgresql/postgresql-original.svg', description: 'Relational Source', category: 'Databases & Storage', level: 'core' },
  { name: 'MongoDB', image: '/assets/icons/tech/mongodb/mongodb-original.svg', description: 'NoSQL Document Store', category: 'Databases & Storage', level: 'core' },
  { name: 'MySQL', image: '/assets/icons/tech/mysql/mysql-original.svg', description: 'Relational Database', category: 'Databases & Storage', level: 'proficient' },
  { name: 'Supabase', image: '/assets/icons/tech/supabase/supabase-original.svg', description: 'BAAS Postgres', category: 'Databases & Storage', level: 'proficient' },
  { name: 'MariaDB', image: '/assets/icons/tech/mariadb/mariadb-original.svg', description: 'Open-source SQL', category: 'Databases & Storage', level: 'familiar' },
  { name: 'ScyllaDB', description: 'Wide-column Store', category: 'Databases & Storage', level: 'familiar' },
  { name: 'Firebase', image: '/assets/icons/tech/firebase/firebase-original.svg', description: 'Google Cloud BAAS', category: 'Databases & Storage', level: 'proficient' },

  // DevOps & Cloud
  { name: 'Docker', image: '/assets/icons/tech/docker/docker-original.svg', description: 'Containerization', category: 'DevOps & Cloud', level: 'core' },
  { name: 'Git', image: '/assets/icons/tech/git/git-original.svg', description: 'Version Control', category: 'DevOps & Cloud', level: 'core' },
  { name: 'Linux', image: '/assets/icons/tech/linux/linux-original.svg', description: 'Operating System', category: 'DevOps & Cloud', level: 'proficient' },
  { name: 'AWS', image: '/assets/icons/tech/amazonwebservices/amazonwebservices-original-wordmark.svg', description: 'Cloud Data & Compute', category: 'DevOps & Cloud', level: 'proficient' },
  { name: 'Github Actions', image: '/assets/icons/tech/githubactions/githubactions-original.svg', description: 'CI/CD Pipelines', category: 'DevOps & Cloud', level: 'proficient' },
  { name: 'Nginx', image: '/assets/icons/tech/nginx/nginx-original.svg', description: 'Reverse Proxy & Load', category: 'DevOps & Cloud', level: 'proficient' },
  { name: 'Kubernetes', image: '/assets/icons/tech/kubernetes/kubernetes-original.svg', description: 'Container Orchestration', category: 'DevOps & Cloud', level: 'familiar' },
  { name: 'ArgoCD', image: '/assets/icons/tech/argocd/argocd-original.svg', description: 'GitOps Continuous', category: 'DevOps & Cloud', level: 'familiar' },
  { name: 'Terraform', image: '/assets/icons/tech/terraform/terraform-original.svg', description: 'Infrastructure as Code', category: 'DevOps & Cloud', level: 'familiar' },
  { name: 'Microsoft Azure', image: '/assets/icons/tech/azure/azure-original.svg', description: 'Cloud computing platform', category: 'DevOps & Cloud', level: 'familiar' },
  { name: 'DigitalOcean', image: '/assets/icons/tech/digitalocean/digitalocean-original.svg', description: 'Developer Cloud', category: 'DevOps & Cloud', level: 'proficient' },
  { name: 'Heroku', image: '/assets/icons/tech/heroku/heroku-original.svg', description: 'Cloud PaaS', category: 'DevOps & Cloud', level: 'familiar' },
  { name: 'Jenkins', image: '/assets/icons/tech/jenkins/jenkins-original.svg', description: 'Automation Server', category: 'DevOps & Cloud', level: 'familiar' },
  { name: 'Prometheus', image: '/assets/icons/tech/prometheus/prometheus-original.svg', description: 'Monitoring & Alerts', category: 'DevOps & Cloud', level: 'proficient' },
  { name: 'Grafana', image: '/assets/icons/tech/grafana/grafana-original.svg', description: 'Analytics Dashboards', category: 'DevOps & Cloud', level: 'proficient' },
  { name: 'Apache', image: '/assets/icons/tech/apache/apache-original.svg', description: 'Web Server', category: 'DevOps & Cloud', level: 'familiar' },

  // Architecture & APIs
  { name: 'RESTful API', description: 'App Communication', category: 'APIs & Arch', level: 'core' },
  { name: 'GraphQL', image: '/assets/icons/tech/graphql/graphql-plain.svg', description: 'API Query Language', category: 'APIs & Arch', level: 'proficient' },
  { name: 'Kafka', image: '/assets/icons/tech/apachekafka/apachekafka-original.svg', description: 'Event Streaming', category: 'APIs & Arch', level: 'familiar' },

  // Testing & Security
  { name: 'Playwright', image: '/assets/icons/tech/playwright/playwright-original.svg', description: 'Modern E2E Testing', category: 'Testing & Security', level: 'proficient' },
  { name: 'Postman', image: '/assets/icons/tech/postman/postman-original.svg', description: 'API Platform', category: 'Testing & Security', level: 'proficient' },
  { name: 'GDB', description: 'GNU Debugger', category: 'Testing & Security', level: 'familiar' },
  { name: 'Wireshark', description: 'Network Protocol Analyzer', category: 'Testing & Security', level: 'familiar' },
  { name: 'Burp Suite', description: 'Web Security Testing', category: 'Testing & Security', level: 'proficient' },
  { name: 'HTTP Toolkit', description: 'HTTP Debugging', category: 'Testing & Security', level: 'proficient' },
  { name: 'ADB', image: '/assets/icons/tech/android/android-original.svg', description: 'Android Debug Bridge', category: 'Testing & Security', level: 'familiar' },

  // Tools & Workflows
  { name: 'Jira', image: '/assets/icons/tech/jira/jira-original.svg', description: 'Project Tracking', category: 'Tools & Workflows', level: 'proficient' },
  { name: 'Notion', image: '/assets/icons/tech/notion/notion-original.svg', description: 'Workspace & Docs', category: 'Tools & Workflows', level: 'proficient' },
  { name: 'Slack', image: '/assets/icons/tech/slack/slack-original.svg', description: 'Team Communication', category: 'Tools & Workflows', level: 'proficient' },
  { name: 'Deno', image: '/assets/icons/tech/denojs/denojs-original.svg', description: 'JS/TS Runtime', category: 'Tools & Workflows', level: 'familiar' },
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
