import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Mic, Image, Link2, CheckSquare, RefreshCw, Zap, Infinity, Edit3, ArrowUpRight } from 'lucide-react';

// ---------------- FEATURE DATA ----------------

const features = [
  {
    title: "Voice Notes + AI Summary",
    description: "Record thoughts freely — our AI instantly turns your ramblings into clean, actionable summaries you can revisit anytime.",
    icon: Mic,
    className: "md:col-span-1"
  },
  {
    title: "Quick Notes",
    description: "A distraction-free writing space for your best ideas.",
    icon: Edit3
  },
  {
    title: "Image Notes",
    description: "Save whiteboards and screenshots.",
    icon: Image
  },
  {
    title: "Sync Across Devices",
    description: "Accessible on iOS & macOS",
    icon: RefreshCw
  },
  {
    title: "Save URLs",
    description: "Collect articles and research links.",
    icon: Link2
  },
  {
    title: "To-Do Lists",
    description: "Minimal task management without the noise.",
    icon: CheckSquare
  },
  {
    title: "iOS Trigger Shortcut",
    description: "Capture ideas in milliseconds from your home screen.",
    icon: Zap
  },
  // {
  //   title: "Unlimited Space",
  //   description: "Your thinking shouldn’t have limits. Create as many notes as you need.",
  //   icon: Infinity
  // }
];

// ---------------- MOTION VARIANT ----------------

const fadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.45 }
  })
};

// ---------------- CARD COMPONENT ----------------

const FeatureCard = memo(({ feature, delay }) => {
  const large = feature.className?.includes("col-span-2");

  return (
    <motion.div
      variants={fadeVariant}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`group relative p-6 sm:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm
      hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${feature.className || ''}`}
    >
      {/* Hover Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative z-10 flex flex-col gap-6 h-full">

        {/* Icon + Arrow */}
        <div className="flex justify-between">
          <div className="w-11 h-11 sm:w-14 sm:h-14 bg-black rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition">
            <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.4} />
          </div>

          {large && (
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white"
            >
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            </motion.div>
          )}
        </div>

        {/* Text */}
        <div>
          <h3 className="text-xl sm:text-2xl font-[AksharSemiBold] text-gray-900 tracking-tight mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-500 text-base font-[AksharRegular] sm:text-lg leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
});

// ---------------- MAIN SECTION ----------------

export const Features = () => {
  return (
    <section id="features" className="py-20 sm:py-28 bg-[#FAFAFA] font-['Akshar']">
      <div className="max-w-6xl mx-auto px-5">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-[AksharSemiBold] text-gray-900 mb-14 sm:mb-24 tracking-tight text-center md:text-left"
        >
          Everything organized. <br />
          <span className="text-gray-300 font-[AksharLight]">Without the chaos.</span>
        </motion.h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-fr gap-6 sm:gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} delay={i * 0.05} />
          ))}
        </div>

      </div>
    </section>
  );
};
