import React from "react";

export default function DownloadAppSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#F3F8FF] to-[#C0DBFF] py-14 px-5 rounded-[20px]">
      <div className="max-w-8xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-2xl font-bold text-[#0E0E0E] mb-8">
            Download the Furrmaa App
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0E0E0E] leading-tight mb-6">
            Care for Your <br />
            Pet Anytime, Anywhere
          </h2>

          <p className="text-[#0E0E0E] max-w-md mb-10">
            Everything Furrmaa offers is available right in your pocket.
            Manage your pet’s needs, track health, shop essentials,
            book services, and stay connected with the pet community
            wherever you are.
          </p>

          {/* STORE BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <img
              src="public/app-store.png"
              alt="App Store"
              className="h-12 cursor-pointer"
            />
            <img
              src="public/google-play.png"
              alt="Google Play"
              className="h-12 cursor-pointer"
            />
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex justify-center lg:justify-end gap-6">
          <img
            src="public/phone1.png"
            alt="App Screen 1"
            className="w-[160px] sm:w-[200px] lg:w-[230px] drop-shadow-xl"
          />
          <img
            src="public/phone2.png"
            alt="App Screen 2"
            className="w-[160px] sm:w-[200px] lg:w-[230px] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
