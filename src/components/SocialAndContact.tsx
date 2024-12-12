import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const SocialAndContact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
  };

  return (
    <section className="py-12 bg-travel-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Social Media Section */}
            <div className="space-y-8 text-center">
              <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.instagram.com/digitravels.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-24 h-24 rounded-lg overflow-hidden mx-auto">
                    <img
                      src="/lovable-uploads/baec2b57-228d-4cc2-ae81-3753436779c4.png"
                      alt="Instagram"
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <p className="mt-2 text-travel-600 font-medium">Instagram</p>
                </a>
                <a
                  href="https://x.com/digitravels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-24 h-24 rounded-lg overflow-hidden mx-auto">
                    <img
                      src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
                      alt="X / Twitter"
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <p className="mt-2 text-travel-600 font-medium">X / Twitter</p>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Your email"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your message"
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};