import {createSlice} from "@reduxjs/toolkit";


interface initialState {
    isSignInOpen: boolean,
    isSingUpOpen: boolean
}

export const initialState: initialState = {
    isSignInOpen: false,
    isSingUpOpen: false
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setSignInModalTo: (state, action) => {
            state.isSignInOpen = action.payload;
        },
        setSignUpModalTo: (state, action) => {
            state.isSingUpOpen = action.payload;
        }
    }
})

export const {setSignInModalTo, setSignUpModalTo} = headerSlice.actions;