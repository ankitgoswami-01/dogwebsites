import { useState } from "react";

export default function PetCategoryToggle() {
  const [active, setActive] = useState("dog");

  return (
    <div className="w-full flex justify-center py-6">
      <div className="flex items-center gap-1 bg-white border rounded-full p-1 shadow-sm">
        
        {/* DOG */}
        <button
          onClick={() => setActive("dog")}
          className={`flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition cursor-pointer
            ${
              active === "dog"
                ? "bg-[#1f2e46] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
        >
          🐶 Dog Essentials
        </button>

        {/* CAT */}
        <button
          onClick={() => setActive("cat")}
          className={`flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition cursor-pointer
            ${
              active === "cat"
                ? "bg-[#1f2e46] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
        >
          🐱 Cat Essentials
        </button>

      </div>
    </div>
  );
}
