import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for a free quote on your web development project. We build modern, accessible websites for small businesses, churches, and construction companies.",
};

export default function ContactPage() {
  return <ContactContent />;
}
