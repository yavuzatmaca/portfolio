"use client";

import { motion } from "framer-motion";

const skills = {
  "Frontend": ["React 18", "Next.js 14/15", "Vue.js 3", "TypeScript 5.0", "Tailwind CSS", "Framer Motion"],
  "Backend": ["Laravel 10", "Next.js API", "Node.js", "RESTful API", "Server Actions"],
  "Database": ["PostgreSQL", "MySQL", "Prisma ORM", "Eloquent ORM"],
  "Testing": ["Vitest", "Property-based Testing", "Integration Testing"],
  "Tools": ["Git", "Vercel", "Docker", "GitHub Copilot", "Claude AI"]
};

export default function Skills() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-700/50 p-6 rounded-xl border border-slate-600"
            >
              <h3 className="text-xl font-bold text-indigo-400 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-600 rounded-md text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-slate-400"
        >
          <p className="text-lg mb-4">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
          </p>
          <p className="text-sm">
            © 2026 Full-Stack Developer Portfolio | AI-Assisted Development
          </p>
        </motion.div>
      </div>
    </section>
  );
}
