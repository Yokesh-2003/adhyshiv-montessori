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
    label: "Gallery",
    href: "#",
    dropdownItems: [
      { label: "Facility", href: "/#facilities" },
      { label: "Events Gallery", href: "/#events" },
    ],
  },
  { label: "Contact Us", href: "/#contact" },
  { label: "Fees Payment", href: "/#fees", isCta: true },
];
