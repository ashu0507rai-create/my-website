"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Download, Terminal, Cpu, Zap, Activity, CheckCircle2, Copy } from "lucide-react";
import { HERO_STATS } from "@/lib/data";
import { useToast } from "./ToastContext";

export const Hero: React.FC = () => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<"preview" | "code" | "telemetry">("preview");
  const [copied, setCopied] = useState(false);

  const heroCodeSnippet = `// Next.js 14 App Router Edge Page
import { AetheriaEngine } from '@aetheria/core';

export const runtime = 'edge';

export default async function Page() {
  const data = await AetheriaEngine.query({
    model: 'gpt-4o-edge',
    temperature: 0.2
  });
  return <DashboardView data={data} />;
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(heroCodeSnippet);
    setCopied(true);
    showToast("Code copied to clipboard!", "Ready to paste in your Next.js project.", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadZip = () => {
    showToast("Starting Download", "Exporting complete Next.js source ZIP package...", "info");
    const link = document.createElement("a");
    link.href = "/nextjs-project-export.zip";
    link.download = "nextjs-project-export.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-accent-500/10 dark:bg-accent-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-500/20 text-brand-700 dark:text-brand-300 border border-brand-500/20 text-xs font-semibold mb-6 animate-float">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            <span>Next.js 14 + React 18 Production Ready Stack</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
            Build Faster with{" "}
            <span className="bg-gradient-to-r from-brand-600 via-brand-400 to-accent-500 bg-clip-text text-transparent">
              Precision Engineering
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Full-stack Next.js boilerplate with modern design system, interactive tools, Framer Motion animations, dark mode, and step-by-step Vercel deployment setup.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#features"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold text-sm shadow-xl shadow-brand-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleDownloadZip}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-brand-400" />
              <span>Download Source ZIP</span>
            </button>
          </div>

          {/* Live Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
            {HERO_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 shadow-sm"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Dashboard Preview Card */}
        <div className="max-w-5xl mx-auto rounded-2xl glass-panel shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
          {/* Card Header Toolbar */}
          <div className="bg-slate-100/80 dark:bg-slate-900/80 px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">aetheria-dashboard-v1.4.2</span>
            </div>

            {/* View Mode Tabs */}
            <div className="flex bg-slate-200/80 dark:bg-slate-800/80 p-1 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300">
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === "preview" ? "bg-white dark:bg-slate-950 text-brand-600 dark:text-brand-400 shadow-sm" : "hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Live Preview
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === "code" ? "bg-white dark:bg-slate-950 text-brand-600 dark:text-brand-400 shadow-sm" : "hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Source Code
              </button>
              <button
                onClick={() => setActiveTab("telemetry")}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === "telemetry" ? "bg-white dark:bg-slate-950 text-brand-600 dark:text-brand-400 shadow-sm" : "hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Telemetry
              </button>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 bg-slate-50/50 dark:bg-slate-950/50 min-h-[320px]">
            {activeTab === "preview" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-brand-500/10 text-brand-500">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Edge Requests</div>
                      <div className="text-xl font-bold text-slate-900 dark:text-white">1,429,800</div>
                      <div className="text-[10px] text-emerald-500 font-semibold mt-0.5">↑ 18.4% from last hour</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Memory Efficiency</div>
                      <div className="text-xl font-bold text-slate-900 dark:text-white">99.8%</div>
                      <div className="text-[10px] text-emerald-500 font-semibold mt-0.5">Optimal Memory Footprint</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-accent-500/10 text-accent-500">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">P99 Response Time</div>
                      <div className="text-xl font-bold text-slate-900 dark:text-white">14.2 ms</div>
                      <div className="text-[10px] text-emerald-500 font-semibold mt-0.5">Global Edge Caching</div>
                    </div>
                  </div>
                </div>

                {/* Simulated Chart Bars */}
                <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Live Throughput Stream (req/sec)
                    </h4>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-500 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Live Feed
                    </span>
                  </div>
                  <div className="h-28 flex items-end gap-2 pt-2">
                    {[40, 65, 55, 80, 70, 95, 85, 100, 75, 90, 85, 95, 110, 105, 120].map((h, i) => (
                      <div key={i} className="flex-1 bg-brand-500/20 rounded-t-sm relative group overflow-hidden">
                        <div
                          style={{ height: `${h}%` }}
                          className="bg-gradient-to-t from-brand-600 to-accent-500 rounded-t-sm transition-all duration-500 group-hover:from-brand-500 group-hover:to-accent-400"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "code" && (
              <div className="relative font-mono text-xs sm:text-sm bg-slate-900 text-slate-200 p-5 rounded-xl overflow-x-auto">
                <button
                  onClick={copyCode}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1.5 text-xs"
                >
                  {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
                <pre>{heroCodeSnippet}</pre>
              </div>
            )}

            {activeTab === "telemetry" && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 flex justify-between">
                  <span>[OK] Vercel Edge Middleware attached</span>
                  <span>0.2ms</span>
                </div>
                <div className="p-3 rounded-lg bg-brand-950/30 border border-brand-500/20 text-brand-300 flex justify-between">
                  <span>[INFO] React Server Component tree hydrated</span>
                  <span>1.4ms</span>
                </div>
                <div className="p-3 rounded-lg bg-purple-950/30 border border-purple-500/20 text-purple-300 flex justify-between">
                  <span>[INFO] Tailwind CSS JIT compilation complete</span>
                  <span>0.0ms</span>
                </div>
                <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-500/20 text-amber-300 flex justify-between">
                  <span>[NOTICE] Local storage theme preference initialized</span>
                  <span>0.1ms</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
