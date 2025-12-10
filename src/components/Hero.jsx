import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Apple } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

import ios from '../assets/ios.png'

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-30 md:pb-32 overflow-hidden font-['Akshar']">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-8xl font-[AksharMedium] text-gray-900 mb-8 tracking-tighter leading-[0.9]">
              Essential Space
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 font-light mb-8 font-[SweetApricot]">
              A calmer way to remember, plan, and think.
            </p>
            <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-[AksharMedium]">
              Capture notes, tasks, images, and voice recordings — all in one clean space designed to help you stay organized without the overwhelm.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button className="bg-black text-white px-8 py-4 rounded-full font-[AksharSemiBold] flex justify-center items-center gap-2 hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-200">
                <img src={ios} className="w-5 h-5 object-contain" alt="" />
                <span className="font-[AksharSemiBold] leading-none">Download on App Store</span>
              </button>

              <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-900 font-[AksharMedium] flex items-center gap-2 hover:gap-3 transition-all px-6 py-4">
                See how it works <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="mt-8 text-sm text-gray-400 font-[AksharLight]">
              Designed for iPhone & MacBook.
            </p>
          </motion.div>
        </div>

        {/* Visual Content */}
        {/* Visual Content */}
        <div className="flex-1 relative flex justify-center ">
          {/* Background blob */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gray-100 rounded-full blur-3xl opacity-40 -z-10 animate-pulse"></div>

          <motion.div
            className="relative" // <-- THIS stays in layout now
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PhoneMockup className="md:rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out" />
          </motion.div>
        </div>


      </div>
    </section>
  );
};