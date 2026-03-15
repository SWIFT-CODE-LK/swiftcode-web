"use client";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      '"Swiftcode developed our POS and inventory system, and it completely improved our daily operations. The system is fast, reliable, and very easy for our staff to use."',
    role: "Managing Director",
    name: "Sanduni Jayasinghe",
  },
  {
    quote:
      '"We partnered with Swiftcode to build our company ERP system. Their team understood our requirements perfectly and delivered a powerful solution that streamlined our business processes."',
    role: "Operations Manager",
    name: "Kasun Fernando",
  },
  {
    quote:
      '"The web application developed by Swiftcode has helped us manage our business more efficiently. Their technical support and professionalism are truly impressive."',
    role: "Business Owner",
    name: "Naleen Buddhika",
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

          {/* Right: image */}
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
              <Image
                src="/Banner/reviews.png"
                alt="Testimonial"
                fill
                className="object-cover"
              />

              {/* Play button overlay */}
              {/* <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-(--theme-color) ml-1" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}