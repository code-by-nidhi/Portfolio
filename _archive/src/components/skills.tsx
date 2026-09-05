"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";
import { PORTFOLIO_DATA, SkillCategory } from "@/data/portfolio-data";

export default function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case "Backend":
        return <Server className="w-5 h-5 text-violet-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-cyan-400" />;
      case "Tools & Technologies":
        return <Wrench className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-950/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Competencies
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Modern full-stack technologies and engineering practices I work with.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.skills.map((categoryGroup: SkillCategory, index: number) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-2xl space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {getCategoryIcon(categoryGroup.category)}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {categoryGroup.category}
                </h3>
              </div>

              {/* Skill Badges Matrix */}
              <div className="flex flex-wrap gap-2.5">
                {categoryGroup.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/40 text-sm font-medium text-slate-200 hover:text-white transition-all shadow-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
