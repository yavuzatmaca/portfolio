"use client";

import { motion } from "framer-motion";

export default function ContactV2() {
  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm always open to new projects, collaborations, or just a friendly chat. 
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.a
              href="mailto:myaweb@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900 p-8 rounded-xl border border-indigo-500/20 hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <svg 
                  width="48" 
                  height="48" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="text-indigo-400 group-hover:scale-110 transition-transform"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-400 mb-2">Email</h3>
              <p className="text-slate-300">myaweb@gmail.com</p>
            </motion.a>

            <motion.a
              href="https://github.com/yavuzatmaca"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 p-8 rounded-xl border border-indigo-500/20 hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <svg 
                  width="48" 
                  height="48" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="text-indigo-400 group-hover:scale-110 transition-transform"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-400 mb-2">GitHub</h3>
              <p className="text-slate-300">github.com/yavuzatmaca</p>
            </motion.a>

            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900 p-8 rounded-xl border border-indigo-500/20 hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <svg 
                  width="48" 
                  height="48" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="text-indigo-400 group-hover:scale-110 transition-transform"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-400 mb-2">LinkedIn</h3>
              <p className="text-slate-300">Add your profile</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900 p-8 rounded-xl border border-indigo-500/20 hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <svg 
                  width="48" 
                  height="48" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="text-indigo-400 group-hover:scale-110 transition-transform"
                >
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-400 mb-2">Location</h3>
              <p className="text-slate-300">
                🇹🇷 Gaziantep, Turkey<br />
                🇨🇦 Montreal, Canada
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-indigo-500/20 text-center"
      >
        <p className="text-slate-400">
          &copy; 2026 Mehmet Yavuzatmaca. All rights reserved.
        </p>
        <p className="text-slate-500 text-sm mt-2">
          Built with modern web technologies 🚀
        </p>
      </motion.footer>
    </section>
  );
}
