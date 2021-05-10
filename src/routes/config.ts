import Content from "../content/Content";
import PostCreate from "../post/create/PostCreate";


const routes = [
    {
        path: "/",
        component: Content
    },
    {
        path: "/submit",
        component: PostCreate
    }
];

export default routes;