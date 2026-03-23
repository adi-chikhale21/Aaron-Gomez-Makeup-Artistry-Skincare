import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Bride",
    content: "Aaron is an absolute magician! He made me feel like the most beautiful version of myself on my wedding day. My makeup stayed flawless through tears, sweat, and dancing all night long.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    role: "Skincare Client",
    content: "The Luxe Glow Facial completely transformed my skin before my big day. Aaron's studio is so relaxing, and his knowledge of skincare is unmatched. I've never felt so glowing!",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Chen",
    role: "Bridesmaid",
    content: "I've had my makeup done professionally many times, but Aaron is by far the best. He listened to exactly what I wanted and executed it perfectly. Highly recommend him for any special event.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-rose-900 mb-4">
          Client Love
        </h1>
        <p className="text-lg text-rose-700 font-light max-w-2xl mx-auto">
          Hear what my beautiful brides and clients have to say about their experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-rose-100/50 flex flex-col items-center text-center space-y-6"
          >
            <div className="flex space-x-1 text-rose-500">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-700 italic font-serif leading-relaxed">
              "{testimonial.content}"
            </p>
            <div>
              <h3 className="text-lg font-serif text-rose-900">{testimonial.name}</h3>
              <p className="text-sm text-rose-600 uppercase tracking-widest mt-1">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
