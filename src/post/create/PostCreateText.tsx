import styles from './PostCreate.module.css';

const PostCreateText = (props: any) => {
    return (
        <div>
            <textarea className={styles['post_create__form-textarea']} placeholder={"Text (optional)"}
                {...props.register("text")}/>
        </div>
    )
}

export default PostCreateText;
