"use client";

import React, { useState } from "react";
import { Sparkles, Sliders, Play, Copy, RefreshCw, CheckCircle2, Code2, Bot } from "lucide-react";
import { useToast } from "./ToastContext";

interface PromptTemplate {
  id: string;
  name: string;
  category: string;
  prompt: string;
  output: string;
}

const TEMPLATES: PromptTemplate[] = [
  {
    id: "landing-copy",
    name: "Hero Copywriter",
    category: "Marketing",
    prompt: "Generate a high-converting hero headline and CTA for a Next.js developer studio.",
    output: `Headline: "Deploy Production-Grade Next.js Apps at Edge Speed"
Subtitle: "Automate your workflow with adaptive AI routing, zero-config TypeScript, and global CDN deployment."
Primary CTA: "Start Building Free →"
Secondary CTA: "Explore Documentation"`
  },
  {
    id: "tailwind-ui",
    name: "Glassmorphism Card Generator",
    category: "Frontend UI",
    prompt: "Generate Tailwind CSS classes for a modern glassmorphic dashboard card.",
    output: `<div className="p-6 rounded-2xl bg-white/10 dark:bg-slate-900/60 backdrop-blur-xl border border-white/20 dark:border-slate-800 shadow-2xl hover:border-brand-500/50 transition-all duration-300">
  <h3 className="text-lg font-bold text-white">Glassmorphic Tile</h3>
</div>`
  },
  {
    id: "sql-optimizer",
    name: "PostgreSQL Query Enhancer",
    category: "Backend",
    prompt: "Optimize user analytics indexing for high concurrent writes.",
    output: `CREATE INDEX CONCURRENTLY idx_user_events_timestamp_tenant 
ON user_events (tenant_id, created_at DESC) 
INCLUDE (event_type, user_id);`
  },
  {
    id: "seo-meta",
    name: "Next.js 14 Metadata Helper",
    category: "SEO",
    prompt: "Generate dynamic metadata export for Next.js App Router.",
    output: `export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: 'Aetheria Next.js Studio | Edge Platform',
    description: 'High performance Next.js 14 template with tailwind styling and Vercel deployment.',
    openGraph: { images: ['/og-image.png'] }
  };
}`
  }
];

export const InteractiveTools: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<PromptTemplate>(TEMPLATES[0]);
  const [temperature, setTemperature] = useState<number>(0.7);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [customPrompt, setCustomPrompt] = useState<string>(TEMPLATES[0].prompt);
  const [currentOutput, setCurrentOutput] = useState<string>(TEMPLATES[0].output);
  const [copied, setCopied] = useState<boolean>(false);
  const { showToast } = useToast();

  const handleSelectTemplate = (template: PromptTemplate) => {
    setSelectedTemplate(template);
    setCustomPrompt(template.prompt);
    setCurrentOutput(template.output);
  };

  const handleRunSimulation = () => {
    setIsGenerating(true);
    showToast("Executing AI Pipeline", `Processing prompt with temp=${temperature}...`, "info");
    setTimeout(() => {
      setIsGenerating(false);
      showToast("Generation Complete", "AI output ready for instant copy!", "success");
    }, 800);
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(currentOutput);
    setCopied(true);
    showToast("Copied to Clipboard", "AI result ready to use in your project", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="studio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/20 uppercase tracking-widest">
            Interactive Playground
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight">
            Live AI Prompt & UI Code Generator
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg">
            Test the built-in AI pipeline live. Tweak parameters, choose presets, and inspect generated code or copy text immediately.
          </p>
        </div>

        {/* Playground Container */}
        <div className="rounded-3xl glass-panel p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Control Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-3">
                  1. Choose Template Preset
                </label>
                <div className="space-y-2">
                  {TEMPLATES.map((tmpl) => (
                    <button
                      key={tmpl.id}
                      onClick={() => handleSelectTemplate(tmpl)}
                      className={`w-full text-left p-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-between border ${
                        selectedTemplate.id === tmpl.id
                          ? "bg-brand-500 text-white border-brand-500 shadow-md shadow-brand-500/20"
                          : "bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-brand-500/50"
                      }`}
                    >
                      <span>{tmpl.name}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full ${
                          selectedTemplate.id === tmpl.id
                            ? "bg-white/20 text-white"
                            : "bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {tmpl.category}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Temperature Slider */}
              <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-brand-500" />
                    <span>Creativity (Temperature)</span>
                  </label>
                  <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400">
                    {temperature}
                  </span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.05"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-full accent-brand-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>Precise (0.1)</span>
                  <span>Creative (1.0)</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleRunSimulation}
                disabled={isGenerating}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white font-bold text-sm shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Processing Pipeline...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>Run AI Generation</span>
                  </>
                )}
              </button>
            </div>

            {/* Prompt Input & Output Preview */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {/* Prompt Box */}
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2 flex items-center justify-between">
                  <span>System Prompt Input</span>
                  <span className="text-[10px] text-brand-500 font-mono">Input Tokens: {customPrompt.length}</span>
                </label>
                <textarea
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  rows={3}
                  className="w-full p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none shadow-inner"
                />
              </div>

              {/* Output Preview Window */}
              <div className="flex-1 flex flex-col rounded-2xl bg-slate-900 text-slate-100 p-5 border border-slate-800 shadow-xl min-h-[260px]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <Bot className="w-4 h-4 text-emerald-400" />
                    <span>AI Stream Output</span>
                  </div>
                  <button
                    onClick={handleCopyOutput}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 flex items-center gap-1.5 transition-colors font-medium"
                  >
                    {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied" : "Copy Result"}</span>
                  </button>
                </div>

                <div className="flex-1 font-mono text-xs sm:text-sm leading-relaxed text-brand-200 overflow-y-auto whitespace-pre-wrap">
                  {isGenerating ? (
                    <div className="flex items-center gap-2 text-slate-400 animate-pulse pt-4">
                      <Sparkles className="w-4 h-4 text-brand-400 animate-spin" />
                      <span>Synthesizing output response via Edge Neural Router...</span>
                    </div>
                  ) : (
                    currentOutput
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
