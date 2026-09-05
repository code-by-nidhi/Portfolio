"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Server, LayoutDashboard, Wrench, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA, Service } from "@/data/portfolio-data";

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-purple-400" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-indigo-400" />;
      case "Server":
        return <Server className="w-6 h-6 text-violet-400" />;
      case "LayoutDashboard":
        return <LayoutDashboard className="w-6 h-6 text-cyan-400" />;
      case "Wrench":
        return <Wrench className="w-6 h-6 text-emerald-400" />;
      default:
        return <Globe className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How I Can Help
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Practical development solutions for businesses, startups and individuals.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.services.map((service: Service, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 group-hover:border-indigo-500/50 transition-all duration-300">
                  {getIcon(service.iconName)}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Capabilities Bullet List */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Key Capabilities:
                  </span>
                  <ul className="space-y-2">
                    {service.capabilities.map((item, capIndex) => (
                      <li key={capIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-slate-800/40 flex items-center justify-between text-xs font-medium text-indigo-400 group-hover:text-indigo-300">
                <span>Discuss {service.title}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
