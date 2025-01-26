import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const ViewMoreButton = () => {
  return (
    <div className="mt-12 text-center relative">
      <div className="absolute inset-x-0 -bottom-8 h-16 bg-gradient-to-b from-transparent to-gray-100"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="https://visitsagres.booking.xeni.com/url/2267dbb2-5ceb-4ab0-a21b-0fb4d5595a56"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="default"
            size="lg"
            className="bg-travel-600 hover:bg-travel-700 relative z-10"
          >
            View more
          </Button>
        </a>
      </motion.div>
    </div>
  );
};