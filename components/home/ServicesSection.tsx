"use client";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    title: "ERP System Development",
    description:
      "Development of powerful Enterprise Resource Planning systems to manage accounting, inventory, HR, sales, and overall business operations in one platform.",
    image: false,
    accent: true,
  },
  {
    title: "System Integration",
    description:
      "Connecting different business systems such as ERP, POS, payment gateways, and third-party services to create a seamless workflow.",
    image: true,
    accent: false,
  },
  {
    title: "Website Design & Development",
    description:
      "Professional business websites, e-commerce platforms, and corporate websites designed for performance and modern user experience.",
    image: true,
    accent: false,
  },
  {
    title: "Software Maintenance & Support",
    description:
      "Ongoing technical support, updates, system improvements, and performance monitoring to ensure your systems run smoothly.",
    image: true,
    accent: false,
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-[#0d2535] relative overflow-hidden">
      {/* Decorative circle arcs */}
      <svg className="absolute top-0 left-0 w-64 h-64 text-(--theme-color) opacity-20" viewBox="0 0 256 256">
        <circle cx="0" cy="0" r="200" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="160" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-72 h-72 text-orange-500 opacity-10" viewBox="0 0 288 288">
        <circle cx="288" cy="288" r="220" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Our Services
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white">
            Software Development Services in Sri Lanka
          </h2>
        </div>

        {/* Cards carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 -mx-3">
          {services.map((svc, idx) => (
            <div
              key={svc.title}
              onClick={() => setActive(idx)}
              className={`relative mx-3 mb-6 lg:mb-0 cursor-pointer transition-all duration-300 overflow-hidden rounded-sm
                ${active === idx ? "bg-(--theme-color) scale-105 z-10 shadow-2xl shadow-orange-500/30" : "bg-[#0a2233]"}
              `}
              style={{ minHeight: "340px" }}
            >
              {/* Background image placeholder */}
              {svc.image && (
                <div className={`absolute inset-0 ${active === idx ? "opacity-0" : "opacity-60"} transition-opacity duration-300`}>
                  <div className="w-full h-full bg-gradient-to-b from-gray-600/40 to-[#0a2233]" />
                </div>
              )}

              <div className="relative z-10 p-8 flex flex-col h-full" style={{ minHeight: "340px" }}>
                {/* Icon placeholder */}
                <div className={`w-12 h-12 rounded mb-auto ${active === idx ? "text-white/80" : "text-orange-500"}`}>
                  <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
                    <rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 24h16M16 32h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="24" cy="17" r="4" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>

                <div className="mt-8">
                  <h3 className="font-serif text-xl font-bold text-white mb-4">{svc.title}</h3>
                  <p className={`text-sm leading-relaxed mb-8 ${active === idx ? "text-white/80" : "text-white/60"}`}>
                    {svc.description}
                  </p>
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-2 text-sm font-semibold border px-5 py-2.5 transition-all duration-200
                      ${active === idx
                        ? "border-white text-white hover:bg-white hover:text-(--theme-color)"
                        : "border-white/30 text-white/70 hover:border-orange-500 hover:text-orange-400"
                      }`}
                  >
                    Details
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="hidden sm:flex justify-center gap-2 mt-10">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`transition-all duration-300 rounded-full ${
                active === idx ? "w-8 h-3 bg-(--theme-color)" : "w-3 h-3 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}