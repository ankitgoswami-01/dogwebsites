import { useRef } from "react";

const essentials = [
  { name: "Food", img: "/food.png" },
  { name: "Treats", img: "/treats.png" },
  { name: "Diet", img: "/diet.png" },
  { name: "Supplements", img: "/supplements.png" },
  { name: "Toys", img: "/toys.png" },
  { name: "Grooming", img: "/grooming.png" },
  { name: "Walk", img: "/walk.png" },
  { name: "Feeders", img: "/feeders.png" },
 { name: "Walk", img: "/walk.png" },
  { name: "Feeders", img: "/feeders.png" },
  { name: "Walk", img: "/walk.png" },
  { name: "Feeders", img: "/feeders.png" },
  { name: "Walk", img: "/walk.png" },
  { name: "Feeders", img: "/feeders.png" },
];

export default function EverydayEssentialsSlider() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    sliderRef.current.scrollBy({
      left: dir === "right" ? 180 : -180, // 170px box + gap
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-10 relative cursor-pointer">
      {/* HEADING */}
      <h2 className="text-center text-[28px] sm:text-[34px] lg:text-[40px] font-bold mb-8 text-[#0E0E0E]">
        Everyday Essentials
      </h2>

      {/* LEFT ARROW */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10
        w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10
        w-10 h-10 rounded-full bg-white shadow flex items-center justify-center  cursor-pointer"
      >
        ›
      </button>

      {/* SLIDER */}
      <div
  ref={sliderRef}
  className="
    flex gap-4
    px-4 sm:px-8
    overflow-x-auto scroll-smooth
    scrollbar-hide
  "
>
  {essentials.map((item, index) => (
    <div
      key={index}
      className="min-w-[170px] flex flex-col items-center"
    >
      {/* IMAGE BOX */}
      <div
        className="
          w-[170px] h-[170px]
          bg-[#eef5ff]
          rounded-2xl
          flex items-center justify-center
          hover:scale-105 transition
        "
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-[70%] h-[70%] object-contain"
        />
      </div>

      {/* TEXT BELOW BOX */}
      <p className="mt-3 text-sm font-semibold text-[#0E0E0E] lg:text-[18px] text-center">
        {item.name}
      </p>
    </div>
  ))}
</div>

    </section>
  );
}
