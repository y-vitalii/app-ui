const Comment = (props: any) => {
    return (
        <div>
            <div onClick={() => props.onClickHandler(props.comment._id)}>{props.comment.text}</div>
        </div>
    )
}

export default Comment;