import FeaturedComponents from "@/components/home/featured-components";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedComponents />
    </main>
  );
}
