import React from "react";
import { Search, ShoppingCart, User, Download, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b fixed top-0 z-50">
      <div className="max-w-8xl mx-auto px-4">
        {/* TOP ROW */}
        <div className="flex flex-wrap items-center justify-between gap-3 min-h-[64px]">

          {/* LOGO */}
          <div className="flex items-center gap-2 shrink-0 cursor-pointer group">
            <div className="w-10 h-10 rounded-full overflow-hidden
              transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h1 className="font-bold text-lg leading-none text-[#1F2E46]
                transition-colors group-hover:text-black">
                FURRMAA
              </h1>
              <p className="text-[10px] text-[#1F2E46]">
                WHERE EVERY TAIL FEELS AT HOME
              </p>
            </div>
          </div>

          {/* SEARCH (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative w-full max-w-[400px] group">
              <Search className="absolute left-4 top-2.5 w-4 h-4 text-gray-400
                group-focus-within:text-[#1F2E46]" />
              <input
                type="text"
                placeholder="Search food, toys, meds & more..."
                className="w-full border border-[#D9DCE2] rounded-[16px]
                pl-10 pr-4 py-2 text-sm outline-none
                transition-all duration-300
                focus:border-[#1F2E46]
                focus:ring-2 focus:ring-[#1F2E46]/20"
              />
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4 shrink-0">

            {/* AI CHAT */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2
              border border-[#D9DCE2] rounded-[16px] text-sm font-medium
              cursor-pointer transition-all duration-300
              hover:shadow-md hover:-translate-y-[1px]
              hover:border-purple-400">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Furrmaa Pet AI Chat</span>
              <span className="bg-green-200 text-green-700 text-xs px-2 py-0.5 rounded-full">
                Premium
              </span>
            </div>

            {/* LOGIN */}
            <button className="hidden sm:flex items-center gap-1 px-4 py-2
              text-sm font-medium border border-[#D9DCE2] rounded-[16px]
              transition-all duration-300 cursor-pointer
              hover:bg-gray-50 hover:shadow-sm hover:-translate-y-[1px]">
              <User className="w-4 h-4" />
              Login/Register
            </button>

            {/* CART */}
            <button className="flex items-center gap-1 px-4 py-2
              text-sm font-medium border border-[#D9DCE2] rounded-[16px]
              transition-all duration-300 cursor-pointer
              hover:bg-gray-50 hover:shadow-sm hover:-translate-y-[1px]">
              <ShoppingCart className="w-4 h-4" />
              Cart (0)
            </button>

            {/* DOWNLOAD */}
            <button className="hidden md:flex items-center gap-1 px-4 py-2
              text-sm bg-[#1F2E46] text-white rounded-[16px]
              transition-all duration-300 cursor-pointer
              hover:bg-black hover:shadow-lg hover:-translate-y-[1px]">
              <Download className="w-4 h-4" />
              Download App
            </button>

          </div>
        </div>

        {/* MOBILE SEARCH */}
        <div className="md:hidden pb-3">
          <div className="relative group">
            <Search className="absolute left-4 top-2.5 w-4 h-4 text-gray-400
              group-focus-within:text-[#1F2E46]" />
            <input
              type="text"
              placeholder="Search food, toys, meds & more..."
              className="w-full border border-[#D9DCE2] rounded-[16px]
              pl-10 pr-4 py-2 text-sm outline-none
              transition-all duration-300
              focus:border-[#1F2E46]
              focus:ring-2 focus:ring-[#1F2E46]/20"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
