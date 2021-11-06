import React, { ReactElement } from "react";
import { FilmUrls } from "../../consts/consts";
import { IFilm } from "../../types/types";

export const Film = ({ film }: { film: IFilm }): ReactElement => {
  const imgUrl = FilmUrls.photoBaseUrl + film.poster_path;
  return (
    <div className='card'>
      <img src={imgUrl} className='card-img-top' alt='film' />
      <div className='card-body'>
        <h5 className='card-title'>{film.title}</h5>
        <p className='card-text'>{film.overview}</p>
      </div>
    </div>
  );
};
