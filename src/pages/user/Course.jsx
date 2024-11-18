import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Course = () => {

  let [url, setUrl] = useState("http://localhost:3001/courses")
  let { data: courses, loading } = useFetch(url, {type : "GET"});
  
  // {!error && console.log(courses.length);}
  console.log(courses);
  
  // Number of courses to display per page
  const coursesPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(courses.length / coursesPerPage);
  // let [ totalPages, setTotalPages ] = useState(0);

  // useEffec

  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;

  // Get the courses to display on the current page
  const currentCourses = courses.slice(startIndex, endIndex);

  return (
    <div className="container-fluid bg-black" style={{paddingLeft:'90px'}}>
      <h1 className="fs-2 text-white font-semibold pt-3 text-center">
        Our Courses
      </h1>

      {loading && <h1 className="text-bold text-white-50">Loading.....</h1>}
      {!loading && <><div className="row">
        {currentCourses.map((course) => (
          <NavLink to="/course/details/ep1" key={course.id} className="col-lg-4 col-md-6 col-sm-12">
            <Card
              className="max-w-sm mt-5 bg-black gap-3"
              imgAlt="Course Image"
              imgSrc={course.imageSrc}
              style={{ width: "300px", height: "auto" }}
            >
              <span className="fs-5 font-semibold text-white">
                {course.title}
              </span>
              <span className="text-white">
                Chapters-{course.chapters} lessons-{course.lessons} <br /> fees:{" "}
                {course.fees}
              </span>

              <div className="d-flex gap-3">
                {course.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-white bg-blue-600 w-20 text-center rounded-3 p-1"
                    style={{ fontSize: "13px" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </NavLink>
        ))}
      </div>

      <div className="d-flex justify-center gap-3">
        <NavLink
          to={`/course/page/${currentPage - 1}`}
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 1}
        >
          <GrPrevious
            className="text-white fs-6 rounded-circle mx-auto"
            style={{
              backgroundColor: "purple",
              padding: "12px",
              width: "40px",
              height: "40px",
              marginTop: "70px",
              marginBottom: "70px",
            }}
          />
        </NavLink>

        {Array.from({ length: totalPages }, (_, index) => (
          <NavLink key={index + 1} to={`/course/page/${index + 1}`}>
            <button
              type="button"
              className={`btn text-purple-700 fs-6 font-semibold ${
                currentPage === index + 1 ? "active" : ""
              }`}
              style={{
                width: "40px",
                height: "40px",
                marginTop: "70px",
                marginBottom: "70px",
                backgroundColor: currentPage === index + 1 ? "white" : "purple",
                color: currentPage === index + 1 ? "purple" : "white",
              }}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          </NavLink>
        ))}

        <NavLink
          to={`/course/page/${currentPage + 1}`}
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={currentPage === totalPages}
        >
          <GrNext
            className="text-white fs-6 rounded-circle mx-auto"
            style={{
              backgroundColor: "purple",
              padding: "12px",
              width: "40px",
              height: "40px",
              marginTop: "70px",
              marginBottom: "70px",
            }}
          />
        </NavLink>
      </div></>}
    </div>
    
  );
};

export default Course;


