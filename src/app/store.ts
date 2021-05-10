import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postReducer from '../post/postSlice';
// import contentReducer from '../content/contentSlice';
import userReducer from '../user/userSlice';
import {useDispatch} from "react-redux";

export const store = configureStore({
  reducer: {
    post: postReducer,
    counter: counterReducer,
    user: userReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
