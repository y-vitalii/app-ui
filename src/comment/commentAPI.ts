import axios from "axios";

export function addComment(payload: any) {
    return axios.post('/comment', payload);
}