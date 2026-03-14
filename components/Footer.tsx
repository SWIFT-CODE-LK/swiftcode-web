import Link from "next/link";

const companyLinks = [
  { label: "About company", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Job opportunities", href: "/careers" },
  { label: "Contact us", href: "/contact" },
  { label: "Vision & Values", href: "/about#vision" },
];

const recentPosts = [
  { title: "What are the pros and cons of becoming a consultant?", date: "10.02.2022" },
  { title: "We are able to give truly independent advice", date: "10.02.2022" },
];

const bottomLinks = ["Vision & Values", "History", "Awards", "Leadership"];

export default function Footer() {
  return (
    <footer className="bg-[#0a1e2c] relative overflow-hidden">
      {/* Orange blob decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500 rounded-full opacity-70 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500 rounded-full opacity-50 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-orange-500 rounded-full opacity-30 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 pt-16 pb-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-5">
              <div className="w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.5" fill="none" />
                  <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="1.5" fill="none" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    return (
                      <line key={i}
                        x1={20 + 10 * Math.cos(rad)} y1={20 + 10 * Math.sin(rad)}
                        x2={20 + 18 * Math.cos(rad)} y2={20 + 18 * Math.sin(rad)}
                        stroke="white" strokeWidth="1.5"
                      />
                    );
                  })}
                  <circle cx="20" cy="20" r="3" fill="white" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl tracking-wide">
                CONS<span className="text-orange-500">O</span>EL.
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Many desktop publishing packages web page editors now is use model search for many web sites.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {["f", "t", "in", "g+"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 bg-white/10 hover:bg-orange-500 rounded-sm flex items-center justify-center text-white/60 hover:text-white text-xs font-bold transition-all duration-200">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer on large screens */}
          <div className="hidden lg:block" />

          {/* Company links */}
          <div>
            <h4 className="text-white font-serif text-lg font-bold mb-5">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center gap-2">
                    <span className="text-orange-500">-</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent posts */}
          <div>
            <h4 className="text-white font-serif text-lg font-bold mb-5">Recent Post</h4>
            <div className="space-y-5">
              {recentPosts.map((post) => (
                <div key={post.title}>
                  <Link href="/blog" className="text-white/80 hover:text-orange-400 text-sm font-semibold leading-snug transition-colors duration-200 block mb-1.5">
                    {post.title}
                  </Link>
                  <div className="flex items-center gap-1.5 text-orange-500 text-xs">
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="currentColor">
                      <rect x="1" y="3" width="14" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M5 1v4M11 1v4M1 7h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {post.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            Copyright © 2022 // All Right Reserved by{" "}
            <Link href="/" className="text-orange-400 hover:text-orange-300 transition-colors">Consoel.</Link>
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {bottomLinks.map((link, idx) => (
              <span key={link} className="flex items-center gap-4">
                <Link href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">{link}</Link>
                {idx < bottomLinks.length - 1 && <span className="text-white/20 text-xs">//</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}