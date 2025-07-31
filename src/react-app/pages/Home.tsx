import Navigation from '@/react-app/components/Navigation';
import Hero from '@/react-app/components/Hero';
import Features from '@/react-app/components/Features';
import TechStack from '@/react-app/components/TechStack';
import Usage from '@/react-app/components/Usage';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Features />
        <TechStack />
        <Usage />
      </div>
    </div>
  );
}
