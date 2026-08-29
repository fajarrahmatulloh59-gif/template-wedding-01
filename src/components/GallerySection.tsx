import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { WeddingData, GalleryPhoto } from '../types';

interface GallerySectionProps {
  data: WeddingData;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ data }) => {
  const { gallery } = data;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  if (!gallery.enabled || !gallery.photos || gallery.photos.length === 0) {
    return null;
  }

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % gallery.photos.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + gallery.photos.length) % gallery.photos.length);
    }
  };

  return (
    <section id="galeri" className="relative py-16 sm:py-24 px-6 sm:px-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-[#A3927D] font-medium"
        >
          {gallery.subtitle || 'Dokumentasi'}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-serif-elegant text-[#1F1B18] mt-2"
        >
          {gallery.title || 'Galeri Foto'}
        </motion.h2>
        <div className="w-16 h-[1px] bg-[#D4C5B2] mx-auto mt-4" />
      </div>

      {/* Grid of Photos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
        {gallery.photos.map((photo, index) => (
          <motion.div
            key={photo.id || index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            onClick={() => openLightbox(index)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#EFE9DF] border border-[#E5DACD] aspect-square shadow-sm hover:shadow-lg transition-all"
          >
            <img
              src={photo.url}
              alt={photo.alt || `Foto Pernikahan ${index + 1}`}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Overlay on hover */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-[#2C2724]">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {photo.caption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[11px] text-white/90 truncate font-serif-elegant">{photo.caption}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 z-50 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 z-50 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image Display */}
            <div
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery.photos[selectedPhotoIndex].url}
                alt={gallery.photos[selectedPhotoIndex].alt}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/20"
                referrerPolicy="no-referrer"
              />
              {gallery.photos[selectedPhotoIndex].caption && (
                <p className="text-white/80 text-sm font-serif-elegant mt-3 tracking-wide text-center">
                  {gallery.photos[selectedPhotoIndex].caption}
                </p>
              )}
              <span className="text-white/50 text-xs mt-1">
                {selectedPhotoIndex + 1} / {gallery.photos.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
