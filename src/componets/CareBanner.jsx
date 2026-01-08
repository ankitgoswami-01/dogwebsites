export default function CareBanner() {
  return (
    <section className="w-full py-8 px-4">
      <div className="max-w-8xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

        {/* LEFT CARD */}
        <div
          className="relative rounded-2xl overflow-hidden
          h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px]
          bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/care-bg.png')",
          }}
        >
          {/* optional overlay if needed */}
          {/* <div className="absolute inset-0 bg-black/10" /> */}
        </div>

        {/* RIGHT CARD */}
        <div
          className="relative rounded-2xl overflow-hidden
          h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px]
          bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/adopt-bg.png')",
          }}
        >
        </div>

      </div>
    </section>
  );
}
