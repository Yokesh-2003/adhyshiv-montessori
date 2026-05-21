export type NavItem = {
  label: string;
  href: string;
  isCta?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Programmes", href: "#programmes" },
  { label: "Workshops", href: "#workshops" },
  { label: "Blogs", href: "#blogs" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
  { label: "Fees Payment", href: "#fees", isCta: true },
];
