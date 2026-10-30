import type { Metadata } from "next";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import MissionVisionSection from "../../components/home/MissionVisionSection";

export const metadata: Metadata = {
  title: "About Us – Software Company in Sri Lanka",
  description:
    "About Swiftcode: a software company in Sri Lanka since 2022, delivering ERP software, POS systems, web and mobile app development. Meet our team and values.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Innovation",
    description: "We embrace creativity and continuously explore new technologies to deliver cutting-edge software solutions that solve real business problems.",
    icon: "★",
  },
  {
    title: "Customer Focus",
    description: "Our solutions are designed with our clients in mind, ensuring their business goals are met and their success is our priority.",
    icon: "◈",
  },
  {
    title: "Integrity",
    description: "We operate with honesty, transparency, and accountability in every project, building trust with our clients and partners.",
    icon: "◎",
  },
  {
    title: "Continuous Learning",
    description: "We invest in learning and adapting to new technologies, methodologies, and industry trends to stay ahead in the software world.",
    icon: "◆",
  },
];

const team = [
  { name: "Seshan Nethmike", role: "CEO & Founder", image: "/employees/seshan.jpeg", experience: "20+ years" },
  { name: "Thisara Tharinda", role: "System Administrator", image: "/employees/thisara.jpeg", experience: "12+ years" },
];

const milestones = [
  { id: 1, year: "2022", event: "Founded Swiftcode" },
  { id: 2, year: "2023", event: "Website Launch" },
  { id: 3, year: "2023", event: "ERP System Delivered" },
  { id: 4, year: "2024", event: "Mobile Applications Released" },
  { id: 5, year: "2024", event: "POS Solutions Launched" },
  { id: 6, year: "2025", event: "Team Expansion" },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Page Hero */}
      <section className="bg-[#0d2535] pt-32 pb-20 relative overflow-hidden">
        <svg className="absolute top-0 right-0 w-72 h-72 text-(--theme-color) opacity-10" viewBox="0 0 288 288">
          <circle cx="288" cy="0" r="220" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="288" cy="0" r="155" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute -bottom-10 left-0 w-56 h-56 text-(--theme-color) opacity-5" viewBox="0 0 224 224">
          <circle cx="0" cy="224" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <p className="text-(--theme-color) text-xs font-bold tracking-[0.2em] uppercase mb-3">Who We Are</p>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-5 max-w-2xl leading-tight">
            About Swiftcode – Software Company in Sri Lanka
          </h1>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            Since 2022, Swiftcode has been empowering Sri Lankan businesses with smart ERP software, POS systems, web, and mobile app development that drive growth and digital transformation.
          </p>
          <div className="flex items-center gap-2 mt-6 text-sm">
            <Link href="/" className="text-white/50 hover:text-orange-400 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-orange-500">About Us</span>
          </div>
        </div>
      </section>

      <MissionVisionSection />

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="text-center mb-14">
            <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">What We Stand For</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#0d2535]">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="group p-8 border border-gray-100 hover:border-orange-200 rounded-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300"
              >
                <div className="text-3xl text-(--theme-color) mb-5 font-bold">{val.icon}</div>
                <h3 className="font-serif text-xl font-bold text-[#0d2535] mb-3 group-hover:text-(--theme-color) transition-colors">
                  {val.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="text-center mb-14">
            <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">Our Journey</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#0d2535]">Company Milestones</h2>
          </div>

          {/* ── Mobile: left-aligned vertical timeline ── */}
          <div className="lg:hidden relative">
            {/* Vertical line — starts at 8px from left (center of dot) */}
            <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {milestones.map((m, idx) => (
                <div key={m.id} className="relative flex items-start gap-4">
                  {/* Dot — fixed width so content always aligns */}
                  <div className="flex-shrink-0 mt-1.5 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow relative z-10" />
                  <div>
                    <div
                      className={`inline-block text-white font-bold text-sm px-4 py-1.5 mb-2 ${
                        idx % 2 === 0 ? "bg-[var(--theme-color,#f97316)]" : "bg-[#0d2535]"
                      }`}
                    >
                      {m.year}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Desktop: alternating two-column timeline ── */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gray-200" />
            {milestones.map((m, idx) => (
              <div key={m.id} className="relative grid grid-cols-2 gap-10">
                {idx % 2 === 0 ? (
                  <>
                    <div className="text-right pr-10 pb-12">
                      <div className="inline-block bg-[var(--theme-color,#f97316)] text-white font-bold text-sm px-4 py-1.5 mb-3">
                        {m.year}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
                    </div>
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <div className="pl-10 pb-12">
                      <div className="inline-block bg-[#0d2535] text-white font-bold text-sm px-4 py-1.5 mb-3">
                        {m.year}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </>
                )}
                <div className="absolute left-1/2 top-3 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="text-center mb-14">
            <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">Team Members</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#0d2535]">We Have Skilled People</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center group">
                <div className="relative mb-5">
                  <div className="w-36 h-36 rounded-full border-4 border-gray-100 overflow-hidden shadow-md group-hover:border-orange-500 transition-colors duration-300 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0d2535] mb-1">{member.name}</h3>
                <p className="text-(--theme-color) text-sm font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0d2535] relative overflow-hidden">
        <svg className="absolute top-0 right-0 w-56 h-56 text-orange-500 opacity-10" viewBox="0 0 224 224">
          <circle cx="224" cy="0" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-3">Grow Smarter with Swiftcode.</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white max-w-xl">
              Empowering your business with smart, scalable technology solutions.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link href="/contact" className="bg-(--theme-color) hover:bg-orange-600 text-white font-bold px-8 py-4 text-sm transition-all duration-200 text-center whitespace-nowrap">
              Contact Us →
            </Link>
            <Link href="/services" className="border border-white/30 hover:border-orange-400 text-white/70 hover:text-orange-400 font-bold px-8 py-4 text-sm transition-all duration-200 text-center whitespace-nowrap">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}