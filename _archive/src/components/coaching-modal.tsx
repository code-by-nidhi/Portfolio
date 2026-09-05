"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Clock, Sparkles, X, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";

export default function CoachingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open modal 1 second after site loads for smooth user experience
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg bg-[#0F172A] border border-indigo-500/30 rounded-3xl shadow-2xl shadow-indigo-950/60 overflow-hidden z-10 my-8 p-6 sm:p-8 space-y-6"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-indigo-600/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors z-20"
              aria-label="Close announcement"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Special Offer & Services</span>
            </div>

            {/* Header Title */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Not Just Freelancing — <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
                  1-on-1 Coding Coaching
                </span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Looking for guidance on full-stack development? In addition to freelance development projects, I offer **personalized 1-on-1 coding mentorship per hour**.
              </p>
            </div>

            {/* Coaching Highlights */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-indigo-400 tracking-wider">
                <GraduationCap className="w-4 h-4" /> What We Can Cover In 1-on-1 Sessions:
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>MERN Stack (React, Next.js, Node.js, Express, MongoDB) & TypeScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>REST API Design, Database Schema Setup & JWT Authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Code Reviews, Debugging Assistance & Project Architecture</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-indigo-300">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" /> Hourly Billing Rates Available
                </span>
                <span className="text-emerald-400 font-medium">Flexible Scheduling</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href="#contact"
                onClick={handleClose}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book 1-on-1 Coaching</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-5 py-3 text-sm font-medium text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
              >
                Browse Freelance Work
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
