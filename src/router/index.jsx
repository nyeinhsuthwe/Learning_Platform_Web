import {
    createBrowserRouter,
} from "react-router-dom";
import Home from '../pages/user/Home'
import Layout from "../pages/user/layouts/Layout";
import About from "../pages/user/About"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            }
        ]
    },
]);

export default router;