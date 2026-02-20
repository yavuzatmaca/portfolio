"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  period: string;
  status: string;
  statusColor: string;
  description: string;
  tech: string[];
  features: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "AxisERP - Enterprise Resource Planning",
    period: "September 2025 - February 2026 (~5 months)",
    status: "Active Development",
    statusColor: "bg-yellow-500/20 text-yellow-300",
    description: "Modern ERP system for SMEs featuring accounting (Turkish standards), inventory management, and production planning with premium glassmorphism UI.",
    tech: ["Laravel 10", "Vue.js 3", "PHP 8.1+", "MySQL", "Pinia", "Chart.js"],
    features: [
      "Turkish Chart of Accounts",
      "VAT rates (0%, 1%, 10%, 20%)",
      "Barcode system",
      "Multi-warehouse support",
      "WhatsApp Business API",
      "Dark/Light mode",
      "25+ database tables",
      "50+ API endpoints",
    ],
  },
  {
    title: "QCFinance.ca - Quebec Financial Calculators",
    period: "January - February 2026 (~1 month)",
    status: "Live Production",
    statusColor: "bg-green-500/20 text-green-300",
    link: "https://qcfinance.ca",
    description: "Financial calculator platform for Quebec residents with 19+ specialized calculators using official 2026 tax data from Revenu Québec and Canada Revenue Agency.",
    tech: ["Next.js 14", "TypeScript", "Chart.js", "Recharts", "Framer Motion", "Google Analytics"],
    features: [
      "19+ specialized calculators",
      "Real-time Bank of Canada data",
      "SEO optimized (Schema.org)",
      "100% client-side processing",
      "Mobile-first responsive",
      "Ezoic ad monetization",
      "<2s page load time",
      "SEO score: 95+",
    ],
  },
  {
    title: "Construction ERP System",
    period: "January - February 2026 (~1 month)",
    status: "Active Development",
    statusColor: "bg-yellow-500/20 text-yellow-300",
    github: "https://github.com/yavuzatmaca/construction-erp-system",
    description: "Comprehensive construction project management and real estate sales platform. Multi-module ERP system with project planning, supply chain management, real estate sales, and financial tracking.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "JWT Auth"],
    features: [
      "Multi-project tracking with Gantt charts",
      "Phase management & milestones",
      "RFQ & supplier quote comparison",
      "Real estate sales & installment plans",
      "Progress payment (Hakedis) system",
      "Cash flow projections",
      "Mobile-first responsive design",
      "Complex relational database (25+ models)",
    ],
  },
];

export default function ProjectsV2() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-950 border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{project.period}</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-300 bg-indigo-500/10 p-3 rounded-lg"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-indigo-400 flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {(project.link || project.github) && (
                <div className="flex flex-wrap gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                      <span>Visit Website</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-indigo-500 rounded-lg transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                      <span>View on GitHub</span>
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
