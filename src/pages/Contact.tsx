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
      <SocialAndContact />
    </motion.main>
  );
};

export default Contact;