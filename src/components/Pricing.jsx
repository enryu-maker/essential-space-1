import React from 'react';
import { Check } from 'lucide-react';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-[AksharSemiBold] text-gray-900 mb-4">Simple Premium Access</h2>
        <p className="text-gray-500 font-[AksharRegular] mb-12 max-w-xl mx-auto">
          Essential Space offers a focused experience without ads, noise, or locked essential features.
        </p>

        <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 max-w-lg mx-auto relative overflow-hidden ring-1 ring-gray-100">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200"></div>
          
          <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-8">
            <div className="text-left">
              <h3 className="text-3xl font-[AksharSemiBold] text-gray-900">Monthly</h3>
              <p className="text-gray-400 text-sm font-[AksharRegular]">Billed every month</p>
            </div>
            <div className="text-right">
              <span className=" text-xl md:text-4xl font-[AksharSemiBold] text-gray-900">$1.99</span>
              <span className="text-gray-400 font-[AksharSemiBold]">/month</span>
            </div>
          </div>

          <div className="space-y-5 mb-12 text-left">
             <h4 className="font-[AksharSemiBold] text-gray-900 mb-4">Premium Features</h4>
             {[
               "Unlimited Notes",
               "Sync Across Devices",
               "Voice-to-Text AI Summaries",
               "Custom iOS Shortcut Actions",
               "Priority Support",
               "All Future Updates"
             ].map((feature, i) => (
               <div key={i} className="flex items-center gap-3 group">
                 <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors duration-300">
                   <Check className="w-3 h-3 text-white" strokeWidth={3} />
                 </div>
                 <span className="font-[AksharRegular] text-gray-600 group-hover:text-gray-900 transition-colors">{feature}</span>
               </div>
             ))}
          </div>

          {/* Static Informational Badge */}
          <div className="w-full bg-gray-100 border border-gray-200 text-gray-500 py-4 px-1 md:px-0 rounded-2xl font-[AksharSemiBold] cursor-default select-none flex items-center justify-center gap-2">
            <span>Includes all Premium Features</span>
          </div>
          
          <p className="mt-4 font-[AksharRegular] text-xs text-gray-400">
            Available via in-app purchase. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};