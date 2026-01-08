import React from "react";

const features = [
  {
    title: "Designed Specifically For Dogs & Cats",
    img: "public/pet5.png",
  },
  {
    title: "Trusted Service Partners",
    img: "public/pet6.png",
  },
  {
    title: "AI-Driven Smart Care",
    img: "public/pet7.png",
  },
  {
    title: "Secure, Scalable Platform",
    img: "public/pet8.png",
  },
  {
    title: "Community First Approach",
    img: "public/pet9.png",
  },
];

export default function PetChooseFurmaa() {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 px-4 cursor-pointer">
      <div className="max-w-8xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
          Why Pet Parents Choose Furmaa
        </h2>

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm md:text-base font-medium text-[#0E0E0E]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-center text-[#0E0E0E] text-sm md:text-base mt-12 font-bold  max-w-4xl mx-auto">
        Furrmaa Is Built To Simplify Pet Parenting Without Compromising Care, Safety, Or Love.
        </p>
      </div>
    </section>
  );
}
