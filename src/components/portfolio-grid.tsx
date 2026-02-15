import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

export function PortfolioGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.title}
          href={`/our-work/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, "-"))}`}
          className="group block rounded-xl border border-border/50 bg-card overflow-hidden hover:border-accent/30 transition-all"
        >
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          </div>
          <div className="p-4">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              {project.category}
            </span>
            <h2 className="text-lg font-semibold mt-1">{project.title}</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {project.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
