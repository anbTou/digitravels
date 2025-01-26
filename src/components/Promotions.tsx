import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const promotions = [
  {
    image: "/lovable-uploads/ab69c16d-ba70-4c24-b4ba-fa9077f609f9.png",
    title: "Hotel Mousai Cancun Ocean Front Adults Only 5*",
    location: "Mexico",
    price: "From $780/night",
    discount: "40% off",
  },
  {
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    title: "Maldives Paradise",
    location: "Maldives",
    price: "From $399/night",
    discount: "Early Bird 15% off",
  },
  {
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    title: "Bali Serenity",
    location: "Indonesia",
    price: "From $199/night",
    discount: "Free Airport Transfer",
  },
];

export const Promotions = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-travel-600"
          >
            Limited Time Offers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-travel-900 mt-2"
          >
            Current Promotions
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm mb-3">
                  {promo.discount}
                </span>
                <h3 className="text-2xl font-bold mb-1">{promo.title}</h3>
                <p className="text-white/90 mb-4">{promo.location}</p>
                <p className="text-xl font-semibold mb-4">{promo.price}</p>
                <a 
                  href="https://booking.digitravels.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white w-full"
                  >
                    View more
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center relative">
          <div className="absolute inset-x-0 -bottom-8 h-16 bg-gradient-to-b from-transparent to-gray-100"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="https://booking.digitravels.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                size="lg"
                className="bg-travel-600 hover:bg-travel-700 relative z-10"
              >
                View more
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};