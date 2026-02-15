import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, testimonials } from "@/lib/data";

function getTestimonialForProject(title: string) {
  return testimonials.find((t) => t.company && title.toLowerCase().includes(t.company.toLowerCase().split(" ")[0]));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );
  if (!project) return notFound();
  const testimonial = getTestimonialForProject(project.title);
  return (
    <main className="container mx-auto py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <div className="relative w-full aspect-video mb-6 rounded-xl overflow-hidden border border-border/50">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Objective</h2>
        <p className="text-muted-foreground">{project.description}</p>
      </div>
      {testimonial && (
        <div className="mb-6 p-4 bg-muted rounded-lg border border-border/30">
          <h3 className="font-semibold mb-1">Testimonial</h3>
          <blockquote className="italic">“{testimonial.quote}”</blockquote>
          <div className="mt-2 text-sm text-muted-foreground">- {testimonial.author}, {testimonial.company}</div>
        </div>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-accent text-white rounded hover:bg-accent/80 transition"
        >
          Visit Website
        </a>
      )}
    </main>
  );
}
