
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const PriceComparison = () => {
  const navigate = useNavigate();

  const comparisons = [
    {
      hotel: "Luxury Resort Cancun",
      publicPrice: "$450",
      memberPrice: "$270",
      savings: "40%"
    },
    {
      hotel: "Boutique Hotel Paris",
      publicPrice: "$320",
      memberPrice: "$220",
      savings: "31%"
    },
    {
      hotel: "Beach Resort Bali",
      publicPrice: "$280",
      memberPrice: "$190",
      savings: "32%"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Members Save More
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See real price comparisons. Our members get exclusive rates that aren't available to the public.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="font-semibold text-lg mb-4">{item.hotel}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500" />
                    <span className="text-gray-600">Public Price</span>
                  </div>
                  <span className="text-lg font-medium line-through text-gray-500">
                    {item.publicPrice}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Member Price</span>
                  </div>
                  <span className="text-xl font-bold text-[#005488]">
                    {item.memberPrice}
                  </span>
                </div>
                
                <div className="bg-green-100 text-green-800 text-center py-2 rounded-md font-medium">
                  Save {item.savings}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-[#005488] hover:bg-[#004070] text-white px-8 py-3 text-lg"
            onClick={() => navigate('/subscription')}
          >
            Start Saving Today - Free 14 Day Trial
          </Button>
          <p className="text-sm text-gray-600 mt-2">
            No commitment • Cancel anytime • Instant access to member prices
          </p>
        </motion.div>
      </div>
    </section>
  );
};
