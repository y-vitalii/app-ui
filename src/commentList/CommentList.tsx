import Comment from '../comment/Comment';
import CommentCreate from '../comment/create/CommentCreate';
import {useState} from "react";

const CommentList = (props: any) => {

    const [repliedComments, setRepliedComments] = useState<any>([]);
    const onClick = (id: string) => {
        let list = repliedComments;
        if (repliedComments.includes(id)) {
            list = repliedComments.splice(repliedComments.indexOf(id), 1);
        }
        setRepliedComments(list.concat(id));
    }

    return (
        <div>
            {props.comments.map((data: any) =>
                <>
                    <Comment onClickHandler={onClick} comment={data} key={data._id}/>{
                    repliedComments.includes(data._id) && (
                        <CommentCreate/>
                    )}
                </>
            )}
        </div>
    )
}

export default CommentList;