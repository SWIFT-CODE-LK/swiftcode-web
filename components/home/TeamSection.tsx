const team = [
  { name: "Robert Anderson", role: "Senior Consultant", initials: "RA" },
  { name: "Michael Davies", role: "Financial Advisor", initials: "MD" },
  { name: "Sarah Williams", role: "Strategy Director", initials: "SW" },
];

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Team Members
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#0d2535]">
            We Have Skilled People
          </h2>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center group">
              {/* Circular photo */}
              <div className="relative mb-5">
                <div className="w-44 h-44 rounded-full bg-gray-100 border-4 border-gray-100 overflow-hidden shadow-lg group-hover:border-orange-500 transition-colors duration-300">
                  {/* Replace with Next.js Image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="font-serif text-3xl font-bold text-gray-500 opacity-60">{member.initials}</span>
                  </div>
                </div>
                {/* Social hover overlay */}
                <div className="absolute inset-0 rounded-full bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0d2535] mb-1">{member.name}</h3>
              <p className="text-orange-500 text-sm font-semibold tracking-wide">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}