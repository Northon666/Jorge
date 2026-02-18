import React, { useState, useRef } from 'react';
import { PlayIcon } from './ui/Icons';
import { MovieData } from '../types';
import logoHorizontal from '../assets/logo_horizontal_filme.png';
import trailerSrc from '../assets/trailera.mp4';

interface VideoPlayerProps {
  movie: MovieData;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ movie }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const trailerRef = useRef<HTMLVideoElement>(null);

  const movieEmbedSrc = 'https://myvidplay.com/e/9x58awnbuqds?autoplay=1';

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (trailerRef.current) {
        trailerRef.current.muted = isMuted;
        trailerRef.current.pause();
      }
    }, 100);
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      if (trailerRef.current) {
        trailerRef.current.muted = next;
      }
      return next;
    });
  };

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 group">
      {!isPlaying ? (
        // Trailer State (autoplay, loop, muted)
        <div className="absolute inset-0 z-10">
          <video
            ref={trailerRef}
            src={trailerSrc}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

          {/* Overlay controls */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              onClick={handlePlay}
              className="w-20 h-20 bg-geass-red/90 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(198,40,40,0.5)] transition-all duration-300 hover:scale-110 hover:bg-geass-red"
              aria-label="Reproduzir filme"
            >
              <PlayIcon className="w-8 h-8 ml-1" />
            </button>
          </div>
        </div>
      ) : (
        // Active Movie State
        <iframe
          src={movieEmbedSrc}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={`${movie.title} - ${movie.subtitle}`}
        />
      )}

      {/* Logo overlay - bottom left */}
      {!isPlaying && (
        <>
          <div className="pointer-events-none absolute left-4 bottom-4 z-30 w-40 md:w-56">
            <img
              src={logoHorizontal}
              alt={`${movie.title} - ${movie.subtitle}`}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Mute / Unmute button - bottom right */}
          <button
            type="button"
            onClick={toggleMute}
            className="absolute right-4 bottom-4 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center"
            aria-label={isMuted ? 'Ativar som' : 'Silenciar'}
          >
            <span className="text-lg">
              {isMuted ? '🔇' : '🔊'}
            </span>
          </button>
        </>
      )}
    </div>
  );
};
