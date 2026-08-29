import React from 'react';
import { motion } from 'motion/react';
import { Heart, ChevronUp, Share2 } from 'lucide-react';
import { WeddingData } from '../types';

interface ClosingSectionProps {
  data: WeddingData;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ data }) => {
  const { closing, groom, bride, meta } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `The Wedding of ${groom.name} & ${bride.name}`,
        text: `Undangan Pernikahan ${groom.name} & ${bride.name} - ${meta.weddingDateFormatted}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link undangan berhasil disalin ke clipboard!');
    }
  };

  return (
    <footer id="penutup" className="relative pt-16 sm:pt-24 pb-28 sm:pb-20 px-6 sm:px-10 text-center max-w-4xl mx-auto">
      {/* Decorative Closing Photo Frame */}
      {meta.closingPhoto && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-md mx-auto mb-12 rounded-t-[140px] rounded-b-3xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-[#D8C7B4]/60"
        >
          <img
            src={meta.closingPhoto}
            alt={`${groom.name} & ${bride.name}`}
            className="w-full h-80 object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-4 inset-x-0 text-white font-serif-elegant tracking-widest text-sm uppercase font-medium">
            {meta.weddingDateFormatted}
          </div>
        </motion.div>
      )}

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-2xl mx-auto"
      >
        <p className="text-sm sm:text-base text-[#594E41] font-light leading-relaxed font-serif-elegant italic">
          "{closing.message}"
        </p>

        <p className="text-sm font-semibold text-[#29241F] font-serif-elegant">
          {closing.salamClosing}
        </p>

        <div className="pt-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9E8B75] font-medium mb-1">
            Kami yang berbahagia,
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif-elegant font-bold text-[#1C1917] tracking-tight">
            {closing.coupleSignature || `${groom.name} & ${bride.name}`}
          </h2>
          <p className="text-xs text-[#8A7D6F] mt-1 font-light">
            Beserta segenap keluarga besar
          </p>
        </div>

        {/* Action buttons (Share & Back to top) */}
        <div className="flex items-center justify-center gap-3 pt-8">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E0D5C3] text-xs text-[#52493E] hover:bg-[#FAF5EC] transition-all shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5 text-[#B89665]" />
            <span>Bagikan Undangan</span>
          </button>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2C2724] text-[#FAF7F2] text-xs hover:bg-[#1A1816] transition-all shadow-sm"
          >
            <ChevronUp className="w-3.5 h-3.5 text-[#D8BC95]" />
            <span>Kembali ke Atas</span>
          </button>
        </div>

        {/* Footer Credit Note */}
        <div className="pt-12 pb-4 text-[11px] text-[#A89C8E] border-t border-[#EAE0D2]/80 mt-12">
          <p className="tracking-widest uppercase font-medium">Template 01 — Minimalist Elegant Wedding</p>
          <p className="mt-0.5 text-[10px] text-[#B8ADA0]">Designed for seamless smartphone & WhatsApp distribution</p>
        </div>
      </motion.div>
    </footer>
  );
};
