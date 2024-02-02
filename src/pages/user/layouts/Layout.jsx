import { Outlet } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { IoIosSunny } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import './layout.css';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';


const Layout = () => {
  return (
    <div>

      {/* for nav */}
      <div>
        <div className="sticky-top">
          <Navbar className="fluid sticky-top py-1 bg-black border-bottom">
            <h4 className=" fw-bold self-center whitespace-nowrap text-white text-xl font-semibold mt-1 ml-6">
              E-Learning
            </h4>

            <Navbar className="mx-auto bg-black">

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
                <NavLink to="/course" style={{ textDecoration: "none" }}>
                  <span
                    className="text-white fw-bold ml-5 mr-5"
                    style={{ fontSize: "13px" }}
                  >
                    Courses
                  </span>
                </NavLink>

                <NavLink to="/" style={{ textDecoration: "none" }} className="navLink">
                  <span
                    className="text-white fw-bold ml-5 mr-5"
                    style={{ fontSize: "13px" }}
                  >
                    About
                  </span>
                </NavLink>
              </Navbar>

            </Navbar>
            <NavLink to="/">
              <button type="button">
                <i className="fa-solid fa-search text-white fs-5 me-3 mr-6"></i>
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
                <IoIosSunny style={{ backgroundColor: "gray" }} />
              </button>
            </NavLink>

            <NavLink to="/">
              <button
                type="button"
                className="btn  text-white me-4 fs-5 fw-bold"
                style={{ padding: "7px", backgroundColor: "gray" }}
              >
                <IoMoonOutline style={{ backgroundColor: 'gray' }} />
              </button>
            </NavLink>
          </Navbar>
        </div>
      </div>


      {/* dynamic router changes content  */}
      <Outlet />

      {/* Footer */}

      <Footer container id='fbg' >
        <div className="w-full">
          <div className="row mx-auto">
            <div className="col ml-11 px-5 ">
              <span
                className="text-white font-semibold"
                style={{ fontSize: "50px" }}
              >
                E
              </span>
              <span id="color" className=" fw-bold">
                -Learning
              </span>
              <br />
              <span className="text-white opacity-60 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                laboriosam similique quisquam ratione, laudantium ipsum velit
                dolorum! Dolor, molestias eos?
              </span>
              <div className="mt-4 flex space-x-6 sm:mt-0">
                <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
                <Footer.Icon href="#" icon={BsInstagram} className="text-white" />
                <Footer.Icon href="#" icon={BsTwitter} className="text-white" />
                <Footer.Icon href="#" icon={BsGithub} className="text-white"/>
                <Footer.Icon href="#" icon={BsDribbble}  className="text-white"/>
              </div>
            </div>
            <div className="col ml-11">
            <Footer.Title title="Quick Links" className="mt-4 flex sm:mt-0 text-white space-x-6" />
            <Footer.LinkGroup col >
              <Footer.Link href="#" className="text-white opacity-60 font-semibold">Home</Footer.Link>
              <Footer.Link href="#" className="text-white opacity-60 font-semibold">Explore</Footer.Link>
              <Footer.Link href="#" className="text-white opacity-60 font-semibold">Course</Footer.Link>
              <Footer.Link href="#" className="text-white opacity-60 font-semibold">About</Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div className="col">
            <Footer.Title title="help center" className="mt-4 flex space-x-6 sm:mt-0 text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white opacity-60 font-semibold">Discord Server</Footer.Link>
              <Footer.Link href="#" className="text-white opacity-60 font-semibold">Twitter</Footer.Link>
              <Footer.Link href="#" className="text-white opacity-60 font-semibold">Facebook</Footer.Link>
              <Footer.Link href="#" className="text-white opacity-60 font-semibold">Contact Us</Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div className="col">
            <Footer.Title title="legal" className="mt-4 flex space-x-6 sm:mt-0 text-white"/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white opacity-60 font-semibold">Privacy Policy</Footer.Link>
              <Footer.Link href="#" className="text-white opacity-60 font-semibold">Licensing</Footer.Link>
              <Footer.Link href="#" className="text-white opacity-60 font-semibold">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
            </div>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by='copyright by elearning@agency.com'  className="pb-7 text-white " />
        </div>
      </Footer>
    </div>
  );
};

export default Layout;
