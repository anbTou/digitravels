import { motion } from "framer-motion";
import { Subscription as SubscriptionComponent } from "@/components/Subscription";
import { SubscriptionFAQ } from "@/components/SubscriptionFAQ";
import { SubscriptionFooter } from "@/components/SubscriptionFooter";
import { SocialAndContact } from "@/components/SocialAndContact";

const Subscription = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <SubscriptionHeader />
      <SubscriptionComponent />
      <SubscriptionFAQ />
      <SubscriptionFooter />
      <SocialAndContact />
    </motion.main>
  );
};

const SubscriptionHeader = () => (
  <section className="py-12 bg-[#005488] text-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4">
          Travel More, Pay Less
        </h1>
        <p className="text-xl text-white/90">
          Subscribe today and say goodbye to reservation fees
        </p>
      </motion.div>
    </div>
  </section>
);

export default Subscription;