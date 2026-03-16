import Link from "next/link";
import Logo from "./navbar/Logo";

const companyLinks = [
  { label: "About company", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Contact us", href: "/contact" },
];

const contactDetails = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.03 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    label: "Phone",
    phones: [
      { value: "+94 70 490 0850", href: "tel:+94704900850" },
      { value: "+94 76 621 6791", href: "tel:+94766216791" },
    ],
    value: "",
    href: "",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "swiftcode.srilanka@gmail.com",
    href: "mailto:hello@swiftcode.com",
  },
  // {
  //   icon: (
  //     <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  //       <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
  //       <circle cx="12" cy="10" r="3" />
  //     </svg>
  //   ),
  //   label: "Address",
  //   value: "123 Business Ave, New York, NY 10001",
  //   href: "#",
  // },
];

const bottomLinks = ["Vision & Values", "History"];

export default function Footer() {
  return (
    <footer className="bg-[#0a1e2c] relative overflow-hidden">
      {/* Orange blob decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-(--theme-color) rounded-full opacity-70 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-20 h-20 bg-(--theme-color) rounded-full opacity-50 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-(--theme-color) rounded-full opacity-30 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 pt-16 pb-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Swiftcode builds smart, scalable software solutions designed to transform ideas into powerful digital experiences.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {["f", "t", "in", "g+"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-orange-500 rounded-sm flex items-center justify-center text-white/60 hover:text-white text-xs font-bold transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer on large screens */}
          <div className="hidden lg:block" />

          {/* Company links */}
          <div>
            <h4 className="text-white font-serif text-lg font-bold mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-orange-500">-</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-serif text-lg font-bold mb-5">
              Contact Us
            </h4>
            <div className="space-y-4">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-3 group">
                  <span className="mt-0.5 text-orange-500 shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    {"phones" in item && item.phones ? (
                      <div className="space-y-0.5">
                        {item.phones.map((phone) => (
                          <a
                            key={phone.href}
                            href={phone.href}
                            className="block text-white/70 hover:text-orange-400 text-sm transition-colors duration-200 leading-snug"
                          >
                            {phone.value}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="text-white/70 hover:text-orange-400 text-sm transition-colors duration-200 leading-snug"
                      >
                        {item.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            Copyright © {new Date().getFullYear()} // All Right Reserved by{" "}
            <Link
              href="/"
              className="text-(--theme-color) hover:text-orange-300 transition-colors"
            >
              SwiftCode.
            </Link>
          </p>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            {bottomLinks.map((link, idx) => (
              <span key={link} className="flex items-center gap-4">
                <Link
                  href="#"
                  className="text-white/40 hover:text-white/70 text-xs transition-colors"
                >
                  {link}
                </Link>
                {idx < bottomLinks.length - 1 && (
                  <span className="text-white/20 text-xs">//</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}