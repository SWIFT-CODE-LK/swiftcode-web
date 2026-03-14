import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Outer image frame */}
        <div className="relative rounded-sm overflow-hidden" style={{ minHeight: "280px" }}>
          {/* Background image placeholder */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-400">
            {/* Replace with Next.js Image component */}
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80')] bg-cover bg-center opacity-70" />
          </div>

          {/* Dark overlay card */}
          <div className="absolute inset-y-8 left-8 right-8 lg:right-1/3 bg-[#0d2535]/90 backdrop-blur-sm rounded-sm p-8 lg:p-10 flex flex-col justify-between">
            {/* Orange blob decoration */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-20 h-28 bg-orange-500 rounded-full blur-sm opacity-80 -z-10" />

            <div>
              <p className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
                We Are Here
              </p>
              <h2 className="font-serif text-2xl lg:text-4xl font-bold text-white leading-tight mb-6 lg:mb-0">
                Tell us about your business,
                <br />
                we are ready to solve.
              </h2>
            </div>

            <div className="mt-6 lg:mt-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 transition-all duration-200 text-sm"
              >
                Call Us
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