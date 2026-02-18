import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { XMarkIcon } from './ui/Icons';
import { VideoPlayer } from './VideoPlayer';
import { MovieMeta } from './MovieMeta';
import { DisqusSection } from './DisqusSection';
import { WatchModalProps } from '../types';

export const WatchModal: React.FC<WatchModalProps> = ({ isOpen, onClose, movie }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap and ESC key handling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Lock scroll
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
        onClick={handleBackdropClick}
      />

      {/* Modal Content */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-5xl max-h-[90vh] bg-geass-dark rounded-xl shadow-2xl overflow-y-auto animate-scale-up border border-white/10 scrollbar-thin scrollbar-thumb-geass-red scrollbar-track-transparent"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-geass-red text-white rounded-full backdrop-blur-sm transition-colors duration-200 group"
          aria-label="Fechar"
        >
          <XMarkIcon className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="p-0">
          {/* Section A: Video Player */}
          <div className="bg-geass-dark">
            <VideoPlayer movie={movie} />
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Section B: Info */}
            <MovieMeta movie={movie} />

            {/* Section C: Comments */}
            <DisqusSection movie={movie} />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
