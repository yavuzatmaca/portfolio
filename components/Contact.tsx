"use client";

import { motion } from "framer-motion";
import { Icons } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Get In Touch
          </h2>
          
          <p className="text-xl mb-12 opacity-90">
            Interested in working together or have a question? Feel free to reach out!
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <Icons.User className="w-6 h-6" />
                <span className="text-xl font-semibold">Mehmet Yavuzatmaca</span>
              </div>

              <a
                href="mailto:myaweb@gmail.com"
                className="flex items-center justify-center gap-3 text-lg hover:text-indigo-200 transition-colors group"
              >
                <Icons.Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>myaweb@gmail.com</span>
              </a>

              <div className="pt-6">
                <a
                  href="mailto:myaweb@gmail.com"
                  className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm opacity-75">
            Available for freelance projects and full-time opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
}
