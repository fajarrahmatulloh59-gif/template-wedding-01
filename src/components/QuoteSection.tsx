import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { WeddingData } from '../types';

interface QuoteSectionProps {
  data: WeddingData;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ data }) => {
  const { quote } = data;

  return (
    <section id="quote" className="relative py-16 sm:py-20 px-6 sm:px-10 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/80 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-[#E6DCce] shadow-sm text-center"
      >
        {/* Subtle decorative quote icon */}
        <div className="flex justify-center mb-6">
          <div className="w-10 h-10 rounded-full bg-[#FAF5EC] border border-[#E0D1BF] flex items-center justify-center text-[#B89665]">
            <Quote className="w-5 h-5 opacity-80" />
          </div>
        </div>

        {/* Arabic Verse */}
        <div className="mb-6">
          <p className="font-arabic-calligraphy text-2xl sm:text-3xl md:text-4xl text-[#2B2620] leading-loose sm:leading-[2.2] tracking-wide" dir="rtl">
            {quote.arabicText}
          </p>
        </div>

        <div className="w-12 h-[1px] bg-[#D8C7B4] mx-auto my-6" />

        {/* Indonesian Translation */}
        <blockquote className="text-sm sm:text-base text-[#595045] font-light leading-relaxed max-w-2xl mx-auto italic font-serif-elegant">
          {quote.translation}
        </blockquote>

        {/* Source citation */}
        <div className="mt-6">
          <span className="inline-block px-4 py-1 rounded-full bg-[#FAF5ED] border border-[#E8DEC8] text-xs font-semibold tracking-widest uppercase text-[#967C55]">
            {quote.source}
          </span>
        </div>
      </motion.div>
    </section>
  );
};
