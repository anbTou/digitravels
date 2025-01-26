import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Listing } from "@/types/destination";

interface ListingCardProps {
  listing: Listing;
  index: number;
}

const ListingCard = ({ listing, index }: ListingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-primary">
            {listing.discount}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900">
            {listing.title}
          </h3>
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-900">
              {listing.rating}
            </span>
            <span className="text-yellow-400 ml-1">★</span>
          </div>
        </div>
        <p className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          {listing.location}
        </p>
        <div className="flex flex-col items-center justify-between">
          <div className="w-24 h-0.5 bg-red-500 mx-auto mb-2" />
          <div className="w-full flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900">
              {listing.price}
            </span>
            <Button variant="outline">View Deal</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ListingCard;