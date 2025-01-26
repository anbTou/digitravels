import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const SubscriptionFooter = () => {
  const { toast } = useToast();
  const stripeCheckoutUrl = "https://buy.stripe.com/cN229r9TNa2N3AI8ww";

  const handleActivate = () => {
    window.location.href = stripeCheckoutUrl;
    toast({
      title: "Subscription activation initiated",
      description: "You will be redirected to the payment page.",
    });
  };

  return (
    <section className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Start Saving Today</h2>
          <p className="text-xl mb-8">Join thousands of satisfied travelers</p>
          
          <Button 
            onClick={handleActivate}
            size="lg" 
            className="bg-white text-primary hover:bg-white/90"
          >
            Activate Subscription
          </Button>
        </motion.div>
      </div>
    </section>
  );
};