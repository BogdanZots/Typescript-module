export interface UserState {
    stateCopy? : object;
    users : any[];
    loading : boolean;
    error : null | string;
}

export type UserAction = |FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction;

export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_ERROR = "FETCH_ERROR"
}
interface FetchUserAction {
    type : UserActionTypes.FETCH_USERS;
}
interface FetchUserSuccessAction {
    type : UserActionTypes.FETCH_SUCCESS;
    payload : any[];
}
interface FetchUserErrorAction {
    type : UserActionTypes.FETCH_ERROR;
    payload : string;
}
