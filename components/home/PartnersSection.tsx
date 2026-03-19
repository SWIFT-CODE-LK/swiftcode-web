import Image from "next/image";

const partners = [
  { name: "Avira", image: "/Customers/Avira.png" },
  { name: "Design.lk", image: "/Customers/designlk.svg" },
  { name: "Phoenix", image: "/Customers/Phoenix.jpeg" },
  // { name: "lezaro", image: "/Customers/lezaro.png" },
];

export default function PartnersSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Our Customers
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#0d2535]">
            Trusted by Leading Brands
          </h2>
        </div>

        {/* Logos — centered row for 3 items */}
        <div className="flex flex-wrap justify-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="border border-gray-100 flex items-center justify-center p-10 h-36 w-72 hover:border-orange-200 transition-colors duration-200"
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}