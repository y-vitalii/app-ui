import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {useAppDispatch} from "../../app/hooks";
import {getPostByIdAsync} from "../postSlice";
import Post from "../Post";
import CommentCreate from "../../comment/create/CommentCreate";
import CommentList from "../../commentList/CommentList";

const PostContent = () => {

    const {id} = useParams() as { id: string };
    const [post, setPost] = useState<any>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPostByIdAsync(id)).then((data) => {
            setPost(data.payload);
        })
    }, [dispatch]);

    return (
        <div>
            {post && (
                <>
                    <Post post={post}/>
                    <CommentCreate post={post}/>
                    <CommentList comments={post.comments}/>
                </>
            )}
        </div>
    )
}

export default PostContent;