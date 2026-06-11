import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const usefulLinks = [
  { label: "About Us", href: "/about" },
  { label: "Facility", href: "/campus/facility" },
  { label: "Events & Gallery", href: "/campus/events" },
  { label: "Contact Us", href: "/contact" },
  { label: "Fees Payment", href: "/#fees" },
];

const contactItems = [
  {
    icon: MapPin,
    text: "85, AC Block 3rd St, Block AC, AC Block, Anna Nagar, Chennai, Tamil Nadu 600040",
    href: "https://maps.google.com",
  },
  { icon: Phone, text: "+91 78711 11111", href: "tel:+917871111111" },
  { icon: Mail, text: "adhyshivtrust@gmail.com", href: "mailto:adhyshivtrust@gmail.com" },
  { icon: Clock, text: "Weekdays : 2.00 PM - 4.00 PM", href: null },
  { icon: Clock, text: "Saturdays : 11.00 AM - 2.00 PM", href: null },
];

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 40%, #a855f7 70%, #9333ea 100%)",
      }}
    >
      {/* White brush-stroke "Adhyshiv" watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
      >
        <span
          style={{
            fontFamily: "var(--font-fraunces), ui-serif, Georgia, serif",
            fontSize: "clamp(5rem, 18vw, 14rem)",
            fontWeight: 700,
            color: "transparent",
            WebkitTextStroke: "2px rgba(255,255,255,0.08)",
            letterSpacing: "0.05em",
            lineHeight: 1,
            whiteSpace: "nowrap",
            filter: "blur(0.5px)",
          }}
        >
          Adhyshiv
        </span>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-14 pb-8 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" aria-label="Home">
              <BrandLogo size={180} />
            </Link>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/adhyshivmontessorischool/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-[#1877F2]">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/adhyshivmontessori/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-[#E1306C]">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Useful Links */}
          <div>
            <h3 className="mb-5 text-base font-bold tracking-wide text-sunny">Useful Links</h3>
            <ul className="flex flex-col gap-2.5">
              {usefulLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <span className="text-sunny text-xs font-bold">›</span>
                  <Link href={link.href} className="text-sm text-white/90 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact Us */}
          <div>
            <h3 className="mb-5 text-base font-bold tracking-wide text-sunny">Contact Us</h3>
            <ul className="flex flex-col gap-3.5">
              {contactItems.map(({ icon: Icon, text, href }, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-sunny" />
                  {href ? (
                    <a href={href} className="hover:text-white transition-colors leading-snug">{text}</a>
                  ) : (
                    <span className="leading-snug">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-white/60">
          Copyright © 2026 Montessori School. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
