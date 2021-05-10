import React, {useEffect} from "react";
import {deletePostAsync, getPosts, selectPost} from "../post/postSlice";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import Post from "../post/Post";

export function PostList(props: any) {

    const dispatch = useAppDispatch();
    const list = useAppSelector(selectPost);
    const handleDelete = (id: string) => {
        dispatch(deletePostAsync(id));
    }

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <div>
            {list.map(value => {
                return (
                    <Post post={value} currentUser={props.currentUser} handleDelete={handleDelete} key={value._id}/>
                )
            })}
        </div>
    );
}