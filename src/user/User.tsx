import styles from "./User.module.css";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import React from "react";
import {signUpAsync, IUser, signInAsync} from "./userSlice";

const User = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data: IUser) => {
        dispatch(signUpAsync(data));
    }
    const onSubmitLogin = (data: IUser) => {
        dispatch(signInAsync(data));
    }

    return (
        <div className={styles.user}>
            <div className={styles.user__registerForm}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Name
                        <input type={"text"} placeholder={"name"} {...register("name", {required: true})}/>
                    </label>
                    <label>
                        Email
                        <input type={"text"} placeholder={"email"} {...register("email", {required: true})}/>
                    </label>
                    <label>
                        {errors.exampleRequired && <span>This field is required</span>}
                        Password
                        <input type={"password"} placeholder={"password"} {...register("password", {required: true})}/>
                    </label>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" value="Create user"/>
                </form>
            </div>
            <div className={styles.user__loginForm}>
                <form onSubmit={handleSubmit(onSubmitLogin)}>
                    <label>
                        Email
                        <input type={"text"} placeholder={"email"} {...register("email")}/>
                    </label>
                    <label>
                        Password
                        <input type={"password"} placeholder={"password"} {...register("password")}/>
                    </label>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        </div>
    )
}

export default User;