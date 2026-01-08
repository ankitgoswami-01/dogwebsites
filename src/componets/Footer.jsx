import React from "react";
import {
  Phone,
  ArrowUp,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Linkedin
} from "lucide-react";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#F3F8FF] to-[#C0DBFF] text-[#0E0E0E]">

      {/* ================= TOP DARK BAR ================= */}
      <div className="bg-[#1F3148] text-white px-6 py-3 flex flex-wrap items-center justify-between gap-4 text-sm">

        <span>Our Experts are Available 24/7</span>

        <span className="flex items-center gap-2">
          <Phone size={14} /> +91-1234567890
        </span>

        <div className="flex items-center gap-3">
          <span className="font-semibold">Furrmaa Pet AI Chat</span>
          <span className="bg-green-400 text-black text-xs px-3 py-1 rounded-full">
            Premium
          </span>
        </div>

       <button
  onClick={scrollToTop}
  className="bg-white text-black px-5 py-2 rounded-full text-xs font-semibold flex items-center gap-1 hover:bg-gray-100 transition cursor-pointer"
>
  Back to Top <ArrowUp size={14} />
</button>

      </div>

      {/* ================= MAIN LINKS AREA ================= */}
      <div className=" max-w-8xl mx-auto px-4  py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-10">

        {/* LOGO + ABOUT */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10  rounded-full cursor-pointer">
              <img src="public/logo.png" alt="" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#1F2E46] mb-1">FURRMAA</h3>
              <p className="text-xs text-[#1F2E46] ">
                WHERE EVERY TAIL FEELS AT HOME
              </p>
            </div>
          </div>

          <h4 className="font-bold mb-8">
            Trusted Care for Every Stage of Your <br/> Pet’s Life
          </h4>

          <p className="text-sm text-[#0E0E0E] leading-relaxed">
            Furrmaa is not just an app—it’s a complete pet-care ecosystem
            designed for modern pet parents. From training to healthcare,
            Furrmaa brings everything together.
          </p>
        </div>

        <FooterCol title="Quick Links" items={[
          "All For You","Food","Medicine","Toys","Accessories","Grooming","Supplements"
        ]} />

        <FooterCol title="Train" items={[
          "Basic Training (7 Lessons)",
          "Intermediate Training (7 Lessons)",
          "Advanced Training (7 Lessons)"
        ]} />

        <FooterCol title="Vet Services" items={[
          "Veterinarians","Pet Shops","Hospitals","Pet Hotels / Hostels",
          "NGOs","Shelters","Rescue Centers","Pet Cremation"
        ]} />

        <FooterCol title="Hope" items={[
          "Lost & Found","Adoption","Add Post","Hope Chats"
        ]} />

        <FooterCol title="More" items={[
          "Furrmaa Pet AI Chat","Pet Events","Pet Cremation",
          "About Us","FAQs","Contact Us","Terms of Services","Privacy Policy"
        ]} />

        <FooterCol title="Account" items={[
          "Login / Register","Cart","My Orders","Track Orders"
        ]} />
      </div>

      {/* ================= CONTACT STRIP ================= */}
      <div className="border-t border-gray-300 px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">

        <div>
          <p className="font-bold mb-3">Address</p>
          <p className="text-[#0E0E0E]">
            100, ABCD Street, Jaipur, Rajasthan - INDIA
          </p>
        </div>

        <div>
          <p className="font-bold mb-3">Call</p>
          <p className="text-[#0E0E0E]">+91 1234567890</p>
        </div>

        <div>
          <p className="font-bold mb-3">Email</p>
          <p className="text-[#0E0E0E]">support@furrmaa.in</p>
        </div>

        <div>
          <p className="font-semibold mb-3">Legal</p>
          <p className="text-[#0E0E0E]">
            Terms of Services | Privacy Policy
          </p>
        </div>
      </div>

      {/* ================= SOCIAL + CREDIT ================= */}
       <div className="border-t border-gray-300 px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
      
      {/* SOCIAL LINKS */}
      <div className="flex items-center gap-4 font-semibold">
  <span className="text-[#0E0E0E]">Follow us :</span>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noreferrer"
    className="transition hover:scale-110"
  >
    <img
      src="/instagram.png"
      alt="Instagram"
      className="w-[18px] h-[18px]"
    />
  </a>

  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noreferrer"
    className="transition hover:scale-110"
  >
    <img
      src="/facebook.png"
      alt="Facebook"
      className="w-[18px] h-[18px]"
    />
  </a>

  <a
    href="https://www.youtube.com/"
    target="_blank"
    rel="noreferrer"
    className="transition hover:scale-110"
  >
    <img
      src="/youtube.png"
      alt="YouTube"
      className="w-[18px] h-[18px]"
    />
  </a>

  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noreferrer"
    className="transition hover:scale-110"
  >
    <img
      src="/linkedin.png"
      alt="LinkedIn"
      className="w-[18px] h-[18px]"
    />
  </a>

     </div>


      {/* CREDIT */}
      <span className="text-gray-500 text-center">
        Crafted by <b className="text-gray-700">Kontent Kraft Digital</b>
      </span>
    </div>

      {/* ================= BOTTOM CTA ================= */}
      <div className="px-6 py-10 flex flex-col lg:flex-row justify-between items-center gap-6 bg-[#D0E2FF]">
        <div>
          <p className="text-xs text-[#0E0E0E] mb-5">
            Made With Gentle Care in Jaipur, India
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold">
            Because Your Pet Deserves the Very Best 🐾
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold">Download Our App</span>
          <img src="/app-store.png" className="h-11 cursor-pointer" />
          <img src="/google-play.png" className="h-11 cursor-pointer" />
        </div>
      </div>

    </footer>
  );
}

/* ================= REUSABLE COLUMN ================= */
function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        {items.map((item, i) => (
          <li key={i} className="hover:text-black cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
