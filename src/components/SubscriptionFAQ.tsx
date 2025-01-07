import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export const SubscriptionFAQ = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does fee elimination work?</AccordionTrigger>
              <AccordionContent>
                Booking fees are automatically removed from your account when you make a reservation. 
                This applies to all trips during your subscription period.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Can I cancel at any time?</AccordionTrigger>
              <AccordionContent>
                Yes, you can cancel your subscription at any time. The benefit continues until 
                the end of the paid period.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How much can I save per year?</AccordionTrigger>
              <AccordionContent>
                On average, our subscribers save €200 per year in travel fees. The exact amount 
                depends on how frequently you travel and the types of trips you make.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};