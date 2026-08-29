import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { WeddingData } from '../types';

interface LoveStorySectionProps {
  data: WeddingData;
}

export const LoveStorySection: React.FC<LoveStorySectionProps> = ({ data }) => {
  const { loveStory } = data;

  if (!loveStory.enabled || !loveStory.stories || loveStory.stories.length === 0) {
    return null;
  }

  return (
    <section id="kisah" className="relative py-16 sm:py-24 px-6 sm:px-10 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14 sm:mb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-[#A3927D] font-medium"
        >
          Perjalanan Cinta
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-serif-elegant text-[#1F1B18] mt-2"
        >
          Our Love Story
        </motion.h2>
        <div className="w-16 h-[1px] bg-[#D4C5B2] mx-auto mt-4" />
      </div>

      {/* Timeline List */}
      <div className="relative border-l-2 border-[#E5DACD] ml-4 sm:ml-32 space-y-12 pb-4">
        {loveStory.stories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="relative pl-8 sm:pl-10"
          >
            {/* Timeline node */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#FAF7F2] border-2 border-[#B89665] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B89665]" />
            </div>

            {/* Year Tag positioned on desktop */}
            <div className="sm:absolute sm:-left-36 sm:top-0 sm:text-right">
              <span className="inline-block px-3 py-1 rounded-full bg-[#2C2724] text-[#FAF7F2] text-xs font-serif-elegant font-semibold tracking-widest shadow-sm">
                {story.year}
              </span>
            </div>

            {/* Card Content */}
            <div className="bg-white/90 rounded-2xl p-6 sm:p-7 border border-[#E6DCCE] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-serif-elegant font-bold text-[#231F1C] mb-2">
                {story.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#615649] font-light leading-relaxed">
                {story.description}
              </p>

              {story.image && (
                <div className="mt-4 rounded-xl overflow-hidden h-44 sm:h-52 w-full border border-[#E8DEC8]">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
