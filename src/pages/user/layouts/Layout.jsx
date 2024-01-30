import { Outlet } from 'react-router-dom'
import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { IoIosSunny } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";

const Layout = () => {
    return (
        <div>
            <div>
            <div className="sticky-top">
        <Navbar className="fluid sticky-top py-1 bg-black border-bottom">
          <h4 className=" fw-bold self-center whitespace-nowrap text-white text-xl font-semibold mt-1">
            E-Learning
          </h4>

          <Navbar className="mx-auto bg-black">
            <NavLink
              to="/home"
              style={{ textDecoration: "none", marginLeft: "50px" }}
            >
              <span
                className="text-white fw-bold mr-5"
                style={{ fontSize: "13px" }}
              >
                Home
              </span>
            </NavLink>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <span
                className="text-white fw-bold ml-5 mr-5"
                style={{ fontSize: "13px" }}
              >
                Explore
              </span>
            </NavLink>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <span
                className="text-white fw-bold ml-5 mr-5"
                style={{ fontSize: "13px" }}
              >
                Courses
              </span>
            </NavLink>

            <NavLink to="/" style={{ textDecoration: "none" }}>
              <span
                className="text-white fw-bold ml-5 mr-5"
                style={{ fontSize: "13px" }}
              >
                About
              </span>
            </NavLink>
          </Navbar>

          <NavLink to="/">
            <button type="button">
              <i className="fa-solid fa-search text-white fs-5 me-3"></i>
            </button>
          </NavLink>

          <NavLink to="/">
            <button
              type="button"
              className="btn btn-black btn-sm text-white border border-2 rounded-pill me-3 font-semibold"
              style={{
                paddingRight: "20px",
                paddingLeft: "20px",
                paddingTop: "1px",
              }}
            >
              Sign Up
            </button>
          </NavLink>

          <NavLink to="/">
            <button
              type="button"
              className="btn btn-sm text-white border border-2 rounded-pill font-semibold me-3"
              style={{
                paddingRight: "20px",
                paddingLeft: "20px",
                paddingTop: "1px",
                backgroundColor: "blue",
              }}
            >
              Log in
            </button>
          </NavLink>

          <NavLink to="/">
            <button
              type="button"
              className="btn text-white me-3 fs-5 fw-bold "
              style={{ padding: "7px", backgroundColor: "gray" }}
            >
              <IoIosSunny style={{backgroundColor:'gray'}} />
            </button>
          </NavLink>

          <NavLink to="/">
            <button
              type="button"
              className="btn  text-white me-4 fs-5 fw-bold"
              style={{ padding: "7px", backgroundColor: "gray" }}
            >
              <IoMoonOutline style={{backgroundColor:'gray'}} />
            </button>
          </NavLink>
        </Navbar>
      </div>
            </div>

            {/* dynamic router changes content  */}
            <Outlet/>

        </div>
    )
}

export default Layout;