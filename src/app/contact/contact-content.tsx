"use client";

import { Mail, MapPin, Clock } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/data";

export function ContactContent() {
  return (
    <Section className="pt-12 md:pt-16">
      <div className="grid gap-16 lg:grid-cols-5">
        {/* Form */}
        <div className="lg:col-span-3">
          <SectionHeader
            label="Contact"
            title="Let's build something great."
            description="Fill out the form below and we'll get back to you within 24 hours with a free quote."
          />
          <ContactForm />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-border/50 bg-card p-8">
            <h3 className="mb-6 text-lg font-semibold">Get in touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.location}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium">Response Time</p>
                  <p className="text-sm text-muted-foreground">
                    Within 24 hours
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 border-t border-border/50 pt-6">
              <p className="text-sm font-medium">Follow us</p>
              <div className="mt-3 flex gap-4">
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  aria-label="GitHub"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  aria-label="Twitter"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
