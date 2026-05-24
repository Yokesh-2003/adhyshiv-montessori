"use client";

import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import CampusFacilities from "@/components/CampusFacilities";

export default function FacilityPage() {
  return (
    <>
      <FloatingNavbar />
      <main
        className="relative min-h-screen pt-28 md:pt-32 pb-24 w-full overflow-hidden bg-[#fff9f5]"
        style={{
          backgroundImage: "radial-gradient(rgba(226, 232, 240, 0.45) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px"
        }}
      >
        <CampusFacilities />
      </main>
      <Footer />
    </>
  );
}
