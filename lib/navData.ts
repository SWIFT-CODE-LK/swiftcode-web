import type { NavItem } from "../types/nav";

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects & Services",
    href: "/services",
    dropdown: [
      { label: "ERP System", href: "/services#erp-system" },
      { label: "POS", href: "/services#pos" },
      { label: "Web Applications", href: "/services#web-applications" },
      { label: "Mobile Applications", href: "/services#mobile-applications" },
    ],
  },
  { label: "About Us", href: "/about" },
];