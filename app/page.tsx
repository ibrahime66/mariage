import Loader from "@/components/Loader";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import StoryTimeline from "@/components/StoryTimeline";
import Couple from "@/components/Couple";
import Witness from "@/components/Witness";
import Program from "@/components/Program";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Loader />
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Countdown />
        <StoryTimeline />
        <Couple />
        <Witness />
        <Program />
        <LocationSection />
        <FAQSection />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
