import { motion } from "framer-motion";
import { Star } from "lucide-react";
export const SubscriptionHeader = () => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5
  }} className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full text-primary mb-4">
        <Star className="w-4 h-4" />
        <span className="text-sm font-medium">Premium Subscription</span>
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        One Pack, All the Perks
      </h2>
      <p className="text-xl text-gray-600 mb-8">Forget complicated bundles that don't deliver. With Digi Travels, you pay $35.9/year and save up to $350 in exclusive deals. Enjoy:</p>
    </motion.div>;
};