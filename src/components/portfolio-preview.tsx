"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { projects } from "@/lib/data";

export function PortfolioPreview() {
  // Filter out projects to be removed from home page
  const removedTitles = [
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
    const isComingSoon = (project as any).comingSoon;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className={`group relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-2xl ${className}`}
      >
        {/* Image and overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={isFeatured}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors" />
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <span className="px-3 py-1 text-xs font-medium bg-black/60 backdrop-blur-sm rounded-full text-white">
            {project.category}
          </span>
          {project.link && (
            <span className={`px-3 py-1 text-xs font-medium backdrop-blur-sm rounded-full text-white ${
              isComingSoon ? 'bg-orange-500/80' : 'bg-blue-600'
            }`}>
              {isComingSoon ? 'Coming Soon' : 'Live'}
            </span>
          )}
        </div>

        {/* Title and description at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className={`font-bold text-white ${isFeatured ? "text-2xl" : "text-lg"}`}>
            {project.title}
          </h3>
          
          {/* Description - show on hover for all, always for featured */}
          <div className={`mt-3 text-sm text-gray-200 line-clamp-2 transition-opacity duration-300 ${
            isFeatured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}>
            {project.description}
          </div>

          {/* Visit link - only show on hover */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent hover:bg-accent/90 text-white text-sm font-medium transition-colors opacity-0 group-hover:opacity-100"
              aria-label={`Visit ${project.title} website`}
              onClick={(e) => e.stopPropagation()}
            >
              Visit {project.title}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l6 6" />
              </svg>
            </a>
          )}
        </div>
      </motion.div>
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
        <motion.div 
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <a
            href="/our-work"
            className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent/90 transition-colors"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
