import { motion } from "framer-motion";
import { SocialAndContact } from "@/components/SocialAndContact";

const Contact = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Header Section */}
      <section className="bg-travel-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-travel-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-travel-600 text-lg md:text-xl">
              Have questions about our services? We're here to help you plan your perfect journey.
            </p>
          </motion.div>
        </div>
      </section>

      <SocialAndContact />
    </motion.main>
  );
};

export default Contact;