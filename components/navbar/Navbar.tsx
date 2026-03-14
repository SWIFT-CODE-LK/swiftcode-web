"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import { navItems as NAV_ITEMS } from "../../lib/navData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-30 transition-all duration-300
          ${scrolled
            ? "bg-[#0a2233]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
            : "bg-transparent py-5"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Logo />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center">
              <ul className="flex items-center gap-6 xl:gap-8">
                {NAV_ITEMS.map((item) => (
                  <NavItem
                    key={item.label}
                    item={item}
                    isActive={
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href)
                    }
                  />
                ))}
              </ul>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3 xl:gap-4">
              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden md:flex items-center gap-2 bg-[#e8632a] hover:bg-[#d4551f] active:bg-[#c04c1a] text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-200 whitespace-nowrap"
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              {/* Hamburger */}
              <button
                className="lg:hidden flex flex-col gap-[5px] p-1 text-white"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <span className="block w-6 h-0.5 bg-white rounded-full" />
                <span className="block w-4 h-0.5 bg-white/70 rounded-full" />
                <span className="block w-6 h-0.5 bg-white rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {/* <MobileMenu
        items={NAV_ITEMS}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      /> */}
    </>
  );
}