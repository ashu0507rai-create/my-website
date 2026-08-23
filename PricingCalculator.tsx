"use client";

import React, { useState } from "react";
import { PRICING_PLANS } from "@/lib/data";
import { Check, Sparkles, Zap, Shield, ArrowRight } from "lucide-react";
import { useToast } from "./ToastContext";

export const PricingCalculator: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);
  const [teamMembers, setTeamMembers] = useState<number>(5);
  const { showToast } = useToast();

  const handleSelectPlan = (planName: string) => {
    showToast(`Selected ${planName}`, `Redirecting to checkout for ${isAnnual ? "Annual" : "Monthly"} billing...`, "success");
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 uppercase tracking-widest">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight">
            Flexible Plans for Teams of All Sizes
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg">
            No surprise fees. Upgrade or downgrade anytime with prorated billing.
          </p>

          {/* Billing Switcher */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-xs font-semibold ${!isAnnual ? "text-slate-900 dark:text-white" : "text-slate-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-800 p-1 transition-colors duration-300 focus:outline-none"
            >
              <div
                className={`w-5 h-5 rounded-full bg-brand-500 transition-transform duration-300 ${
                  isAnnual ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs font-semibold ${isAnnual ? "text-slate-900 dark:text-white" : "text-slate-500"}`}>
              Annual
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 glass-panel flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-brand-500 shadow-2xl shadow-brand-500/10 scale-[1.03]"
                    : "border border-slate-200 dark:border-slate-800"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 min-h-[32px]">
                    {plan.description}
                  </p>

                  <div className="my-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
                      ${price}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      / month {isAnnual ? "(billed annually)" : ""}
                    </span>
                  </div>

                  <div className="space-y-3 my-6 pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-3.5 rounded-xl text-xs font-bold transition-all shadow-md mt-4 ${
                    plan.popular
                      ? "bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white shadow-brand-500/25"
                      : "bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
