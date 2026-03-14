const partners = [
  { name: "LOGIPEX", color: "#e8632a" },
  { name: "viva consulting", color: "#f0a500" },
  { name: "consultancy direct", color: "#4a90d9" },
  { name: "hype consultancy", color: "#e8632a" },
  { name: "STEADY COMMERCE", color: "#5cb85c" },
  { name: "CONSULTINNG", color: "#4a90d9" },
  { name: "consultant speak", color: "#f0a500" },
  { name: "Management Grid", color: "#9b59b6" },
];

export default function PartnersSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Honorable Customer
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#0d2535]">
            We Are Work With Top Brand
          </h2>
        </div>

        {/* Grid of logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="border border-gray-100 flex items-center justify-center p-8 h-24 hover:border-orange-200 transition-colors duration-200 group"
            >
              <span
                className="font-bold text-sm lg:text-base text-gray-400 group-hover:text-gray-600 transition-colors text-center leading-tight"
                style={{ fontFamily: "serif" }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}