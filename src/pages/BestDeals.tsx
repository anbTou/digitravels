import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Tag } from "lucide-react";

const categories = {
  beach: {
    title: "Beach Getaways",
    description: "Discover paradise on Earth",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    listings: [
      {
        title: "Maldives Paradise Resort",
        location: "Maldives",
        price: "From €299/night",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        discount: "25% OFF",
        rating: 4.9,
      },
      {
        title: "Bali Beachfront Villa",
        location: "Indonesia",
        price: "From €199/night",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        discount: "20% OFF",
        rating: 4.8,
      },
    ]
  },
  mountain: {
    title: "Mountain Retreats",
    description: "Escape to serene heights",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    listings: [
      {
        title: "Swiss Alps Chalet",
        location: "Switzerland",
        price: "From €349/night",
        image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
        discount: "15% OFF",
        rating: 4.9,
      },
      {
        title: "Rocky Mountain Lodge",
        location: "Canada",
        price: "From €249/night",
        image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
        discount: "20% OFF",
        rating: 4.7,
      },
    ]
  },
  city: {
    title: "Urban Experiences",
    description: "Explore vibrant city life",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    listings: [
      {
        title: "Manhattan Luxury Suite",
        location: "New York, USA",
        price: "From €399/night",
        image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
        discount: "30% OFF",
        rating: 4.8,
      },
      {
        title: "Paris City Apartment",
        location: "France",
        price: "From €279/night",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        discount: "20% OFF",
        rating: 4.9,
      },
    ]
  }
};

const BestDeals = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Travel Hero"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-white mb-4"
            >
              Discover Our Best Deals
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Explore handpicked destinations with exclusive discounts
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Search className="mr-2 h-4 w-4" /> Search Deals
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 container mx-auto px-4">
        {Object.entries(categories).map(([key, category], index) => (
          <div key={key} className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.title}</h2>
              <p className="text-gray-600">{category.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.listings.map((listing, listingIndex) => (
                <motion.div
                  key={listingIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: listingIndex * 0.1 }}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-primary">
                        {listing.discount}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {listing.title}
                      </h3>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          {listing.rating}
                        </span>
                        <span className="text-yellow-400 ml-1">★</span>
                      </div>
                    </div>
                    <p className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {listing.location}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900">
                        {listing.price}
                      </span>
                      <a 
                        href="https://booking.digitravels.io"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline">View Deal</Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BestDeals;