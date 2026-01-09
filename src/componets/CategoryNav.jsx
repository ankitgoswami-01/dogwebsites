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
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full bg-white border-b relative z-40 ">

      {/* DESKTOP */}
      <div className="hidden md:flex w-full px-6 py-4 justify-between">
        {categories.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className="flex items-center gap-2 text-sm font-medium
                         text-[#1F2E46] hover:text-black"
            >
              <Icon className="w-4 h-4" />
              {item.name}
            </button>
          );
        })}
      </div>

      {/* MOBILE */}
      <div
        ref={mobileSliderRef}
        className="md:hidden flex w-full gap-6 px-4 py-3
                   overflow-x-auto scrollbar-hide pt-[64px] "
      >
        {categories.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className="flex flex-col items-center min-w-[72px]
                         text-xs font-medium text-[#1F2E46]"
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-center leading-tight">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>

    </nav>
  );
}
