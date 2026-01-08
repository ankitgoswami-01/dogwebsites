import React from "react";

export default function AboutFurmaa() {
  return (
    <section className="w-full px-4 py-14 ">
      <div className="max-w-8xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
          {/* LEFT CONTENT */}
          <div className="space-y-5">
            <span className="text-2xl text-[#0E0E0E]">
             About Furrmaa
            </span>

            <h2 className="text-3xl sm:text-3xl font-bold text-[#0E0E0E] leading-tight pt-4">
              FURRMAA WAS CREATED <br />
              WITH ONE BELIEF
            </h2>

            <p className="text-sm text-[#0E0E0E]] max-w-[420px] leading-relaxed">
              Pets are family and they deserve better care, better tools,
              and better experiences.
            </p>

            <p className="text-sm text-[#0E0E0E]] max-w-[460px] leading-relaxed">
              We combine technology, compassion, and community to redefine
              how pet care works in the digital age.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src="/goldernrativer.png"
              alt="About Furmaa"
              className="
                w-full h-[260px] sm:h-[320px] lg:h-[360px]
                object-cover rounded-2xl
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}
