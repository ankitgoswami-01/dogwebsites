import React, { useState } from "react";

const faqs = [
  {
    question: "What is Furmaa?",
    answer:
      "Furmaa is a mobile app that connects pet owners with a variety of pet-related services - from vet clinics to adoption, events, chat support, pet cremation requests, and more.",
  },
  {
    question: "Do I need an account to use Furmaa?",
    answer:
      "Yes, to manage pet profiles, request services, and use personalized features, you need to create an account.",
  },
  {
    question: "What kind of services can I find on Furmaa?",
    answer:
      "You can access veterinary clinics, adoption and lost & found services, pet events, cremation requests, pet-profile management, and a premium Pet AI Chatbot.",
  },
  {
    question: "How does location-based search work?",
    answer:
      "With your permission, Furmaa uses your current location to show nearby veterinary clinics and services – helping you find help quickly when needed.",
  },
  {
    question: "Is my personal and pet information safe?",
    answer:
      "Yes. We follow industry-standard security practices, do not sell your data, and only share it with trusted partners when necessary to deliver services you request.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full  py-20 px-4">
      <div className="max-w-8xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        
        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E0E0E] leading-tight">
            Frequently Asked <br /> Questions
          </h2>
        </div>

        {/* RIGHT */}
        <div className="space-y-6 cursor-pointer">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-semibold text-[#0E0E0E] text-sm md:text-base">
                  {faq.question}
                </span>

                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-3 text-[#0E0E0E] text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}

          {/* Button */}
          <button className="mt-8 bg-[#1E293B] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0F172A] transition cursor-pointer">
            See All FAQs →
          </button>
        </div>
      </div>
    </section>
  );
}
