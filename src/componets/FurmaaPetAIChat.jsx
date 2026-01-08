import React from "react";

export default function FurmaaPetAIChat() {
  return (
    <section className="w-full px-4 py-14 bg-gradient-to-r from-[#F3F8FF] to-[#C0DBFF] rounded-[30px]
 ">
      <div className="max-w-8xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-5 lg:pt-5">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0E0E0E]">
                Furmaa Pet AI Chat
              </h2>
              <span className="text-xs px-3 py-1 rounded-full bg-[#95E562] text-[#0E0E0E] font-medium">
                Premium
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0E0E0E] lg:pt-5 ">
              Your Pet’s Smart Assistant Right in Your Pocket
            </h3>

            <p className="text-sm text-[#0E0E0E] max-w-[520px] leading-relaxed lg:pt-5 ">
              Get instant, reliable support for your pet anytime, anywhere.
              <br />
              <span className="font-medium text-[#0E0E0E]">
                Furmaa Pet AI Chat
              </span>
              is designed exclusively for our mobile app, 
              <br/>giving pet parents
              fast, personalized guidance in just a few taps.
            </p>

            <h4 className="text-xl font-bold text-[#0E0E0E] pt-2">
              Start Chatting with Your Pet’s AI Today
            </h4>

            <p className="text-sm text-[#0E0E0E] max-w-[520px] leading-relaxed">
              Download the 
               <span className="font-medium text-[#0E0E0E] "> Furmaa mobile app   </span>
             to access Pet AI Chat and give your
              pet smarter care right from your phone.
            </p>

            {/* APP BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-3 lg:pt-5">
  {/* App Store */}
  <a href="#" className="inline-block">
    <img
      src="/app-store.png"
      alt="Download on the App Store"
      className="h-12 sm:h-14 object-contain cursor-pointer"
    />
  </a>

  {/* Google Play */}
  <a href="#" className="inline-block">
    <img
      src="/google-play.png"
      alt="Get it on Google Play"
      className="h-12 sm:h-14 object-contain cursor-pointer"
    />
  </a>
</div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
  <img
    src="/phone.png"
    alt="Pet AI Chat App"
    className="
      w-[220px] sm:w-[260px] md:w-[300px]
      h-auto
      lg:h-[600px]
      object-contain
      drop-shadow-xl
    "
  />
</div>


        </div>
      </div>
    </section>
  );
}
