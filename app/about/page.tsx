import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import MissionVisionSection from "../../components/home/MissionVisionSection";

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
            About Consoel Consultancy
          </h1>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            For over 28 years we have partnered with businesses to deliver strategic, financial, and technology solutions that drive lasting growth.
          </p>
          <div className="flex items-center gap-2 mt-6 text-sm">
            <Link href="/" className="text-white/50 hover:text-orange-400 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-orange-500">About Us</span>
          </div>
        </div>
      </section>

      <MissionVisionSection/>


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
                        <div className="inline-block bg-(--theme-color) text-white font-bold text-sm px-4 py-1.5 mb-3">
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
                  <div className="absolute -bottom-2 -right-2 bg-(--theme-color) text-white text-xs font-bold px-2 py-1">
                    {member.experience}
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
            <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-3">Ready to grow?</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white max-w-xl">
              Let us help your business reach its full potential.
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