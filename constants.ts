import { MovieData } from './types';
import heroBanner from './assets/banner.png';

// ==========================================
// CONFIGURAÇÃO GERAL DO FILME
// Edite as URLs abaixo conforme necessário.
// ==========================================

export const MOVIE_DATA: MovieData = {
  title: "Code Geass",
  subtitle: "Lelouch of the Re;surrection",
  
  // Sinopse Autoral Cinematográfica (PT-BR)
  synopsisLong: "O mundo desfruta de uma paz frágil, construída sobre o sacrifício do imperador demônio. Mas quando a tranquilidade é estilhaçada por um ato de terror que sequestra Nunnally e Suzaku, o pesadelo ressurge nas areias do Reino de Zilkhstan. C.C., a bruxa imortal, viaja pelo mundo carregando uma promessa e uma esperança: a de que o milagre, ou talvez a maldição, desperte mais uma vez. Em um jogo de xadrez onde deuses e homens colidem, Lelouch vi Britannia deve retornar para seu último gambito.",
  
  synopsisShort: "Dois anos após o Zero Requiem, Nunnally e Suzaku são capturados. Para salvar o futuro, C.C. deve despertar a única mente capaz de enganar o mundo novamente.",
  
  rating: "14+",
  genres: ["Mecha", "Estratégia", "Drama Político", "Sci-Fi"],
  cast: ["Gabriel Sanches (Lelouch)", 
    "Lia Kumo (C.C.)", 
    "Du Oliveira (Suzaku)", 
    "Bruna Soares (Shamna)"],
  duration: "1h 52m",
  year: "2019",
  
  // PLACEHOLDERS - Substitua pelos seus links reais
  posterUrl: heroBanner, // Imagem de fundo da Home
  thumbnailUrl: "https://picsum.photos/800/450", // Poster do Player de vídeo
  videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // URL do arquivo de vídeo (.mp4 ou similar)
  
  // DISQUS CONFIG
  disqusShortname: "codegeass-1", // Substitua pelo seu shortname real do Disqus
  disqusConfig: {
    url: "https://seusite.com/watch", // Idealmente a URL de produção
    identifier: "codegeass-resurrection-main",
    title: "Code Geass: Lelouch of the Re;surrection",
    language: "pt_BR"
  }
};
