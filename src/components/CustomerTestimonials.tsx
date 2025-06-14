
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "I saved $800 on my honeymoon trip to Italy! The member prices are incredible and booking was so easy.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      location: "Toronto, Canada", 
      text: "No booking fees and exclusive rates - this subscription pays for itself after just one trip.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      text: "Better prices than Booking.com and amazing customer service. I'm never going back!",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section className="py-16 bg-[#005488] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Members Say</h2>
          <p className="text-xl text-white/90">
            Join thousands of satisfied travelers saving money every day
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-white/90 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-medium">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-white/70 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
