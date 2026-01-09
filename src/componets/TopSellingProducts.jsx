import { Heart } from "lucide-react";

const products = [
  {
    name: "Whiskas Adult (1+ Years) Dry Cat",
    img: "/catproduct1.png",
    price: "₹2,229",
    oldPrice: "₹2,449",
    rating: 5,
    reviews: 265,
  },
  {
    name: "Wahl 820000 4-in-1 Shampoo",
    img: "/catproduct2.png",
    price: "₹2,229",
    oldPrice: "₹2,449",
    rating: 5,
    reviews: 265,
  },
     {
    name: "Canine Creek Club Ultra Premium Dry",
    img: "/Canine Creek.png",
    price: "₹2,229",
    oldPrice: "₹2,449",
    rating: 5,
    reviews: 265,
  },
  {
    name: "Cat Litter Lavender | Advan...",
    img: "/catproduct3.png",
    price: "₹2,229",
    oldPrice: "₹2,449",
    rating: 5,
    reviews: 265,
  },
  
  {
    name: "Folding Jaw Clamp Poop Sco...",
    img: "/Folding.png",
    price: "₹2,229",
    oldPrice: "₹2,449",
    rating: 5,
    reviews: 265,
  },
  {
    name: "Self Cleaning Dog Comb & Cat Co...",
    img: "/Self.png",
    price: "₹2,229",
    oldPrice: "₹2,449",
    rating: 5,
    reviews: 265,
  },
];

export default function TopSellingProducts() {
  return (
    <section className="w-full py-10 px-4  cursor-pointer">
      <div className="max-w-8xl mx-auto">
                                  
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0E0E0E]">
           Top Selling Products
          </h2>

          <button className="bg-[#1E2B42] text-white px-6 py-2 rounded-full text-sm font-medium  cursor-pointer ">
            See All →
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {[...products, ...products].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 hover:shadow-sm transition"
            >
              {/* IMAGE */}
              <div className="relative p-3">
                <div className="w-full h-[190px] flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="max-h-full object-contain"
                  />
                </div>

                {/* HEART */}
                <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-sm">
                  <Heart size={16} className="text-gray-500" />
                </button>
              </div>

              {/* CONTENT */}
              <div className="px-3 pb-4">
                <p className="text-sm   text-[#0E0E0E] se leading-snug line-clamp-2 min-h-[36px]">
                  {item.name}
                </p>

                {/* RATING */}
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-[20px]">★</span>
                  ))}
                  <span className="text-[15px] text-gray-500 ml-1">
                    {item.reviews}
                  </span>
                </div>

                {/* PRICE */}
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-semibold text-gray-900">
                    {item.price}
                  </span>
                  <span className="text-xs line-through text-gray-400">
                    {item.oldPrice}
                  </span>

                   <button className="w-full mt-3 border border-[#1F2E46] rounded-[10px] py-1.5 text-sm font-medium text-gray-700 hover:bg-[#FFFFFF] cursor-pointer">
                  ADD
                </button>
                </div>

                {/* ADD BUTTON */}
               
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

