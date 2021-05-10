import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from "./config";
import RouteWithSubRoutes from "./RouteWithSubRoutes";
import Content from "../content/Content";
import PostCreate from "../post/create/PostCreate";
import PostContent from "../post/content/PostContent";

const RootRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={Content}/>
                <Route path={"/submit"} component={PostCreate}/>
                <Route path={"/post/:id"} component={PostContent}/>
                {/*{routes.map((route, i) => (*/}
                {/*    <RouteWithSubRoutes key={i} {...route} />*/}
                {/*))}*/}
            </Switch>
        </Router>
    )
};

export default RootRoutes;