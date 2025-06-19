
import { motion } from "framer-motion";
import { Tag } from "lucide-react";

const destinations = [{
  image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  title: "Swiss Alps Adventure",
  location: "Switzerland",
  description: "Experience the majestic Swiss Alps with our premium package including luxury accommodations and guided tours."
}, {
  image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  title: "Tropical Paradise",
  location: "Maldives",
  description: "Escape to crystal clear waters and white sandy beaches in the Maldives with our all-inclusive resort package."
}, {
  image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
  title: "Mountain Retreat",
  location: "Canadian Rockies",
  description: "Discover the breathtaking beauty of the Canadian Rockies with our premium wilderness experience."
}];

export const PremiumDestinations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Destinations
          </h2>
          <p className="text-xl text-gray-600">
            Discover extraordinary places with our curated premium experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-600 font-medium">{destination.location}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{destination.title}</h3>
                <p className="text-gray-600">{destination.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
