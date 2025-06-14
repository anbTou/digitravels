import { motion } from "framer-motion";
import { Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
export const MemberBenefitsBanner = () => {
  const navigate = useNavigate();
  return <motion.div initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} className="bg-gradient-to-r from-[#005488] to-[#0066aa] text-white py-2 px-4 sticky top-16 z-40 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-[25px]">
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="font-medium">Members save up to 40%</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span>No booking fees</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-300" />
            <span>Exclusive member-only deals</span>
          </div>
        </div>
        <Button size="sm" className="bg-white text-[#005488] hover:bg-gray-100 font-medium" onClick={() => navigate('/subscription')}>
          See Member Prices
        </Button>
      </div>
    </motion.div>;
};