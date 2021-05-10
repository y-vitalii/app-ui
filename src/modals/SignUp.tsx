import Modal from "react-modal";
import React, {useState} from "react";
import customStyles from "./style";
import {useForm} from "react-hook-form";
import {IUser, signUpAsync} from "../user/userSlice";
import {useDispatch} from "react-redux";
import styles from './Modal.module.css';


const SignIn = (props: any) => {

    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = async (user: IUser) => {
        const data = await dispatch(signUpAsync(user));

        // @ts-ignore
        if (data.payload) {
            props.onCloseModal();
        }
        // @ts-ignore
        if(data.error) {
            // @ts-ignore
            setError(data.error.message);
        }
    }

    const openModal = () => {

    }

    const afterOpenModal = () => {

    }

    const closeModal = () => {

    }

    return (
        <>
            <Modal isOpen={props.isOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles}>
                <div className={styles['modal__name-text']}>Login</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className={styles['modal__input-label-text']}>Email</div>
                        <input type={"text"} placeholder={"name"} {...register("name", {required: true})}/>
                    </div>
                    <div>
                        <div className={styles['modal__input-label-text']}>Email</div>
                        <input type={"text"} placeholder={"email"} {...register("email", {required: true})}/>
                    </div>
                    <div>
                        <div className={styles['modal__input-label-text']}>Password</div>
                        <input type={"password"}
                               placeholder={"password"} {...register("password", {required: true})}/>

                    </div>
                    <input className={styles.modal__btn_white} type="submit" value="Register"/>
                </form>
                <button className={styles.modal__btn_white} onClick={props.onCloseModal}>Close</button>
            </Modal>
        </>
    )
}

export default SignIn;