import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/common/logo.jpg';

export const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                          <img src={Logo} className='w-10 h-10 rounded-lg' alt="" />
                        </div>
              <span className="font-[Maybug] text-3xl text-gray-900 ">Essential Space</span>
            </Link>
            <p className="text-sm text-gray-400 font-[AksharRegular]">
              © {new Date().getFullYear()} Essential Space. All rights reserved.
            </p>
          </div>

          <div className="flex gap-8 font-[AksharRegular] text-sm text-gray-500">
             <Link to="/privacy" className="hover:text-black transition-colors animated-underline">Privacy Policy</Link>
             <Link to="/terms" className="hover:text-black transition-colors animated-underline">Terms of Use</Link>
             <Link to="/contact" className="hover:text-black transition-colors animated-underline">Contact</Link>
          </div>

        </div>
        
        <div className="mt-12 pt-8 font-[AksharRegular] border-t border-gray-50 text-center">
           <p className="text-2xl font-bold text-gray-900 mb-6">Ready to create more space in your mind?</p>
           <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition-colors">
             Download Essential Space
           </button>
        </div>
      </div>
    </footer>
  );
};