import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-rose-200/50 rounded-3xl transform -rotate-3 -z-10"></div>
          <img
            src="https://scontent.fbom12-2.fna.fbcdn.net/v/t51.75761-15/475411308_18390704458101436_1426883197635544368_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=d7KjSknPq1sQ7kNvwG7kQDk&_nc_oc=Adqj1tgR1SwaPnk9HV1d_n71pMn2h59PV-T1Re-5Z7e1WM0ED_gwSeQ9OLtgIMzOgw8&_nc_zt=23&_nc_ht=scontent.fbom12-2.fna&_nc_gid=HPqCjVtA1iq0T3LN0rJ5dg&_nc_ss=7a32e&oh=00_AfwQArqoJPFNVsJ4M0ijpZoi9vWuYpQIJGyi2YczUpDntw&oe=69C76B17"
            alt="Aaron Gomez - Makeup Artist"
            className="rounded-2xl shadow-2xl object-cover w-full h-[600px]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-rose-100/50"
        >
          <div>
            <h2 className="text-sm font-sans tracking-widest text-rose-600 uppercase mb-2">
              Meet the Artist
            </h2>
            <h1 className="text-4xl md:text-5xl font-serif text-rose-900 mb-6">
              Aaron Gomez
            </h1>
            <div className="w-20 h-1 bg-rose-400 rounded-full mb-8"></div>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed font-light">
            <p className="text-lg">
              Welcome to Aaron Gomez Skincare Studio & Makeup Artistry. With years of experience in the beauty industry, I specialize in creating flawless, long-lasting bridal makeup and providing transformative skincare treatments.
            </p>
            <p>
              My philosophy is simple: makeup should enhance your natural beauty, not mask it. Whether you're walking down the aisle, attending a special event, or simply treating yourself to a rejuvenating facial, my goal is to make you feel confident, radiant, and utterly beautiful.
            </p>
            <p>
              I am passionate about education and staying current with the latest techniques and products. From The Luxe Glow Facial to intricate bridal looks, every service is customized to meet your unique needs and skin type.
            </p>
            <p className="italic text-rose-800 font-serif mt-4">
              "Let's create something beautiful together."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
