"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Cpu, BookOpen, Terminal, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
      title: "Computer Science Background",
      desc: "Grounded in algorithms, database design, computer networks, and data structures.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-violet-400" />,
      title: "MERN Stack Specialist",
      desc: "Focused on React, Next.js, Node.js, Express.js, and MongoDB.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: "Backend & API Engineering",
      desc: "Experienced with RESTful patterns, JWT authentication, and database indexing.",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
      title: "Continuous Learning",
      desc: "Constantly sharpening software craftsmanship through practice and new frameworks.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Human Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              About Me
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              {PORTFOLIO_DATA.personal.aboutHeader}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {PORTFOLIO_DATA.personal.aboutText}
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              When I'm not writing code, I'm analyzing software architectures, reading technical documentation, and exploring tools like Redis, Docker, and Next.js to deliver cleaner, faster digital solutions.
            </p>

            {/* Quick Stats/Focus Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Code Philosophy Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel p-8 rounded-2xl border border-slate-800 relative space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <Terminal className="w-6 h-6 text-indigo-400" />
                <span className="font-mono text-sm font-bold text-white">Developer Manifesto</span>
              </div>

              <div className="space-y-4 text-sm text-slate-300 font-mono leading-relaxed">
                <div className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold">&gt;</span>
                  <span>Goal: Write code that humans can read and computers can execute efficiently.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold">&gt;</span>
                  <span>Philosophy: Simple solutions beat clever complications every single time.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold">&gt;</span>
                  <span>Approach: Listen first, design modularly, test thoroughly.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Location: {PORTFOLIO_DATA.personal.location}</span>
                <span className="text-indigo-400 font-semibold">Available Worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
