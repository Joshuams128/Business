"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { projects } from "@/lib/data";

export function PortfolioPreview() {
  // Filter out projects to be removed from home page
  const removedTitles = [
    "Build With Dream",
    "Susan M. Brown",
    "Construction",
  ];
  const filteredProjects = projects.filter(
    (project) => !removedTitles.includes(project.title)
  );

  const ProjectCard = ({
    project,
    className = "",
    isFeatured = false,
  }: {
    project: typeof projects[0];
    className?: string;
    isFeatured?: boolean;
  }) => {
    const CardContent = (
      <>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={isFeatured}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        {/* Category badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 text-xs font-medium bg-black/60 backdrop-blur-sm rounded-full text-white">
            {project.category}
          </span>
          {project.link && (
            <span className="px-3 py-1 text-xs font-medium bg-accent backdrop-blur-sm rounded-full text-white">
              Live
            </span>
          )}
        </div>
        {/* Title at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className={`font-bold text-white ${isFeatured ? "text-2xl" : "text-lg"}`}>
            {project.title}
          </h3>
          {isFeatured && (
            <p className="mt-2 text-sm text-gray-300 line-clamp-2">
              {project.description}
            </p>
          )}
        </div>
      </>
    );

    if (project.link) {
      return (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-2xl ${className}`}
          aria-label={`Visit ${project.title} website`}
        >
          {CardContent}
        </a>
      );
    }

    return (
      <div
        className={`group relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-2xl ${className}`}
      >
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
          description=" We build sites that work as hard as you do."
        />
        {/* Asymmetric grid: large left, two stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured large card */}
          {filteredProjects[0] && (
            <ProjectCard
              project={filteredProjects[0]}
              className="lg:col-span-2 lg:row-span-2 min-h-[400px] lg:min-h-[600px]"
              isFeatured
            />
          )}
          {/* Two smaller cards stacked on right */}
          {filteredProjects[1] && (
            <ProjectCard
              project={filteredProjects[1]}
              className="min-h-[280px]"
            />
          )}
          {filteredProjects[2] && (
            <ProjectCard
              project={filteredProjects[2]}
              className="min-h-[280px]"
            />
          )}
        </div>
        {/* Second row: two equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {filteredProjects.slice(3, 5).map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              className="min-h-[350px]"
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/our-work"
            className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent/90 transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </Section>
  );
}
