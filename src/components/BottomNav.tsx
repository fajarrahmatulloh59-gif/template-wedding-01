import React from 'react';
import { Home, Users, Calendar, Heart, Image, MapPin, MessageSquareHeart } from 'lucide-react';
import { WeddingData } from '../types';

interface BottomNavProps {
  data: WeddingData;
  activeSection: string;
}

export const BottomNav: React.FC<BottomNavProps> = ({ data, activeSection }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'intro', label: 'Home', icon: Home },
    { id: 'mempelai', label: 'Mempelai', icon: Users },
    { id: 'acara', label: 'Acara', icon: Calendar },
    ...(data.loveStory.enabled ? [{ id: 'kisah', label: 'Kisah', icon: Heart }] : []),
    ...(data.gallery.enabled ? [{ id: 'galeri', label: 'Galeri', icon: Image }] : []),
    { id: 'lokasi', label: 'Lokasi', icon: MapPin },
    { id: 'ucapan', label: 'Ucapan', icon: MessageSquareHeart },
  ];

  return (
    <nav className="fixed bottom-3 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full bg-[#1E1B18]/90 text-[#FAF7F2] backdrop-blur-md shadow-2xl border border-[#C5A880]/30 max-w-md w-full justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-full transition-all duration-200 relative ${
                isActive ? 'text-[#E8D4B8] scale-105' : 'text-[#A89D91] hover:text-[#FAF7F2]'
              }`}
            >
              <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              <span className="text-[9px] font-medium tracking-tight mt-0.5 whitespace-nowrap">
                {item.label}
              </span>
              {isActive && (
                <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-[#C5A880]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
