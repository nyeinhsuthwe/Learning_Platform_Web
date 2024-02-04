import { useState } from "react";
import { Card } from "flowbite-react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Course = () => {
  const coursesData = [
    {
      id: 1,
      title: "React + Firebase",
      chapters: 16,
      lessons: 106,
      fees: "120,000 MMK",
      tags: ["JavaScript", "React"],
      imageSrc:
        "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
    },
    {
      id: 2,
      title: "Node.js Basics",
      chapters: 12,
      lessons: 80,
      fees: "90,000 MMK",
      tags: ["JavaScript", "Node.js"],
      imageSrc:
        "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
    },
    {
      id: 3,
      title: "Python Fundamentals",
      chapters: 20,
      lessons: 120,
      fees: "150,000 MMK",
      tags: ["Python"],
      imageSrc:
        "https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png",
    },
    {
      id: 4,
      title: "Vue.js Mastery",
      chapters: 18,
      lessons: 95,
      fees: "110,000 MMK",
      tags: ["JavaScript", "Vue.js"],
      imageSrc:
        "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
    },
    {
      id: 5,
      title: "Java Programming",
      chapters: 15,
      lessons: 100,
      fees: "130,000 MMK",
      tags: ["Java"],
      imageSrc:
        "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
    },
    {
      id: 6,
      title: "Angular Essentials",
      chapters: 14,
      lessons: 85,
      fees: "100,000 MMK",
      tags: ["JavaScript", "Angular"],
      imageSrc:
        "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
    },
    {
      id: 7,
      title: "HTML5 & CSS3 Fundamentals",
      chapters: 10,
      lessons: 60,
      fees: "80,000 MMK",
      tags: ["HTML", "CSS"],
      imageSrc:
        "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
    },
    {
      id: 8,
      title: "Django Web Development",
      chapters: 22,
      lessons: 130,
      fees: "160,000 MMK",
      tags: ["Python", "Django"],
      imageSrc:
        "https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png",
    },
  ];

  // Number of courses to display per page
  const coursesPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(coursesData.length / coursesPerPage);

  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;

  // Get the courses to display on the current page
  const currentCourses = coursesData.slice(startIndex, endIndex);

  return (
    <div className="container-fluid bg-black">
      <h1 className="fs-2 text-white font-semibold pt-3 text-center">
        Our Courses
      </h1>

      <div className="row">
        {currentCourses.map((course) => (
          <div key={course.id} className="col-lg-4 col-md-6 col-sm-12">
            <Card
              className="max-w-sm mt-5 bg-black"
              imgAlt="Course Image"
              imgSrc={course.imageSrc}
              style={{ width: "300px" }}
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
          </div>
        ))}
      </div>

      <div className="d-flex justify-center gap-3">
        <NavLink to="/course">
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
                backgroundColor: currentPage === index + 1 ? "purple" : "white",
                color: currentPage === index + 1 ? "white" : "purple",
              }}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          </NavLink>
        ))}

        <NavLink to={`/course/page/${totalPages}`}>
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
      </div>
    </div>
  );
};

export default Course;
