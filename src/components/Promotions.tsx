import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
          {/* First Promotion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/lovable-uploads/a29d1812-0c4d-4c32-812f-87a59ba65dc4.png"
                alt="Hotel Mousai Cancun 5*"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm mb-3">
                40% off
              </span>
              <h3 className="text-xl font-bold mb-1">Hotel Mousai Cancun 5*</h3>
              <p className="text-white/90 mb-4">Mexico</p>
              <p className="text-xl font-semibold mb-4">From $780/night</p>
              <a 
                href="https://visitsagres.booking.xeni.com/url/2267dbb2-5ceb-4ab0-a21b-0fb4d5595a56"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/lovable-uploads/4d54b3ab-33a8-4400-97a1-d2f42e207681.png"
                alt="Hotel Mousai Ocean Front"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm mb-3">
                63% off
              </span>
              <h3 className="text-xl font-bold mb-1">Hotel Mousai Ocean Front</h3>
              <p className="text-white/90 mb-4">Mexico</p>
              <p className="text-xl font-semibold mb-4">From $680/night</p>
              <a 
                href="https://visitsagres.booking.xeni.com/url/2267dbb2-5ceb-4ab0-a21b-0fb4d5595a56"
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

          {/* Third Promotion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
                alt="Bali Serenity"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm mb-3">
                Free Airport Transfer
              </span>
              <h3 className="text-xl font-bold mb-1">Bali Serenity</h3>
              <p className="text-white/90 mb-4">Indonesia</p>
              <p className="text-xl font-semibold mb-4">From $199/night</p>
              <a 
                href="https://visitsagres.booking.xeni.com/url/2267dbb2-5ceb-4ab0-a21b-0fb4d5595a56"
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
              href="https://visitsagres.booking.xeni.com/url/2267dbb2-5ceb-4ab0-a21b-0fb4d5595a56"
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
