import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { WeddingData } from '../types';

interface CountdownSectionProps {
  data: WeddingData;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const CountdownSection: React.FC<CountdownSectionProps> = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(data.meta.countdownTarget).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isPast: false
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [data.meta.countdownTarget]);

  // Google Calendar URL Generator
  const generateGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`The Wedding of ${data.groom.name} & ${data.bride.name}`);
    const details = encodeURIComponent(
      `Pernikahan ${data.groom.fullName} & ${data.bride.fullName}\n\nAkad: ${data.events.akad.time}\nResepsi: ${data.events.resepsi?.time || ''}\nLokasi: ${data.location.venueName}`
    );
    const location = encodeURIComponent(data.location.address);
    // 20261220T010000Z format
    const startIso = '20261220T010000Z'; // 08:00 WIB is 01:00 UTC
    const endIso = '20261220T070000Z';   // 14:00 WIB is 07:00 UTC
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
  };

  return (
    <section id="countdown" className="relative py-16 sm:py-24 px-6 sm:px-10 max-w-4xl mx-auto text-center">
      {/* Background container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-[#E6DCCE] shadow-lg"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-[#9E8B75] font-medium mb-2">
          Menghitung Hari Bahagia
        </p>
        <h2 className="text-2xl sm:text-3xl font-serif-elegant font-bold text-[#231F1C]">
          Save The Date
        </h2>
        <p className="text-sm text-[#73685C] mt-1 font-serif-elegant tracking-wide">
          {data.meta.weddingDateFormatted}
        </p>

        {/* Counter Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto my-8">
          {[
            { label: 'Hari', value: timeLeft.days },
            { label: 'Jam', value: timeLeft.hours },
            { label: 'Menit', value: timeLeft.minutes },
            { label: 'Detik', value: timeLeft.seconds }
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8] shadow-sm"
            >
              <span className="text-2xl sm:text-4xl font-serif-elegant font-bold text-[#2C2723] tabular-nums">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#9E8B75] font-medium mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {timeLeft.isPast ? (
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-medium border border-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Alhamdulillah, Acara Telah Berlangsung</span>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-3">
            <a
              id="btn-save-google-calendar"
              href={generateGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2C2724] text-[#FAF7F2] text-xs sm:text-sm font-medium hover:bg-[#1A1816] transition-all duration-300 shadow-md ring-1 ring-[#D8C7B4]/40"
            >
              <Calendar className="w-4 h-4 text-[#D8BC95]" />
              <span>Simpan ke Google Calendar</span>
            </a>
          </div>
        )}
      </motion.div>
    </section>
  );
};
