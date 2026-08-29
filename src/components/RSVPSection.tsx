import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquareHeart, Send, UserCheck, Users, Clock, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { WishMessage } from '../types';

interface RSVPSectionProps {
  wishes: WishMessage[];
  onAddWish: (wish: Omit<WishMessage, 'id' | 'createdAt'>) => void;
  defaultGuestName?: string;
}

export const RSVPSection: React.FC<RSVPSectionProps> = ({ wishes, onAddWish, defaultGuestName }) => {
  const [name, setName] = useState(defaultGuestName || '');
  const [attendance, setAttendance] = useState<'hadir' | 'tidak' | 'ragu'>('hadir');
  const [pax, setPax] = useState(1);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    onAddWish({
      name: name.trim(),
      attendance,
      pax,
      message: message.trim()
    });

    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="ucapan" className="relative py-16 sm:py-24 px-6 sm:px-10 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-[#A3927D] font-medium"
        >
          Konfirmasi & Doa Restu
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-serif-elegant text-[#1F1B18] mt-2"
        >
          RSVP & Buku Tamu
        </motion.h2>
        <div className="w-16 h-[1px] bg-[#D4C5B2] mx-auto mt-4" />
        <p className="text-xs sm:text-sm text-[#6B6154] font-light max-w-md mx-auto mt-4 leading-relaxed">
          Untaian doa dan kehadiran Bapak/Ibu/Saudara/i merupakan kebahagiaan tak ternilai bagi kami.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 bg-white/95 rounded-3xl p-6 sm:p-8 border border-[#E6DCCE] shadow-md"
        >
          <h3 className="text-xl font-serif-elegant font-bold text-[#231F1C] mb-6 flex items-center gap-2">
            <MessageSquareHeart className="w-5 h-5 text-[#B89665]" />
            <span>Kirim Ucapan & Doa</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#6E6356] uppercase tracking-wider mb-1.5">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Dimas & Keluarga"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E2D5C3] bg-[#FAF7F2] text-sm text-[#2C2723] focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#6E6356] uppercase tracking-wider mb-1.5">
                Konfirmasi Kehadiran
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setAttendance('hadir')}
                  className={`py-2 px-2 rounded-xl text-xs font-medium border flex flex-col items-center gap-1 transition-all ${
                    attendance === 'hadir'
                      ? 'bg-[#2C2724] text-[#FAF7F2] border-[#2C2724] shadow-sm'
                      : 'bg-[#FAF7F2] text-[#6E6356] border-[#E2D5C3] hover:bg-white'
                  }`}
                >
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  <span>Hadir</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAttendance('tidak')}
                  className={`py-2 px-2 rounded-xl text-xs font-medium border flex flex-col items-center gap-1 transition-all ${
                    attendance === 'tidak'
                      ? 'bg-[#2C2724] text-[#FAF7F2] border-[#2C2724] shadow-sm'
                      : 'bg-[#FAF7F2] text-[#6E6356] border-[#E2D5C3] hover:bg-white'
                  }`}
                >
                  <XCircle className="w-4 h-4 text-rose-400" />
                  <span>Maaf, Berhalangan</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAttendance('ragu')}
                  className={`py-2 px-2 rounded-xl text-xs font-medium border flex flex-col items-center gap-1 transition-all ${
                    attendance === 'ragu'
                      ? 'bg-[#2C2724] text-[#FAF7F2] border-[#2C2724] shadow-sm'
                      : 'bg-[#FAF7F2] text-[#6E6356] border-[#E2D5C3] hover:bg-white'
                  }`}
                >
                  <HelpCircle className="w-4 h-4 text-amber-400" />
                  <span>Masih Ragu</span>
                </button>
              </div>
            </div>

            {attendance === 'hadir' && (
              <div>
                <label className="block text-xs font-medium text-[#6E6356] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#B89665]" />
                  <span>Jumlah Tamu yang Hadir</span>
                </label>
                <select
                  value={pax}
                  onChange={(e) => setPax(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E2D5C3] bg-[#FAF7F2] text-sm text-[#2C2723] focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:bg-white"
                >
                  <option value={1}>1 Orang</option>
                  <option value={2}>2 Orang (Bersama Pasangan)</option>
                  <option value={3}>3 Orang</option>
                  <option value={4}>4 Orang (Keluarga)</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-[#6E6356] uppercase tracking-wider mb-1.5">
                Ucapan & Doa Restu
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan ucapan dan doa terbaik Anda..."
                className="w-full px-4 py-2.5 rounded-xl border border-[#E2D5C3] bg-[#FAF7F2] text-sm text-[#2C2723] focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:bg-white transition-all resize-none"
              />
            </div>

            <button
              id="btn-kirim-ucapan"
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#2C2724] text-[#FAF7F2] text-xs sm:text-sm font-medium tracking-wide hover:bg-[#1A1816] transition-all shadow-md"
            >
              <Send className="w-3.5 h-3.5 text-[#D8BC95]" />
              <span>Kirim Ucapan & Konfirmasi</span>
            </button>

            {submitted && (
              <p className="text-center text-xs text-emerald-700 font-medium animate-pulse mt-2">
                Terima kasih! Doa dan konfirmasi Anda telah tersimpan.
              </p>
            )}
          </form>
        </motion.div>

        {/* Wishes List Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 bg-white/95 rounded-3xl p-6 sm:p-8 border border-[#E6DCCE] shadow-md flex flex-col h-[520px]"
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#F0E6D8] mb-4">
            <h3 className="text-lg font-serif-elegant font-bold text-[#231F1C]">
              Doa & Ucapan ({wishes.length})
            </h3>
            <span className="text-xs text-[#9E8B75] tracking-wider uppercase font-medium">
              Live Guestbook
            </span>
          </div>

          {/* Scrollable list */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-1">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE0D2] text-xs sm:text-sm space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#25221F] font-serif-elegant text-base">
                    {item.name}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium ${
                      item.attendance === 'hadir'
                        ? 'bg-emerald-100 text-emerald-800'
                        : item.attendance === 'tidak'
                        ? 'bg-stone-200 text-stone-700'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {item.attendance === 'hadir'
                      ? `Hadir (${item.pax || 1} orang)`
                      : item.attendance === 'tidak'
                      ? 'Berhalangan'
                      : 'Ragu-ragu'}
                  </span>
                </div>

                <p className="text-[#594F43] font-light leading-relaxed whitespace-pre-wrap">
                  {item.message}
                </p>

                <div className="flex items-center gap-1 text-[10px] text-[#A6998A] pt-1">
                  <Clock className="w-3 h-3" />
                  <span>{item.createdAt}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
