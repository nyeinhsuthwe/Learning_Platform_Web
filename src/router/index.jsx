import {
    createBrowserRouter,
} from "react-router-dom";
import Home from '../pages/user/Home'
import Layout from "../pages/user/layouts/Layout";
import About from "../pages/user/About"
import Course from "../pages/user/Course";
import Course1 from "../pages/user/Course1";
import Course2 from "../pages/user/Course2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/course",
                element: <Course/>
            },
            {
                path: "/course1",
                element: <Course1/>
            },
            {
                path: "/course2",
                element: <Course2/>
            }
        ]
    },
]);

export default router;