
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisons = [
  {
    image: "/lovable-uploads/06150e49-f5a1-4e08-8747-6dfe2d2abd9f.png", // Updated image
    discount: 51,
    hotel: "Casa Caribe Cancun",
    distance: "3.22 miles from City Center",
    rating: 5,
    retailPrice: 144.75,
    memberPrice: 69.50,
    bookingUrl: "https://booking.digitravels.io/url/5292643b-0957-4878-9842-98fc9d635488",
  },
  {
    image: "/lovable-uploads/38be9397-da0f-40df-b44a-a97586616e25.png",
    discount: 38,
    hotel: "SLS Cancun",
    distance: "3.04 miles from City Center",
    rating: 5,
    retailPrice: 506.55,
    memberPrice: 313.89,
    bookingUrl: "https://booking.digitravels.io/url/fake-sls-cancun",
  },
  {
    image: "/lovable-uploads/0e13256e-f9a1-4028-bb4a-4d4556da468e.png",
    discount: 78,
    hotel: "Hive Cancun",
    distance: "4.69 miles from City Center",
    rating: 3,
    retailPrice: 440.95,
    memberPrice: 96.85,
    bookingUrl: "https://booking.digitravels.io/url/fake-hive-cancun",
  },
];

function formatEuro(val: number) {
  return "€" + val.toLocaleString("en-US", {
    minimumFractionDigits: 2
  });
}

export const PriceComparison = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Members Save More
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Direct price comparison: see exclusive savings on select hotels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border shadow-sm p-0 flex flex-col"
            >
              {/* Image, Discount, Stars */}
              <div className="relative aspect-[3/2] rounded-t-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.hotel}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
                {/* Discount Badge */}
                <div className="absolute right-4 top-4 z-10">
                  <span className="bg-[#E53935] text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                    {item.discount}% OFF
                  </span>
                </div>
                {/* Ratings Bar */}
                <div className="absolute left-0 right-0 bottom-3 flex justify-center">
                  <div className="bg-black/70 rounded px-3 py-1 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < item.rating ? "text-yellow-400" : "text-gray-400"}`}
                        fill={i < item.rating ? "#facc15" : "none"}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Details Block */}
              <div className="px-6 pt-5 pb-6 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg mb-1 text-ellipsis whitespace-nowrap overflow-hidden">{item.hotel}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{item.distance}</span>
                </div>

                {/* Price comparison row style */}
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 bg-gray-50 p-4 rounded-lg flex flex-col items-start border">
                    <div className="text-xs text-gray-500 mb-1 font-medium">Retail Price</div>
                    <div className="text-base font-semibold text-red-600 line-through">{formatEuro(item.retailPrice)}</div>
                  </div>
                  <div className="flex-1 bg-gray-50 p-4 rounded-lg flex flex-col items-start border">
                    <div className="text-xs text-gray-500 mb-1 font-medium">Price to Traveller</div>
                    <div className="text-base font-semibold text-[#005488]">{formatEuro(item.memberPrice)}</div>
                  </div>
                </div>

                <div className="mt-auto">
                  <a href={item.bookingUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="lg" className="w-full bg-[#005488] text-white border-none hover:bg-[#004070] transition-all">
                      View Deal
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
