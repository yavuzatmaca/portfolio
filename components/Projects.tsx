"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AxisERP - Enterprise Resource Planning",
    period: "September 2025 - February 2026 (~5 months)",
    status: "Active Development",
    statusColor: "bg-yellow-500",
    description: "Modern ERP system for SMEs featuring accounting (Turkish standards), inventory management, and production planning with premium glassmorphism UI.",
    tech: ["Laravel 10", "Vue.js 3", "PHP 8.1+", "MySQL", "Pinia", "Chart.js"],
    features: [
      "Turkish Chart of Accounts",
      "VAT rates (0%, 1%, 10%, 20%)",
      "Barcode system",
      "Multi-warehouse support",
      "WhatsApp Business API",
      "Dark/Light mode"
    ],
    metrics: [
      "25+ database tables",
      "50+ API endpoints",
      "Real-time dashboard updates",
      "Multi-currency support"
    ],
    aiChallenges: "Limited knowledge of Turkish accounting standards, incorrect VAT calculation methods, Laravel+Vue.js integration patterns",
    aiHelped: "Vue.js components with Composition API, Laravel controller boilerplate, Pinia store structure, Chart.js dashboard configurations",
    manualWork: "Complete Turkish Chart of Accounts implementation, accounting helper functions, multi-currency exchange system, Turkish Central Bank API integration, document numbering system, glassmorphism UI design, WhatsApp Business API integration"
  },
  {
    title: "QCFinance.ca - Quebec Financial Calculators",
    period: "January - February 2026 (~1 month)",
    status: "Live Production",
    statusColor: "bg-green-500",
    link: "https://qcfinance.ca",
    github: null,
    description: "Financial calculator platform for Quebec residents with 19+ specialized calculators using official 2026 tax data from Revenu Québec and Canada Revenue Agency.",
    tech: ["Next.js 14", "TypeScript", "Chart.js", "Recharts", "Framer Motion", "Google Analytics"],
    features: [
      "19+ specialized calculators",
      "Real-time Bank of Canada data",
      "SEO optimized (Schema.org)",
      "Privacy-focused (client-side)",
      "Fully responsive design",
      "Ezoic ad monetization"
    ],
    metrics: [
      "100% client-side processing",
      "<2s page load time",
      "Mobile-first responsive",
      "SEO score: 95+"
    ],
    aiChallenges: "Outdated 2024 tax rates instead of 2026, deprecated Bank of Canada API endpoints, complex Quebec-specific tax calculation logic",
    aiHelped: "Generated calculator UI components (40% time saved), chart configurations for Chart.js and Recharts, SEO metadata and Schema.org markup",
    manualWork: "Verified all tax rates against official Revenu Québec documentation, implemented Quebec-specific calculations (RRQ, RQAP, QPIP), manually integrated Bank of Canada Valet API, optimized performance for 19+ calculators"
  },
  {
    title: "Construction Quotation & Cost Management",
    period: "January - February 2026 (~1 month)",
    status: "Production Ready",
    statusColor: "bg-green-500",
    github: "https://github.com/yavuzatmaca/teklif",
    description: "Comprehensive web application for construction companies to manage quotations, suppliers, and cost analysis with advanced features like progress payment management and property exchange system.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma ORM", "NextAuth.js", "Tailwind CSS"],
    features: [
      "Multi-phase project management",
      "Critical path analysis",
      "Progress payment tracking",
      "Property exchange system",
      "Wastage calculations",
      "25+ database tables"
    ],
    metrics: [
      "25+ database tables",
      "Complex relational schema",
      "Property-based testing",
      "Type-safe API routes"
    ],
    aiChallenges: "Prisma schema complexity with 25+ tables requiring multiple iterations, incorrect cascade delete patterns, circular dependency prevention in phase relationships",
    aiHelped: "Generated 60% of initial Prisma schema structure, created CRUD operation boilerplate for all entities, designed complex RFQ-Quote-Supplier relationship model",
    manualWork: "Progress payment calculation algorithms, property exchange system implementation, custom validation for phase dependencies, database query optimization, property-based testing with fast-check, wastage calculation system"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
