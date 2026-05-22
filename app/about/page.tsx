"use client";

import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutVisionMission from "@/components/AboutVisionMission";
import AboutFounder from "@/components/AboutFounder";
import AboutTribute from "@/components/AboutTribute";
import AboutLogoStory from "@/components/AboutLogoStory";

export default function AboutPage() {
  return (
    <>
      <FloatingNavbar />
      <main
        className="relative min-h-screen pt-48 md:pt-52 pb-24 w-full overflow-hidden bg-[#fff9f5]"
        style={{
          backgroundImage: "radial-gradient(rgba(226, 232, 240, 0.45) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px"
        }}
      >
        {/* Section 1: About Us Header & Introduction (Welcome & Quote) */}
        <AboutHero />

        {/* Section 1.5: Vision, Mission, Values */}
        <AboutVisionMission />

        {/* Section 2: Founder of AdhyShiv (Stepped timeline & Left concentric orbits) */}
        <AboutFounder />

        {/* Section 3: Maria Montessori Tribute (Tribute letter & Right concentric orbits) */}
        <AboutTribute />

        {/* Section 4: Our Logo Story (Interactive Ferris Wheel Dial Carousel) */}
        <AboutLogoStory />

      </main>
      <Footer />
    </>
  );
}
