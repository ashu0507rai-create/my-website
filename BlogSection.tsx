"use client";

import React, { useState } from "react";
import { BLOG_POSTS, BlogPost } from "@/lib/data";
import { Search, Clock, ArrowRight, X, BookOpen, Share2 } from "lucide-react";
import { useToast } from "./ToastContext";

export const BlogSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const { showToast } = useToast();

  const filteredPosts = BLOG_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShare = (postTitle: string) => {
    navigator.clipboard.writeText(window.location.href);
    showToast("Article Link Copied", `Link for "${postTitle}" saved to clipboard`, "info");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 uppercase tracking-widest">
              Engineering Blog & Guides
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight">
              Latest Articles & Insights
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
            />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="rounded-3xl glass-panel overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 backdrop-blur-md text-brand-400 border border-brand-500/30">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-100/40 dark:bg-slate-900/40 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {post.author.name}
                  </span>
                </div>

                <span className="text-xs font-semibold text-brand-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl relative p-6 sm:p-10">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs text-brand-500 font-semibold mb-3">
              <BookOpen className="w-4 h-4" />
              <span>{activePost.category}</span>
              <span>•</span>
              <span>{activePost.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {activePost.title}
            </h2>

            <div className="flex items-center gap-3 my-6 py-3 border-y border-slate-200 dark:border-slate-800">
              <img
                src={activePost.author.avatar}
                alt={activePost.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{activePost.author.name}</div>
                <div className="text-xs text-slate-500">{activePost.author.role} • {activePost.date}</div>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden mb-8">
              <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose dark:prose-invert text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>{activePost.excerpt}</p>
              <p>{activePost.content}</p>
              <p>
                When building modern web applications with Next.js, performance optimization should be treated as an architectural principle rather than an afterthought. By leveraging React Server Components, zero-bundle CSS with Tailwind, and Vercel edge deployment, development velocity and page speeds reach peak levels.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => handleShare(activePost.title)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Article</span>
              </button>

              <button
                onClick={() => setActivePost(null)}
                className="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-md"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
