import { CoreFeatures, Hero, UpcomingBlocks } from '@/components/base/home/index'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CoreFeatures />
      <UpcomingBlocks />
    </main>
  );
}
