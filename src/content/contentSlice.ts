import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {counterSlice} from "../features/counter/counterSlice";

// export interface IContentState {
//     currentUser: string | null
// }
//
// const initialState: IContentState = {
//     currentUser: null
// }
//
// export const contentSlice = createSlice({
//     name: 'content',
//     initialState,
//     reducers: {
//         setUser: (state, action) => {
//             state.currentUser = action.payload;
//         }
//     }
// });

// export const selectUser = (state: RootState) => state.user;

// export const {setUser} = contentSlice.actions;

// export default contentSlice.reducer;