import {createAsyncThunk} from "@reduxjs/toolkit";
import {addLike, getLike} from "./likeApi";


export const addLikeAsync = createAsyncThunk(
    'like/addLike',
    async (data: any) => {
        const result = await addLike(data);
        return result.data;
    }
)

export const getLikeAsync = createAsyncThunk(
    'like/getLike',
    async (data: any) => {
        const result = await getLike(data.userId, data.postId);
        return result.data;
    }
)