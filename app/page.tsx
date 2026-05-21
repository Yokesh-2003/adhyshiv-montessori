import FloatingNavbar from "@/components/FloatingNavbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FounderAboutSection from "@/components/FounderAboutSection";

export default function Home() {
  return (
    <>
      <FloatingNavbar />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <FounderAboutSection />
      </main>
    </>
  );
}
