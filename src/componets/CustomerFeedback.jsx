import React, { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Ankit Verma",
    role: "Cat Parent",
    text: "The AI chatbot is surprisingly accurate",
    des: "I wasn’t sure about using an AI assistant for my pet, but Furmaa’s chatbot gave clear guidance and helped me decide when to consult a vet."
  },
  {
    name: "Neha Joshi",
    role: "Pet Volunteer",
    text: "Adoption and rescue made simple",
    des: "The adoption and lost-pet listings are a blessing. We’ve been able to connect pets with families much faster through Furmaa."
  },
  {
    name: "Rahul Mehta",
    role: "First-time Pet Owner",
    text: "Clean design and smooth experience",
    des:"The app is intuitive and well designed. Even as a first-time pet parent, I never felt confused using it."
  },
  {
    name: "Sneha Kapoor",
    role: "Dog Parent",
    text: "Adoption and rescue made simple",
    des: "The adoption and lost-pet listings are a blessing. We’ve been able to connect pets with families much faster through Furmaa."
  },
];

export default function CustomerSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let interval;

    const start = () => {
      interval = setInterval(() => {
        slider.scrollLeft += 1;
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollLeft = 0;
        }
      }, 18);
    };

    start();
    slider.addEventListener("mouseenter", () => clearInterval(interval));
    slider.addEventListener("mouseleave", start);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 px-4 bg-[#F9FBFD]">
      <div className="max-w-8xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-12 max-w-2xl">
          <p className="text-2xl font-bold  text-[#0E0E0E] mb-5">
            Happy Customer Feedback
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0E0E0E] mb-5">
            Trusted by Pet Parents Who Truly Care
          </h2>
          <p className="text-sm text-[#0E0E0E">
           Thousands of pet parents rely on Furrmaa every day to keep their pets healthy, happy, and safe. <br/>
         Here’s what our community has to say.
          </p>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="
            flex gap-6 overflow-x-auto scrollbar-hide
            scroll-smooth
          "
        >
          {[...reviews, ...reviews].map((item, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                w-[320px] h-[300px]
                sm:w-[380px] sm:h-[320px]
                lg:w-[460px] lg:h-[340px]
                bg-[#FFFFFF]
                rounded-[10px]
                border border-[#D9DCE2]
                p-6
                flex flex-col justify-between cursor-pointer
              "
            >
              {/* STARS */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>

              {/* TEXT */}
              <p className="text-sm text-[#0E0E0E] font-bold  leading-relaxed mt-2">
                “{item.text}”
              </p>
               <p className="text-sm text-[#0E0E0E] leading-relaxed mt-2">
                “{item.des}”
              </p>

              {/* USER */}
              <div className="pt-4">
                <p className="text-sm font-semibold text-[#0E0E0E]">
                  {item.name} - {item.role}
                </p>
              
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
