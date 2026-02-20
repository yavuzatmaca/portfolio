"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import AIExperience from "@/components/AIExperience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <AIExperience />
      <Skills />
      <Contact />
    </main>
  );
}
