
import { Hero } from "@/components/hero";
import { WhyUs } from "@/components/why-us";
import { PortfolioPreview } from "@/components/portfolio-preview";
// import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <PortfolioPreview />
      {/* <Testimonials /> */}
      <CTASection />
    </>
  );
}
