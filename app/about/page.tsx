import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const values = [
  {
    title: "Client First",
    description: "Every decision we make starts with understanding what truly serves our clients' best interests.",
    icon: "★",
  },
  {
    title: "Integrity",
    description: "We hold ourselves to the highest ethical standards in every engagement, big or small.",
    icon: "◈",
  },
  {
    title: "Innovation",
    description: "We continuously evolve our methods and technology to deliver forward-thinking solutions.",
    icon: "◎",
  },
  {
    title: "Excellence",
    description: "We never settle for good enough — every deliverable reflects our commitment to quality.",
    icon: "◆",
  },
];

const team = [
  { name: "Robert Anderson", role: "CEO & Founder", initials: "RA", experience: "20+ years" },
  { name: "Michael Davies", role: "Chief Financial Advisor", initials: "MD", experience: "15+ years" },
  { name: "Sarah Williams", role: "Strategy Director", initials: "SW", experience: "12+ years" },
  { name: "James Hartley", role: "Technology Lead", initials: "JH", experience: "10+ years" },
];

const milestones = [
  { year: "2004", event: "Founded in New York with a team of 5 consultants" },
  { year: "2008", event: "Expanded to 3 offices across the US East Coast" },
  { year: "2012", event: "Launched digital transformation division" },
  { year: "2018", event: "Reached 300+ completed client engagements" },
  { year: "2022", event: "Global expansion with offices in Europe and Asia" },
  { year: "2024", event: "Crossed 785 skilled professionals worldwide" },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Page Hero */}
      <section className="bg-[#0d2535] pt-32 pb-20 relative overflow-hidden">
        <svg className="absolute top-0 right-0 w-72 h-72 text-orange-500 opacity-10" viewBox="0 0 288 288">
          <circle cx="288" cy="0" r="220" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="288" cy="0" r="155" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute -bottom-10 left-0 w-56 h-56 text-orange-500 opacity-5" viewBox="0 0 224 224">
          <circle cx="0" cy="224" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">Who We Are</p>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-5 max-w-2xl leading-tight">
            About Consoel Consultancy
          </h1>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            For over 28 years we have partnered with businesses to deliver strategic, financial, and technology solutions that drive lasting growth.
          </p>
          <div className="flex items-center gap-2 mt-6 text-sm">
            <Link href="/" className="text-white/50 hover:text-orange-400 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-orange-400">About Us</span>
          </div>
        </div>
      </section>

      {/* Intro — trusted company section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left image */}
            <div className="relative">
              {/* Squiggle top */}
              <svg className="absolute -top-6 right-8 w-14 h-14 text-orange-500 z-10" viewBox="0 0 60 60" fill="none">
                <path d="M10 40 Q20 10 30 30 Q40 50 50 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <div className="relative rounded-sm overflow-hidden bg-gray-100 aspect-[4/5] max-w-sm mx-auto lg:mx-0">
                <div className="w-full h-full bg-gradient-to-br from-[#1a4060] to-[#0d2535] flex items-center justify-center">
                  <div className="text-center">
                    <svg viewBox="0 0 80 80" className="w-20 h-20 mx-auto mb-2 opacity-30 text-white">
                      <circle cx="40" cy="28" r="18" fill="currentColor" />
                      <path d="M8 72 Q8 48 40 46 Q72 48 72 72Z" fill="currentColor" />
                    </svg>
                    <p className="text-white/30 text-xs">Team Photo</p>
                  </div>
                </div>
              </div>
              {/* Squiggle bottom */}
              <svg className="absolute -bottom-4 left-0 w-12 h-12 text-orange-500" viewBox="0 0 56 56" fill="none">
                <path d="M8 44 Q18 14 28 28 Q38 42 48 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              {/* Badge */}
              <div className="absolute bottom-8 -right-4 lg:-right-8">
                <div className="relative">
                  <svg viewBox="0 0 280 80" className="w-64 lg:w-72 h-auto text-orange-500 drop-shadow-lg">
                    <path d="M5 20 Q10 5 30 8 L260 5 Q275 6 275 20 L272 60 Q270 75 250 74 L20 72 Q5 71 5 58Z" fill="currentColor" />
                  </svg>
                  <p className="absolute inset-0 flex items-center justify-center text-white font-serif font-bold text-xl lg:text-2xl -rotate-2">
                    28 Years Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Right text */}
            <div>
              <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
                Welcome To Consoel Consultancy Company
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#0d2535] leading-tight mb-6">
                We are a trusted consulting company,{" "}
                <span className="text-orange-500">with 28+ years</span> of experience.
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Founded in 2004, Consoel has grown from a small advisory firm into a global consultancy trusted by hundreds of businesses. We combine deep industry expertise with modern technology to deliver solutions that are practical, measurable, and built to last.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-4 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 text-sm"
              >
                Work With Us
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="relative bg-[#0d2535] rounded-sm p-10 overflow-hidden">
              <svg className="absolute top-0 right-0 w-32 h-32 text-orange-500 opacity-20" viewBox="0 0 128 128">
                <circle cx="128" cy="0" r="100" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="128" cy="0" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-500 rounded-full opacity-90" />
              <h3 className="font-serif text-2xl font-bold text-orange-400 mb-5 relative z-10">Our Mission</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6 relative z-10">
                To empower organisations of every size with the strategic clarity, financial discipline, and technological capability they need to compete and grow in an increasingly complex world.
              </p>
              <p className="text-white font-bold text-sm leading-relaxed relative z-10">
                We exist to transform business challenges into sustainable competitive advantages for our clients.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-white rounded-sm p-10 border border-gray-100">
              <h3 className="font-serif text-2xl font-bold text-orange-500 mb-5">Our Vision</h3>
              <p className="text-[#0d2535] font-bold text-sm leading-relaxed mb-5">
                To be the most trusted advisory partner for ambitious businesses across every industry and geography.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                We envision a future where every business — regardless of size — has access to the kind of expert guidance that helps them navigate uncertainty, seize opportunity, and build something that endures for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-orange-500 py-14 relative overflow-hidden">
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-40 h-40 bg-[#0d2535] rounded-full opacity-40" />
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#0d2535] rounded-full opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
            {[
              { value: "8,567", label: "Completed Cases" },
              { value: "357+", label: "Happy Clients" },
              { value: "28+", label: "Our Offices" },
              { value: "785", label: "Skilled People" },
            ].map((s) => (
              <div key={s.label} className="text-center px-6 py-4">
                <p className="font-serif text-4xl lg:text-5xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                <div className="text-3xl text-orange-500 mb-5 font-bold">{val.icon}</div>
                <h3 className="font-serif text-xl font-bold text-[#0d2535] mb-3 group-hover:text-orange-500 transition-colors">
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
          <div className="relative">
            {/* Central line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 hidden lg:block" />
            <div className="space-y-8 lg:space-y-0">
              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  className={"relative lg:grid lg:grid-cols-2 lg:gap-10 " + (idx % 2 === 0 ? "" : "")}
                >
                  {idx % 2 === 0 ? (
                    <>
                      <div className="lg:text-right lg:pr-10 pb-8 lg:pb-12">
                        <div className="inline-block bg-orange-500 text-white font-bold text-sm px-4 py-1.5 mb-3">
                          {m.year}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
                      </div>
                      <div className="hidden lg:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block" />
                      <div className="lg:pl-10 pb-8 lg:pb-12">
                        <div className="inline-block bg-[#0d2535] text-white font-bold text-sm px-4 py-1.5 mb-3">
                          {m.year}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
                      </div>
                    </>
                  )}
                  {/* Dot on timeline */}
                  <div className="absolute left-1/2 top-3 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow hidden lg:block" />
                </div>
              ))}
            </div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center group">
                <div className="relative mb-5">
                  <div className="w-36 h-36 rounded-full bg-gray-100 border-4 border-gray-100 overflow-hidden shadow-md group-hover:border-orange-500 transition-colors duration-300 flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-gray-400">{member.initials}</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1">
                    {member.experience}
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0d2535] mb-1">{member.name}</h3>
                <p className="text-orange-500 text-sm font-semibold">{member.role}</p>
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
            <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-3">Ready to grow?</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white max-w-xl">
              Let us help your business reach its full potential.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 text-sm transition-all duration-200 text-center whitespace-nowrap">
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