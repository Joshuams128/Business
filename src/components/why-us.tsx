"use client";

import { Zap, Gauge, Accessibility } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";

const pillars = [
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Every site we build scores 90+ on Lighthouse. Optimized code, compressed assets, and modern frameworks ensure your site loads in under 2 seconds.",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "From first contact to launch, we move fast without cutting corners. Clear timelines, quick turnarounds, and no unnecessary back-and-forth.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description:
      "Built for everyone. Semantic HTML, proper ARIA labels, keyboard navigation, and WCAG compliance come standard with every project.",
  },
];

export function WhyUs() {
  return (
    <Section>
      <SectionHeader
        label="Why Us"
        title="We prioritize performance, speed, and accessibility in every build."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="group rounded-xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:bg-card/80"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <pillar.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">{pillar.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
