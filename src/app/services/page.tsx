import type { Metadata } from "next";
import { ServicesContent } from "./services-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development services including new website builds, edits & updates, and complete rebuilds & migrations. Professional, modern, and performance-focused.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
