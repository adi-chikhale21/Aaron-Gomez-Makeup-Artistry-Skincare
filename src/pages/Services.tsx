import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const makeupServices = [
  {
    title: "Bridal Makeup Package",
    description: "Your wedding day is all about you. As your makeup artist, my goal is to help you look and feel your absolute best.",
    features: [
      "Consultation/Full Makeup Preview before wedding",
      "Airbrush Foundation or Traditional Foundation",
      "Strip Lashes",
      "Bridal Touch-Up Kit"
    ]
  },
  {
    title: "Bridal Party / Attendants",
    description: "Flawless makeup for your bridesmaids, mothers, and special guests.",
    features: [
      "Airbrush Foundation or Traditional Foundation",
      "Strip Lashes",
      "Long-lasting application"
    ]
  }
];

const skincareServices = [
  {
    title: "The Luxe Glow Facial (75 Min)",
    description: "This facial is 'the works'. The Luxe Glow Facial is an all-inclusive treatment that combines the power of hydrodermabrasion, dermaplaning, and nano infusion.",
    features: [
      "Deep cleansing and exfoliation",
      "Hydrodermabrasion",
      "Dermaplaning",
      "Nano infusion of targeted serums"
    ]
  },
  {
    title: "Customized Signature Facial",
    description: "A tailored facial treatment designed specifically for your skin type and concerns.",
    features: [
      "Skin analysis",
      "Customized masks and serums",
      "Relaxing facial massage",
      "Professional recommendations"
    ]
  }
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-rose-900 mb-4">
          Our Services
        </h1>
        <p className="text-lg text-rose-700 font-light max-w-2xl mx-auto">
          From flawless bridal makeup to transformative skincare treatments, discover how we can enhance your natural beauty.
        </p>
      </motion.div>

      {/* Makeup Services Section */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-rose-900 mb-2">Makeup Services</h2>
          <div className="w-16 h-1 bg-rose-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {makeupServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-rose-100/50 flex flex-col h-full"
            >
              <h3 className="text-2xl font-serif text-rose-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <Check className="text-rose-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/book"
                className="w-full py-3 text-center bg-rose-100 text-rose-900 rounded-xl font-medium tracking-wider uppercase hover:bg-rose-200 transition-colors mt-auto"
              >
                Inquire Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skincare Services Section */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-rose-900 mb-2">Skincare Services</h2>
          <div className="w-16 h-1 bg-rose-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skincareServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-rose-100/50 flex flex-col h-full"
            >
              <h3 className="text-2xl font-serif text-rose-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <Check className="text-rose-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/book"
                className="w-full py-3 text-center bg-rose-100 text-rose-900 rounded-xl font-medium tracking-wider uppercase hover:bg-rose-200 transition-colors mt-auto"
              >
                Book Treatment
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
