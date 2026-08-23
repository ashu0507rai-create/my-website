"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Star, Quote, ShieldCheck } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [filterIndustry, setFilterIndustry] = useState<string>("All");

  const industries = ["All", "Fintech", "AI / Machine Learning", "Design & UX"];

  const filtered =
    filterIndustry === "All"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.industry === filterIndustry);

  return (
    <section id="testimonials" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 uppercase tracking-widest">
            Loved by Developers
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight">
            Trusted by Leaders at Scale
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg">
            See how engineering teams accelerate their product delivery using our Next.js architecture.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setFilterIndustry(ind)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filterIndustry === ind
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl glass-panel flex flex-col justify-between border border-slate-200 dark:border-slate-800 relative hover:border-brand-500/40 transition-all duration-300 shadow-sm"
            >
              <Quote className="w-8 h-8 text-brand-500/20 mb-4" />

              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-8 flex-1 italic">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-500/30"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role}, <span className="font-semibold text-slate-700 dark:text-slate-300">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
