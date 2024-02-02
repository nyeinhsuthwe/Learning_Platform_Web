import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/user/Home";
import Layout from "../pages/user/layouts/Layout";
import About from "../pages/user/About";
import AdminLayout from "../pages/admin/layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Course from "../pages/user/Course";
import Course1 from "../pages/user/Course1";
import Course2 from "../pages/user/Course2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/course",
        element: <Course />
      },
      {
        path: "/course1",
        element: <Course1 />
      },
      {
        path: "/course2",
        element: <Course2 />
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [

      
      {
        path: "",
        element: <AdminDashboard />,
      },
    ],
  },
]);

export default router;
