"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    tagline: "INNOVATIVE SOFTWARE SOLUTIONS.",
    heading: "Smart ERP & Business Systems.",
    description:
      "Swiftcode develops powerful ERP and POS systems in Sri Lanka designed to streamline operations, automate processes, and help businesses manage their workflow efficiently.",
    image: "/slideshow/hero1.png",
  },
  {
    tagline: "MODERN DIGITAL DEVELOPMENT.",
    heading: "Web & Mobile Application Experts.",
    description:
      "We build modern, scalable web and mobile applications that transform ideas into high-performance digital products for growing businesses.",
    image: "/slideshow/hero2.png",
  },
  {
    tagline: "TECHNOLOGY FOR BUSINESS GROWTH.",
    heading: "Custom Software That Scales.",
    description:
      "From ERP platforms to custom software solutions, Swiftcode delivers reliable technology that improves productivity, efficiency, and long-term business growth.",
    image: "/slideshow/hero3.png",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(idx);
        setAnimating(false);
      }, 300);
    },
    [animating],
  );

  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo],
  );
  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo],
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen bg-[#0d2535] flex flex-col justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(26,74,107,0.4) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(10,31,46,0.5) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Grid lines decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 24%, rgba(255,255,255,.5) 25%, rgba(255,255,255,.5) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.5) 75%, rgba(255,255,255,.5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.5) 25%, rgba(255,255,255,.5) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.5) 75%, rgba(255,255,255,.5) 76%, transparent 77%, transparent)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 lg:pt-0 lg:pb-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center w-full lg:py-32">
          {/* ── Image (shows FIRST on mobile, second column on desktop) ── */}
          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end items-center transition-all duration-500 ${
              animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {/* Responsive size: smaller on mobile, larger on desktop */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[460px] xl:h-[460px]">
              {/* Brushstroke circle SVG */}
              <svg
                viewBox="0 0 480 480"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
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

              {/* Portrait image */}
              <div className="absolute inset-6 rounded-full overflow-hidden">
                <Image
                  key={slide.image}
                  src={slide.image}
                  alt={slide.heading}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative dots */}
              <div
                className="absolute -bottom-3 -right-3 w-16 h-16 sm:-bottom-4 sm:-right-4 sm:w-20 sm:h-20 opacity-20 pointer-events-none"
                aria-hidden="true"
              >
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-orange-400"
                    style={{
                      left: `${(i % 4) * 20}px`,
                      top: `${Math.floor(i / 4) * 20}px`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Text content (shows SECOND on mobile, first column on desktop) ── */}
          <div
            className={`order-2 lg:order-1 text-center lg:text-left transition-all duration-300 ${
              animating
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <p className="text-white/60 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              {slide.tagline}
            </p>

            {/* Static H1 for SEO — slide headings rotate, so the H1 stays constant */}
            <h1 className="sr-only">
              Swiftcode – Software Company in Sri Lanka | ERP, POS, Web &amp; Mobile Development
            </h1>
            <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.8rem] font-serif font-bold leading-[1.1] mb-5 lg:mb-7 mx-auto lg:mx-0 max-w-xl">
              {slide.heading}
            </p>

            <p className="text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 mx-auto lg:mx-0 max-w-md lg:max-w-none">
              {slide.description}
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 bg-[var(--theme-color,#f97316)] hover:opacity-90 text-white font-semibold text-sm px-6 sm:px-7 py-3.5 sm:py-4 transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30 hover:gap-4"
              >
                Explore More
                <span className="flex items-center text-xs">»</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Prev / Next arrows: side-mounted on desktop only ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 hover:border-orange-500 text-white/50 hover:text-orange-400 items-center justify-center transition-all duration-200 hover:bg-orange-500/10"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 hover:border-orange-500 text-white/50 hover:text-orange-400 items-center justify-center transition-all duration-200 hover:bg-orange-500/10"
      >
        <ChevronRight size={20} />
      </button>

      {/* ── Bottom controls: arrows + dots together on mobile ── */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {/* Prev arrow — mobile only */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="lg:hidden w-9 h-9 border border-white/20 hover:border-orange-500 text-white/50 hover:text-orange-400 flex items-center justify-center transition-all duration-200 hover:bg-orange-500/10"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
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

        {/* Next arrow — mobile only */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="lg:hidden w-9 h-9 border border-white/20 hover:border-orange-500 text-white/50 hover:text-orange-400 flex items-center justify-center transition-all duration-200 hover:bg-orange-500/10"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* ── Scroll indicator (desktop only) ── */}
      <div
        className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center translate-y-4">
          scroll
        </span>
      </div>
    </section>
  );
}
