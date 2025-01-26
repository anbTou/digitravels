import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const paymentOptions = [
  {
    image: "/lovable-uploads/98d3b929-5e52-4036-8463-6e3005c451e0.png",
    title: "PayPal",
    description: "Fast and secure payments with buyer protection",
    referralLink: "https://py.pl/giqKI",
  },
  {
    image: "/lovable-uploads/d675bcd9-4e11-4ff6-bfdd-75cf6b07fea0.png",
    title: "Revolut",
    description: "Digital banking with great exchange rates",
    referralLink: "https://revolut.com/referral/?referral-code=lvaroghh8!FEB1-25-AR-L1",
  },
  {
    image: "/lovable-uploads/3ca08fee-0adf-4dc2-9407-390a3671a158.png",
    title: "Binance",
    description: "Cryptocurrency payments with low fees",
    referralLink: "https://www.binance.com/activity/referral-entry/CPA?ref=CPA_00HOSQV7R1",
  },
];

export const PaymentOptions = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            How to Pay with Digi Travels
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Choose your preferred payment method and get started
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paymentOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              <Button
                className="w-full"
                variant="outline"
                onClick={() => window.open(option.referralLink, '_blank')}
              >
                Get Started with {option.title}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};