import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import AnswerBlock from "@/components/landing/AnswerBlock";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import Differentiation from "@/components/landing/Differentiation";
import WhoItIsFor from "@/components/landing/WhoItIsFor";
import Benefits from "@/components/landing/Benefits";
import EmotionalHook from "@/components/landing/EmotionalHook";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import Reveal from "@/components/Reveal";

const sections = [
  AnswerBlock,
  Problem,
  Solution,
  HowItWorks,
  Features,
  Differentiation,
  WhoItIsFor,
  Benefits,
  EmotionalHook,
  Testimonials,
  FAQ,
  FinalCTA,
];

export default function Landing() {
  return (
    <main data-testid="landing-page" className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      {sections.map((Section, i) => (
        <Reveal key={i}>
          <Section />
        </Reveal>
      ))}
      <Footer />
    </main>
  );
}
