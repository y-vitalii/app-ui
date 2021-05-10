import axios from "axios";
import {IUser} from "./userSlice";


export const addUser = (user: IUser) => {
    return axios.post('/auth/signup', user);
}

export const signIn = (data: IUser) => {
    return axios.post('/auth/signin', data);
}