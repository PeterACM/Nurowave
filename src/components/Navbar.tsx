import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Patient Journey', path: '/process' },
    { name: 'Academic Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 w-full z-50 bg-white border-b border-sky-400/10">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex justify-between items-center">
        <Link to="/" className="flex items-center origin-left">
          <Logo />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-sans font-medium text-sm md:text-base tracking-tight transition-colors duration-300 ${
                location.pathname === link.path 
                  ? 'text-primary' 
                  : 'text-slate-600 hover:text-primary'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
          
          <Link 
            to="/contact"
            className="bg-tertiary text-white font-bold px-6 py-2 rounded-lg hover:bg-tertiary/90 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            Book Now
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-primary p-2 hover:bg-primary/5 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-sky-400/10 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xl font-serif ${
                    location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block bg-tertiary text-white font-bold px-8 py-3 rounded-xl text-center shadow-lg shadow-tertiary/20"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
