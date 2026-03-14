"use client";
import { useRouter } from "next/navigation";
import { NavDropdownItem } from "../../types/nav";

interface DropdownMenuProps {
  items: NavDropdownItem[];
}

export default function DropdownMenu({ items }: DropdownMenuProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const [, hash] = href.split("#");

    if (hash) {
      router.push(href);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 350);
    } else {
      router.push(href);
    }
  };

  return (
    <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-xl rounded-sm z-50 py-2 border-t-2 border-orange-500">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className="block px-5 py-2.5 text-sm text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}