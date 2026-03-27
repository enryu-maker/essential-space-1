import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/common/logo.jpg';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const goHome = () => {
    navigate('/');
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6'}
    `}>
      
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={goHome}>
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <img src={Logo} className='w-10 h-10 rounded-lg' alt="" />
          </div>
          <span className="font-[Maybug] text-3xl text-gray-900">Essential Space</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-[AksharMedium]">
          <button onClick={() => handleNavClick('features')} className="hover:text-black text-gray-600">Features</button>
          <button onClick={() => handleNavClick('pricing')} className="hover:text-black text-gray-600">Pricing</button>
          <button onClick={() => handleNavClick('download')} className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800">
            Download
          </button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          animate={{ rotate: mobileMenuOpen ? 90 : 0, scale: mobileMenuOpen ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="md:hidden"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Animated Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden font-[AksharMedium]"
          >
            <button onClick={() => handleNavClick('features')} className="text-left py-2 text-gray-900">
              Features
            </button>
            <button onClick={() => handleNavClick('pricing')} className="text-left py-2 text-gray-900">
              Pricing
            </button>
            <button onClick={() => handleNavClick('download')} className="bg-black text-white text-center py-3 rounded-xl">
              Download
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
