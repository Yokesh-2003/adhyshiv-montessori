import FloatingNavbar from "@/components/FloatingNavbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FounderAboutSection from "@/components/FounderAboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyChooseUsDetails from "@/components/WhyChooseUsDetails";
import TestimonialsSection from "@/components/TestimonialsSection";
import LatestPostsSection from "@/components/LatestPostsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <FloatingNavbar />
      <main className="overflow-x-hidden w-full relative">
        <HeroSection />
        <WhyChooseSection />
        <FounderAboutSection />
        <ProgramsSection />
        <WhyChooseUsDetails />
        <TestimonialsSection />
        <LatestPostsSection />
      </main>
      <Footer />
    </>
  );
}
