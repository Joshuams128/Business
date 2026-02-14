"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { services } from "@/lib/data";

export function ServicesContent() {
  return (
    <>
      <Section className="pt-12 md:pt-16">
        <SectionHeader
          label="Services"
          title="What we offer."
          description="Whether you need a brand-new site, quick updates, or a complete overhaul — we have you covered."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group flex flex-col rounded-xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-accent/30"
            >
              <div className="flex-1">
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  What&apos;s included
                </h4>
                <ul className="mb-8 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border/50 pt-6">
                <p className="mb-4 text-lg font-bold text-accent">
                  {service.cta}
                </p>
                <Button className="w-full" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process section */}
      <Section className="bg-muted/20">
        <SectionHeader
          label="Process"
          title="How we work."
          description="A straightforward process designed to get your site live — fast."
        />
        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Discovery",
              description:
                "We learn about your business, goals, and target audience to shape the project.",
            },
            {
              step: "02",
              title: "Design",
              description:
                "We create mockups and prototypes for your approval before writing a single line of code.",
            },
            {
              step: "03",
              title: "Development",
              description:
                "We build your site with modern tools, optimizing for performance and accessibility.",
            },
            {
              step: "04",
              title: "Launch",
              description:
                "We deploy, test, and hand off your site with documentation and ongoing support.",
            },
          ].map((item) => (
            <div key={item.step}>
              <span className="text-4xl font-bold text-accent/20">
                {item.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
