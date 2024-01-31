import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/user/Home";
import Layout from "../pages/user/layouts/Layout";
import About from "../pages/user/About";
import AdminLayout from "../pages/admin/layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";

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
