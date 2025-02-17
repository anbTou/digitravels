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
        <p className="text-xl text-travel-600 max-w-3xl mx-auto text-justify">
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
            <p className="text-travel-600 text-justify">We analyze millions of flight and hotel options to find the best deals for you.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-travel-600 mb-4 text-4xl font-bold">02</div>
            <h3 className="text-xl font-semibold mb-4">Personalized Options</h3>
            <p className="text-travel-600 text-justify">Get tailored travel recommendations based on your preferences and past trips.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-travel-600 mb-4 text-4xl font-bold">03</div>
            <h3 className="text-xl font-semibold mb-4">Seamless Booking</h3>
            <p className="text-travel-600 text-justify">Book your entire trip in minutes with our easy-to-use platform.</p>
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
          <div className="text-travel-600 leading-relaxed max-w-4xl mx-auto space-y-6">
            <p className="text-lg font-normal text-justify">
              Travel platforms often charge high commissions and prioritize listings based on paid agreements rather than customer needs. This lack of transparency leads to higher costs for travelers, as they indirectly fund complex, profit-driven systems.
            </p>
            <p className="text-lg font-normal text-justify">
              We believe travel should be simple and affordable. That's why we created a booking platform that eliminates unnecessary fees while maintaining a seamless experience. Our goal is to provide a straightforward and cost-effective way to search for and book accommodations without the burden of hidden costs.
            </p>
            <p className="text-lg font-normal text-justify">
              While we focus primarily on hotels and resorts, our platform also includes apartments, hostels, guesthouses, and villas, ensuring travelers have a wide range of options to choose from.
            </p>
          </div>
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
        <div className="bg-travel-50 p-8 rounded-lg mb-8">
          <div className="text-travel-600 leading-relaxed max-w-4xl mx-auto space-y-6">
            <p className="text-lg font-normal text-justify">
              Our mission is to democratize travel by making bookings more accessible and cost-efficient. We aim to provide travelers with an extensive portfolio of accommodations at the lowest possible cost, without the hidden fees that make traditional booking platforms expensive.
            </p>
            <p className="text-lg font-normal text-justify">
              By removing unnecessary complexities, we ensure that our users can focus on what truly matters—finding the right place to stay at the best price.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-travel-700 text-center">Vision</h3>
            <div className="space-y-4">
              <p className="text-travel-600 text-justify">
                We are not here to compete with major OTAs in terms of technology. Instead, our vision is to offer a product that prioritizes simplicity and affordability.
              </p>
              <p className="text-travel-600 text-justify">
                In the long run, we plan to expand our platform to include flights, providing travelers with even more ways to book their trips at lower costs.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-travel-700 text-center">Values</h3>
            <div className="space-y-4">
              <p className="text-travel-600 text-xl font-semibold text-center mb-4">
                Transparency. Accessibility. Simplicity.
              </p>
              <p className="text-travel-600 text-justify">
                We believe in a travel booking experience that is fair, easy to use, and cost-effective. Our diverse portfolio spans the globe, connecting travelers with the accommodations they need - without hidden costs or unnecessary fees.
              </p>
              <p className="text-travel-600 text-justify">
                While we act as the intermediary, the ultimate experience is delivered by the hotels themselves. Our role is to ensure smooth, reliable connections between travelers and hotels, making every stay as seamless as possible.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>;
}
