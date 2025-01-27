import { motion } from "framer-motion";
import { Destination } from "@/types/destination";
import ListingCard from "./ListingCard";
import { Button } from "@/components/ui/button";

interface DestinationSectionProps {
  destination: Destination;
}

const DestinationSection = ({ destination }: DestinationSectionProps) => {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{destination.title}</h3>
        <p className="text-gray-600">{destination.description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destination.listings.map((listing, index) => (
          <ListingCard key={index} listing={listing} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 text-center"
      >
        <a 
          href="http://booking.digitravels.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-white hover:bg-gray-50 border-gray-200"
          >
            Find Out More Deals
          </Button>
        </a>
      </motion.div>
    </div>
  );
};

export default DestinationSection;