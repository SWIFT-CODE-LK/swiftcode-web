"use client";
import { useState } from "react";

const testimonials = [
  {
    quote:
      '"I just wanted to share a quick note and let you know that you guys do a really good job. I\'m glad I decided to work with you. It\'s really great how easy. One way to categorize the activities is in terms."',
    role: "Founder",
    name: "Cathi Falcon",
  },
  {
    quote:
      '"Working with Consoel has been an absolute game changer for our business. Their expertise in financial consulting has helped us grow revenue by 40% in just one year."',
    role: "CEO",
    name: "James Hartley",
  },
  {
    quote:
      '"The team at Consoel understands business challenges deeply and provides strategic advice that actually works in practice. Highly recommend their services."',
    role: "Director",
    name: "Maria Santos",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: testimonial */}
          <div>
            <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Client Testimonial
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#0d2535] mb-8">
              Best Word Our Clients
            </h2>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 mb-6" />

            {/* Quote card */}
            <div className="bg-gray-50 p-7 rounded-sm mb-6">
              <p className="text-gray-600 text-base leading-relaxed mb-6">{t.quote}</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-orange-500 text-xs font-bold tracking-[0.15em] uppercase mb-1">
                  {t.role}
                </p>
                <p className="font-serif text-2xl font-bold text-[#0d2535]">{t.name}</p>
              </div>
            </div>

            {/* Dot navigation */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    active === idx ? "w-8 h-3 bg-(--theme-color)" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: video/image */}
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden aspect-[4/3] bg-gray-200">
              {/* Replace with Next.js Image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                <div className="text-center text-gray-300">
                  <svg viewBox="0 0 80 80" className="w-20 h-20 mx-auto mb-2 opacity-40">
                    <circle cx="40" cy="28" r="18" fill="currentColor" />
                    <path d="M8 72 Q8 48 40 46 Q72 48 72 72Z" fill="currentColor" />
                  </svg>
                  <p className="text-sm">Testimonial Image</p>
                </div>
              </div>

              {/* Play button overlay */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-(--theme-color) ml-1" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}