// TODO: use ket of
import {createAsyncThunk} from "@reduxjs/toolkit";
import {addComment} from "./commentAPI";

export interface Comment {
    _id: string;
    massage: string;
    user_id: string;
}

export const addCommentAsync = createAsyncThunk(
    "comment/addComment",
    async (comment: any) => {
        const response = await addComment(comment);
        return response.data;
    }
)

export interface CommentState {

}

const initialState: CommentState = {}