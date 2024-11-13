import { motion } from "framer-motion";
import { Shield, CreditCard, Hotel } from "lucide-react";

const features = [
  {
    icon: Hotel,
    title: "Better Accommodation Prices",
    description: "Get exclusive rates on luxury hotels and resorts worldwide.",
  },
  {
    icon: CreditCard,
    title: "Subscription Benefits",
    description: "Pay no booking fees with our premium subscription model.",
  },
  {
    icon: Shield,
    title: "Guaranteed Quality",
    description: "Hand-picked premium properties for the best experience.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-travel-50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-travel-900"
          >
            Why Choose Us
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-travel-600 mb-4" />
              <h3 className="text-xl font-semibold text-travel-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-travel-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};