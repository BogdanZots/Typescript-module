export interface IFilm {
  id: number;
  media_type: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface IFilmData {
  page: number;
  results: Array<IFilm>;
  total_pages: number;
  total_results: number;
}

export interface IFilms {
  page: number;
  results: Array<IFilm>;
  total_pages: number;
  total_results: number;
}
