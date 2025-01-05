import { motion } from "framer-motion";
import { Subscription as SubscriptionComponent } from "@/components/Subscription";

const Subscription = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <SubscriptionComponent />
    </motion.main>
  );
};

export default Subscription;