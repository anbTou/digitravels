import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

export const Hero = () => {
  const navigate = useNavigate();
  return <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Luxury travel destination" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container relative z-10 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="space-y-6">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-white text-sm">No Booking Fees</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Members Get <br />
            <span className="text-yellow-400">Better Prices</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Skip the markup. Get exclusive member rates that aren't available to the public. 
            No booking fees, just better prices on hotels worldwide.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-md mx-auto mb-8">
            <div className="text-white/90 text-sm mb-2">Example savings on your next trip:</div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white/70 text-sm line-through">Public: $450/night</div>
                <div className="text-white text-xl font-bold">Member: $270/night</div>
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Save 40%
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 transition-all duration-300 text-lg px-8 py-4" onClick={() => navigate('/subscription')}>
              See Member Prices - Free Trial
            </Button>
            <a href="http://booking.digitravels.io/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white hover:bg-white transition-all duration-300 text-lg px-8 py-4 text-slate-950">
                Browse Public Rates
              </Button>
            </a>
          </div>
          
          <p className="text-white/80 text-sm">
            ✓ Free 14-day trial • ✓ Cancel anytime • ✓ Instant access to member prices
          </p>
        </motion.div>
      </div>
    </section>;
};
