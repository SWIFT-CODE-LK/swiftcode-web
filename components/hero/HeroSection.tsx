"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    tagline: "TRUSTED BUSINESS PARTNER.",
    heading: "Provide Financial Solution Service.",
    description:
      "It was popularised in the 1960s with the release sheets. We bring the right people together",
  },
  {
    tagline: "EXPERT ADVISORY TEAM.",
    heading: "Strategic Business Growth Partner.",
    description:
      "We help businesses navigate complex financial landscapes with precision and confidence.",
  },
  {
    tagline: "PROVEN TRACK RECORD.",
    heading: "Empowering Your Financial Future.",
    description:
      "Decades of experience combined with modern solutions to deliver results that matter.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen bg-[#0d2535] flex items-center overflow-hidden">
      {/* Background subtle texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #1a4a6b 0%, transparent 60%), radial-gradient(circle at 80% 20%, #0a1f2e 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Grid lines decoration */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255,255,255,.5) 25%, rgba(255,255,255,.5) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.5) 75%, rgba(255,255,255,.5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.5) 25%, rgba(255,255,255,.5) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.5) 75%, rgba(255,255,255,.5) 76%, transparent 77%, transparent)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-screen lg:min-h-0 py-24 lg:py-32">

          {/* Left: Text Content */}
          <div
            className={`transition-all duration-300 ${
              animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Tagline */}
            <p className="text-white/60 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-5">
              {slide.tagline}
            </p>

            {/* Heading */}
            <h1 className="text-white text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-serif font-bold leading-[1.1] mb-6 lg:mb-8 max-w-xl">
              {slide.heading}
            </h1>

            {/* Description */}
            <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-10 max-w-md">
              {slide.description}
            </p>

            {/* CTA */}
            <Link
              href="/services"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-7 py-4 transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30 hover:gap-4"
            >
              Explore More
              <span className="flex items-center text-xs">»</span>
            </Link>
          </div>

          {/* Right: Portrait image area */}
          <div
            className={`relative flex justify-center lg:justify-end items-end transition-all duration-500 ${
              animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {/* Circular brushstroke frame */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px]">
              {/* Brushstroke circle - SVG decoration */}
              <svg
                viewBox="0 0 480 480"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="240"
                  cy="240"
                  rx="225"
                  ry="225"
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="28"
                  strokeDasharray="1400 100"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="240"
                  cy="240"
                  rx="225"
                  ry="225"
                  fill="none"
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="40"
                  strokeDasharray="800 400"
                  strokeLinecap="round"
                  transform="rotate(60 240 240)"
                />
              </svg>

              {/* Placeholder portrait — replace with <Image> from next/image */}
              <div className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-b from-[#1a4060] to-[#0d2535] flex items-end justify-center">
                {/* Replace this div with your actual Next.js Image component */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    {/* Silhouette placeholder */}
                    <svg viewBox="0 0 200 280" className="w-40 h-56 opacity-40 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="75" r="45" fill="rgba(255,255,255,0.3)" />
                      <path d="M20 280 Q20 160 100 155 Q180 160 180 280Z" fill="rgba(255,255,255,0.3)" />
                    </svg>
                    <p className="text-white/30 text-xs mt-2">Portrait Image Here</p>
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-20">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-orange-400"
                    style={{
                      left: `${(i % 4) * 24}px`,
                      top: `${Math.floor(i / 4) * 24}px`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 border border-white/20 hover:border-orange-500 text-white/50 hover:text-orange-400 flex items-center justify-center transition-all duration-200 hover:bg-orange-500/10"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 border border-white/20 hover:border-orange-500 text-white/50 hover:text-orange-400 flex items-center justify-center transition-all duration-200 hover:bg-orange-500/10"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-2 bg-orange-500"
                : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center translate-y-4">
          scroll
        </span>
      </div>
    </section>
  );
}