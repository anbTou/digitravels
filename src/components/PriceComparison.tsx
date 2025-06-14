
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

// Replace the image URLs with the correct new images as per your latest uploads.
const comparisons = [
  {
    image: "/lovable-uploads/858b3259-ccf1-4ba8-8b91-797c6f57c894.png", // Updated image for Casa Caribe Cancun
    discount: 51,
    hotel: "Casa Caribe Cancun",
    distance: "3.22 miles from City Center",
    rating: 5,
    retailPrice: 144.75,
    memberPrice: 69.50,
    bookingUrl: "https://booking.digitravels.io/url/5292643b-0957-4878-9842-98fc9d635488",
  },
  {
    image: "/lovable-uploads/9b0e5b04-2497-4019-9d3f-c3e4928ee004.png", // For SLS Cancun (unchanged)
    discount: 38,
    hotel: "SLS Cancun",
    distance: "3.04 miles from City Center",
    rating: 5,
    retailPrice: 506.55,
    memberPrice: 313.89,
    bookingUrl: "https://booking.digitravels.io/url/fake-sls-cancun",
  },
  {
    image: "/lovable-uploads/48ce484b-ff59-42b7-afd9-ebe7a0f2734b.png", // For Hive Cancun (unchanged)
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
  return (
    "€" +
    val.toLocaleString("en-US", {
      minimumFractionDigits: 2,
    })
  );
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
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col"
              style={{
                boxShadow:
                  "0px 2px 8px 0px rgba(16, 24, 40, 0.03), 0px 1.5px 3px 0px rgba(16, 24, 40, 0.03)",
              }}
            >
              {/* Image, Discount, Stars */}
              <div className="relative aspect-[3/2] rounded-xl overflow-hidden mb-4">
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
                <div className="absolute left-4 bottom-4">
                  <div className="bg-black/50 rounded px-3 py-1 flex items-center gap-1">
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
              <div className="px-0 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg mb-1 text-ellipsis whitespace-nowrap overflow-hidden">
                  {item.hotel}
                </h3>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{item.distance}</span>
                </div>
                {/* Price comparison row style */}
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 bg-white border border-gray-300 p-3 rounded-xl flex flex-col items-start">
                    <div className="text-xs text-gray-500 mb-1 font-medium">
                      Retail Price
                    </div>
                    <div className="text-base font-semibold text-red-600 line-through">
                      {formatEuro(item.retailPrice)}
                    </div>
                  </div>
                  <div className="flex-1 bg-white border border-gray-300 p-3 rounded-xl flex flex-col items-start">
                    <div className="text-xs text-gray-500 mb-1 font-medium">
                      Price to Traveller
                    </div>
                    <div className="text-base font-semibold text-[#005488]">
                      {formatEuro(item.memberPrice)}
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <a
                    href={item.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full bg-[#005488] text-white border-none hover:bg-[#004070] transition-all rounded-xl text-lg font-semibold py-3"
                    >
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
