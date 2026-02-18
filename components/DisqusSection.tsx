import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import { MovieData } from '../types';

interface DisqusSectionProps {
  movie: MovieData;
}

export const DisqusSection: React.FC<DisqusSectionProps> = ({ movie }) => {
  return (
    <div className="mt-8 pt-8 border-t border-white/10">
      <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
        <span className="w-1 h-6 bg-geass-red rounded-full block"></span>
        Comentários da Comunidade
      </h3>
      
      <div className="bg-white/5 rounded-lg p-4 md:p-6 min-h-[200px]">
        <DiscussionEmbed
          shortname={movie.disqusShortname}
          config={movie.disqusConfig}
        />
      </div>
    </div>
  );
};
