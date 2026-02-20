"use client";

import { motion } from "framer-motion";
import { Icons } from "./Icons";

interface Project {
  title: string;
  period: string;
  status: string;
  statusColor: string;
  link?: string;
  github?: string | null;
  description: string;
  tech: string[];
  features: string[];
  metrics?: string[];
  aiChallenges: string;
  aiHelped: string;
  manualWork: string;
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600 hover:border-indigo-500 transition-all hover:shadow-2xl hover:shadow-indigo-500/20"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-2">
            {project.title}
          </h3>
          <p className="text-slate-400">{project.period}</p>
        </div>
        <span className={`${project.statusColor} px-4 py-2 rounded-full text-sm font-semibold mt-4 md:mt-0 inline-block`}>
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-300 mb-6">{project.description}</p>
      
      {/* Links */}
      <div className="flex flex-wrap gap-3 mb-6">
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg transition-colors"
          >
            <Icons.Globe className="w-4 h-4" />
            <span>Live Demo</span>
            <Icons.ExternalLink className="w-3 h-3" />
          </a>
        )}
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-600/50 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors"
          >
            <Icons.GitHub className="w-4 h-4" />
            <span>View Code</span>
            <Icons.ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-md text-sm">
            {tech}
          </span>
        ))}
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {project.features.map((feature) => (
          <div key={feature} className="flex items-center gap-2 text-sm text-slate-300 bg-slate-800/50 p-3 rounded-lg">
            <Icons.Check className="w-4 h-4 text-green-400 flex-shrink-0" />
            {feature}
          </div>
        ))}
      </div>

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-4 mb-6 border border-cyan-500/20">
          <div className="flex items-center gap-2 mb-3">
            <Icons.ChartBar className="w-5 h-5 text-cyan-400" />
            <h4 className="font-semibold text-cyan-300">Key Metrics</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {project.metrics.map((metric) => (
              <div key={metric} className="text-center bg-black/20 p-2 rounded-lg">
                <p className="text-xs text-slate-400">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI Collaboration */}
      <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Icons.Robot className="w-6 h-6" />
          <h4 className="text-xl font-semibold">AI Collaboration</h4>
        </div>

        <div className="bg-black/20 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="font-semibold mb-2 flex items-center gap-2">
            <Icons.Warning className="w-5 h-5" />
            Challenges:
          </p>
          <p className="text-sm text-slate-300">{project.aiChallenges}</p>
        </div>

        <div className="bg-black/20 p-4 rounded-lg border-l-4 border-green-500">
          <p className="font-semibold mb-2 flex items-center gap-2">
            <Icons.Check className="w-5 h-5" />
            AI Helped:
          </p>
          <p className="text-sm text-slate-300">{project.aiHelped}</p>
        </div>

        <div className="bg-black/20 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="font-semibold mb-2 flex items-center gap-2">
            <Icons.User className="w-5 h-5" />
            Manual Work:
          </p>
          <p className="text-sm text-slate-300">{project.manualWork}</p>
        </div>
      </div>
    </motion.div>
  );
}
