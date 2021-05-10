import styles from './Header.module.css';
import React, {useState} from "react";
import SignIn from "../modals/SignIn";
import {initialState} from "./headerSlice";
import SignUp from "../modals/SignUp";
import {useAppSelector} from "../app/hooks";
import {loggedOut, selectUser, setUser} from "../user/userSlice";
import {useDispatch} from "react-redux";


const Header = () => {

    const user = useAppSelector(selectUser);
    const dispatch = useDispatch();
    const [modalState, setModalState] = useState(initialState);
    const openModal = (isSignIn: boolean) => {
        if (isSignIn) {
            setModalState({isSignInOpen: true, isSingUpOpen: false});
        } else {
            setModalState({isSignInOpen: false, isSingUpOpen: true});
        }
    }
    const closeModal = () => {
        setModalState({isSignInOpen: false, isSingUpOpen: false});
    }
    const handleChange = (value: string) => {
        window.location.href = value;
    }
    const signOut = () => {
        dispatch(loggedOut())
    }

    return (
        <div className={styles.header}>
            <div className={styles['header_left-side']}>
                <a href={"/"}>
                    <div className={styles['header_left-side__logo']}>App</div>
                </a>
            </div>
            <div className={styles['header_right-side']}>
                {!user.isAuthenticated && <div className={styles['header_right-side_buttons']}>
                    <button onClick={() => openModal(true)}
                            className={styles['header_right-side_buttons__btn_white']}>Log In
                    </button>
                    <button onClick={() => openModal(false)}
                            className={styles['header_right-side_buttons__btn_blue']}>Sign Up
                    </button>
                </div>}
                {user.isAuthenticated && <div className={styles['header_right-side_user']}>
                    <span className={styles['header_right-side_user__text']}>{"User "}</span>
                    <span className={styles['header_right-side_user__text']}>{user.currentUser.name}</span>
                    {/*<div>*/}
                    {/*    <select onChange={event => handleChange(event.target.value)}>*/}
                    {/*        <option>{"3"}</option>*/}
                    {/*        <option>{"2"}</option>*/}
                    {/*        <option>{"3"}</option>*/}
                    {/*    </select>*/}
                    {/*</div>*/}
                    <button onClick={signOut}
                            className={styles['header_right-side_buttons__btn_blue']}>Logout
                    </button>
                </div>}
            </div>
            <SignIn isOpen={modalState.isSignInOpen} onCloseModal={closeModal}/>
            <SignUp isOpen={modalState.isSingUpOpen} onCloseModal={closeModal}/>
        </div>
    )
};

export default Header;