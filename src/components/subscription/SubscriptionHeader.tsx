
import { motion } from "framer-motion";
import { Star, TrendingDown, Shield } from "lucide-react";

export const SubscriptionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto text-center"
    >
      <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full mb-4">
        <Star className="w-4 h-4" />
        <span className="text-sm font-medium">Beats Booking.com Every Time</span>
      </div>
      
      <h2 className="text-5xl font-bold text-gray-900 mb-6">
        Stop Paying Booking Fees
      </h2>
      
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        For just $2.99/month, eliminate booking fees forever and access exclusive member rates 
        that save you up to 40% on every trip. Your subscription pays for itself after one booking.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="text-red-600 font-semibold mb-2">Booking.com</div>
          <div className="text-red-800">
            <div className="text-2xl font-bold mb-1">$450</div>
            <div className="text-sm">+ $25 booking fee</div>
            <div className="text-xs text-red-600">= $475 total</div>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <TrendingDown className="w-8 h-8 text-green-500" />
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="text-green-600 font-semibold mb-2">DigiTravels Member</div>
          <div className="text-green-800">
            <div className="text-2xl font-bold mb-1">$270</div>
            <div className="text-sm">No booking fees</div>
            <div className="text-xs text-green-600">Save $205!</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-500" />
          <span>Price Match Guarantee</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-500" />
          <span>14-Day Free Trial</span>
        </div>
      </div>
    </motion.div>
  );
};
