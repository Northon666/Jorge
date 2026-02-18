import React from 'react';
import { MovieData } from '../types';

interface MovieMetaProps {
  movie: MovieData;
}

export const MovieMeta: React.FC<MovieMetaProps> = ({ movie }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title & Short Synopsis */}
      <div>
        <h2 className="sr-only">
          {movie.title}: {movie.subtitle}
        </h2>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          {movie.synopsisShort}
        </p>
      </div>

      {/* Badges & Info Grid */}
      <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
        <span className="px-2 py-0.5 border border-gray-600 rounded text-gray-400">
          {movie.rating}
        </span>
        <span className="text-gray-400">{movie.year}</span>
        <span className="text-gray-400">{movie.duration}</span>
        <span className="px-2 py-0.5 bg-geass-purple/20 text-geass-purple border border-geass-purple/30 rounded text-xs uppercase tracking-wide">
          HD
        </span>
      </div>

      {/* Detailed Meta Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm pt-4 border-t border-white/10">
        <div>
          <span className="text-gray-500 block mb-1">Gêneros:</span>
          <div className="flex flex-wrap gap-2">
            {movie.genres.map((g) => (
              <span key={g} className="text-white hover:text-geass-gold transition-colors cursor-default">
                {g}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <span className="text-gray-500 block mb-1">Elenco:</span>
          <div className="flex flex-wrap gap-x-2 text-white">
            {movie.cast.map((actor, idx) => (
              <span key={idx} className="after:content-[','] last:after:content-[''] after:text-gray-600">
                {actor}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
