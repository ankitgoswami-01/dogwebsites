import React, { useEffect, useRef } from "react";
import {
  Store,
  Utensils,
  Pill,
  ToyBrick,
  Package,
  Scissors,
  Leaf,
  GraduationCap,
  Stethoscope,
  Heart,
  CalendarDays,
} from "lucide-react";

const categories = [
  { name: "Shop", icon: Store },
  { name: "Food", icon: Utensils },
  { name: "Medicine", icon: Pill },
  { name: "Toys", icon: ToyBrick },
  { name: "Accessories", icon: Package },
  { name: "Grooming", icon: Scissors },
  { name: "Supplements", icon: Leaf },
  { name: "Pet Training", icon: GraduationCap },
  { name: "Vet Services", icon: Stethoscope },
  { name: "Hope", icon: Heart },
  { name: "Pet Events", icon: CalendarDays },
];

export default function CategoryNav() {
  const mobileSliderRef = useRef(null);

  useEffect(() => {
    const slider = mobileSliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      scrollAmount += 80;
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }
      slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full bg-white border-b mt-[70px]">
      <div className="w-full px-2 md:px-4">

        {/* DESKTOP */}
        <div className="hidden md:flex justify-center gap-15 py-3">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className="flex items-center gap-2 text-sm font-medium
                           text-[#1F2E46] hover:text-black transition
                           cursor-pointer"
              >
                <Icon className="w-4 h-4 pointer-events-none" />
                <span className="pointer-events-none">{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* MOBILE */}
        <div
          ref={mobileSliderRef}
          className="md:hidden flex gap-5 py-3 overflow-x-auto
                     snap-x snap-mandatory scrollbar-hide mt-[110px]"
        >
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className="snap-start flex flex-col items-center justify-center
                           min-w-[72px] px-2 py-2 rounded-lg
                           text-xs font-medium text-[#1F2E46]
                           active:bg-gray-100 cursor-pointer"
              >
                <Icon className="w-6 h-6 mb-1 pointer-events-none" />
                <span className="text-center leading-tight pointer-events-none">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </nav>
  );
}
