"use client";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      {/* SVG icon matching the circular gear/sun logo */}
      <div className="w-10 h-10 relative flex-shrink-0">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.5" fill="none" />
          <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="1.5" fill="none" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 20 + 10 * Math.cos(rad);
            const y1 = 20 + 10 * Math.sin(rad);
            const x2 = 20 + 18 * Math.cos(rad);
            const y2 = 20 + 18 * Math.sin(rad);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1.5" />
            );
          })}
          <circle cx="20" cy="20" r="3" fill="white" />
        </svg>
      </div>
      <span className="text-white font-bold text-xl tracking-wide">
        CONS<span className="text-orange-500">O</span>EL.
      </span>
    </Link>
  );
}