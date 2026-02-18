import React from 'react';
import { MovieData } from '../types';
import { Button } from './ui/Button';
import { PlayIcon, InfoIcon } from './ui/Icons';
import logoHorizontal from '../assets/logo_horizontal_filme.png';

interface HeroProps {
  movie: MovieData;
  onWatchClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ movie, onWatchClick }) => {
  return (
    <div className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={movie.posterUrl} 
          alt="Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-geass-dark via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-2xl space-y-8 animate-fade-in">
          
          {/* Branding / Title */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-geass-red font-bold tracking-widest uppercase text-xs">O Retorno do Rei</span>
              <div className="h-px w-12 bg-geass-red/50"></div>
            </div>
            
            <div className="max-w-[120px] md:max-w-[240px]">
              <img
                src={logoHorizontal}
                alt={`${movie.title}: ${movie.subtitle}`}
                className="w-full h-auto drop-shadow-2xl"
              />
              <span className="sr-only">
                {movie.title}: {movie.subtitle}
              </span>
            </div>
          </div>

          {/* Meta Badges */}
          <div className="flex items-center gap-4 text-sm font-medium text-gray-300">
            <span className="text-green-400 font-bold">98% Match</span>
            <span>{movie.year}</span>
            <span className="border border-gray-500 px-2 py-0.5 rounded text-xs">{movie.rating}</span>
            <span>{movie.duration}</span>
          </div>

          {/* Synopsis */}
          <p className="text-lg text-gray-200 leading-relaxed drop-shadow-md line-clamp-4 md:line-clamp-none">
            {movie.synopsisLong}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              variant="primary" 
              onClick={onWatchClick}
              icon={<PlayIcon className="w-6 h-6 fill-current" />}
              className="text-lg px-8 py-4"
            >
              Assistir
            </Button>
            
            <Button 
              variant="secondary"
              icon={<InfoIcon className="w-6 h-6" />}
              className="text-lg px-8 py-4"
              onClick={() => {
                // Optional: Scroll to details or open modal in 'info' mode
                onWatchClick();
              }}
            >
              Mais Informações
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
