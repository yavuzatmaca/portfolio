"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React & Next.js", level: 95 },
      { name: "Vue.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Laravel", level: 93 },
      { name: "Node.js", level: 85 },
      { name: "PHP", level: 90 },
      { name: "REST API", level: 94 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL / PostgreSQL", level: 91 },
      { name: "Git & GitHub", level: 89 },
      { name: "Prisma ORM", level: 87 },
      { name: "Docker", level: 75 },
    ],
  },
  {
    title: "AI & Modern Tools",
    skills: [
      { name: "AI-Assisted Development", level: 96 },
      { name: "Prompt Engineering", level: 93 },
      { name: "Code Review & Debugging", level: 95 },
      { name: "Performance Optimization", level: 88 },
    ],
  },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-slate-200">{skill.name}</span>
        <span className="text-indigo-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
        />
      </div>
    </div>
  );
}

export default function SkillsV2() {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-slate-900 p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-indigo-400 mb-6">
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  delay={categoryIndex * 0.1 + skillIndex * 0.05}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
