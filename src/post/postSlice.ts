import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addPost, deletePost, getAllPosts, getPostById, updatePost} from "./postAPI";
import {RootState} from "../app/store";


export interface Post {
    [key: string]: string | Array<string> | undefined,

    _id?: string
    title: string,
    file: Array<string>,
    description: string,
    comments_id: Array<string>
    user_id: string
}

export interface PostState {
    list: Array<Post>;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: PostState = {
    list: [],
    status: 'idle',
};

export const addPostAsync = createAsyncThunk(
    'post/addPost',
    async (data: any) => {
        debugger
        const response = await addPost(data);
        return response.data;
    }
);

export const getPostByIdAsync = createAsyncThunk(
    'post/getPost',
    async (id: string) => {
        const response = await getPostById(id);
        return response.data;
    }
);

export const getAllPostDataByIdAsync = createAsyncThunk(
    'post/getAllDataPost',
    async (id: string) => {
        // const response = await getAllPostDataById(id);
        // return response.data;
    }
);

export const getPosts = createAsyncThunk(
    'post/getAllPosts',
    async () => {
        const response = await getAllPosts();
        return response.data;
    }
);

export const deletePostAsync = createAsyncThunk(
    'post/deletePostById',
    async (id: string) => {
        const response = await deletePost(id);
        return response.data
    }
);

export const updatePostAsync = createAsyncThunk(
    'post/updatePost',
    async (data: any) => {
        const response = await updatePost(data);
        return response.data;
    }
)

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addPostAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addPostAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.list.push(action.payload);
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.list = state.list.concat(action.payload);
            })
            .addCase(deletePostAsync.fulfilled, (state, action) => {
                state.list = state.list.filter(post => post._id != action.payload)
            });
    },
});

export const selectPost = (state: RootState) => state.post.list;

export default postSlice.reducer;