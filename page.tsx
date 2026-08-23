import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { InteractiveTools } from "@/components/InteractiveTools";
import { Portfolio } from "@/components/Portfolio";
import { PricingCalculator } from "@/components/PricingCalculator";
import { Testimonials } from "@/components/Testimonials";
import { BlogSection } from "@/components/BlogSection";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";

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
