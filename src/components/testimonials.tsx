"use client";

import { Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <Section className="bg-muted/20">
      <SectionHeader
        label="Testimonials"
        title="What our clients say."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.author}
            className="relative rounded-xl border border-border/50 bg-card p-8"
          >
            <Quote className="mb-4 h-8 w-8 text-accent/30" />
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div>
              <p className="text-sm font-semibold">{testimonial.author}</p>
              <p className="text-xs text-muted-foreground">
                {testimonial.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
