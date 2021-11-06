import {Dispatch} from "react";
import {act} from "react-dom/test-utils";
import {IFilms} from "../../types/types";
import {IFilm} from "../../types/types";
import {FilmsActions, FilmsActionsTypes} from "../storeTypes/storeTypes";

interface IState {
    filmsArr :Array<IFilm>,
    isLoading : boolean
}

const initState : IState = {
    filmsArr: [],
    isLoading : true
};

export default function filmReducer(state : IState = initState , action : FilmsActions) : IState {
    let stateCopy = {
        ...state
    };
    switch (action.type) {
        case FilmsActionsTypes.FETCH_FILMS:
            return {
                ...stateCopy,
                filmsArr: action.payload   
            };
        default:
            return {
                ...stateCopy
            };
    }
}

export const getFilms = () => {
    return async function (dispatch : Dispatch < FilmsActions >) {
        try {
            const res = await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=ad2b38c3623133c5e9dd09346" +
                    "5546d14&language=ru");
            const data : IFilms = await res.json();
            dispatch({type: FilmsActionsTypes.FETCH_FILMS, payload: data.results});
        } catch (e) {
            console.log(e);
        }
    };
};
