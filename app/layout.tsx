import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import FloatingWidgets from "@/components/FloatingWidgets";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Adhyshiv Montessori",
  description: "Premium Montessori childcare and early learning.",
  keywords: [
    "Montessori",
    "childcare",
    "preschool",
    "early learning",
    "Adhyshiv",
  ],
  openGraph: {
    title: "Adhyshiv Montessori",
    description: "Premium Montessori childcare and early learning.",
    images: ["/images/hero-playground.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f472b6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} h-full scroll-smooth antialiased overflow-x-hidden w-full`}
    >
      <body className="min-h-full font-sans text-foreground overflow-x-hidden w-full">
        {children}
        <FloatingWidgets />
      </body>
    </html>
  );
}
