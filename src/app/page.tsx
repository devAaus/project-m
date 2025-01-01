import FeaturedComponents from "@/components/base/home/featured-components";
import Hero from "@/components/base/home/hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedComponents />
    </main>
  );
}
