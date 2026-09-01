import React from 'react';
import { motion } from 'motion/react';
import { Mail, Sparkles, Heart } from 'lucide-react';
import { WeddingData } from '../types';

interface OpeningCoverProps {
  data: WeddingData;
  guestName: string;
  onOpen: () => void;
}

export const OpeningCover: React.FC<OpeningCoverProps> = ({ data, guestName, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40, filter: 'blur(8px)' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between min-h-screen bg-[#FAF7F2] text-[#2C2926] p-6 sm:p-10 select-none overflow-hidden"
    >
      {/* Subtle background ambient frame */}
<div className="absolute inset-4 sm:inset-8 border border-[#DFD3C3] pointer-events-none rounded-2xl opacity-60">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center">
    <span className="bg-[#FAF7F2] px-4 text-[#B39366] text-xs uppercase tracking-[0.3em] font-medium whitespace-nowrap">
      Official Invitation
    </span>
  </div>
</div>


      {/* Decorative subtle corner accents */}
      <div className="absolute top-6 left-6 text-[#CBB8A1] text-xs font-serif-elegant opacity-40">✤</div>
      <div className="absolute top-6 right-6 text-[#CBB8A1] text-xs font-serif-elegant opacity-40">✤</div>
      <div className="absolute bottom-6 left-6 text-[#CBB8A1] text-xs font-serif-elegant opacity-40">✤</div>
      <div className="absolute bottom-6 right-6 text-[#CBB8A1] text-xs font-serif-elegant opacity-40">✤</div>

      {/* Top Header */}
      <div className="relative z-10 text-center pt-6 sm:pt-8">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs uppercase tracking-[0.35em] text-[#8C8275] font-medium"
        >
          {data.meta.heroTitle}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif-elegant tracking-tight text-[#1E1B18] mt-2 font-normal"
        >
          {data.groom.name} <span className="font-script-accent text-3xl sm:text-4xl text-[#B89665] px-1">&</span> {data.bride.name}
        </motion.h1>
      </div>

      {/* Centerpiece Image & Monogram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 my-auto py-4 flex flex-col items-center"
      >
        <div className="relative w-52 h-72 sm:w-60 sm:h-80 rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-xl border-4 border-[#FFFFFF] ring-1 ring-[#D8C7B4]/50">
          <img
            src={data.meta.coverPhoto}
            alt={`${data.groom.name} & ${data.bride.name}`}
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

          {/* Monogram tag */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-[#E8DFC8]/70">
            <p className="text-xs tracking-[0.2em] font-serif-elegant font-medium text-[#4A4237]">
              {data.meta.weddingDateShort}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Guest Greeting & Open Button */}
      <div className="relative z-10 w-full max-w-sm text-center pb-4 sm:pb-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mb-6 px-5 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-[#E5DACD] w-full"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#918576] font-medium mb-1">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <p className="text-lg sm:text-xl font-serif-elegant font-semibold text-[#25221F] tracking-wide">
            {guestName || 'Tamu Undangan'}
          </p>
          <p className="text-[10px] text-[#A3998D] italic mt-0.5">
            *Mohon maaf bila ada kesalahan penulisan nama/gelar
          </p>
        </motion.div>

        <motion.button
          id="btn-buka-undangan"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpen}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#2C2724] text-[#F9F7F3] shadow-lg hover:bg-[#1A1816] transition-all duration-300 ring-1 ring-[#D8C7B4]/40"
        >
          <Mail className="w-4 h-4 text-[#D8BC95] group-hover:scale-110 transition-transform" />
          <span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase">
            Buka Undangan
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D8BC95] opacity-70 group-hover:opacity-100 transition-opacity" />
        </motion.button>

        <p className="text-[11px] text-[#A69B8F] tracking-wider mt-4 flex items-center justify-center gap-1">
          <span>{data.meta.weddingDateFormatted}</span>
        </p>
      </div>
    </motion.div>
  );
};
