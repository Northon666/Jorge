import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { WatchModal } from './components/WatchModal';
import { MOVIE_DATA } from './constants';
import verticalBanner from './assets/logo_verticall_filme.png.png';
import hollowLogo from './assets/hollow.png';
import hollowStudiosHeader from './assets/HollowStudiosPNG.png';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative bg-geass-dark min-h-screen text-white font-sans selection:bg-geass-red selection:text-white">
      {/* Header / Nav (Simplified for visual balance) */}
      <header className="fixed top-0 left-0 right-0 z-10 px-6 py-4 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="pointer-events-auto">
            <img
              src={hollowStudiosHeader}
              alt="Hollow Studios"
              className="h-16 md:h-20 w-auto drop-shadow-md"
            />
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <Hero 
        movie={MOVIE_DATA} 
        onWatchClick={() => setIsModalOpen(true)} 
      />

      {/* The Watch Modal */}
      <WatchModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        movie={MOVIE_DATA} 
      />

      {/* Dub Credits */}
      <footer className="mt-12 border-t border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-400">
            Projeto de fã sem fins lucrativos.
          </span>
          <div className="flex items-center gap-3 opacity-80">
            <span className="text-xs tracking-wide uppercase text-gray-400">
              Dublagem:
            </span>
            <img
              src={hollowLogo}
              alt="Hollow Fandub"
              className="h-6 md:h-8"
            />
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;
