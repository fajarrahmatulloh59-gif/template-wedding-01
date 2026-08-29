import React from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion } from 'motion/react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
  title?: string;
  artist?: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle, title, artist }) => {
  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2">
      {/* Audio Info pill on hover / active */}
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-[#E8DFC8] text-xs text-[#52493E]"
        >
          <Music className="w-3 h-3 text-[#B89665] animate-pulse" />
          <span className="truncate max-w-[140px] font-medium">{title || 'Wedding Ambient Melody'}</span>
        </motion.div>
      )}

      {/* Floating Toggle Button */}
      <button
        id="btn-toggle-music"
        onClick={onToggle}
        title={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
        className={`relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full shadow-xl transition-all duration-300 border ${
          isPlaying
            ? 'bg-[#2C2724] text-[#F3EAD8] border-[#C5A880]/50 hover:bg-[#1E1B18]'
            : 'bg-white/90 text-[#8C8275] border-[#E2D7C7] hover:bg-white'
        }`}
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            {/* Spinning decorative vinyl ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#D8C7B4]/50 animate-spin-slow" />
            <Volume2 className="w-5 h-5 text-[#E6D4B8] animate-pulse" />
          </div>
        ) : (
          <VolumeX className="w-5 h-5 text-[#9E9487]" />
        )}

        {/* Small badge dot */}
        <span
          className={`absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
            isPlaying ? 'bg-emerald-500' : 'bg-stone-400'
          }`}
        />
      </button>
    </div>
  );
};
