"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

export function CTASection() {
  return (
    <Section>
      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden rounded-2xl border border-border/50 bg-card px-8 py-16 text-center md:px-16"
    >
        {/* Accent glow */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-48 w-48 rounded-full bg-accent/15 blur-[80px]" />

        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to build something great?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
            Let&apos;s talk about your project. Get a free consultation and
            quote — no commitment, no pressure.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
