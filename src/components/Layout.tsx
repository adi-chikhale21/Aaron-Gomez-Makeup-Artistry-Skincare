import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Instagram, Facebook, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Book", path: "/book" },
  { name: "Gift Card", path: "/gift-card" },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-serif text-rose-900 tracking-wider uppercase">
                Aaron Gomez
                <span className="block text-xs font-sans tracking-widest text-rose-600 mt-1">
                  Makeup Artistry & Skincare
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium tracking-wide uppercase transition-colors hover:text-rose-600",
                    location.pathname === link.path
                      ? "text-rose-700 border-b-2 border-rose-500 pb-1"
                      : "text-gray-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-rose-900 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-rose-200"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-3 py-3 text-base font-medium tracking-wide uppercase rounded-md",
                      location.pathname === link.path
                        ? "bg-rose-50 text-rose-900"
                        : "text-gray-600 hover:bg-rose-50 hover:text-rose-900"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-white/50 backdrop-blur-sm border-t border-rose-200/50 mt-12 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-2xl font-serif text-rose-900 mb-6 uppercase tracking-widest text-center">
            Aaron Gomez
          </h2>
          <div className="flex space-x-6 mb-8">
            <a href="#" className="text-gray-500 hover:text-rose-600 transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-rose-600 transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-rose-600 transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Aaron Gomez Makeup Artistry & Skincare. All rights reserved.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
            <p className="text-xs text-gray-400 text-center">
              By appointment only. Call (815) 701-1691
            </p>
            <span className="hidden sm:inline text-gray-300">|</span>
            <Link to="/gift-card" className="text-xs text-rose-600 hover:text-rose-800 uppercase tracking-wider font-medium">
              Purchase a Gift Card
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
