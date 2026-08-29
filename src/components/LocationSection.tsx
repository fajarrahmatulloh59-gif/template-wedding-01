import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { WeddingData } from '../types';

interface LocationSectionProps {
  data: WeddingData;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ data }) => {
  const { location } = data;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(location.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="lokasi" className="relative py-16 sm:py-24 px-6 sm:px-10 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-[#A3927D] font-medium"
        >
          Petunjuk Lokasi
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-serif-elegant text-[#1F1B18] mt-2"
        >
          {location.title || 'Denah & Lokasi Acara'}
        </motion.h2>
        <div className="w-16 h-[1px] bg-[#D4C5B2] mx-auto mt-4" />
      </div>

      {/* Location Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#E6DCCE] shadow-md space-y-6"
      >
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex p-3 rounded-full bg-[#FAF5ED] border border-[#E5DACD] text-[#B89665] mb-1">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-serif-elegant font-bold text-[#231F1C]">
            {location.venueName}
          </h3>
          <p className="text-sm text-[#6B6154] font-light leading-relaxed">
            {location.address}
          </p>

          {location.note && (
            <p className="text-xs text-[#8A7C6D] italic bg-[#FAF7F2] py-2 px-4 rounded-xl inline-block border border-[#EDE4D6]">
              💡 {location.note}
            </p>
          )}
        </div>

        {/* Embedded Map Frame */}
        <div className="rounded-2xl overflow-hidden h-64 sm:h-80 w-full border border-[#E5DACD] shadow-inner bg-[#EAE3D6]">
          <iframe
            title="Google Maps Lokasi Pernikahan"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273646549646!2d106.84078497586884!3d-6.227606360989269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3900222e96d%3A0x8674d89faec0b1f2!2sKota%20Kasablanka!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Actions Button */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <a
            id="btn-buka-google-maps"
            href={location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2C2724] text-[#FAF7F2] text-xs sm:text-sm font-medium tracking-wide hover:bg-[#1A1816] transition-all shadow-md ring-1 ring-[#D8C7B4]/40"
          >
            <Navigation className="w-4 h-4 text-[#D8BC95]" />
            <span>Buka di Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>

          <button
            onClick={handleCopyAddress}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FAF7F2] text-[#4A4237] text-xs sm:text-sm font-medium border border-[#E2D6C6] hover:bg-[#F2ECE2] transition-colors shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Alamat Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#9E8B75]" />
                <span>Salin Alamat</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
};
