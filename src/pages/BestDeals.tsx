import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tag, Percent } from "lucide-react";

const promotions = [
  {
    title: "Early Bird Summer Special",
    description: "Book your summer vacation now and save big!",
    discount: "25% OFF",
    validUntil: "Valid until April 30th",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    destinations: ["Greece", "Spain", "Italy"]
  },
  {
    title: "Family Package Deal",
    description: "Kids stay free at selected resorts",
    discount: "Kids Free",
    validUntil: "Valid for summer bookings",
    image: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa",
    destinations: ["Orlando", "Cancun", "Phuket"]
  },
  {
    title: "Luxury Escape",
    description: "5-star resorts at 3-star prices",
    discount: "30% OFF",
    validUntil: "Limited time offer",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    destinations: ["Maldives", "Bali", "Seychelles"]
  }
];

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1.5 rounded-full flex items-center gap-1">
                    <Percent className="w-4 h-4" />
                    <span className="font-semibold">{promo.discount}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">{promo.validUntil}</p>
                    <div className="flex flex-wrap gap-2">
                      {promo.destinations.map((destination, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {destination}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a 
                    href="https://booking.digitravels.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Book Now
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
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
