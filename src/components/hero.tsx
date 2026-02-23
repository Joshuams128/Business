"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Hero background image optimized with Next.js Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero11.png"
          alt="Background texture"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Accent glow */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 h-96 w-96 rounded-full bg-accent/10 blur-[128px]" />

      <div className="relative max-w-6xl px-6 py-32 flex justify-center items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl mx-auto">
            Websites that <span className="text-accent">Perform</span>, built <span className="text-accent">Fast</span>.
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg leading-relaxed text-white md:text-xl">
            We build fast, accessible, and modern websites for businesses and organizations
            of all kinds.
             No templates. No bloat. Just results.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#portfolio">See Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
