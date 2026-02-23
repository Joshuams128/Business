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
  ];
  const filteredProjects = projects.filter(
    (project) => !removedTitles.includes(project.title)
  );

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    const CardContent = (
      <>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>
        {/* Title - always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300">
          <h3 className="text-xl font-bold text-white group-hover:opacity-0 transition-opacity duration-300">{project.title}</h3>
        </div>
        {/* Details - show on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              {project.category}
            </span>
            {project.link && (
              <ExternalLink className="h-4 w-4 text-white" />
            )}
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
          <p className="text-sm text-gray-300">
            {project.description}
          </p>
        </div>
      </>
    );

    if (project.link) {
      return (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-xl border border-border/50 transition-all duration-300 hover:border-accent/30 hover:shadow-xl"
          aria-label={`Visit ${project.title} website`}
        >
          {CardContent}
        </a>
      );
    }

    return (
      <div className="group relative overflow-hidden rounded-xl border border-border/50 transition-all duration-300 hover:border-accent/30 hover:shadow-xl">
        {CardContent}
      </div>
    );
  };

  return (
    <Section id="portfolio" fullWidth>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Portfolio"
          title="Recent projects we're proud of."
          description="From church communities to construction companies, we build sites that work as hard as you do."
        />
        <div className="grid gap-6 grid-cols-2 auto-rows-[300px]">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
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
      </div>
    </Section>
  );
}
