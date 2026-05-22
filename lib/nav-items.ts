export type NavItem = {
  label: string;
  href: string;
  isCta?: boolean;
  dropdownItems?: { label: string; href: string }[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  {
    label: "Campus",
    href: "#",
    dropdownItems: [
      { label: "Facility", href: "/campus/facility" },
      { label: "Events", href: "/campus/events" },
      { label: "Gallery", href: "/campus/gallery" },
    ],
  },
  { label: "Contact Us", href: "/#contact" },
  { label: "Fees Payment", href: "/#fees", isCta: true },
];
