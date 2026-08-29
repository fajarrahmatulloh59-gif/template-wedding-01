import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { WeddingData } from '../types';

interface IntroSectionProps {
  data: WeddingData;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ data }) => {
  return (
    <section id="intro" className="relative py-16 sm:py-24 px-6 sm:px-10 text-center max-w-3xl mx-auto">
      {/* Decorative center top ornament */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-6"
      >
        <span className="text-[#C5A880] text-sm tracking-[0.4em] uppercase font-medium">
          Undangan Pernikahan
        </span>
        <div className="w-12 h-[1px] bg-[#D4C5B2] my-3" />
      </motion.div>

      {/* Bismillah Calligraphy */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-6"
      >
        <p className="font-arabic-calligraphy text-2xl sm:text-3xl md:text-4xl text-[#3A342C] leading-relaxed">
          {data.intro.bismillahText}
        </p>
      </motion.div>

      {/* Salam & Introduction text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-base sm:text-lg font-serif-elegant font-semibold text-[#2C2723] tracking-wide">
          {data.intro.salam}
        </h2>
        <p className="text-sm sm:text-base text-[#61574B] leading-relaxed font-light max-w-xl mx-auto">
          {data.intro.message}
        </p>
      </motion.div>
    </section>
  );
};
