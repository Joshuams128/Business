"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder: replace with Resend API or your preferred email service
    const formData = new FormData(e.currentTarget);
    console.log("Form submitted:", Object.fromEntries(formData));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-12 text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <Send className="h-8 w-8 text-accent" />
          </div>
        </div>
        <h3 className="text-2xl font-bold">Message sent!</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="service">Service Type</Label>
          <Select name="service" required>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new-build">New Website Build</SelectItem>
              <SelectItem value="edit">Website Edit / Update</SelectItem>
              <SelectItem value="rebuild">Website Rebuild / Migration</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">
            Budget Range <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Select name="budget">
            <SelectTrigger>
              <SelectValue placeholder="Select a range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-1k">Under $1,000</SelectItem>
              <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
              <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
              <SelectItem value="5k-plus">$5,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="details">Project Details</Label>
        <Textarea
          id="details"
          name="details"
          placeholder="Tell us about your project — what you need, your timeline, and any other details that would help us understand your vision."
          required
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send Message
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
