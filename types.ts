export interface MovieData {
  title: string;
  subtitle: string;
  synopsisLong: string;
  synopsisShort: string;
  rating: string;
  genres: string[];
  cast: string[];
  duration: string;
  year: string;
  posterUrl: string; // URL for the Hero background
  thumbnailUrl: string; // URL for the video player placeholder
  videoUrl: string; // The actual video source
  disqusShortname: string;
  disqusConfig: {
    url: string;
    identifier: string;
    title: string;
    language: string;
  };
}

export interface WatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie: MovieData;
}
