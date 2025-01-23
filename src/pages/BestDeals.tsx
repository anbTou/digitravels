import { motion } from "framer-motion";
import { categories } from "@/constants/destinations";
import DealsHero from "@/components/deals/DealsHero";
import DestinationSection from "@/components/deals/DestinationSection";
import { Button } from "@/components/ui/button";

const BestDeals = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Black space above header */}
      <div className="h-16 bg-black w-full" />
      
      <DealsHero />

      {/* Categories Section */}
      <section className="py-16 container mx-auto px-4">
        {Object.entries(categories).map(([continentKey, continent], index) => (
          <div key={continentKey}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{continent.title}</h2>
            </motion.div>

            {Object.entries(continent.sections).map(([sectionKey, section]) => (
              <DestinationSection
                key={sectionKey}
                sectionKey={sectionKey}
                section={section}
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
          </div>
        ))}
      </section>
    </div>
  );
};

export default BestDeals;