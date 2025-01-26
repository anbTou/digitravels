import { motion } from "framer-motion";
import { Tag } from "lucide-react";

const destinations = [
  {
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    description: "Experience the majestic Swiss Alps with our premium package including luxury accommodations and guided tours.",
  },
  {
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    title: "Tropical Paradise",
    location: "Maldives",
    description: "Escape to crystal clear waters and white sandy beaches in the Maldives with our all-inclusive resort package.",
  },
  {
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    title: "Mountain Retreat",
    location: "Canadian Rockies",
    description: "Discover the breathtaking beauty of the Canadian Rockies with our premium wilderness experience.",
  },
];

export const PremiumDestinations = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full text-primary mb-4"
          >
            <Tag className="w-4 h-4" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Premium Destinations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Exclusive 30% discount on our most luxurious travel packages
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  30% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{destination.title}</h3>
                <p className="text-gray-600 mb-4">{destination.location}</p>
                <p className="text-gray-700">{destination.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center relative">
          <div className="absolute inset-x-0 -bottom-8 h-16 bg-gradient-to-b from-transparent to-gray-200"></div>
        </div>
      </div>
    </section>
  );
};