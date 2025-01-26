import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface PromotionCardProps {
  index: number;
  image: string;
  discount: string;
  title: string;
  location: string;
  price: string;
  bookingUrl: string;
}

export const PromotionCard = ({
  index,
  image,
  discount,
  title,
  location,
  price,
  bookingUrl,
}: PromotionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm mb-3">
          {discount}
        </span>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-white/90 mb-4">{location}</p>
        <p className="text-xl font-semibold mb-4">{price}</p>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white w-full"
          >
            View more
          </Button>
        </a>
      </div>
    </motion.div>
  );
};