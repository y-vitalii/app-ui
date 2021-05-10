import Header from "../header/Header";
import Bottom from "../bottom/Bottom";
import Content from "../content/Content";
import {useEffect} from "react";
import {getCurrentUser, setUser} from "../user/userSlice";
import {useDispatch} from "react-redux";
import RootRoutes from "../routes/RootRoutes";


const Layout = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUser(getCurrentUser()));
    })

    return (
        <>
            <Header/>
            <RootRoutes/>
            <Bottom/>
        </>
    )
}

export default Layout;