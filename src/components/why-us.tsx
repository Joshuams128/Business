"use client";

import { Zap, Gauge, Accessibility } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { AnimatedCounter } from "@/components/animated-counter";

const pillars = [
  {
    icon: Gauge,
    title: "Performance",
    renderDescription: () => (
      <>
        <AnimatedCounter to={90} duration={2} />+ Lighthouse scores
      </>
    ),
  },
  {
    icon: Zap,
    title: "Speed",
    renderDescription: () => (
      <>
        Live mockups in <AnimatedCounter to={72} duration={2} /> hours
      </>
    ),
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    renderDescription: () => "WCAG compliant built-in",
  },
];

export function WhyUs() {
  return (
    <Section>
      <SectionHeader
        label="Why Us"
        title="We prioritize performance, speed, and accessibility in every build."
      />
      <div className="grid gap-12 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="group flex flex-col items-center text-center rounded-xl border border-border/50 bg-card p-12 transition-all duration-300 hover:border-accent/30 hover:bg-card/80"
          >
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-lg bg-accent/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
              <pillar.icon className="h-12 w-12 text-accent transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="mb-2 text-2xl font-semibold">{pillar.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {pillar.renderDescription()}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
