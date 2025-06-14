
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";

interface PromotionCardProps {
  index: number;
  image: string;
  title: string;
  distance: string;
  rating: number;
  retailPrice: number;
  travellerPrice: number;
  bookingUrl: string;
}

function getDiscountPercent(retail: number, traveller: number) {
  if (!retail || !traveller) return 0;
  return Math.round(((retail - traveller) / retail) * 100);
}

function formatEuro(val: number) {
  return "€" + val.toLocaleString("en-US", { minimumFractionDigits: 2 });
}

export const PromotionCard = ({
  index,
  image,
  title,
  distance,
  rating,
  retailPrice,
  travellerPrice,
  bookingUrl
}: PromotionCardProps) => {
  const discount = getDiscountPercent(retailPrice, travellerPrice);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white border"
      style={{ minHeight: 450 }}
    >
      <div className="relative aspect-[3/2] overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute right-4 top-4 z-10">
          <span className="bg-[#E53935] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xl">
            {discount}% OFF
          </span>
        </div>
        <div className="absolute left-0 right-0 bottom-3 flex justify-center">
          <div className="bg-black/70 rounded px-2 py-1 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={idx}
                className={`w-4 h-4 ${idx < rating ? "text-yellow-400" : "text-gray-400"}`}
                fill={idx < rating ? "#facc15" : "none"}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="px-5 pt-5 pb-6 flex flex-col h-[calc(100%-170px)]">
        <h3 className="font-semibold text-lg mb-1 text-ellipsis whitespace-nowrap overflow-hidden">{title}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{distance}</span>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="flex flex-col items-start justify-center">
            <div className="text-xs text-gray-500 mb-1 font-medium">Retail Price</div>
            <div className="text-sm line-through text-red-600 font-semibold">{formatEuro(retailPrice)}</div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="text-xs text-gray-500 mb-1 font-medium">Price to Traveller</div>
            <div className="text-base text-[#005488] font-semibold">{formatEuro(travellerPrice)}</div>
          </div>
        </div>
        <div className="mt-auto">
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="w-full bg-[#005488] text-white border-none hover:bg-[#004070] transition-all"
            >
              View Deal
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
