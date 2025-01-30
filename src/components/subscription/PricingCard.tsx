import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { FeaturesList } from "./FeaturesList";

export const PricingCard = () => {
  const { toast } = useToast();
  const isPromoValid = () => true;
  const price = isPromoValid() ? 7 : 20;
  
  const stripeCheckoutUrl = "https://buy.stripe.com/cN229r9TNa2N3AI8ww";

  const handleSubscribe = () => {
    window.location.href = stripeCheckoutUrl;
    toast({
      title: "Redirecting to payment",
      description: "You will be redirected to the secure payment page.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 border"
    >
      <div className="text-center mb-8">
        {isPromoValid() && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg mb-4 font-semibold">
            Digi Travels Special Launch Discount - 4.6$/month (Paid yearly 56$)
          </div>
        )}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-5xl font-bold">${price}</span>
          <span className="text-gray-600">/month</span>
        </div>
        {isPromoValid() && (
          <div className="text-red-500 line-through font-medium mb-2">
            Regular yearly price 84$
          </div>
        )}
      </div>

      <FeaturesList />

      <p className="text-center text-gray-700 mb-4">
        Want to start saving? Click below to subscribe now and unlock the best travel deals today!
      </p>

      <Button 
        onClick={handleSubscribe}
        className="w-full bg-primary hover:bg-primary/90"
        size="lg"
      >
        Subscribe Now
      </Button>
    </motion.div>
  );
};