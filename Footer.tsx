"use client";

import React, { useState } from "react";
import { Sparkles, Send, Github, Twitter, Linkedin, Heart, CheckCircle2, Download } from "lucide-react";
import { useToast } from "./ToastContext";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubscribed(true);
        showToast("Subscribed!", "You'll receive our monthly Next.js insights digest.", "success");
        setEmail("");
      } else {
        showToast("Subscription Failed", "Please check your email address.", "error");
      }
    } catch {
      showToast("Error", "Could not connect to newsletter service.", "error");
    }
  };

  const handleDownloadZip = () => {
    showToast("Exporting ZIP", "Downloading complete Next.js source code package...", "info");
    const link = document.createElement("a");
    link.href = "/nextjs-project-export.zip";
    link.download = "nextjs-project-export.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-500 flex items-center justify-center text-white shadow-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Aetheria Studio
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Production-grade Next.js 14 App Router boilerplate engineered with React 18, Tailwind CSS, Framer Motion animations, dark mode, and step-by-step Vercel deployment guide.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-mono text-emerald-400">All Edge Systems Operational</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-brand-400 transition-colors">Features</a></li>
              <li><a href="#studio" className="hover:text-brand-400 transition-colors">AI Playground</a></li>
              <li><a href="#portfolio" className="hover:text-brand-400 transition-colors">Portfolio Case Studies</a></li>
              <li><a href="#pricing" className="hover:text-brand-400 transition-colors">Pricing Calculator</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#faq" className="hover:text-brand-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact Support</a></li>
              <li><button onClick={handleDownloadZip} className="hover:text-brand-400 transition-colors flex items-center gap-1"><Download className="w-3 h-3 text-brand-400" /> Export Project ZIP</button></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Stay Updated</h4>
            <p className="text-xs text-slate-400">
              Subscribe to get modern web architecture tips, Next.js optimization guides, and component releases.
            </p>

            <form onSubmit={handleNewsletter} className="flex items-center gap-2">
              <input
                type="email"
                required
                placeholder="developer@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button
                type="submit"
                className="px-4 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Aetheria Studio. All rights reserved. Full Next.js source code export included.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Vercel Deployment Guide</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
