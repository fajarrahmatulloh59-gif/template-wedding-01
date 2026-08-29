import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { WeddingData, WishMessage } from './types';
import { defaultWeddingData, initialWishes } from './data/defaultInvitation';
import { musicController } from './utils/audioService';

import { OpeningCover } from './components/OpeningCover';
import { MusicPlayer } from './components/MusicPlayer';
import { IntroSection } from './components/IntroSection';
import { CoupleSection } from './components/CoupleSection';
import { QuoteSection } from './components/QuoteSection';
import { CountdownSection } from './components/CountdownSection';
import { EventDetailSection } from './components/EventDetailSection';
import { LoveStorySection } from './components/LoveStorySection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { DigitalGiftSection } from './components/DigitalGiftSection';
import { RSVPSection } from './components/RSVPSection';
import { ClosingSection } from './components/ClosingSection';
import { BottomNav } from './components/BottomNav';
import { TemplateCustomizerModal } from './components/TemplateCustomizerModal';

export default function App() {
  const [data, setData] = useState<WeddingData>(defaultWeddingData);
  const [isCoverOpen, setIsCoverOpen] = useState(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [guestName, setGuestName] = useState('Bapak/Ibu/Saudara/i');
  const [activeSection, setActiveSection] = useState('intro');

  // Wishes state with localStorage persistence
  const [wishes, setWishes] = useState<WishMessage[]>(() => {
    try {
      const saved = localStorage.getItem('wedding_wishes_t01');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return initialWishes;
  });

  // Extract URL parameters (e.g. ?to=Bapak+Joko or ?guest=Aisyah)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const toParam = urlParams.get('to') || urlParams.get('guest') || urlParams.get('u');
      if (toParam && toParam.trim() !== '') {
        setGuestName(decodeURIComponent(toParam.replace(/\+/g, ' ')));
      }
    }
  }, []);

  // Save wishes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('wedding_wishes_t01', JSON.stringify(wishes));
    } catch {
      // Ignore storage errors
    }
  }, [wishes]);

  // Track active section on scroll
  useEffect(() => {
    if (isCoverOpen) return;

    const sections = ['intro', 'mempelai', 'acara', 'kisah', 'galeri', 'lokasi', 'amplop', 'ucapan', 'penutup'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCoverOpen]);

  // Handle opening invitation
  const handleOpenInvitation = () => {
    setIsCoverOpen(false);
    // Start background music automatically
    musicController.play(data.music.trackUrl);
    setIsPlayingMusic(true);

    // Scroll slightly to trigger view smoothly
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Toggle Music Player
  const handleToggleMusic = () => {
    const active = musicController.toggle(data.music.trackUrl);
    setIsPlayingMusic(active);
  };

  // Add new wish
  const handleAddWish = (newWish: Omit<WishMessage, 'id' | 'createdAt'>) => {
    const wish: WishMessage = {
      ...newWish,
      id: `w-${Date.now()}`,
      createdAt: 'Baru saja'
    };
    setWishes((prev) => [wish, ...prev]);
  };

  return (
    <div className="relative min-h-screen bg-[#F7F4EE] text-[#2C2926] font-sans selection:bg-[#E2D4C3] selection:text-[#1A1816]">
      {/* Desktop background subtle side ornament */}
      <div className="fixed inset-0 pointer-events-none opacity-40 hidden xl:block">
        <div className="absolute top-0 left-12 w-64 h-full border-r border-[#E8DEC8]/50" />
        <div className="absolute top-0 right-12 w-64 h-full border-l border-[#E8DEC8]/50" />
      </div>

      {/* Opening Cover Screen */}
      <AnimatePresence>
        {isCoverOpen && (
          <OpeningCover
            data={data}
            guestName={guestName}
            onOpen={handleOpenInvitation}
          />
        )}
      </AnimatePresence>

      {/* Main Invitation Content */}
      <div className={`relative max-w-4xl mx-auto bg-[#FDFBF7] shadow-2xl min-h-screen transition-opacity duration-700 ${isCoverOpen ? 'h-screen overflow-hidden opacity-0' : 'opacity-100'}`}>
        {/* Subtle top watermark */}
        <div className="pt-8 text-center select-none">
          <span className="font-serif-elegant tracking-[0.3em] uppercase text-xs text-[#B89665] font-semibold">
            {data.meta.coupleMonogram}
          </span>
        </div>

        {/* 1. Intro Section */}
        <IntroSection data={data} />

        {/* 2. Mempelai Information */}
        <CoupleSection data={data} />

        {/* 3. Ayat / Kutipan Suci */}
        <QuoteSection data={data} />

        {/* 4. Realtime Countdown & Save Calendar */}
        <CountdownSection data={data} />

        {/* 5. Detail Acara (Akad & Resepsi) */}
        <EventDetailSection data={data} />

        {/* 6. Love Story (Optional timeline) */}
        <LoveStorySection data={data} />

        {/* 7. Galeri Foto & Lightbox */}
        <GallerySection data={data} />

        {/* 8. Lokasi & Google Maps */}
        <LocationSection data={data} />

        {/* 9. Tanda Kasih / Amplop Digital */}
        <DigitalGiftSection data={data} />

        {/* 10. RSVP & Buku Tamu Ucapan */}
        <RSVPSection
          wishes={wishes}
          onAddWish={handleAddWish}
          defaultGuestName={guestName !== 'Bapak/Ibu/Saudara/i' ? guestName : ''}
        />

        {/* 11. Penutup */}
        <ClosingSection data={data} />

        {/* Floating Music Player Button */}
        {!isCoverOpen && (
          <MusicPlayer
            isPlaying={isPlayingMusic}
            onToggle={handleToggleMusic}
            title={data.music.title}
            artist={data.music.artist}
          />
        )}

        {/* Floating Bottom Navigation Bar */}
        {!isCoverOpen && (
          <BottomNav
            data={data}
            activeSection={activeSection}
          />
        )}
      </div>

      {/* Master Template Customizer & Testing Drawer */}
      <TemplateCustomizerModal
        data={data}
        onChangeData={setData}
        guestName={guestName}
        onChangeGuestName={setGuestName}
        onReopenCover={() => setIsCoverOpen(true)}
      />
    </div>
  );
}
