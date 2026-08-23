import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/ThemeProvider";
import { ToastProvider } from "@/ToastContext";
import { Navbar } from "@/Navbar";
import { Footer } from "@/Footer";

export const metadata: Metadata = {
  title: "Aetheria Studio | Modern Next.js 14 Web Architecture",
  description: "Complete Next.js 14 App Router website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col">
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
