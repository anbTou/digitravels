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

        {/* Subscription CTA */}
        <div className="mt-12 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-gradient-to-r from-travel-50 to-white rounded-lg p-10 shadow-xl shadow-travel-200/20 border border-travel-100"
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              Every stay you see here comes with an exclusive Digi Travels discount. Want even more savings? Subscribe now to remove booking fees and unlock the best deals!
            </p>
            <a 
              href="/subscription"
            >
              <Button
                variant="default"
                size="lg"
                className="bg-travel-600 hover:bg-travel-700 transform transition-all duration-200 hover:scale-105"
              >
                Subscribe Now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BestDeals;