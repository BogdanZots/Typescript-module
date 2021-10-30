import { UserState, UserActionTypes , UserAction } from "../types/todo";

const initState : UserState = {
    users: [],
    loading: false,
    error: null
};

export const userReducer = (state = initState, action : UserAction) : UserState => {
    let stateCopy = {
        ...state
    };
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {
                ...stateCopy,
                loading: true,
                error: null,
                users: []
            };
        case UserActionTypes.FETCH_SUCCESS:
            return {
                ...stateCopy,
                loading: false,
                error: null,
                users: action.payload
            };
        case UserActionTypes.FETCH_ERROR:
            return {
                ...stateCopy,
                loading: false,
                error: action.payload,
                users: []
            };
        default:
            return state;
    }
};
