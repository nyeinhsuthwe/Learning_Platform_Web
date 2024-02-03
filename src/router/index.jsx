import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/user/Home";
import Layout from "../pages/user/layouts/Layout";
import About from "../pages/user/About";
import AdminLayout from "../pages/admin/layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Course from "../pages/user/Course";
import Course1 from "../pages/user/Course1";
import Course2 from "../pages/user/Course2";
import CourseManagement from "../pages/admin/CourseManagement";
import FeedbackReviews from "../pages/admin/FeedbackReviews";
import StudentManagement from "../pages/admin/StudentManagement";
import CourseDetail from "../pages/user/CourseDetails";

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
        element: <Course />,
      },
      {
        path: "/course1",
        element: <Course1 />,
      },
      {
        path: "/course2",
        element: <Course2 />,
      },
      {
        path: "/course/details/ep1",
        element: <CourseDetail/>
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/course",
        element: <CourseManagement />,
      },
      {
        path: "/admin/feedback",
        element: <FeedbackReviews />,
      },
      {
        path: "/admin/students",
        element: <StudentManagement />,
      },
    ],
  },
]);

export default router;
