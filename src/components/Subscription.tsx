import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const Subscription = () => {
  const { toast } = useToast();
  // For testing purposes, we'll make isPromoValid always return true
  // In production, you would want to use the actual date check
  const isPromoValid = () => true;
  
  const price = isPromoValid() ? 10 : 20; // 50% off regular price of $20

  const handleSubscribe = () => {
    toast({
      title: "Subscription initiated",
      description: "You will be redirected to the payment page.",
    });
  };

  return (
    <section id="subscribe-section" className="py-12 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full text-primary mb-4">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Premium Subscription</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Subscribe and Save
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get exclusive access to the best travel deals and pay no booking fees
          </p>
        </motion.div>

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
                Special New Year Offer - 50% OFF until January 30th!
              </div>
            )}
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-5xl font-bold">${price}</span>
              <span className="text-gray-600">/month</span>
            </div>
            {isPromoValid() && (
              <div className="text-red-500 line-through font-medium mb-2">Regular $20/month</div>
            )}
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>No booking fees</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>Exclusive hotel rates</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>Premium customer support</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>Cancel anytime</span>
            </li>
          </ul>

          <Button 
            onClick={handleSubscribe}
            className="w-full bg-primary hover:bg-primary/90"
            size="lg"
          >
            Subscribe Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};