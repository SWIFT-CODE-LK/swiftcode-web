export default function MissionVisionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Our Mission - dark card */}
          <div className="relative bg-[#0d2535] rounded-sm p-10 overflow-hidden">
            {/* Decorative arc */}
            <svg className="absolute top-0 right-0 w-32 h-32 text-(--theme-color) opacity-20" viewBox="0 0 128 128">
              <circle cx="128" cy="0" r="100" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="128" cy="0" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
            {/* Orange blob bottom-left */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-(--theme-color) rounded-full opacity-90" />

            <h3 className="font-serif text-2xl font-bold text-(--theme-color) mb-5 relative z-10">Our Mission</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6 relative z-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting has been the
              industry's standard dummy text ever since unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting.
            </p>
            <p className="text-white font-bold text-sm leading-relaxed relative z-10">
              Lorem Ipsum is simply dummy text of the printing has been the industry standard
              dummy text ever since unknown printer took galley.
            </p>
          </div>

          {/* Our Vision - light card */}
          <div className="bg-white rounded-sm p-10 border border-gray-100">
            <h3 className="font-serif text-2xl font-bold text-(--theme-color) mb-5">Our Vision</h3>
            <p className="text-[#0d2535] font-bold text-sm leading-relaxed mb-5">
              Lorem Ipsum is simply dummy text of the printing has been the industry standard
              dummy text ever since unknown printer took galley.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting has been the
              industry's standard dummy text ever since the 1500 when unknown printer took a
              galley of type and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic typesetting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}