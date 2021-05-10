import axios from "axios";
import {Post} from "./postSlice";

export function getAllPosts() {
    return axios.get('/post');
}

export function getPostById(id: string) {
    return axios.get('/post/' + id);
}

export function getAllPostDataById(id: string) {
    return axios.get('/post/data/' + id);
}

export function addPost(data: Post) {
    const formData = new FormData();
    data['comments_id'] = [];

    formData.append('user_id', data.user_id);
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('comments_id', JSON.stringify(data.comments_id));
    debugger
    data.file.forEach(file => formData.append('file', file));

    return axios.post('/post', formData);
}

export function updatePost(data: any) {
    return axios.put('/post', data);
}

export function deletePost(id: string) {
    return axios.delete('/post/' + id);
}