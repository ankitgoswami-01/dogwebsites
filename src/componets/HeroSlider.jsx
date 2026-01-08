import { useEffect, useState } from "react";
import PetCategoryToggle from "./PetCategoryToggle";

const slides = [
  {
    brand: "Furrmaa Pet Care",
    title: "Everything Your Pet Needs.",
    subtitle: "One Caring Platform.",
    desc: "Smart pet care for dogs and cats shop essentials, train better, stay healthy, connect socially, and get help when it matters most.",
    btn: "SHOP NOW",
    bgImage: "/dog.png",
  },
  {
    brand: "Furrmaa Pet Care",
    title: "Everything Your Pet Needs.",
    subtitle: "One Caring Platform.",
    desc: "Smart pet care for dogs and cats shop essentials, train better, stay healthy, connect socially, and get help when it matters most.",
    btn: "SHOP NOW",
    bgImage: "/cat.png",
  },
  {
    brand: "Furrmaa Pet Care",
    title: "Everything Your Pet Needs.",
    subtitle: "One Caring Platform.",
    desc: "Smart pet care for dogs and cats shop essentials, train better, stay healthy, connect socially, and get help when it matters most.",
    btn: "SHOP NOW",
    bgImage: "/dog.png",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  // NEXT
  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  // PREV
  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full">
      
      <div
        className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-cover bg-right"
        style={{ backgroundImage: `url(${slides[active].bgImage})` }}
      >
        {/* CONTENT */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center">
          <div className="max-w-xl space-y-4 sm:space-y-5 text-center sm:text-left">
            
            {/* BRAND */}
            <p className="text-[28px] sm:text-[40px] font-bold text-[#261000]">
              {slides[active].brand}
            </p>

            {/* TITLE */}
            <div className="w-full md:w-[664px]">
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-[#261000] whitespace-normal md:whitespace-nowrap">
                {slides[active].title} <br/>
                {slides[active].subtitle}
              </h1>
            </div>

            {/* DESC */}
            <p className="text-sm sm:text-base text-[#261000] leading-relaxed">
              {slides[active].desc}
            </p>

            {/* BUTTON */}
            <button className="inline-flex items-center gap-2 bg-white text-black px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold shadow hover:scale-105 transition">
              {slides[active].btn} →
            </button>
          </div>
        </div>

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20
                     bg-white/80 hover:bg-white text-black
                     w-10 h-10 rounded-full flex items-center justify-center
                     shadow transition cursor-pointer"
        >
          ‹
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20
                     bg-white/80 hover:bg-white text-black
                     w-10 h-10 rounded-full flex items-center justify-center
                     shadow transitio  cursor-pointer "
        >
          ›
        </button>

        {/* DOTS */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2.5 rounded-full transition-all ${
                active === i ? "w-6 bg-white" : "w-2.5 bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
      <PetCategoryToggle/>
    </section>
  );
}
