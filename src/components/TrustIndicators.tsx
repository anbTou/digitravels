
import { motion } from "framer-motion";
import { Shield, Users, Award, Clock } from "lucide-react";

export const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: "Secure Booking",
      description: "SSL encrypted payments"
    },
    {
      icon: Users,
      title: "50,000+ Members",
      description: "Trusted by travelers worldwide"
    },
    {
      icon: Award,
      title: "Best Price Guarantee",
      description: "Find it cheaper? We'll match it"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Customer service when you need it"
    }
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {indicators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-[#005488]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-[#005488]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
