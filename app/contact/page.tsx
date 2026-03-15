"use client";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const contactCards = [
  {
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M16 3C10.477 3 6 7.477 6 13c0 8 10 18 10 18s10-10 10-18c0-5.523-4.477-10-10-10z" />
        <circle cx="16" cy="13" r="3" />
      </svg>
    ),
    title: "Address",
    lines: ["Athurugiriya,", "Sri lanka"],
  },
  {
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="4" y="7" width="24" height="18" rx="3" />
        <path d="M4 11l12 8 12-8" strokeLinecap="round" />
      </svg>
    ),
    title: "Email Us",
    lines: ["swiftcode.srilanka@gmail.com"],
  },
  {
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M6 5h6l2 6-3 2a18 18 0 008 8l2-3 6 2v6a2 2 0 01-2 2C10.4 28 4 21.6 4 7a2 2 0 012-2z" />
      </svg>
    ),
    title: "Call Now",
    lines: ["+94 70 490 0850", "+94 76 621 6791"],
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(EMPTY_FORM);
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <main>
      <Navbar />

      {/* Page Hero */}
      <section className="bg-[#0d2535] pt-32 pb-16 relative overflow-hidden">
        <svg
          className="absolute top-0 right-0 w-72 h-72 text-(--theme-color) opacity-10"
          viewBox="0 0 288 288"
        >
          <circle
            cx="288"
            cy="0"
            r="220"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="288"
            cy="0"
            r="155"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <p className="text-(--theme-color) text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Reach Out
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-4 max-w-xl leading-tight">
            Contact Us
          </h1>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            Ready to start your project? Get in touch today.
          </p>
          <div className="flex items-center gap-2 mt-6 text-sm">
            <Link
              href="/"
              className="text-white/50 hover:text-(--theme-color) transition-colors"
            >
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-(--theme-color)">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="grid sm:grid-cols-3 gap-6">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-sm hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-gray-50 group-hover:bg-orange-50 flex items-center justify-center text-gray-400 group-hover:text-(--theme-color) transition-all duration-300 mb-5">
                  {card.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0d2535] mb-3">
                  {card.title}
                </h3>
                {card.lines.map((line, i) => (
                  <p key={i} className="text-gray-500 text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          {/* Map */}
          <div
            className="relative rounded-sm overflow-hidden mb-16"
            style={{ height: "360px" }}
          >
            <iframe
              src="https://www.google.com/maps?q=6.872319,80.000387&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
            <div className="absolute bottom-6 left-6 bg-white shadow-lg px-5 py-3 rounded-sm border-l-4 border-(--theme-color)">
              <p className="font-bold text-sm text-[#0d2535]">
                Athurugiriya
              </p>
              <p className="text-gray-500 text-xs mt-0.5">
                Sri lanka
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-4xl font-bold text-[#0d2535] mb-3">
                Have Any Question?
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Swiftcode ensures every detail keeps your users engaged and focused.
              </p>
            </div>

            {/* Success state */}
            {status === "success" ? (
              <div className="text-center py-16 border border-orange-100 bg-orange-50 rounded-sm">
                <div className="w-16 h-16 bg-(--theme-color) rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0d2535] mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-500 text-sm">
                  Thank you for reaching out. We will get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-(--theme-color) text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-gray-100 rounded-sm p-8 lg:p-10 shadow-sm"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    disabled={status === "sending"}
                    className="w-full border border-gray-200 focus:border-(--theme-color) focus:outline-none px-4 py-3 text-sm text-gray-700 placeholder-gray-400 rounded-sm transition-colors duration-200 disabled:opacity-50"
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    disabled={status === "sending"}
                    className="w-full border border-gray-200 focus:border-(--theme-color) focus:outline-none px-4 py-3 text-sm text-gray-700 placeholder-gray-400 rounded-sm transition-colors duration-200 disabled:opacity-50"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your phone"
                    disabled={status === "sending"}
                    className="w-full border border-gray-200 focus:border-(--theme-color) focus:outline-none px-4 py-3 text-sm text-gray-700 placeholder-gray-400 rounded-sm transition-colors duration-200 disabled:opacity-50"
                  />
                  <div className="relative">
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      disabled={status === "sending"}
                      className="w-full border border-gray-200 focus:border-(--theme-color) focus:outline-none px-4 py-3 text-sm text-gray-500 rounded-sm appearance-none bg-white transition-colors duration-200 cursor-pointer disabled:opacity-50"
                    >
                      <option value="" disabled>
                        Choose a Service
                      </option>
                      <option value="ERP System">ERP System</option>
                      <option value="POS Solution">POS Solution</option>
                      <option value="Web Application">Web Application</option>
                      <option value="Mobile Application">
                        Mobile Application
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg
                        viewBox="0 0 16 16"
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6l4 4 4-4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={6}
                    required
                    disabled={status === "sending"}
                    className="w-full border border-gray-200 focus:border-(--theme-color) focus:outline-none px-4 py-3 text-sm text-gray-700 placeholder-gray-400 rounded-sm resize-y transition-colors duration-200 disabled:opacity-50"
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <div className="mb-6 px-4 py-3 bg-red-50 border border-red-200 rounded-sm text-red-600 text-sm flex items-center gap-2">
                    <svg
                      viewBox="0 0 20 20"
                      className="w-4 h-4 flex-shrink-0"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errorMsg}
                  </div>
                )}

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-3 bg-(--theme-color) hover:opacity-90 disabled:opacity-60 text-white font-semibold px-10 py-4 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 text-sm disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Now
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
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
