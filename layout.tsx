import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Aetheria Studio | Modern Next.js 14 Web Architecture",
  description:
    "Complete Next.js 14 App Router website with a modern responsive interface.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Vercel",
    "Web App",
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
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
