import {PostList} from "../postList/PostList";
import styles from "./Content.module.css";
import React from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {addPostAsync, Post} from "../post/postSlice";
import {useForm} from "react-hook-form";
import {selectUser} from "../user/userSlice";
import {useHistory} from "react-router";

const Content = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    const history = useHistory();
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (post: Post) => {
        if (user.isAuthenticated && user.currentUser.id) {
            post.user_id = user.currentUser.id;
            dispatch(addPostAsync(post));
        }
    }
    const createPost = () => {
        history.push("/submit");
    }

    return (
        <div className={styles.content}>
            <div className={styles.left}>

            </div>
            <div className={styles.center}>
                {user.isAuthenticated && (
                    <div className={styles['content_center_add-post']}>
                        <div className={styles['content_center_add-post__user']}>User</div>
                        <input onClick={createPost} className={styles['content_center_add-post__input']}
                               placeholder={"Create Post"}/>
                    </div>
                )}
                <PostList currentUser={user.currentUser}/>
            </div>
            <div className={styles.right}>

            </div>
        </div>
    )
}

export default Content;