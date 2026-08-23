"use client";

import React, { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle2, Sparkles, AlertCircle } from "lucide-react";
import { useToast } from "./ToastContext";

export const ContactSection: React.FC = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Next.js Custom Development",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      showToast("Missing Required Fields", "Please complete all fields before sending.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        showToast("Message Sent Successfully!", "Our engineering team will respond within 2 hours.", "success");
        setFormData({
          name: "",
          email: "",
          projectType: "Next.js Custom Development",
          message: "",
        });
      } else {
        showToast("Submission Error", "Failed to submit form. Please try again.", "error");
      }
    } catch (error) {
      showToast("Network Error", "Unable to connect to server.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 uppercase tracking-widest">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight">
                Let's Build Something Great Together
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mt-4 text-base leading-relaxed">
                Have a project in mind or need assistance setting up this Next.js template? Reach out to our core architecture team.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-brand-500/10 text-brand-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Direct Email Support</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">support@aetheria-studio.com</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent-500/10 text-accent-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Global Headquarters</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">San Francisco, CA & Remote Global</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Average Response Time</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Under 2 Hours (24/7)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 p-8 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 shadow-2xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                  Project Inquiry Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm cursor-pointer"
                >
                  <option value="Next.js Custom Development">Next.js Custom Development</option>
                  <option value="Vercel Deployment Architecture">Vercel Deployment Architecture</option>
                  <option value="Enterprise AI Integration">Enterprise AI Integration</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                  Project Details or Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project requirements, timeline, or goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold text-sm shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
