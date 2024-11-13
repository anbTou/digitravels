import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Promotions } from "@/components/Promotions";
import { Subscription } from "@/components/Subscription";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <Hero />
      <Features />
      <Promotions />
      <Subscription />
    </motion.main>
  );
};

export default Index;