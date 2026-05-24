"use client";

import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import CampusEvents from "@/components/CampusEvents";

export default function EventsPage() {
  return (
    <>
      <FloatingNavbar />
      <main
        className="relative min-h-screen pt-36 md:pt-40 pb-24 w-full overflow-hidden bg-[#fff9f5]"
        style={{
          backgroundImage: "radial-gradient(rgba(226, 232, 240, 0.45) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px"
        }}
      >
        <CampusEvents />
      </main>
      <Footer />
    </>
  );
}
