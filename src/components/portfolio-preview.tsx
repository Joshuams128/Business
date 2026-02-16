"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { projects } from "@/lib/data";

export function PortfolioPreview() {
  // Filter out projects to be removed from home page
  const removedTitles = [
    "Clayson Construction",
    "Build With Dream",
    "Susan M. Brown",
    "Construction",
    "Susan M. Brown"
  ];
  const filteredProjects = projects.filter(
    (project) => !removedTitles.includes(project.title)
  );
  const featured = filteredProjects.slice(0, 4);

  return (
    <Section id="portfolio">
      <SectionHeader
        label="Portfolio"
        title="Recent projects we're proud of."
        description="From church communities to construction companies, we build sites that work as hard as you do."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((project) =>
          project.link ? (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-accent/30"
              aria-label={`Visit ${project.title} website`}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
                </div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </a>
          ) : (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-accent/30"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
                </div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Show remaining projects in a compact row */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {filteredProjects.slice(4).map((project) => (
          <div
            key={project.title}
            className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-4 transition-all duration-300 hover:border-accent/30"
          >
            <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                {project.category}
              </span>
              <h3 className="text-sm font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="/our-work"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          View All
        </a>
      </div>
    </Section>
  );
}
