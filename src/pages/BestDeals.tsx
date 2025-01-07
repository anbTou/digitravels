import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";

const regions = [
  {
    title: "Europe",
    description: "Discover historic cities and stunning landscapes",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    deals: [
      { name: "Swiss Alps Adventure", price: "From $899" },
      { name: "Mediterranean Cruise", price: "From $1299" },
      { name: "Paris Getaway", price: "From $799" },
    ]
  },
  {
    title: "Central America",
    description: "Experience tropical paradise and ancient cultures",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    deals: [
      { name: "Costa Rica Explorer", price: "From $699" },
      { name: "Mayan Adventure", price: "From $899" },
      { name: "Panama Canal Cruise", price: "From $1199" },
    ]
  },
  {
    title: "South America",
    description: "Explore diverse landscapes and vibrant cultures",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    deals: [
      { name: "Machu Picchu Trek", price: "From $1299" },
      { name: "Amazon Expedition", price: "From $999" },
      { name: "Patagonia Adventure", price: "From $1499" },
    ]
  },
  {
    title: "Asia",
    description: "Immerse yourself in ancient traditions and modern wonders",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    deals: [
      { name: "Thailand Explorer", price: "From $799" },
      { name: "Japan Heritage Tour", price: "From $1599" },
      { name: "Bali Retreat", price: "From $899" },
    ]
  },
];

const BestDeals = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Current Promotions Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full text-primary mb-4">
              <Tag className="w-4 h-4" />
              <span className="text-sm font-medium">Limited Time Offers</span>
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Current Promotions
            </h1>
            <p className="text-xl text-gray-600">
              Exclusive deals and special offers on our most popular destinations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Best Resorts Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Best Resorts
            </h2>
            <p className="text-xl text-gray-600">
              Hand-picked luxury resorts with exceptional amenities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regional Sections */}
      {regions.map((region, index) => (
        <section
          key={region.title}
          className={`py-12 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">{region.title}</h2>
                <p className="text-gray-600 mb-6">{region.description}</p>
                <div className="space-y-4 mb-6">
                  {region.deals.map((deal, dealIndex) => (
                    <div
                      key={dealIndex}
                      className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm"
                    >
                      <span className="font-medium">{deal.name}</span>
                      <span className="text-primary font-bold">{deal.price}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href="https://booking.digitravels.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full md:w-auto">
                    View More
                  </Button>
                </a>
              </div>
              <div className="order-1 md:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-2xl overflow-hidden aspect-[4/3]"
                >
                  <img
                    src={region.image}
                    alt={region.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </motion.main>
  );
};

export default BestDeals;