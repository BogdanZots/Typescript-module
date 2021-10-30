import axios from "axios";
import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../types/todo";

export const getUsers = (): Function => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: UserActionTypes.FETCH_SUCCESS, payload: data.data });
    } catch (e) {
      dispatch({ type: UserActionTypes.FETCH_ERROR, payload: "Ошибка" });
    }
  };
};
