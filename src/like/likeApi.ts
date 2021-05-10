import axios from "axios";


export const addLike = (data: any) => {
    return axios.post('/like', data)
}

export const getLike = (userId: string, postId: string) => {
    return axios.get(`/like/${postId}/${userId}`)
}