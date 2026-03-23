import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 min-h-[80vh]">
        <div className="max-w-4xl w-full text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/40 blur-3xl rounded-full -z-10 transform scale-150"></div>
            <h1 className="text-5xl md:text-7xl font-serif text-rose-900 mb-6 drop-shadow-sm">
              Enhancing Your Natural Beauty
            </h1>
            <p className="text-xl md:text-2xl text-rose-800 font-light max-w-2xl mx-auto leading-relaxed">
              Bridal Makeup Specialist & Skincare Expert
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <Link
              to="/book"
              className="px-8 py-4 bg-rose-800 text-white rounded-full font-medium tracking-wider uppercase hover:bg-rose-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm text-rose-900 border border-rose-200 rounded-full font-medium tracking-wider uppercase hover:bg-white transition-all shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-rose-900 mb-4">Signature Services</h2>
            <div className="w-16 h-1 bg-rose-400 mx-auto rounded-full"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Bridal Makeup",
                desc: "Flawless, long-lasting looks for your special day.",
                img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Skincare Services",
                desc: "Rejuvenating facials like The Luxe Glow Facial.",
                img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Special Events",
                desc: "Glamour for proms, photoshoots, and parties.",
                img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
              },
            ].map((service, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg bg-white/50 backdrop-blur-sm border border-rose-100/50">
                <div className="aspect-w-4 aspect-h-5 w-full overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif text-rose-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center text-rose-600 hover:text-rose-800 font-medium text-sm uppercase tracking-wider">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-rose-900 mb-4">Meet Aaron Gomez</h2>
              <div className="w-16 h-1 bg-rose-400 rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                With years of experience in the beauty industry, I specialize in creating flawless, long-lasting bridal makeup and providing transformative skincare treatments.
              </p>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                My philosophy is simple: makeup should enhance your natural beauty, not mask it. Whether you're walking down the aisle or treating yourself to a rejuvenating facial, my goal is to make you feel confident and radiant.
              </p>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-block px-8 py-3 bg-white/80 text-rose-900 border border-rose-200 rounded-full font-medium tracking-wider uppercase hover:bg-white transition-all shadow-sm"
                >
                  Read My Story
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute -inset-4 bg-rose-200/50 rounded-3xl transform rotate-3 -z-10"></div>
              <img
                src="https://scontent.fbom12-2.fna.fbcdn.net/v/t51.75761-15/475411308_18390704458101436_1426883197635544368_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=d7KjSknPq1sQ7kNvwG7kQDk&_nc_oc=Adqj1tgR1SwaPnk9HV1d_n71pMn2h59PV-T1Re-5Z7e1WM0ED_gwSeQ9OLtgIMzOgw8&_nc_zt=23&_nc_ht=scontent.fbom12-2.fna&_nc_gid=HPqCjVtA1iq0T3LN0rJ5dg&_nc_ss=7a32e&oh=00_AfwQArqoJPFNVsJ4M0ijpZoi9vWuYpQIJGyi2YczUpDntw&oe=69C76B17"
                alt="Aaron Gomez working on a client"
                className="rounded-2xl shadow-xl object-cover w-full h-[500px]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-rose-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center space-x-1 text-rose-300 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif italic font-light leading-relaxed mb-8">
              "Aaron is an absolute magician! He made me feel like the most beautiful version of myself on my wedding day. My makeup stayed flawless through tears, sweat, and dancing all night long."
            </h2>
            <p className="text-rose-200 tracking-widest uppercase text-sm font-medium">
              Sarah Jenkins, Bride
            </p>
            <div className="mt-12">
              <Link
                to="/testimonials"
                className="inline-block px-8 py-3 border border-rose-300 text-rose-100 rounded-full font-medium tracking-wider uppercase hover:bg-rose-800 transition-all"
              >
                Read More Reviews
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
