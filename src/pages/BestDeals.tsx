import { motion } from "framer-motion";
import { Promotions } from "@/components/Promotions";
import { PremiumDestinations } from "@/components/PremiumDestinations";

const BestDeals = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <Promotions />
      <PremiumDestinations />
    </motion.main>
  );
};

export default BestDeals;