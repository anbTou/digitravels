import { motion } from "framer-motion";
export default function AboutUs() {
  return <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-travel-900 mb-6">
          Your Journey Begins With Us
        </h1>
        <p className="text-xl text-travel-600 max-w-3xl mx-auto">
          We're revolutionizing the way people explore the world, one journey at a time.
        </p>
      </motion.div>

      {/* How We Work Section */}
      <motion.section initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.5,
      delay: 0.2
    }} className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-travel-800 mb-8 text-center">How We Work</h2>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-travel-600 mb-4 text-4xl font-bold">01</div>
            <h3 className="text-xl font-semibold mb-4">Smart Search</h3>
            <p className="text-travel-600">We analyze millions of flight and hotel options to find the best deals for you.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-travel-600 mb-4 text-4xl font-bold">02</div>
            <h3 className="text-xl font-semibold mb-4">Personalized Options</h3>
            <p className="text-travel-600">Get tailored travel recommendations based on your preferences and past trips.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-travel-600 mb-4 text-4xl font-bold">03</div>
            <h3 className="text-xl font-semibold mb-4">Seamless Booking</h3>
            <p className="text-travel-600">Book your entire trip in minutes with our easy-to-use platform.</p>
          </div>
        </div>
      </motion.section>

      {/* Why We Started Section */}
      <motion.section initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.5,
      delay: 0.3
    }} className="max-w-7xl mx-auto mb-20 px-4">
        <h2 className="text-3xl font-bold text-travel-800 mb-8 text-center">Why We Started</h2>
        <div className="bg-travel-50 p-8 rounded-lg">
          <p className="text-lg text-travel-600 leading-relaxed max-w-4xl mx-auto text-center">Travel platforms often charge high commissions and prioritize listings based on paid agreements rather than customer needs. This lack of transparency leads to higher costs for travelers, as they indirectly fund complex, profit-driven systems.

We believe travel should be simple and affordable. That’s why we created a booking platform that eliminates unnecessary fees while maintaining a seamless experience. Our goal is to provide a straightforward and cost-effective way to search for and book accommodations without the burden of hidden costs.

While we focus primarily on hotels and resorts, our platform also includes apartments, hostels, guesthouses, and villas, ensuring travelers have a wide range of options to choose from.</p>
        </div>
      </motion.section>

      {/* Our Mission Section */}
      <motion.section initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.5,
      delay: 0.4
    }} className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-travel-800 mb-8 text-center">Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-travel-700">Vision</h3>
            <p className="text-travel-600">
              To become the world's most trusted travel companion, making remarkable journeys 
              accessible to everyone through innovative technology and exceptional service.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-travel-700">Values</h3>
            <ul className="space-y-3 text-travel-600">
              <li>• Customer-First Approach</li>
              <li>• Transparency in Everything</li>
              <li>• Continuous Innovation</li>
              <li>• Sustainable Travel</li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>;
}