import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {getUsers} from "../store/actions/user";
export const UserList : React.FC = () => {
    const {users, error, loading} = useTypedSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, []);
    if (error) 
        return <h1>Error</h1>;
    if (loading) 
        return <h1>Loading...</h1>;
    console.log(users);
    return (
        <div>
            {users.map((user) => (
                <li>{user.name}</li>
            ))}
        </div>
    );
};
