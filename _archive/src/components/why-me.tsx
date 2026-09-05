"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Code, Layout, Target, Quote } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function WhyMe() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-indigo-400" />;
      case 1:
        return <Code className="w-5 h-5 text-violet-400" />;
      case 2:
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 3:
        return <Target className="w-5 h-5 text-emerald-400" />;
      default:
        return <MessageSquare className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Freelance Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {PORTFOLIO_DATA.whyMe.heading}
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {PORTFOLIO_DATA.whyMe.points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                {getIcon(index)}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-white">{point.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Honest Statement Callout Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/40 to-slate-900/60 border border-indigo-500/30 text-center relative shadow-xl"
        >
          <Quote className="w-8 h-8 text-indigo-400/40 mx-auto mb-3" />
          <p className="text-base sm:text-lg text-slate-200 font-medium italic leading-relaxed">
            "{PORTFOLIO_DATA.whyMe.statement}"
          </p>
          <span className="inline-block mt-4 text-xs font-mono text-indigo-400 uppercase tracking-wider">
            — Nidhi | MERN Stack Freelance Commitment
          </span>
        </motion.div>
      </div>
    </section>
  );
}
