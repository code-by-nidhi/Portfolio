"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Cpu } from "lucide-react";

export default function TechStrip() {
  return (
    <section className="py-12 bg-slate-950/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2 text-slate-400 font-mono text-sm uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-indigo-400" />
            <span>Technologies I work with</span>
          </div>
          <p className="text-xs text-slate-400 font-sans">
            Core stack & tools utilized across full-stack applications & APIs
          </p>
        </div>

        {/* Tech Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {PORTFOLIO_DATA.techStrip.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              className="group flex items-center justify-center p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-200"
            >
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
