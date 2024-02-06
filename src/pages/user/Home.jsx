import "../../App.css";
// import { FaUserGraduate } from "react-icons/fa6";
// import { FaCode } from "react-icons/fa6";
// import { FaUserTie } from "react-icons/fa6";
import "./Home.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
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
      title: "HTML5 & CSS3",
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

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-fluid user-home">
        <div className="row h-screen items-center">
          <div className="col-4 offset-2 items-center ">
            <div className="grid ps-8">
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ x: -40, opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
              >
                <h1 className="text-white fw-bold fs-1" style={{}}>
                  Learn with
                  <br />
                </h1>
                <span className="text-white fw-bold fs-1" id="color" style={{}}>
                  Experts Anytime,
                  <br />
                </span>
                <span className="text-white fw-bold fs-1" style={{}}>
                  Anywhere
                  <br />
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ x: -40, opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
              >
                <span
                  className="font-semibold opacity-60 text-white"
                  style={{ fontSize: "15px" }}
                >
                  Our mission is to help people to find the best course online &
                  learn with an expert anytime, anywhere.
                </span>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="grid col-6 justify-items-center"
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <img
              src="/img/photo_2024-01-24_21-18-20-removebg-preview.png"
              style={{ marginLeft: "40px" }}
              alt=""
            />
          </motion.div>
        </div>

        {/* Horizontal Course Slider */}
        <div className="container bg-black h-screen">
          <h3 className="text-white text-center font-semibold fs-4 mb-5">
            Popular Courses
          </h3>

          <Slider {...sliderSettings}>
            {coursesData.map((course) => (
              <div
                key={course.id}
                className="bg-white h-[400px] text-black rounded-xl mb-5"
              >
                <div className="h-52 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                  <img
                    src={course.imageSrc}
                    alt={course.title}
                    className="h-32 w-32 rounded-full"
                  />
                </div>

                <div className="flex flex-col items-center justify-center gap-2 p-4">
                  <p className="text-lg font-semibold">{course.title}</p>
                  <p className="text-center">{`${course.chapters} chapters, ${course.lessons} lessons`}</p>
                  <p className="text-center">{`Fees: ${course.fees}`}</p>
                  <button className="bg-indigo-500 text-white text-md px-4 py-1 rounded-xl">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Home;
