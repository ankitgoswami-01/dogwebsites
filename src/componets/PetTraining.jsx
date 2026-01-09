import React from "react";

export default function PetTraining() {
  return (
    <section className="w-full px-4 py-10">
      <div className="max-w-8xl mx-auto px-4">
        {/* TITLE */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0E0E0E] mb-5">
            Pet Training
          </h2>
          <p className="text-sm text-[#0E0E0E] mt-1">
            Start where your pet feels comfortable
          </p>
        </div>

        {/* MAIN WRAPPER */}
        <div className="flex flex-col xl:flex-row gap-6">
          {/* LEFT BOX */}
          <div
            className="
    relative overflow-hidden rounded-[28px]
    w-full xl:w-[1000px]
    min-h-[380px] xl:h-[380px]
    p-6 sm:p-8
    bg-no-repeat bg-cover bg-center
  "
            style={{ backgroundImage: "url('/bg-yellow.png')" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-between">
                <div className="space-y-5 md:space-y-7">
                  {/* TITLE + FREE */}
                  <div className="flex items-center gap-3 md:gap-20">
                    <h3 className="text-2xl font-bold">Basic Training</h3>

                    <span className="bg-white text-xs px-5 py-2 rounded-full font-medium md:ml-3  cursor-pointer ">
                      Free
                    </span>
                  </div>

                  <p className="text-sm text-[#0E0E0E] max-w-[260px]">
                    Foundation skills, simple <br /> commands, bonding.
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-3">
                    <span className=" text-xs px-3 py-1 rounded-full border-2 border-[#0E0E0E]  cursor-pointer ">
                      7 Lessons
                    </span>
                    <span className=" text-xs px-3 py-1 rounded-full border-2 border-[#0E0E0E]  cursor-pointer   ">
                      7 Days
                    </span>
                  </div>

                  <span className="inline-block  text-xs px-3 py-1 rounded-full border-2 border-[#0E0E0E]  cursor-pointer ">
                    7 Great Ways to Training
                  </span>
                </div>

                <div className="flex items-end justify-between">
                  <button className="text-xl font-bold text-[#0E0E0E]  cursor-pointer ">
                    Let’s Start →
                  </button>

                  {/* PUPPY IMAGE */}
                  <img
                    src="/puppy.png"
                    alt="puppy"
                    className="h-[110px] object-contain"
                  />
                </div>
              </div>

              {/* RIGHT VIDEO CARD */}
              <div className="flex flex-col justify-between">
                <img
                  src="/labdog.png"
                  alt="video"
                  className="rounded-2xl w-full h-[250px] object-cover"
                />

                <div className="flex items-center justify-between mt-3">
                  <div>
                    <p className="text-xs  font-bold  text-[#0E0E0E] ">
                      (Video Title)
                    </p>
                    <p className="text-xs text-[#0E0E0E] pt-2">
                      1 Lesson | 1 Day | 4:56 Min
                    </p>
                  </div>

                  <button className="bg-[#1E2B42] text-white text-xs px-8 py-3 rounded-full flex items-center gap-2  cursor-pointer ">
                    ▶ Play
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT BOX */}
       <div
  className="
    relative overflow-hidden rounded-[28px]
    w-full xl:w-[490px]
    min-h-[380px] xl:h-[380px]
    p-6 sm:p-8
    bg-no-repeat bg-cover bg-center
  "
  style={{ backgroundImage: "url('/bg-blue.png')" }}
>
  {/* CONTENT */}
  <div className="flex flex-col justify-between h-full relative z-10">
    {/* TEXT */}
    <div className="space-y-4 max-w-[260px]">
      <h3 className="text-2xl font-bold text-[#0E0E0E] leading-tight">
        Hire a Personal <br /> Pet Trainer
      </h3>

      <p className="text-sm text-[#4B5563] leading-relaxed">
        Personalized, one-on-one <br />
        training in your <br />
        home. Positive <br />
        methods. <br />
        Real results.
      </p>
    </div>

    {/* BUTTON */}
    <button
  className="
    bg-[#1E2B42] text-white
    text-xs sm:text-sm
    px-4 sm:px-5
    py-1.5 sm:py-2
    rounded-full
    w-fit
    cursor-pointer
  "
>
  Book Session Today →
</button>

  </div>

  {/* IMAGE */}
  <img
    src="/trainer.png"
    alt="trainer"
    className="
      absolute bottom-0 right-4
      w-[180px] sm:w-[220px]
      xl:w-[254px] xl:h-[297px]
      object-contain
      pointer-events-none
    "
  />
</div>

        </div>
      </div>
    </section>
  );
}
