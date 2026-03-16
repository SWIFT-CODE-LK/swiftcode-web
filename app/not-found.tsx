import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <main>
      <Navbar />

      <section className="bg-[#0d2535] min-h-screen flex items-center justify-center relative overflow-hidden">

        {/* Background decorations */}
        <svg className="absolute top-0 right-0 w-72 h-72 text-orange-500 opacity-10" viewBox="0 0 288 288">
          <circle cx="288" cy="0" r="220" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="288" cy="0" r="155" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-56 h-56 text-orange-500 opacity-5" viewBox="0 0 224 224">
          <circle cx="0" cy="224" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative text-center px-6 max-w-xl mx-auto">

          {/* Big 404 */}
          <p className="font-serif font-bold text-[120px] sm:text-[160px] leading-none text-white/5 select-none mb-0 -mb-8">
            404
          </p>

          {/* Tagline */}
          <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Page Not Found
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Oops! This page doesn't exist.
          </h1>

          <p className="text-white/50 text-base leading-relaxed mb-10">
            The page you're looking for may have been moved, deleted, or never existed. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="bg-[var(--theme-color,#f97316)] hover:opacity-90 text-white font-semibold text-sm px-8 py-4 transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30 w-full sm:w-auto text-center"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 hover:border-orange-500 text-white/60 hover:text-orange-400 font-semibold text-sm px-8 py-4 transition-all duration-200 w-full sm:w-auto text-center"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}