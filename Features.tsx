"use client";

import React, { useState } from "react";
import { FEATURES, Feature } from "@/lib/data";
import { Sparkles, Globe, BarChart3, ShieldCheck, CheckCircle, Copy, Terminal, Check } from "lucide-react";
import { useToast } from "./ToastContext";

export const Features: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(FEATURES[0].id);
  const [copied, setCopied] = useState<boolean>(false);
  const { showToast } = useToast();

  const activeFeature = FEATURES.find((f) => f.id === selectedId) || FEATURES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Globe":
        return <Globe className="w-5 h-5" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    showToast("Snippet Copied", "Feature code copied to clipboard", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="features" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 uppercase tracking-widest">
            Core Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight">
            Engineered for High-Concurrency Performance
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg">
            Every feature is designed to give developers maximum speed, developer experience, and bulletproof reliability out of the box.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {FEATURES.map((feature) => {
            const isSelected = feature.id === selectedId;
            return (
              <button
                key={feature.id}
                onClick={() => setSelectedId(feature.id)}
                className={`text-left p-5 rounded-2xl transition-all duration-300 border ${
                  isSelected
                    ? "bg-white dark:bg-slate-900 border-brand-500 shadow-xl shadow-brand-500/10 scale-[1.02]"
                    : "bg-white/40 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:bg-white/80 dark:hover:bg-slate-900/80"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    isSelected
                      ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {getIcon(feature.iconName)}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {feature.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Feature Interactive View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Column */}
          <div className="lg:col-span-6 p-8 rounded-3xl glass-panel flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-500">
                  {getIcon(activeFeature.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {activeFeature.title}
                  </h3>
                  <span className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                    {activeFeature.stats.value} {activeFeature.stats.label}
                  </span>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
                {activeFeature.description}
              </p>

              <div className="space-y-3 mb-8">
                {activeFeature.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Framework Integration: <code className="text-brand-500 font-mono">app/api/{activeFeature.id}/route.ts</code>
              </span>
            </div>
          </div>

          {/* Code Showcase Column */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-900 text-slate-100 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden border border-slate-800">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Terminal className="w-4 h-4 text-brand-400" />
                  <span>{activeFeature.id}.ts</span>
                </div>
                <button
                  onClick={() => copyCode(activeFeature.codeSnippet)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy Code"}</span>
                </button>
              </div>

              <pre className="font-mono text-xs sm:text-sm text-brand-200 leading-relaxed overflow-x-auto p-2">
                <code>{activeFeature.codeSnippet}</code>
              </pre>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-xs text-slate-400 flex items-center justify-between font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Status: Operational
              </span>
              <span>100% Type-Safe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
