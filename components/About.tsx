"use client";

import { motion } from "framer-motion";
import { Icons } from "./Icons";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Bio */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">Background</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Full-stack developer with <strong className="text-white">15+ years</strong> of active development experience, 
                coding since 2003. Specialized in building modern web applications with React, Next.js, Vue.js, and Laravel.
              </p>
              <p className="text-slate-300 leading-relaxed">
                I combine traditional development expertise with modern AI-assisted workflows to deliver 
                high-quality solutions efficiently. My focus is on clean code, user experience, and scalable architecture.
              </p>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <Icons.MapPin className="w-6 h-6 text-indigo-400" />
                  <h4 className="text-xl font-semibold">Location</h4>
                </div>
                <p className="text-slate-300">
                  🇹🇷 Gaziantep, Turkey<br />
                  🇨🇦 Montreal, Canada
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <Icons.Briefcase className="w-6 h-6 text-indigo-400" />
                  <h4 className="text-xl font-semibold">Work Preferences</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Remote</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Hybrid</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Full-time</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Freelance</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Contract</span>
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <Icons.Rocket className="w-6 h-6 text-indigo-400" />
                  <h4 className="text-xl font-semibold">Currently Learning</h4>
                </div>
                <ul className="text-slate-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    Advanced TypeScript patterns
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    Microservices architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    AI/ML integration in web apps
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    Performance optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/yavuzatmaca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-600 hover:border-slate-500"
            >
              <Icons.GitHub className="w-5 h-5" />
              <span>GitHub</span>
              <Icons.ExternalLink className="w-4 h-4 opacity-50" />
            </a>

            <a
              href="mailto:myaweb@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-600 hover:border-slate-500"
            >
              <Icons.Mail className="w-5 h-5" />
              <span>Email</span>
            </a>

            {/* LinkedIn - will be added later */}
            <button
              disabled
              className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 rounded-lg border border-slate-700 opacity-50 cursor-not-allowed"
              title="LinkedIn profile coming soon"
            >
              <Icons.LinkedIn className="w-5 h-5" />
              <span>LinkedIn (Coming Soon)</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
