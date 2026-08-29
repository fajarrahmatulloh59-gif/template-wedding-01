import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { WeddingData, EventDetail } from '../types';

interface EventDetailSectionProps {
  data: WeddingData;
}

export const EventDetailSection: React.FC<EventDetailSectionProps> = ({ data }) => {
  const { events } = data;

  const renderEventCard = (event: EventDetail, iconTheme: string) => {
    return (
      <motion.div
        key={event.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/95 rounded-3xl p-7 sm:p-10 border border-[#E5DACD] shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
      >
        {/* Top header badge */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#FAF5ED] border border-[#E2D5C3] text-[11px] font-semibold tracking-wider uppercase text-[#967C55]">
              {event.badge}
            </span>
            <Sparkles className="w-4 h-4 text-[#C5A880] opacity-60" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif-elegant font-bold text-[#1E1B18] tracking-tight mb-4">
            {event.title}
          </h3>

          <div className="w-12 h-[1px] bg-[#D8C7B4] mb-6" />

          {/* Date & Time details */}
          <div className="space-y-3.5 text-xs sm:text-sm text-[#544B40] font-light">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-[#B89665] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[#2C2723]">{event.day}, {event.date}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#B89665] mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-[#2C2723]">{event.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#B89665] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[#2C2723]">{event.venueName}</p>
                <p className="text-[#7A6F62] text-xs leading-relaxed mt-0.5">{event.address}</p>
              </div>
            </div>

            {event.dressCode && (
              <div className="pt-2 text-xs text-[#8A7D6F] italic border-t border-[#F2EAE0]">
                Dress code: <span className="font-medium text-[#544B40]">{event.dressCode}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 pt-4 border-t border-[#F0E6D8]">
          <a
            href={event.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#FAF6F0] text-[#3D362E] hover:bg-[#2C2724] hover:text-[#FAF7F2] border border-[#E5DACD] text-xs font-medium tracking-wider uppercase transition-all duration-300 group-hover:border-[#2C2724]"
          >
            <MapPin className="w-3.5 h-3.5 text-[#B89665]" />
            <span>Petunjuk Arah (Maps)</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="acara" className="relative py-16 sm:py-24 px-6 sm:px-10 max-w-5xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-[#A3927D] font-medium"
        >
          Rangkaian Acara
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-serif-elegant text-[#1F1B18] mt-2"
        >
          Agenda Pernikahan
        </motion.h2>
        <div className="w-16 h-[1px] bg-[#D4C5B2] mx-auto mt-4" />
      </div>

      {/* Cards Grid */}
      <div className={`grid grid-cols-1 ${events.resepsi?.enabled ? 'md:grid-cols-2' : 'max-w-md mx-auto'} gap-8`}>
        {renderEventCard(events.akad, 'gold')}
        {events.resepsi && events.resepsi.enabled && renderEventCard(events.resepsi, 'champagne')}
      </div>
    </section>
  );
};
