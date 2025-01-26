import { motion } from "framer-motion";
import { europe } from "@/constants/destinations/europe";
import { usa } from "@/constants/destinations/usa";
import { japan } from "@/constants/destinations/japan";
import { africa } from "@/constants/destinations/africa";
import { southAmerica } from "@/constants/destinations/southAmerica";
import DealsHero from "@/components/deals/DealsHero";
import DestinationSection from "@/components/deals/DestinationSection";
import { Button } from "@/components/ui/button";

const BestDeals = () => {
  const destinations = [europe, usa, japan, africa, southAmerica];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Black space above header */}
      <div className="h-16 bg-black w-full" />
      
      <DealsHero />

      {/* Destinations Section */}
      <section className="py-16 container mx-auto px-4">
        {destinations.map((destination, index) => (
          <DestinationSection
            key={index}
            destination={destination}
          />
        ))}

        {/* Find Out More Deals button */}
        <div className="mt-12 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="http://booking.digitravels.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                size="lg"
                className="bg-travel-600 hover:bg-travel-700"
              >
                Find Out More Deals
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BestDeals;