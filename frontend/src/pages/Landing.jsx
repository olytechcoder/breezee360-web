import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import EmotionalHook from "@/components/landing/EmotionalHook";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <EmotionalHook />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
