import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/ToastContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aetheria Studio | Modern Next.js 14 Web Architecture",
  description:
    "Complete Next.js 14 App Router boilerplate with React 18, Tailwind CSS, dark mode, Framer Motion interactive components, and step-by-step Vercel deployment guide.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Vercel Deployment",
    "Web App",
    "UI Components",
  ],
  authors: [{ name: "Aetheria Studio" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col selection:bg-brand-500 selection:text-white">
        <ToastProvider>
          <ThemeProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
