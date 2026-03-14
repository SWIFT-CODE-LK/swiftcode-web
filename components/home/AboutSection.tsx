"use client";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image with badge */}
          <div className="relative">
            {/* Decorative squiggle top-right */}
            <svg
              className="absolute -top-6 right-8 w-16 h-16 text-orange-500 z-10"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M10 40 Q20 10 30 30 Q40 50 50 20"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Main image */}
            <div className="relative rounded-sm overflow-hidden bg-gray-200 aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              {/* Replace with <Image> from next/image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg
                    viewBox="0 0 80 80"
                    className="w-20 h-20 mx-auto mb-2 opacity-40"
                  >
                    <circle cx="40" cy="28" r="18" fill="currentColor" />
                    <path
                      d="M8 72 Q8 48 40 46 Q72 48 72 72Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="text-sm">Business Portrait Image</p>
                </div>
              </div>
            </div>

            {/* Decorative squiggle bottom-left */}
            <svg
              className="absolute -bottom-4 left-0 w-14 h-14 text-orange-500"
              viewBox="0 0 56 56"
              fill="none"
            >
              <path
                d="M8 44 Q18 14 28 28 Q38 42 48 12"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Experience badge */}
            <div className="absolute bottom-8 -right-4 lg:-right-8">
              <div className="relative">
                {/* Orange brushstroke bg */}
                <svg
                  viewBox="0 0 280 80"
                  className="w-64 lg:w-72 h-auto text-(--theme-color) drop-shadow-lg"
                >
                  <path
                    d="M5 20 Q10 5 30 8 L260 5 Q275 6 275 20 L272 60 Q270 75 250 74 L20 72 Q5 71 5 58Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="absolute inset-0 flex items-center justify-center text-white font-serif font-bold text-xl lg:text-2xl tracking-wide -rotate-2">
                  15 Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <p className="text-orange-500 text-sm font-bold tracking-[0.15em] uppercase mb-3">
              Welcome To Consoel Consultancy Company
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#0d2535] leading-tight mb-6">
              We are trusted consulting company,{" "}
              <span className="text-orange-500">with 28+ years</span> of
              experience.
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting's
              the industrey's standard dummy text ever since the 1500 when
              printed galley of type and scrambled type specimen book. One way
              to categorize the activities is in terms of the professional's
              area of expertise such as competitive analysis, corporate
              strategy.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-(--theme-color) hover:bg-orange-600 text-white font-semibold px-7 py-4 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25"
            >
              More About Us
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
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
          </div>
        </div>
      </div>
    </section>
  );
}
