import { motion } from "framer-motion";

export const PromotionsHeader = () => {
  return (
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-medium text-travel-600"
      >
        Limited Time Offers
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-travel-900 mt-2"
      >
        Current Promotions
      </motion.h2>
    </div>
  );
};