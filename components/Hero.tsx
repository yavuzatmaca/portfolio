"use client";

import { motion } from "framer-motion";

export default function HeroV2() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 animate-float" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='1.5' fill='white' opacity='0.3'/%3E%3C/svg%3E")`,
          }} 
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Mehmet Yavuzatmaca
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-semibold">
            Full-Stack Developer
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            15+ Years Experience • Building Modern Web Applications with AI Assistance
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["React & Next.js", "Vue.js", "Laravel", "TypeScript"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex gap-4 justify-center items-center text-sm opacity-75 flex-wrap">
            <a
              href="https://github.com/yavuzatmaca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="mailto:myaweb@gmail.com"
              className="hover:opacity-100 transition-opacity"
            >
              Email
            </a>
            <span>•</span>
            <span>🇹🇷 Turkey / 🇨🇦 Canada</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
