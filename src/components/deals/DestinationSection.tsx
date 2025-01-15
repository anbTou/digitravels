import { motion } from "framer-motion";
import { Section } from "@/types/destination";
import ListingCard from "./ListingCard";

interface DestinationSectionProps {
  sectionKey: string;
  section: Section;
}

const DestinationSection = ({ section }: DestinationSectionProps) => {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{section.title}</h3>
        <p className="text-gray-600">{section.description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {section.listings.map((listing, index) => (
          <ListingCard key={index} listing={listing} index={index} />
        ))}
      </div>
    </div>
  );
};

export default DestinationSection;