import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { MapPin, Phone, Mail, Clock, Users } from "lucide-react";

const usefulLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programmes" },
  { label: "Facilities", href: "#facilities" },
  { label: "Workshops", href: "#workshops" },
  { label: "Blog", href: "#blogs" },
];

const contactItems = [
  {
    icon: MapPin,
    text: "85, AC Block 3rd St, Block AC, AC Block, Anna Nagar, Chennai, Tamil Nadu 600040",
    href: "https://maps.google.com",
  },
  { icon: Phone, text: "+91 78711 11111", href: "tel:+917871111111" },
  { icon: Mail, text: "Info@adhyshiv.com", href: "mailto:Info@adhyshiv.com" },
  { icon: Clock, text: "School Timings : 9.00 AM - 2.30 PM", href: null },
  { icon: Users, text: "Office Timings : 8.30 AM - 4.00 PM", href: null },
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
            <Link href="#home" aria-label="Home">
              <BrandLogo size={180} />
            </Link>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
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
