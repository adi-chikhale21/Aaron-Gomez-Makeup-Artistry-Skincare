import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function BookAppointment() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-rose-900 mb-4">
          Book Your Session
        </h1>
        <p className="text-lg text-rose-700 font-light max-w-2xl mx-auto">
          Ready to glow? Schedule your makeup or skincare appointment today.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-rose-100/50 space-y-8"
        >
          <h2 className="text-2xl font-serif text-rose-900 border-b border-rose-200 pb-4">
            Contact Information
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Phone className="text-rose-600 mt-1" size={24} />
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="text-gray-600">(815) 701-1691</p>
                <p className="text-sm text-gray-500 mt-1">Call or text to inquire about availability.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="text-rose-600 mt-1" size={24} />
              <div>
                <h3 className="font-medium text-gray-900">Studio Location</h3>
                <p className="text-gray-600">Aaron Gomez Skincare Studio</p>
                <p className="text-sm text-gray-500 mt-1">By appointment only.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="text-rose-600 mt-1" size={24} />
              <div>
                <h3 className="font-medium text-gray-900">Hours</h3>
                <p className="text-gray-600">Tuesday - Saturday</p>
                <p className="text-sm text-gray-500 mt-1">10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-rose-200">
            <h3 className="font-serif text-xl text-rose-900 mb-4">Gift Cards Available</h3>
            <Link 
              to="/gift-card"
              className="inline-block px-6 py-3 bg-rose-100 text-rose-900 rounded-full font-medium tracking-wider uppercase hover:bg-rose-200 transition-colors text-sm"
            >
              Purchase a Gift Card
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-rose-100/50"
        >
          <h2 className="text-2xl font-serif text-rose-900 border-b border-rose-200 pb-4 mb-8">
            Send an Inquiry
          </h2>
          
          <form className="space-y-6" action="https://formspree.io/f/mreyngoy" method="POST">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none bg-white/50" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none bg-white/50" />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none bg-white/50" />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
              <select id="service" name="service" className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none bg-white/50">
                <option>Bridal Makeup</option>
                <option>Special Event Makeup</option>
                <option>The Luxe Glow Facial</option>
                <option>Other Skincare Service</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Event Date (if applicable)</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-3.5 text-gray-400" size={20} />
                <input type="date" id="date" name="date" className="w-full pl-12 pr-4 py-3 rounded-xl border border-rose-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none bg-white/50" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Details</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none bg-white/50 resize-none"></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-rose-800 text-white rounded-xl font-medium tracking-wider uppercase hover:bg-rose-900 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Submit Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
