import styles from './Post.module.css';
import {useHistory} from "react-router";
import moment from 'moment'
import Like from "../like/Like";

const Post = (props: any) => {

    const history = useHistory();
    const onEdit = () => {

    }
    const showPost = () => {
        history.push('/post/' + props.post._id)
    }

    return (
        <div className={styles.post} onClick={showPost}>
            <div className={styles.post_rating}>
                <Like post={props.post}/>
            </div>
            <div className={styles.post_content}>
                <div className={styles.post_content_top}>
                    <div>Posted
                        by {props.post.user_id} at {moment(props.post.date_created).format("MMMM Do YYYY")}</div>
                </div>
                <div className={styles.post_content_middle}>
                    <div>{props.post.title}</div>
                    <div>
                        <img className={styles.post_content_middle__image}
                             src={`data:image/jpeg;base64,${props.post.images[0]?.toString()}`}/>
                        {/*src="data:image/<%=image.img.contentType%>;base64,*/}
                        {/*<%=image.img.data.toString('base64')%>"*/}
                    </div>
                    <div>{props.post.description}</div>
                </div>
                <div className={styles.post_content_bottom}>
                    <div className={styles.post_panel_left}>
                        <span>10.1k</span>
                        <span>Comments</span>
                        <span>Share</span>
                    </div>
                    {props.currentUser?.id === props.post.user_id && <div className={styles.post_panel_right}>
                        <button className={styles.post__btn} onClick={onEdit}>EDIT</button>
                        <button className={styles.post__btn} onClick={() => props.handleDelete(props.post._id)}>DELETE
                        </button>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default Post;
