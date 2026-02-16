import { PortfolioGrid } from "@/components/portfolio-grid";

export default function OurWorkPage() {
  return (
    <main className="container mx-auto py-12">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2 text-center">Our Work</h1>
        <p className="text-white mb-8 text-center">real problem solving websites we built</p>
      </div>
      <PortfolioGrid />
    </main>
  );
}
