
import { Hero } from "@/components/hero";
import { WhyUs } from "@/components/why-us";
import dynamic from "next/dynamic";

// Dynamically import components that appear below the fold
const PortfolioPreview = dynamic(
  () => import("@/components/portfolio-preview").then(mod => ({ default: mod.PortfolioPreview })),
  { loading: () => null }
);

const CTASection = dynamic(
  () => import("@/components/cta-section").then(mod => ({ default: mod.CTASection })),
  { loading: () => null }
);
// import { Testimonials } from "@/components/testimonials";

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
