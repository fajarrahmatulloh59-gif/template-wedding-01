import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sliders, X, RotateCcw, Check, Sparkles, Eye, ToggleLeft, ToggleRight, User, Calendar, Heart } from 'lucide-react';
import { WeddingData } from '../types';
import { defaultWeddingData } from '../data/defaultInvitation';

interface TemplateCustomizerModalProps {
  data: WeddingData;
  onChangeData: (data: WeddingData) => void;
  guestName: string;
  onChangeGuestName: (name: string) => void;
  onReopenCover: () => void;
}

export const TemplateCustomizerModal: React.FC<TemplateCustomizerModalProps> = ({
  data,
  onChangeData,
  guestName,
  onChangeGuestName,
  onReopenCover
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'mempelai' | 'acara' | 'opsional' | 'tamu'>('mempelai');

  // Preset 2 for quick showcase of reusability
  const loadPresetKevinJessica = () => {
    onChangeData({
      ...data,
      groom: {
        name: 'Kevin',
        fullName: 'Kevin Pratama, S.T., M.Sc.',
        sonOrDaughterOf: 'Putra kedua dari',
        fatherName: 'Bpk. Ir. Hendra Gunawan',
        motherName: 'Ibu Ratna Dewi',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
        instagram: 'kevinpratama',
        bio: 'Architect & Urban Designer'
      },
      bride: {
        name: 'Jessica',
        fullName: 'Jessica Amanda, B.A.',
        sonOrDaughterOf: 'Putri pertama dari',
        fatherName: 'Bpk. Johanes Setiawan',
        motherName: 'Ibu Maria Christine',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
        instagram: 'jessicaamanda',
        bio: 'Interior Stylist'
      },
      meta: {
        ...data.meta,
        coupleMonogram: 'K & J',
        weddingDateFormatted: 'Sabtu, 14 November 2026',
        weddingDateShort: '14.11.2026',
        countdownTarget: '2026-11-14T09:00:00+07:00'
      },
      closing: {
        ...data.closing,
        coupleSignature: 'Kevin & Jessica'
      }
    });
  };

  const resetToDefault = () => {
    onChangeData(defaultWeddingData);
    onChangeGuestName('Bapak & Ibu Rekan Kerja');
  };

  return (
    <>
      {/* Floating Pill Toggle Button at Top-Right */}
      <div className="fixed top-4 right-4 z-40">
        <button
          id="btn-open-customizer"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1B18]/90 text-[#F5EDE0] text-xs font-medium backdrop-blur-md shadow-lg border border-[#C5A880]/50 hover:bg-[#1E1B18] transition-all hover:scale-105"
        >
          <Sliders className="w-3.5 h-3.5 text-[#D8BC95]" />
          <span>Master Template Settings</span>
        </button>
      </div>

      {/* Modal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-md h-full bg-[#FAF7F2] text-[#2C2723] shadow-2xl flex flex-col border-l border-[#E0D3C1] overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 border-b border-[#E8DEC8] flex items-center justify-between bg-white">
                <div>
                  <h3 className="font-serif-elegant font-bold text-lg text-[#231F1C]">
                    Template 01 — Master Control
                  </h3>
                  <p className="text-[11px] text-[#8C7F70]">
                    Kustomisasi data pelanggan & uji fitur responsif
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-[#F2EBE0] text-[#7A6F62] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Preset Toolbar */}
              <div className="p-3 bg-[#F4EDE2] border-b border-[#E8DEC8] flex items-center justify-between text-xs">
                <span className="font-medium text-[#6B5F50]">Pilih Pasangan Uji:</span>
                <div className="flex gap-2">
                  <button
                    onClick={resetToDefault}
                    className="px-2.5 py-1 rounded-lg bg-white border border-[#E0D5C3] text-[#3D362E] hover:bg-[#EDE5D8] font-medium"
                  >
                    Ahmad & Aisyah
                  </button>
                  <button
                    onClick={loadPresetKevinJessica}
                    className="px-2.5 py-1 rounded-lg bg-white border border-[#E0D5C3] text-[#3D362E] hover:bg-[#EDE5D8] font-medium"
                  >
                    Kevin & Jessica
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-[#E8DEC8] bg-white text-xs font-medium text-[#7A6F62]">
                <button
                  onClick={() => setActiveTab('mempelai')}
                  className={`flex-1 py-3 text-center border-b-2 transition-all ${
                    activeTab === 'mempelai'
                      ? 'border-[#B89665] text-[#231F1C] font-semibold bg-[#FAF7F2]'
                      : 'border-transparent hover:text-[#231F1C]'
                  }`}
                >
                  Mempelai
                </button>
                <button
                  onClick={() => setActiveTab('acara')}
                  className={`flex-1 py-3 text-center border-b-2 transition-all ${
                    activeTab === 'acara'
                      ? 'border-[#B89665] text-[#231F1C] font-semibold bg-[#FAF7F2]'
                      : 'border-transparent hover:text-[#231F1C]'
                  }`}
                >
                  Acara
                </button>
                <button
                  onClick={() => setActiveTab('opsional')}
                  className={`flex-1 py-3 text-center border-b-2 transition-all ${
                    activeTab === 'opsional'
                      ? 'border-[#B89665] text-[#231F1C] font-semibold bg-[#FAF7F2]'
                      : 'border-transparent hover:text-[#231F1C]'
                  }`}
                >
                  Section Opsional
                </button>
                <button
                  onClick={() => setActiveTab('tamu')}
                  className={`flex-1 py-3 text-center border-b-2 transition-all ${
                    activeTab === 'tamu'
                      ? 'border-[#B89665] text-[#231F1C] font-semibold bg-[#FAF7F2]'
                      : 'border-transparent hover:text-[#231F1C]'
                  }`}
                >
                  Nama Tamu
                </button>
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs">
                {activeTab === 'mempelai' && (
                  <div className="space-y-5">
                    {/* Groom */}
                    <div className="bg-white p-4 rounded-xl border border-[#E8DEC8] space-y-3">
                      <p className="font-semibold text-sm text-[#231F1C] flex items-center gap-1.5">
                        <User className="w-4 h-4 text-[#B89665]" /> Mempelai Pria (Groom)
                      </p>
                      <div>
                        <label className="text-[11px] text-[#7A6E60]">Nama Panggilan</label>
                        <input
                          type="text"
                          value={data.groom.name}
                          onChange={(e) =>
                            onChangeData({
                              ...data,
                              groom: { ...data.groom, name: e.target.value }
                            })
                          }
                          className="w-full mt-1 p-2 rounded-lg border border-[#E2D5C3] bg-[#FAF7F2]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-[#7A6E60]">Nama Lengkap & Gelar</label>
                        <input
                          type="text"
                          value={data.groom.fullName}
                          onChange={(e) =>
                            onChangeData({
                              ...data,
                              groom: { ...data.groom, fullName: e.target.value }
                            })
                          }
                          className="w-full mt-1 p-2 rounded-lg border border-[#E2D5C3] bg-[#FAF7F2]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-[#7A6E60]">Nama Ayah</label>
                        <input
                          type="text"
                          value={data.groom.fatherName}
                          onChange={(e) =>
                            onChangeData({
                              ...data,
                              groom: { ...data.groom, fatherName: e.target.value }
                            })
                          }
                          className="w-full mt-1 p-2 rounded-lg border border-[#E2D5C3] bg-[#FAF7F2]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-[#7A6E60]">Nama Ibu</label>
                        <input
                          type="text"
                          value={data.groom.motherName}
                          onChange={(e) =>
                            onChangeData({
                              ...data,
                              groom: { ...data.groom, motherName: e.target.value }
                            })
                          }
                          className="w-full mt-1 p-2 rounded-lg border border-[#E2D5C3] bg-[#FAF7F2]"
                        />
                      </div>
                    </div>

                    {/* Bride */}
                    <div className="bg-white p-4 rounded-xl border border-[#E8DEC8] space-y-3">
                      <p className="font-semibold text-sm text-[#231F1C] flex items-center gap-1.5">
                        <User className="w-4 h-4 text-[#B89665]" /> Mempelai Wanita (Bride)
                      </p>
                      <div>
                        <label className="text-[11px] text-[#7A6E60]">Nama Panggilan</label>
                        <input
                          type="text"
                          value={data.bride.name}
                          onChange={(e) =>
                            onChangeData({
                              ...data,
                              bride: { ...data.bride, name: e.target.value }
                            })
                          }
                          className="w-full mt-1 p-2 rounded-lg border border-[#E2D5C3] bg-[#FAF7F2]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-[#7A6E60]">Nama Lengkap & Gelar</label>
                        <input
                          type="text"
                          value={data.bride.fullName}
                          onChange={(e) =>
                            onChangeData({
                              ...data,
                              bride: { ...data.bride, fullName: e.target.value }
                            })
                          }
                          className="w-full mt-1 p-2 rounded-lg border border-[#E2D5C3] bg-[#FAF7F2]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-[#7A6E60]">Nama Ayah</label>
                        <input
                          type="text"
                          value={data.bride.fatherName}
                          onChange={(e) =>
                            onChangeData({
                              ...data,
                              bride: { ...data.bride, fatherName: e.target.value }
                            })
                          }
                          className="w-full mt-1 p-2 rounded-lg border border-[#E2D5C3] bg-[#FAF7F2]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-[#7A6E60]">Nama Ibu</label>
                        <input
                          type="text"
                          value={data.bride.motherName}
                          onChange={(e) =>
                            onChangeData({
                              ...data,
                              bride: { ...data.bride, motherName: e.target.value }
                            })
                          }
                          className="w-full mt-1 p-2 rounded-lg border border-[#E2D5C3] bg-[#FAF7F2]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'acara' && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl border border-[#E8DEC8] space-y-3">
                      <p className="font-semibold text-sm text-[#231F1C]">Tanggal & Waktu Akad</p>
                      <div>
                        <label className="text-[11px] text-[#7A6E60]">Tanggal Acara (Teks)</label>
                        <input
                          type="text"
                          value={data.meta.weddingDateFormatted}
                          onChange={(e) =>
                            onChangeData({
                              ...data,
                              meta: { ...data.meta, weddingDateFormatted: e.target.value }
                            })
                          }
                          className="w-full mt-1 p-2 rounded-lg border border-[#E2D5C3] bg-[#FAF7F2]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-[#7A6E60]">Waktu Akad</label>
                        <input
                          type="text"
                          value={data.events.akad.time}
                          onChange={(e) =>
                            onChangeData({
                              ...data,
                              events: {
                                ...data.events,
                                akad: { ...data.events.akad, time: e.target.value }
                              }
                            })
                          }
                          className="w-full mt-1 p-2 rounded-lg border border-[#E2D5C3] bg-[#FAF7F2]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-[#7A6E60]">Lokasi Akad</label>
                        <input
                          type="text"
                          value={data.events.akad.venueName}
                          onChange={(e) =>
                            onChangeData({
                              ...data,
                              events: {
                                ...data.events,
                                akad: { ...data.events.akad, venueName: e.target.value }
                              }
                            })
                          }
                          className="w-full mt-1 p-2 rounded-lg border border-[#E2D5C3] bg-[#FAF7F2]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'opsional' && (
                  <div className="space-y-3">
                    {/* Toggle Resepsi */}
                    <div className="bg-white p-3.5 rounded-xl border border-[#E8DEC8] flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-[#231F1C]">Acara Resepsi</p>
                        <p className="text-[11px] text-[#7A6E60]">Tampilkan atau sembunyikan resepsi</p>
                      </div>
                      <button
                        onClick={() =>
                          onChangeData({
                            ...data,
                            events: {
                              ...data.events,
                              resepsi: data.events.resepsi
                                ? { ...data.events.resepsi, enabled: !data.events.resepsi.enabled }
                                : undefined
                            }
                          })
                        }
                        className={`p-1.5 rounded-lg border ${
                          data.events.resepsi?.enabled
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-stone-100 text-stone-600 border-stone-300'
                        }`}
                      >
                        {data.events.resepsi?.enabled ? 'Aktif' : 'Nonaktif'}
                      </button>
                    </div>

                    {/* Toggle Love Story */}
                    <div className="bg-white p-3.5 rounded-xl border border-[#E8DEC8] flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-[#231F1C]">Love Story (Kisah Cinta)</p>
                        <p className="text-[11px] text-[#7A6E60]">Timeline perjalanan cinta</p>
                      </div>
                      <button
                        onClick={() =>
                          onChangeData({
                            ...data,
                            loveStory: { ...data.loveStory, enabled: !data.loveStory.enabled }
                          })
                        }
                        className={`p-1.5 rounded-lg border ${
                          data.loveStory.enabled
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-stone-100 text-stone-600 border-stone-300'
                        }`}
                      >
                        {data.loveStory.enabled ? 'Aktif' : 'Nonaktif'}
                      </button>
                    </div>

                    {/* Toggle Galeri */}
                    <div className="bg-white p-3.5 rounded-xl border border-[#E8DEC8] flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-[#231F1C]">Galeri Foto</p>
                        <p className="text-[11px] text-[#7A6E60]">Dokumentasi foto prewedding</p>
                      </div>
                      <button
                        onClick={() =>
                          onChangeData({
                            ...data,
                            gallery: { ...data.gallery, enabled: !data.gallery.enabled }
                          })
                        }
                        className={`p-1.5 rounded-lg border ${
                          data.gallery.enabled
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-stone-100 text-stone-600 border-stone-300'
                        }`}
                      >
                        {data.gallery.enabled ? 'Aktif' : 'Nonaktif'}
                      </button>
                    </div>

                    {/* Toggle Amplop Digital */}
                    <div className="bg-white p-3.5 rounded-xl border border-[#E8DEC8] flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-[#231F1C]">Tanda Kasih (Amplop Digital)</p>
                        <p className="text-[11px] text-[#7A6E60]">Transfer bank & alamat kirim kado</p>
                      </div>
                      <button
                        onClick={() =>
                          onChangeData({
                            ...data,
                            digitalGift: { ...data.digitalGift, enabled: !data.digitalGift.enabled }
                          })
                        }
                        className={`p-1.5 rounded-lg border ${
                          data.digitalGift.enabled
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-stone-100 text-stone-600 border-stone-300'
                        }`}
                      >
                        {data.digitalGift.enabled ? 'Aktif' : 'Nonaktif'}
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'tamu' && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl border border-[#E8DEC8] space-y-3">
                      <p className="font-semibold text-sm text-[#231F1C]">Nama Tamu Undangan (URL Param `?to=`)</p>
                      <p className="text-[11px] text-[#7A6E60]">
                        Secara otomatis membaca parameter URL (contoh: <code>?to=Bapak+Joko+Santoso</code>)
                      </p>
                      <div>
                        <label className="text-[11px] text-[#7A6E60]">Ubah Nama Tamu Preview:</label>
                        <input
                          type="text"
                          value={guestName}
                          onChange={(e) => onChangeGuestName(e.target.value)}
                          placeholder="Nama Tamu"
                          className="w-full mt-1 p-2 rounded-lg border border-[#E2D5C3] bg-[#FAF7F2]"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="p-4 border-t border-[#E8DEC8] bg-white flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onReopenCover();
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-[#2C2724] text-[#FAF7F2] text-xs font-medium hover:bg-[#1A1816] transition-all flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D8BC95]" />
                  <span>Uji Cover / Sampul Kembali</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-[#E2D5C3] text-xs font-medium text-[#4A4237] hover:bg-[#FAF7F2]"
                >
                  Selesai
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
