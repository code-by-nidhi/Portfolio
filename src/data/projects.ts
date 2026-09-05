import type { Project } from "@/types";

/**
 * The three engineering projects are carried over from the previous portfolio.
 * The two analytics entries are placeholders — swap in real case studies.
 */
export const projects: Project[] = [
  {
    id: "employee-management-system",
    title: "Employee Management System",
    discipline: "engineering",
    category: "Full-stack · Backend",
    status: "Self-initiated",
    accent: "lilac",
    summary:
      "A production-style HR backend covering authentication, role-based authorisation, attendance, leave workflows and real-time notifications.",
    detail:
      "Built to solve core internal organisational logistics: a secure, role-restricted service for managing staff, logging daily attendance, running formal leave approval flows, processing async background jobs and broadcasting live events.",
    tech: ["Node.js", "Express.js", "MongoDB", "Redis", "Socket.io", "BullMQ", "JWT"],
    highlights: [
      "Role-based access control across Admin, HR and Employee roles",
      "JWT authentication with refresh-token rotation",
      "Real-time status updates over Socket.io",
      "Async email and digest processing via BullMQ + Redis",
      "Modular controller–service–repository architecture",
    ],
    metrics: [
      { label: "Roles modelled", value: "3" },
      { label: "Core modules", value: "6" },
    ],
    repoUrl: "https://github.com/nidhi-mern-dev/employee-management-system",
  },
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    discipline: "engineering",
    category: "Full-stack web app",
    status: "Self-initiated",
    accent: "blush",
    summary:
      "A storefront with product management, filtering, persistent cart state and an admin portal for inventory operations.",
    detail:
      "A feature-rich digital storefront on React and Node. Products filter by price and category, cart state persists across sessions, and an admin portal handles inventory CRUD with archiving.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "JWT"],
    highlights: [
      "Dynamic catalog with category and price filtering",
      "Persistent cart and checkout state",
      "bcrypt password hashing on registration",
      "Mongoose schemas indexed on tags and categories",
      "Paginated, sortable REST endpoints",
    ],
    metrics: [
      { label: "API endpoints", value: "20+" },
      { label: "Mobile-first", value: "100%" },
    ],
    repoUrl: "https://github.com/nidhi-mern-dev/ecommerce-platform",
  },
  {
    id: "placement-dashboard",
    title: "Placement Management Dashboard",
    discipline: "engineering",
    category: "Admin portal · Reporting",
    status: "Self-initiated",
    accent: "sky",
    summary:
      "A dashboard for placement-cell operations — candidate tracking, recruitment drives, interview schedules and live status counters.",
    detail:
      "Streamlines placement operations for institutions and bootcamps. Aggregated MongoDB pipelines compute statistics such as placement rate, surfaced through filterable tables and a responsive tabbed layout.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Metrics counters and status charts on the landing dashboard",
      "Candidate profile management with resume links",
      "Company drive listings with applicant status tracking",
      "Aggregation pipelines for placement-rate reporting",
      "Protected routes behind auth middleware",
    ],
    metrics: [
      { label: "Report views", value: "4" },
      { label: "Tracked entities", value: "3" },
    ],
    repoUrl: "https://github.com/nidhi-mern-dev/placement-management-dashboard",
  },
  {
    id: "retail-sales-analysis",
    title: "Retail Sales Performance Analysis",
    discipline: "analytics",
    category: "SQL · Python · Power BI",
    status: "Placeholder — replace",
    accent: "mint",
    summary:
      "An end-to-end analysis of transactional retail data: cleaning, cohort segmentation and a Power BI dashboard for regional performance.",
    detail:
      "Raw transaction exports cleaned in pandas, modelled in SQL with window functions for running totals and rank-by-region, then surfaced as a Power BI report covering revenue trend, basket composition and customer cohorts.",
    tech: ["SQL", "Python", "pandas", "Power BI", "Excel"],
    highlights: [
      "Deduplication and null-handling pipeline in pandas",
      "Window functions for running revenue and regional ranking",
      "Monthly customer cohort retention matrix",
      "Drill-through Power BI pages by region and category",
      "Written summary of the three findings that moved the needle",
    ],
    metrics: [
      { label: "Rows processed", value: "50K+" },
      { label: "KPIs tracked", value: "8" },
    ],
  },
  {
    id: "product-funnel-insights",
    title: "Product Funnel & Retention Insights",
    discipline: "analytics",
    category: "Analytics engineering",
    status: "Placeholder — replace",
    accent: "sand",
    summary:
      "Event data from a web product modelled into a funnel, with drop-off diagnosis and a self-serve dashboard built in React.",
    detail:
      "Application events aggregated into stage-by-stage conversion, segmented by acquisition channel and device. The result shipped as a lightweight React dashboard so the team could slice it without waiting on an analyst.",
    tech: ["SQL", "Python", "pandas", "Recharts", "MongoDB"],
    highlights: [
      "Event schema designed for reliable stage attribution",
      "Funnel conversion and drop-off by channel and device",
      "Weekly retention curves with cohort comparison",
      "Self-serve React dashboard with date and segment filters",
      "Documented metric definitions so numbers stay comparable",
    ],
    metrics: [
      { label: "Funnel stages", value: "5" },
      { label: "Segments", value: "12" },
    ],
  },
];
