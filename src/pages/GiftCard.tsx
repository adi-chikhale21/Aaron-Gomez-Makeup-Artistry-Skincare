import { motion } from "framer-motion";
import { Gift, CreditCard, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";

export default function GiftCard() {
  const [amount, setAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAmountClick = (val: number) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/80 backdrop-blur-md p-12 rounded-3xl shadow-xl border border-rose-100/50 flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="text-green-500" size={40} />
          </div>
          <h2 className="text-3xl font-serif text-rose-900 mb-4">Purchase Successful!</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Thank you for your purchase. Your gift card details have been sent to your email.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 bg-rose-800 text-white rounded-full font-medium tracking-wider uppercase hover:bg-rose-900 transition-colors"
          >
            Buy Another Gift Card
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-rose-100 rounded-full">
            <Gift className="text-rose-600" size={40} />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-rose-900 mb-4">
          Give the Gift of Beauty
        </h1>
        <p className="text-lg text-rose-700 font-light max-w-2xl mx-auto">
          Treat someone special to a luxurious skincare treatment or professional makeup application.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl border border-rose-100/50 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Gift Card Preview */}
          <div className="md:col-span-2 bg-rose-800 p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-rose-700 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-rose-900 rounded-full opacity-50 blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-serif tracking-widest uppercase mb-1">Aaron Gomez</h3>
              <p className="text-rose-200 text-xs tracking-widest uppercase">Skincare & Makeup</p>
            </div>
            
            <div className="relative z-10 mt-16">
              <p className="text-rose-200 text-sm mb-1 uppercase tracking-wider">Gift Card Value</p>
              <p className="text-5xl font-light">${customAmount || amount}</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Amount</label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[50, 100, 150, 200, 250].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleAmountClick(val)}
                      className={`py-3 rounded-xl border font-medium transition-colors ${
                        amount === val && !customAmount
                          ? "bg-rose-100 border-rose-500 text-rose-900"
                          : "bg-white/50 border-rose-200 text-gray-600 hover:bg-rose-50"
                      }`}
                    >
                      ${val}
                    </button>
                  ))}
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                    <input
                      type="number"
                      placeholder="Custom"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount(0);
                      }}
                      className={`w-full pl-8 pr-4 py-3 rounded-xl border outline-none transition-colors ${
                        customAmount
                          ? "bg-rose-100 border-rose-500 text-rose-900"
                          : "bg-white/50 border-rose-200 text-gray-600 focus:border-rose-400"
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Recipient Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-2 focus:ring-rose-500 outline-none bg-white/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Recipient Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-2 focus:ring-rose-500 outline-none bg-white/50" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Personal Message (Optional)</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-2 focus:ring-rose-500 outline-none bg-white/50 resize-none"></textarea>
                </div>
              </div>

              <div className="pt-6 border-t border-rose-100">
                <button
                  type="submit"
                  className="w-full py-4 bg-rose-800 text-white rounded-xl font-medium tracking-wider uppercase hover:bg-rose-900 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  <CreditCard className="mr-2" size={20} />
                  Checkout - ${customAmount || amount}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
