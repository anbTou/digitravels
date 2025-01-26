import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const DealsHero = () => {
  return (
    <section className="relative h-[50vh] bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Travel Hero"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Discover Our Best Deals
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Explore handpicked destinations with exclusive discounts
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4"
          >
            <a 
              href="http://booking.digitravels.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Search className="mr-2 h-4 w-4" /> Search Deals
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DealsHero;