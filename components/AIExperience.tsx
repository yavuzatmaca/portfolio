"use client";

import { motion } from "framer-motion";
import { Icons } from "./Icons";

export default function AIExperience() {
  return (
    <section id="ai-experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 flex items-center justify-center gap-4"
        >
          <Icons.Robot className="w-12 h-12" />
          AI-Assisted Development Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Honest Assessment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
              <Icons.Info className="w-6 h-6" />
              Honest Assessment
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              All three projects were developed with significant AI assistance (Claude, ChatGPT, GitHub Copilot). 
              This accelerated development by approximately <strong className="text-green-400">30-35%</strong> while 
              requiring careful verification and manual refinement of critical business logic.
            </p>
          </motion.div>

          {/* What Worked vs Challenges */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 rounded-xl"
            >
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icons.Check className="w-6 h-6" />
                What Worked Well
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <Icons.Lightning className="w-4 h-4" />
                  Rapid prototyping & boilerplate
                </li>
                <li className="flex items-center gap-2">
                  <Icons.Bug className="w-4 h-4" />
                  Problem-solving & debugging
                </li>
                <li className="flex items-center gap-2">
                  <Icons.Book className="w-4 h-4" />
                  Documentation generation
                </li>
                <li className="flex items-center gap-2">
                  <Icons.GraduationCap className="w-4 h-4" />
                  Learning new technologies
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-500/20 to-pink-500/20 p-6 rounded-xl"
            >
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icons.Warning className="w-6 h-6" />
                Challenges Faced
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <Icons.X className="w-4 h-4" />
                  Hallucinations & incorrect info
                </li>
                <li className="flex items-center gap-2">
                  <Icons.Brain className="w-4 h-4" />
                  Context loss & inconsistency
                </li>
                <li className="flex items-center gap-2">
                  <Icons.Layers className="w-4 h-4" />
                  Over-engineering tendency
                </li>
                <li className="flex items-center gap-2">
                  <Icons.Copy className="w-4 h-4" />
                  Copy-paste errors
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Key Learnings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-2xl space-y-6"
          >
            <h3 className="text-2xl font-bold text-indigo-400 flex items-center gap-2">
              <Icons.Target className="w-6 h-6" />
              Key Learnings
            </h3>
            
            <div>
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Icons.Shield className="w-5 h-5" />
                Verification is Critical
              </h4>
              <div className="bg-indigo-500/10 p-4 rounded-lg font-mono text-sm">
                AI Suggestion → Documentation Check → Test → Integrate
              </div>
              <p className="text-slate-400 mt-2">
                Never trust AI output blindly, especially for database schemas, authentication, business logic, and performance-critical code.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Icons.Chat className="w-5 h-5" />
                Effective Prompting
              </h4>
              <ul className="space-y-1 text-slate-300">
                <li>✅ Be specific with requirements</li>
                <li>✅ Provide relevant context</li>
                <li>✅ Request minimal solutions</li>
                <li>❌ Avoid vague requests</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/10 p-4 rounded-lg border-l-4 border-green-500">
                <strong>Use AI for:</strong>
                <ul className="text-sm mt-2 space-y-1 text-slate-300">
                  <li>• Boilerplate code</li>
                  <li>• Project setup</li>
                  <li>• Documentation</li>
                  <li>• Learning syntax</li>
                </ul>
              </div>
              <div className="bg-red-500/10 p-4 rounded-lg border-l-4 border-red-500">
                <strong>Code manually for:</strong>
                <ul className="text-sm mt-2 space-y-1 text-slate-300">
                  <li>• Core business logic</li>
                  <li>• Security features</li>
                  <li>• Performance code</li>
                  <li>• Complex algorithms</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Time Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icons.ChartBar className="w-6 h-6" />
              Time Impact Analysis
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400">40-50%</div>
                <div className="text-slate-400">Time Saved</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400">10-15%</div>
                <div className="text-slate-400">Time Added (fixes)</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400">30-35%</div>
                <div className="text-slate-400">Net Benefit</div>
              </div>
            </div>
          </motion.div>

          {/* For Recruiters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-pink-400 mb-4 flex items-center gap-2">
              <Icons.Briefcase className="w-6 h-6" />
              For Recruiters & Employers
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>AI assistance is a tool, not a replacement for developer skills</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Ability to verify and refine AI output is itself a valuable skill</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Critical thinking and debugging skills are more important than ever</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Understanding when NOT to use AI is as important as knowing when to use it</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
