import { IFilm } from "../../types/types";

export enum FilmsActionsTypes {
  FETCH_FILMS = "FETCH_FILMS",
  FETCH_FILMS_ERROR = "FETCH_FILMS_ERROR",
  FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS",
}
export type FilmsActions = FetchFilms;

export interface FetchFilms {
  type: FilmsActionsTypes.FETCH_FILMS;
  payload: Array<IFilm>;
}
