import {useForm} from "react-hook-form";
import React from "react";
import {useAppDispatch} from "../../app/hooks";
import {addCommentAsync} from "../commentSlice";

const CommentCreate = (props: any) => {

    const {register, handleSubmit, watch, formState: {errors}, setValue} = useForm();
    const dispatch = useAppDispatch();
    const onSubmit = (data: any) => {
        const {user_id, _id, prop: text = data.text} = props.post;

        dispatch(addCommentAsync({user_id, post_id: _id, text})).then(data => {
            debugger
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register("text", {required: true})}/>
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
}

export default CommentCreate;