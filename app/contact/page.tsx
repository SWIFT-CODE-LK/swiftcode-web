"use client";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const contactCards = [
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 3C10.477 3 6 7.477 6 13c0 8 10 18 10 18s10-10 10-18c0-5.523-4.477-10-10-10z" />
        <circle cx="16" cy="13" r="3" />
      </svg>
    ),
    title: "Address",
    lines: ["7 Green Lake Street Crawfordsville,", "IN 47933"],
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="7" width="24" height="18" rx="3" />
        <path d="M4 11l12 8 12-8" strokeLinecap="round" />
      </svg>
    ),
    title: "Email Us",
    lines: ["Consoel@gmail.com", "helloyou@gmail.com"],
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 5h6l2 6-3 2a18 18 0 008 8l2-3 6 2v6a2 2 0 01-2 2C10.4 28 4 21.6 4 7a2 2 0 012-2z" />
      </svg>
    ),
    title: "Call Now",
    lines: ["+1 800 123 456 789", "+1 800 123 654 987"],
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />

      {/* Page Hero */}
      <section className="bg-[#0d2535] pt-32 pb-16 relative overflow-hidden">
        <svg className="absolute top-0 right-0 w-72 h-72 text-orange-500 opacity-10" viewBox="0 0 288 288">
          <circle cx="288" cy="0" r="220" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="288" cy="0" r="155" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">Reach Out</p>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-4 max-w-xl leading-tight">
            Contact Us
          </h1>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            Have a question or ready to start a project? We would love to hear from you.
          </p>
          <div className="flex items-center gap-2 mt-6 text-sm">
            <Link href="/" className="text-white/50 hover:text-orange-400 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-orange-400">Contact Us</span>
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
                {/* Icon circle */}
                <div className="w-16 h-16 rounded-full bg-gray-50 group-hover:bg-orange-50 flex items-center justify-center text-gray-400 group-hover:text-orange-500 transition-all duration-300 mb-5">
                  {card.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0d2535] mb-3">{card.title}</h3>
                {card.lines.map((line, i) => (
                  <p key={i} className="text-gray-500 text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form Section */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          {/* Map placeholder */}
          <div className="relative rounded-sm overflow-hidden mb-16" style={{ height: "360px" }}>
            <div className="absolute inset-0 bg-gray-200">
              {/* Embed your Google Maps iframe here. Replace the src with your embed URL. */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
            {/* Address pin overlay */}
            <div className="absolute bottom-6 left-6 bg-white shadow-lg px-5 py-3 rounded-sm border-l-4 border-orange-500">
              <p className="font-bold text-sm text-[#0d2535]">Consoel Head Office</p>
              <p className="text-gray-500 text-xs mt-0.5">7 Green Lake Street, Crawfordsville, IN 47933</p>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-4xl font-bold text-[#0d2535] mb-3">Have Any Question?</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                It is a long established fact that a reader will be distracted content of a page when looking.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-16 border border-orange-100 bg-orange-50 rounded-sm">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0d2535] mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">Thank you for reaching out. We will get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                  className="mt-6 text-orange-500 text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-gray-100 rounded-sm p-8 lg:p-10 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full border border-gray-200 focus:border-orange-500 focus:outline-none px-4 py-3 text-sm text-gray-700 placeholder-gray-400 rounded-sm transition-colors duration-200"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full border border-gray-200 focus:border-orange-500 focus:outline-none px-4 py-3 text-sm text-gray-700 placeholder-gray-400 rounded-sm transition-colors duration-200"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone"
                      className="w-full border border-gray-200 focus:border-orange-500 focus:outline-none px-4 py-3 text-sm text-gray-700 placeholder-gray-400 rounded-sm transition-colors duration-200"
                    />
                  </div>
                  {/* Service dropdown */}
                  <div className="relative">
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 focus:border-orange-500 focus:outline-none px-4 py-3 text-sm text-gray-400 rounded-sm appearance-none bg-white transition-colors duration-200 cursor-pointer"
                    >
                      <option value="" disabled>Choose a Service</option>
                      <option value="erp">ERP System</option>
                      <option value="pos">POS Solution</option>
                      <option value="web">Web Application</option>
                      <option value="mobile">Mobile Application</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6l4 4 4-4" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={6}
                    required
                    className="w-full border border-gray-200 focus:border-orange-500 focus:outline-none px-4 py-3 text-sm text-gray-700 placeholder-gray-400 rounded-sm resize-y transition-colors duration-200"
                  />
                </div>

                {/* Submit */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold px-10 py-4 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 text-sm"
                  >
                    Submit Now
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
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