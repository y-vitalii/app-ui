import styles from "../post/Post.module.css";
import {useEffect, useState} from "react";
import {addLikeAsync, getLikeAsync} from "./likeSlice";
import {useAppDispatch} from "../app/hooks";
import {updatePostAsync} from "../post/postSlice";


const initialState = {
    isBtnUpActive: true,
    isBtnDownActive: true
}

const Like = (props: any) => {

    const [state, setSate] = useState(initialState);
    const dispatch = useAppDispatch();
    const updateLikes = async () => {
        let like = state.isBtnUpActive ? -1 : 1;

        // TODO to one request
        const res = await dispatch(updatePostAsync({
            id: props.post._id,
            user_id: props.post.user_id,
            likes: like
        }));

        const res2 = await dispatch(addLikeAsync({
            post_id: props.post._id,
            user_id: props.post.user_id,
            value: 1
        }));
        debugger
    }

    useEffect(() => {
        dispatch(getLikeAsync({postId: props.post._id, userId: props.post.user_id}))
            .then(data => {
                if (data.payload?.value == 1) {
                    state.isBtnDownActive = true;
                }
                if (data.payload?.value == 1) {
                    state.isBtnDownActive = true;
                }
            })
    }, [dispatch]);

    return (
        <div>
            <button onClick={updateLikes}>
                <object className={styles['post_rating__likes-up-arrow']}
                        data={"../up-arrow.svg"}/>
            </button>
            <div className={styles['post_rating__likes-count']}>{props.post.likes}</div>
            <object
                className={`${styles['post_rating__likes-up-arrow']} ${styles['post_rating__likes-up-arrow__down']}`}
                data={"../up-arrow.svg"}/>
        </div>
    )
}

export default Like;