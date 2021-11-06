import React, { useEffect, useState } from "react";
import { IFilm } from "../../types/types";
import { Film } from "../Film/Film";
import { useDispatch} from "react-redux";
import { getFilms } from "../../store/reducers/filmReducer";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Loader } from "../Loader/Loader";



export const FIlmsContainet = () => {
  const dispatch = useDispatch();
  const { filmsArr , isLoading} = useAppSelector(store => store.films)
  useEffect(() => {
    dispatch(getFilms())
  }, []);
  return (
    <div className='col-12 d-flex flex-wrap justify-content-between'>
      {filmsArr?.map((film : IFilm) => {
        return (
          <div className='col-2'>
            <Film film={film} />
          </div>
        );
      })}
    </div>
  );
};