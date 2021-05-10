import styles from "./PostCreate.module.css";
import React, {useState} from "react";
import PostCreateText from "./PostCreateText";
import PostCreateImage from "./PostCreateImage";
import PostCreateLink from "./PostCreateLink";
import {FieldPath, FieldValues, RegisterOptions, useForm, UseFormRegisterReturn} from "react-hook-form";
import {addPostAsync, Post} from "../postSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectUser} from "../../user/userSlice";
import {useDispatch} from "react-redux";

type PostCrateState = "text" | "image" | "link";

const initialState: PostCrateState = "text";

const PostCreate = () => {

    const [type, setType] = useState(initialState);
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    const {register, handleSubmit, watch, formState: {errors}, setValue} = useForm();
    const getCurrentCreateContent = (register: any) => {
        let Content;
        switch (type as PostCrateState) {
            case "text":
            default:
                Content = PostCreateText;
                break;
            case "image":
                Content = PostCreateImage;
                break;
            case "link":
                Content = PostCreateLink;
                break
        }

        return <Content register={register} setValue={setValue}/>;
    }
    const onClickHandler = (e: any) => {
        setType(e.target.name);
    }
    const onSubmit = (post: Post) => {
        debugger
        post.user_id = user.currentUser.id;
        dispatch(addPostAsync(post)).then((data) => {
            debugger
        });
    }

    return (
        <div className={styles.post}>
            <div className={styles.post_create}>
                <div className={styles.post_create__label}>Create a post</div>
                <div className={styles.post_create_container}>
                    <div className={styles['post_create_menu-btn']}>
                        <button name={"text"} onClick={onClickHandler}>Post</button>
                        <button name={"image"} onClick={onClickHandler}>Image</button>
                        <button name={"link"} onClick={onClickHandler}>Link</button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input className={styles["post_create__form-input"]} type={"text"} placeholder={"Title"}
                                   {...register("title", {required: true})}/>
                        </div>
                        {getCurrentCreateContent(register)}
                        <div>

                        </div>
                        <div className={styles["post_buttons"]}>
                            <input className={styles["post_buttons__btn_white"]} type="submit" value="Create"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostCreate;