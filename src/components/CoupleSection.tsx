import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart } from 'lucide-react';
import { WeddingData } from '../types';

interface CoupleSectionProps {
  data: WeddingData;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ data }) => {
  const { groom, bride } = data;

  return (
    <section id="mempelai" className="relative py-16 sm:py-24 px-6 sm:px-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14 sm:mb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-[#A3927D] font-medium"
        >
          Kedua Mempelai
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-serif-elegant text-[#1F1B18] mt-2"
        >
          Mempelai yang Berbahagia
        </motion.h2>
        <div className="w-16 h-[1px] bg-[#D4C5B2] mx-auto mt-4" />
      </div>

      {/* Symmetrical Couple Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
        {/* Mempelai Pria (Groom) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center group"
        >
          <div className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-t-[120px] rounded-b-xl overflow-hidden shadow-lg border-4 border-white ring-1 ring-[#D8C7B4]/60 mb-6 bg-[#EBE4D8]">
            <img
              src={groom.photo}
              alt={groom.fullName}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          <span className="text-xs tracking-[0.25em] uppercase text-[#B39366] font-semibold mb-1">
            Mempelai Pria
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif-elegant font-bold text-[#1E1B18] tracking-tight">
            {groom.fullName}
          </h3>
          <p className="text-sm text-[#73685C] font-serif-elegant italic mt-1">
            ({groom.name})
          </p>

          <div className="my-4 px-4 py-2 border-t border-b border-[#ECE3D5] text-xs sm:text-sm text-[#665D52] max-w-xs leading-relaxed font-light">
            <p className="text-[#96897A] text-xs mb-0.5">{groom.sonOrDaughterOf}</p>
            <p className="font-medium text-[#38332C]">{groom.fatherName}</p>
            <p className="font-medium text-[#38332C]">dan {groom.motherName}</p>
          </div>

          {groom.instagram && (
            <a
              href={`https://instagram.com/${groom.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5DACD] text-xs text-[#6B6154] hover:text-[#1E1B18] hover:border-[#BFA88F] transition-all shadow-sm"
            >
              <Instagram className="w-3.5 h-3.5 text-[#B89665]" />
              <span>@{groom.instagram}</span>
            </a>
          )}
        </motion.div>

        {/* Mempelai Wanita (Bride) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center group"
        >
          <div className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-t-[120px] rounded-b-xl overflow-hidden shadow-lg border-4 border-white ring-1 ring-[#D8C7B4]/60 mb-6 bg-[#EBE4D8]">
            <img
              src={bride.photo}
              alt={bride.fullName}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          <span className="text-xs tracking-[0.25em] uppercase text-[#B39366] font-semibold mb-1">
            Mempelai Wanita
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif-elegant font-bold text-[#1E1B18] tracking-tight">
            {bride.fullName}
          </h3>
          <p className="text-sm text-[#73685C] font-serif-elegant italic mt-1">
            ({bride.name})
          </p>

          <div className="my-4 px-4 py-2 border-t border-b border-[#ECE3D5] text-xs sm:text-sm text-[#665D52] max-w-xs leading-relaxed font-light">
            <p className="text-[#96897A] text-xs mb-0.5">{bride.sonOrDaughterOf}</p>
            <p className="font-medium text-[#38332C]">{bride.fatherName}</p>
            <p className="font-medium text-[#38332C]">dan {bride.motherName}</p>
          </div>

          {bride.instagram && (
            <a
              href={`https://instagram.com/${bride.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5DACD] text-xs text-[#6B6154] hover:text-[#1E1B18] hover:border-[#BFA88F] transition-all shadow-sm"
            >
              <Instagram className="w-3.5 h-3.5 text-[#B89665]" />
              <span>@{bride.instagram}</span>
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
};
