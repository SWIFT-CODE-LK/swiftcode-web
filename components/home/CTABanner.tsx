import Link from "next/link";
import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">

        {/* Outer image frame */}
        <div className="relative rounded-sm overflow-hidden min-h-[320px] sm:min-h-[340px] lg:min-h-[280px] flex items-stretch">

          {/* Background image */}
          <Image
            src="/Banner/CTABanner.png"
            alt="CTA Background"
            fill
            className="object-cover opacity-70"
          />

          {/* Dark overlay card:
              - Mobile: full width, sits at bottom half of the banner
              - Desktop: left ~2/3, floats inset from all sides */}
          <div className="relative z-10 w-full flex items-end lg:items-stretch">
            <div className="
              w-full lg:w-2/3
              bg-[#0d2535]/90 backdrop-blur-sm
              mx-0 lg:mx-8
              my-0 lg:my-8
              p-7 sm:p-8 lg:p-10
              rounded-none lg:rounded-sm
              flex flex-col justify-between gap-6
            ">
              <div>
                <p className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
                  Your Vision, Our Code
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Share your challenge with us
                </h2>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[var(--theme-color,#f97316)] hover:bg-orange-600 text-white font-semibold px-7 py-3.5 transition-all duration-200 text-sm"
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
      </div>
    </section>
  );
}