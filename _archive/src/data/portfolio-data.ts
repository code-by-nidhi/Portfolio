export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  architectureHighlights: string[];
  githubUrl: string;
  liveUrl?: string;
  imageBg: string;
  type: "Self-Initiated Project";
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  capabilities: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; icon?: string }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Nidhi",
    brandLogo: "NIDHI.",
    role: "MERN Stack Developer & Mentor",
    availability: "Available for freelance projects & 1-on-1 coaching",
    headline: "Building modern web experiences that turn ideas into working products.",
    bio: "I'm Nidhi, a MERN Stack Developer focused on building responsive web applications, REST APIs, dashboards, scalable backend systems, and offering 1-on-1 hourly coding coaching.",
    aboutHeader: "A Developer & Educator Who Likes Building Things",
    aboutText: "I'm a Computer Science graduate, MERN Stack Developer, and Coding Mentor interested in building practical web applications, backend systems, and helping others master modern web technologies through hourly 1-on-1 mentorship.",
    email: "codebynidhi1007@gmail.com",
    github: "https://github.com/code-by-nidhi",
    linkedin: "https://linkedin.com/in/nidhi-mamman",
    location: "Remote / Willing to relocate for Work from Office",
  },
  techStrip: [
    "MongoDB",
    "Express.js",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "MySQL",
    "Redis",
    "Git",
  ],
  services: [
    {
      id: "coding-coaching",
      title: "1-on-1 Coding Coaching",
      iconName: "GraduationCap",
      description: "Personalized hourly mentorship for students & developers building MERN stack applications.",
      capabilities: [
        "MERN Stack & Next.js Hands-On Mentorship",
        "REST API Design & Database Setup Tutoring",
        "Live Debugging & Code Architecture Reviews",
        "Flexible Billed Hourly 1-on-1 Sessions",
      ],
    },
    {
      id: "web-dev",
      title: "Web Development",
      iconName: "Globe",
      description: "Responsive and modern websites and web applications using React and Next.js.",
      capabilities: [
        "Single-page & Multi-page React/Next.js Apps",
        "Responsive, Mobile-First UI/UX Design",
        "Performance Optimization & SEO Readiness",
        "Clean State Management & Component Architecture",
      ],
    },
    {
      id: "backend-api",
      title: "Backend & API Development",
      iconName: "Server",
      description: "REST APIs, authentication, authorization, database integration and backend architecture.",
      capabilities: [
        "Node.js & Express RESTful API Design",
        "JWT & Role-Based Access Control (RBAC)",
        "MongoDB Schema Design & Query Optimization",
        "Redis Caching & Queue Management (BullMQ)",
      ],
    },
    {
      id: "admin-dashboards",
      title: "Admin Dashboards",
      iconName: "LayoutDashboard",
      description: "Clean dashboards for managing users, employees, products, data and business operations.",
      capabilities: [
        "Interactive Data Tables & Filtering",
        "Role-Based Permissions & User Management",
        "Real-Time Activity & Status Monitoring",
        "Clean, Modern Operations Layouts",
      ],
    },
    {
      id: "website-improvements",
      title: "Website Improvements & Bug Fixes",
      iconName: "Wrench",
      description: "Fix existing issues, improve responsiveness, integrate APIs and add new functionality.",
      capabilities: [
        "UI Bug Fixes & Layout Adjustments",
        "Third-Party API & Service Integration",
        "Code Refactoring & Component Modularization",
        "Loading Speed & User Experience Upgrades",
      ],
    },
  ] as Service[],
  projects: [
    {
      id: "employee-management-system",
      title: "Employee Management System",
      category: "Full-Stack / Backend",
      type: "Self-Initiated Project",
      description: "A production-style HR management backend featuring authentication, role-based authorization, employee management, attendance, leave management, task management and real-time notifications.",
      longDescription: "Designed to solve core internal organizational logistics, this production-style HR backend provides a secure, role-restricted infrastructure for managing company staff, daily attendance logging, formal leave workflows, async background jobs, and real-time event broadcasting.",
      tech: ["Node.js", "Express.js", "MongoDB", "Redis", "Socket.io", "BullMQ", "JWT"],
      features: [
        "Role-Based Access Control (Admin, HR, Employee)",
        "JWT Authentication with Refresh Token rotation",
        "Real-time instant status updates via Socket.io",
        "Async background email & digest processing with BullMQ & Redis",
        "Comprehensive leave request submission & approval workflow",
        "Automated attendance tracking & summary reports",
      ],
      architectureHighlights: [
        "Modular controller-service-repository pattern",
        "Redis caching layer for high-frequency employee profile queries",
        "BullMQ worker queues handling async report rendering without blocking HTTP loops",
      ],
      githubUrl: "https://github.com/nidhi-mern-dev/employee-management-system",
      liveUrl: "#",
      imageBg: "from-indigo-900/40 via-purple-950/40 to-slate-900/40",
    },
    {
      id: "e-commerce-platform",
      title: "E-Commerce Platform",
      category: "Full-Stack Web App",
      type: "Self-Initiated Project",
      description: "A full-stack e-commerce application focused on product management, authentication, database operations and an intuitive shopping experience.",
      longDescription: "A feature-rich digital storefront built with React and Node.js. Includes product filtering by price and category, secure customer cart state management, checkout simulation, and an admin portal for inventory CRUD operations.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "JWT"],
      features: [
        "Dynamic Product Catalog with Category & Price Filtering",
        "Persistent User Cart & Checkout State",
        "Secure User Registration & Password Hashing (bcrypt)",
        "Admin Portal for adding, editing, and archiving products",
        "Responsive, mobile-optimized store UI",
      ],
      architectureHighlights: [
        "Mongoose schemas with indexing on product tags and categories",
        "REST API endpoints with pagination and sorting support",
        "Reusable React UI components with custom hook state management",
      ],
      githubUrl: "https://github.com/nidhi-mern-dev/ecommerce-platform",
      liveUrl: "#",
      imageBg: "from-blue-950/40 via-cyan-950/40 to-slate-900/40",
    },
    {
      id: "job-placement-dashboard",
      title: "Job / Placement Management Dashboard",
      category: "Full-Stack Admin Portal",
      type: "Self-Initiated Project",
      description: "A dashboard-based application for managing users, data, records and administrative operations with authentication and role-based access.",
      longDescription: "Built to streamline placement cell operations for educational institutions or tech bootcamps. Tracks student applications, corporate recruitment drives, interview schedules, and placement status with real-time status counters.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      features: [
        "Administrative Dashboard with metrics counters & status charts",
        "Student candidate profile management & resume links",
        "Company recruitment drive listing & applicant status tracking",
        "Custom filterable tables with search capability",
        "Protected routes with auth middleware check",
      ],
      architectureHighlights: [
        "Aggregated MongoDB pipelines for statistical reports (e.g. placement rate %)",
        "Clean tabbed dashboard navigation with responsive sidebar drawer",
        "Structured API payload validation with Express validator middleware",
      ],
      githubUrl: "https://github.com/nidhi-mern-dev/placement-management-dashboard",
      liveUrl: "#",
      imageBg: "from-purple-950/40 via-indigo-950/40 to-slate-900/40",
    },
  ] as Project[],
  whyMe: {
    heading: "What You Can Expect",
    statement: "I'm building my freelance journey & coaching practice by focusing on practical solutions, clear communication and delivering work that solves the actual problem.",
    points: [
      {
        title: "Clear Communication",
        description: "Regular project updates, prompt responses, and transparent status sharing for freelance & coaching.",
      },
      {
        title: "Clean and Maintainable Code",
        description: "Structured, readable TypeScript/JavaScript following industry standards and component reusability.",
      },
      {
        title: "Responsive Design & Hands-On Guidance",
        description: "Mobile-first, fluid layouts crafted to perform smoothly, plus step-by-step guidance during coaching.",
      },
      {
        title: "Attention to Project Requirements",
        description: "Dedicated to listening closely, understanding your goals, and delivering exactly what your business or learning path needs.",
      },
    ],
  },
  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "REST APIs" },
        { name: "JWT Authentication" },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB" },
        { name: "MySQL" },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Redis" },
        { name: "Socket.io" },
        { name: "BullMQ" },
        { name: "Postman" },
      ],
    },
  ] as SkillCategory[],
};
