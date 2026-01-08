import React from "react";
import { Play } from "lucide-react";

const feeds = [
  { id: 1, img: "/pet1.png" },
  { id: 2, img: "/pet2.png" },
  { id: 3, img: "/pet3.png" },
  { id: 4, img: "/pet4.png" },
];

export default function TrendingPetFeed() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-4 py-16">
      <div className="max-w-8xl mx-auto px-4">

        {/* HEADER */}
        <div className="max-w-2xl mb-10">
          <p className="text-xl font-bold text-[#0E0E0E] mb-8">
            Trending Pet Feed
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#0E0E0E] mb-5">
            Watch What’s Making Pets Famous Today 🐾
          </h2>

          <p className="text-sm text-[#0E0E0E] leading-relaxed">
            Explore the most loved pet videos and moments shared by the Furmaa
            community. From playful pups to curious cats, discover what’s
            trending right now—and get inspired to share your own pet’s story.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feeds.map((item) => (
            <div
              key={item.id}
              className="relative rounded-[24px] overflow-hidden group bg-gray-200"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt="pet feed"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* PLAY ICON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center cursor-pointer">
                  <Play size={20} className="text-[#0E0E0E]" />
                </div>
              </div>

              {/* BUTTON */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <button className="bg-[#1E2B42] text-white text-xs px-4 py-2 rounded-full cursor-pointer ">
                  See Feed →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
