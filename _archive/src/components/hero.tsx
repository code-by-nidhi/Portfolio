"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Sparkles, FolderGit2, CheckCircle2, Code } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300 tracking-wide">
                {PORTFOLIO_DATA.personal.availability}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Building modern web experiences{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-400">
                that turn ideas into working products.
              </span>
            </h1>

            {/* Supporting Bio */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-300 group"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all duration-200 hover:border-slate-700"
              >
                <FolderGit2 className="w-5 h-5 text-indigo-400" />
                <span>View My Work</span>
              </a>
            </div>

            {/* Quick Core Strengths Pill Strip */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs font-medium text-slate-400 border-t border-slate-800/60">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" /> MERN Stack Architecture
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400" /> Clean REST APIs
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Responsive UI & Next.js
              </span>
            </div>
          </motion.div>

          {/* Right Column: Code IDE Graphic (Abstract Technical Graphic) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl border border-slate-800 bg-[#0F172A]/90 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl overflow-hidden">
              {/* IDE Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>nidhi_developer.ts</span>
                </div>
                <div className="flex items-center gap-1 text-slate-500">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                </div>
              </div>

              {/* IDE Code Window */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed space-y-2 text-slate-300 overflow-x-auto">
                <div className="flex">
                  <span className="text-slate-600 w-8 select-none">01</span>
                  <span><span className="text-purple-400">interface</span> <span className="text-amber-300">Developer</span> &#123;</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 w-8 select-none">02</span>
                  <span className="pl-4">name: <span className="text-emerald-300">'Nidhi'</span>;</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 w-8 select-none">03</span>
                  <span className="pl-4">role: <span className="text-emerald-300">'MERN Stack Developer'</span>;</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 w-8 select-none">04</span>
                  <span className="pl-4">focus: [<span className="text-emerald-300">'Full-Stack Apps'</span>, <span className="text-emerald-300">'REST APIs'</span>, <span className="text-emerald-300">'Dashboards'</span>];</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 w-8 select-none">05</span>
                  <span className="pl-4">status: <span className="text-indigo-300">'Ready for Freelance Projects'</span>;</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 w-8 select-none">06</span>
                  <span>&#125;</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 w-8 select-none">07</span>
                  <span></span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 w-8 select-none">08</span>
                  <span><span className="text-purple-400">const</span> <span className="text-blue-300">buildSolution</span> = (<span className="text-amber-200">clientNeeds</span>) =&gt; &#123;</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 w-8 select-none">09</span>
                  <span className="pl-4"><span className="text-purple-400">return</span> &#123;</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 w-8 select-none">10</span>
                  <span className="pl-8">code: <span className="text-emerald-300">'Clean & Maintainable'</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 w-8 select-none">11</span>
                  <span className="pl-8">design: <span className="text-emerald-300">'Responsive & Modern'</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 w-8 select-none">12</span>
                  <span className="pl-8">delivery: <span className="text-emerald-300">'On Specs & Efficient'</span></span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 w-8 select-none">13</span>
                  <span className="pl-4">&#125;;</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 w-8 select-none">14</span>
                  <span>&#125;;</span>
                </div>
              </div>

              {/* Footer Status Bar */}
              <div className="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <Code className="w-3.5 h-3.5 text-indigo-400" />
                  <span>TypeScript 5.0</span>
                </div>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Build Passing
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
