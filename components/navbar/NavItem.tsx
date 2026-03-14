"use client";
import { useState } from "react";
import Link from "next/link";
import { NavItem as NavItemType } from "../../types/nav";
import DropdownMenu from "./DropdownMenu";
import { ChevronDown } from "lucide-react";

interface NavItemProps {
  item: NavItemType;
  isActive?: boolean;
}

export default function NavItem({ item, isActive }: NavItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-2 px-1
          ${isActive ? "text-orange-400" : "text-white hover:text-orange-400"}`}
      >
        {item.label}
        {item.dropdown && (
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        )}
      </Link>

      {item.dropdown && open && <DropdownMenu items={item.dropdown} />}
    </div>
  );
}