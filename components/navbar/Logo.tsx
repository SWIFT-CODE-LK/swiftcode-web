"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <Image
        src="/logo.png"
        alt="SwiftCode Logo"
        width={200}
        height={100}
        className="object-contain"
      />
    </Link>
  );
}
