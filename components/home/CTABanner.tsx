import Link from "next/link";
import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Outer image frame */}
        <div className="relative rounded-sm overflow-hidden" style={{ minHeight: "280px" }}>
          {/* Background image */}
          <Image
            src="/Banner/CTABanner.png"
            alt="CTA Background"
            fill
            className="object-cover opacity-70"
          />

          {/* Dark overlay card */}
          <div className="absolute inset-y-8 left-8 right-8 lg:right-1/3 bg-[#0d2535]/90 backdrop-blur-sm rounded-sm p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <p className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
                Your Vision, Our Code
              </p>
              <h2 className="font-serif text-2xl lg:text-4xl font-bold text-white leading-tight mb-6 lg:mb-0">
                Share your challenge with us
              </h2>
            </div>

            <div className="mt-6 lg:mt-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-(--theme-color) hover:bg-orange-600 text-white font-semibold px-7 py-3.5 transition-all duration-200 text-sm"
              >
                Contact Us
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}