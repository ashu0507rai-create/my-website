import { Hero } from "@/Hero";
import { Features } from "@/Features";
import { InteractiveTools } from "@/InteractiveTools";
import { Portfolio } from "@/Portfolio";
import { PricingCalculator } from "@/PricingCalculator";
import { Testimonials } from "@/Testimonials";
import { BlogSection } from "@/BlogSection";
import { FAQ } from "@/FAQ";
import { ContactSection } from "@/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <Features />
      <InteractiveTools />
      <Portfolio />
      <PricingCalculator />
      <Testimonials />
      <BlogSection />
      <FAQ />
      <ContactSection />
    </div>
  );
}
