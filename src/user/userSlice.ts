import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addUser, signIn} from "./userAPI";
import {RootState} from "../app/store";

export interface IUser {
    id: string,
    name: string | null
    email: string | null,
    password: string | null,
    accessToken: string | null,
}

interface IInitialState {
    currentUser: IUser;
    isAuthenticated: boolean
}

const initialState: IInitialState = {
    currentUser: {
        id: '',
        name: null,
        email: null,
        password: null,
        accessToken: null
    },
    isAuthenticated: false
};

export const signUpAsync = createAsyncThunk(
    'user/addUser',
    async (user: IUser) => {
        const response = await addUser(user);
        return response.data;
    }
)

export const signInAsync = createAsyncThunk(
    'user/signIn',
    async (user: IUser) => {
        const response = await signIn(user);
        return response.data;
    }
)

export const userSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {
            setUser: (state, action) => {
                if (action.payload) {
                    state.isAuthenticated = true;
                    state.currentUser = action.payload;
                }
            },
            loggedOut: (state) => {
                state.isAuthenticated = false;
                state.currentUser = initialState.currentUser;
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(signInAsync.fulfilled, (state, action) => {
                    debugger
                    if (action.payload.accessToken) {
                        state.currentUser = action.payload;
                        state.isAuthenticated = true;
                        setCurrentUser(action.payload);
                    }
                });
        },
    }
)

export const getCurrentUser = () => {
    return JSON.parse(<string>localStorage.getItem('user'));
}

const setCurrentUser = (response: any) => {
    localStorage.setItem("user", JSON.stringify(response));
}

export const selectUser = (state: RootState) => state.user;

export const {setUser, loggedOut} = userSlice.actions;

export default userSlice.reducer;