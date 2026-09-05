"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Info, Code2, Server, Database, Activity, ShieldCheck, ShoppingCart, Users, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";
import ProjectModal from "./project-modal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Helper to render custom styled project mockups for visual appeal
  const renderProjectVisual = (projectId: string) => {
    switch (projectId) {
      case "employee-management-system":
        return (
          <div className="w-full h-48 bg-slate-950/80 p-4 font-mono text-xs text-slate-300 flex flex-col justify-between rounded-t-xl border-b border-slate-800 relative overflow-hidden group-hover:border-indigo-500/30 transition-all">
            <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-indigo-400" />
                <span className="font-semibold text-slate-200">HR_Backend_API</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                SOCKET.IO CONNECTED
              </span>
            </div>
            
            <div className="space-y-2 py-2">
              <div className="flex items-center justify-between bg-slate-900/80 p-2 rounded border border-slate-800">
                <span className="text-slate-400">POST /api/v1/auth/login</span>
                <span className="text-emerald-400 font-bold">200 OK (24ms)</span>
              </div>
              <div className="flex items-center justify-between bg-slate-900/80 p-2 rounded border border-slate-800">
                <span className="text-slate-400">GET /api/v1/attendance/digest</span>
                <span className="text-cyan-400 font-bold">CACHE HIT (Redis)</span>
              </div>
              <div className="flex items-center justify-between bg-slate-900/80 p-2 rounded border border-slate-800">
                <span className="text-slate-400">Queue: BullMQ Email Digest</span>
                <span className="text-indigo-400 font-bold">COMPLETED</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-1">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-indigo-400" /> RBAC Enabled</span>
              <span className="flex items-center gap-1"><Activity className="w-3 h-3 text-violet-400" /> JWT Refresh Rotation</span>
            </div>
          </div>
        );

      case "e-commerce-platform":
        return (
          <div className="w-full h-48 bg-slate-950/80 p-4 font-sans text-xs text-slate-300 flex flex-col justify-between rounded-t-xl border-b border-slate-800 relative overflow-hidden group-hover:border-indigo-500/30 transition-all">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold text-slate-200">DevStore Catalog</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                React + Mongoose
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 py-2">
              <div className="bg-slate-900 p-2 rounded border border-slate-800 space-y-1">
                <div className="h-10 bg-slate-800 rounded flex items-center justify-center text-[10px] text-slate-400 font-mono">Product A</div>
                <div className="text-[10px] font-bold text-white">$149.00</div>
                <div className="text-[9px] text-slate-400">In Stock</div>
              </div>
              <div className="bg-slate-900 p-2 rounded border border-slate-800 space-y-1">
                <div className="h-10 bg-slate-800 rounded flex items-center justify-center text-[10px] text-slate-400 font-mono">Product B</div>
                <div className="text-[10px] font-bold text-white">$89.00</div>
                <div className="text-[9px] text-slate-400">In Stock</div>
              </div>
              <div className="bg-slate-900 p-2 rounded border border-slate-800 space-y-1">
                <div className="h-10 bg-slate-800 rounded flex items-center justify-center text-[10px] text-slate-400 font-mono">Product C</div>
                <div className="text-[10px] font-bold text-white">$199.00</div>
                <div className="text-[9px] text-slate-400">In Stock</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] bg-indigo-950/30 px-2.5 py-1 rounded border border-indigo-900/40 text-indigo-300">
              <span>Cart State: 2 Items</span>
              <span className="font-bold">Checkout Sim Ready</span>
            </div>
          </div>
        );

      case "job-placement-dashboard":
        return (
          <div className="w-full h-48 bg-slate-950/80 p-4 font-sans text-xs text-slate-300 flex flex-col justify-between rounded-t-xl border-b border-slate-800 relative overflow-hidden group-hover:border-indigo-500/30 transition-all">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-violet-400" />
                <span className="font-semibold text-slate-200">Placement Admin Hub</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">
                Dashboard Portal
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 py-1">
              <div className="bg-slate-900/90 p-2.5 rounded border border-slate-800 flex justify-between items-center">
                <div>
                  <div className="text-[10px] text-slate-400">Placements</div>
                  <div className="text-base font-bold text-white">88.4%</div>
                </div>
                <div className="w-2 h-8 bg-indigo-500/20 rounded relative overflow-hidden">
                  <div className="absolute bottom-0 w-full h-[88%] bg-indigo-500"></div>
                </div>
              </div>
              <div className="bg-slate-900/90 p-2.5 rounded border border-slate-800 flex justify-between items-center">
                <div>
                  <div className="text-[10px] text-slate-400">Active Drives</div>
                  <div className="text-base font-bold text-white">24 Companies</div>
                </div>
                <div className="w-2 h-8 bg-cyan-500/20 rounded relative overflow-hidden">
                  <div className="absolute bottom-0 w-full h-[65%] bg-cyan-400"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 bg-slate-900 p-1.5 rounded border border-slate-800">
              <span>Filter: Batch 2026</span>
              <span className="text-emerald-400">Role: Admin</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Selected Work
          </h2>
          {/* Honest Disclaimer Note */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto shadow-inner">
            <Info className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>
              Self-initiated projects built to explore real-world development problems and demonstrate my technical capabilities.
            </span>
          </div>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-800/80 hover:border-indigo-500/40"
            >
              <div>
                {/* Visual Mockup Container */}
                {renderProjectVisual(project.id)}

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-indigo-400 font-medium">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                      {project.type}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Short Description */}
                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-800/40 mt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-all"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
