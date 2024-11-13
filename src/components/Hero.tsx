import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Luxury travel destination"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium">
            Discover Your Next Adventure
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Travel Beyond <br /> Expectations
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Experience luxury travel with better prices and exclusive subscription benefits.
          </p>
          <Button
            size="lg"
            className="bg-white text-travel-900 hover:bg-white/90 transition-all duration-300"
          >
            Start Exploring
          </Button>
        </motion.div>
      </div>
    </section>
  );
};