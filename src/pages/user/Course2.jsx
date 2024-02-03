import "../../App.css";
import { Card } from "flowbite-react";
import { GrPrevious,GrNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Course2 = () => {
  return (
    <div className=" container bg-black">
      <h1 className="fs-2 text-white font-semibold pt-3 text-center">
        Our Courses
      </h1>
      <div className="row">
        <div className="col-4">
          <Card
            className="max-w-sm mt-5 bg-black"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
            style={{width:'300px', marginLeft:'100px'}}
          >
            <span className=" fs-5 font-semibold text-white">
              React + Firebase
            </span>
            <span className="text-white">Chapters-16 lessons-106 <br/> fees: 120,000 MMK</span>
            
            <div className=" d-flex gap-3">
            <span className="text-white bg-blue-600 w-20 text-center rounded-3 p-1" style={{fontSize:'13px'}}>JavaScript</span>
            <span className="text-white bg-purple-600 w-20 text-center rounded-3 p-1" style={{fontSize:'13px'}}>React</span>
            </div>
          </Card>
        </div>

        <div className="col-4">
          <Card
            className="max-w-sm mt-5 bg-black"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
            style={{width:'300px', marginLeft:'50px'}}
          >
            <span className=" fs-5 font-semibold text-white">
              React + Firebase
            </span>
            <span className="text-white">Chapters-16 lessons-106 <br/> fees: 120,000 MMK</span>
            
            <div className=" d-flex gap-3">
            <span className="text-white bg-yellow-600 w-20 text-center rounded-3 p-1" style={{fontSize:'13px'}}>JavaScript</span>
            <span className="text-white bg-blue-600 w-20 text-center rounded-3 p-1" style={{fontSize:'13px'}}>React</span>
            </div>
          </Card>
        </div>

        <div className="col-4">
          <Card
            className="max-w-sm mt-5 bg-black"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
            style={{width:'300px'}}
          >
            <span className=" fs-5 font-semibold text-white">
              React + Firebase
            </span>
            <span className="text-white">Chapters-16 lessons-106 <br/> fees: 120,000 MMK</span>
            
            <div className=" d-flex gap-3">
            <span className="text-white bg-green-600 w-20 text-center rounded-3 p-1" style={{fontSize:'13px'}}>JavaScript</span>
            <span className="text-white bg-yellow-600 w-20 text-center rounded-3 p-1" style={{fontSize:'13px'}}>React</span>
            </div>
          </Card>
        </div>

        <div className="col-4">
          <Card
            className="max-w-sm mt-5 bg-black"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
            style={{width:'300px', marginLeft:'100px'}}
          >
            <span className=" fs-5 font-semibold text-white">
              React + Firebase
            </span>
            <span className="text-white">Chapters-16 lessons-106 <br/> fees: 120,000 MMK</span>
            
            <div className=" d-flex gap-3">
            <span className="text-white bg-red-600 w-20 text-center rounded-3 p-1" style={{fontSize:'13px'}}>JavaScript</span>
            <span className="text-white bg-purple-800 w-20 text-center rounded-3 p-1" style={{fontSize:'13px'}}>React</span>
            </div>
          </Card>
        </div>

        <div className="col-4">
          <Card
            className="max-w-sm mt-5 bg-black"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
            style={{width:'300px', marginLeft:'50px'}}
          >
            <span className=" fs-5 font-semibold text-white">
              React + Firebase
            </span>
            <span className="text-white">Chapters-16 lessons-106 <br/> fees: 120,000 MMK</span>
            
            <div className=" d-flex gap-3">
            <span className="text-white bg-blue-600 w-20 text-center rounded-3 p-1" style={{fontSize:'13px'}}>JavaScript</span>
            <span className="text-white bg-yellow-600 w-20 text-center rounded-3 p-1" style={{fontSize:'13px'}}>React</span>
            </div>
          </Card>
        </div>

        <div className="col-4">
          <Card
            className="max-w-sm mt-5 bg-black"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
            style={{width:'300px'}}
          >
            <span className=" fs-5 font-semibold text-white">
              React + Firebase
            </span>
            <span className="text-white">Chapters-16 lessons-106 <br/> fees: 120,000 MMK</span>
            
            <div className=" d-flex gap-3">
            <span className="text-white bg-green-600 w-20 text-center rounded-3 p-1" style={{fontSize:'13px'}}>JavaScript</span>
            <span className="text-white bg-yellow-600 w-20 text-center rounded-3 p-1" style={{fontSize:'13px'}}>React</span>
            </div>
          </Card>
        </div>
      </div>

      <div className=" d-flex justify-center gap-3">
      <NavLink to="/course1">
      <GrPrevious className='text-white fs-6 rounded-circle mx-auto' style={{backgroundColor:'purple', padding:'12px', width:'40px', height:'40px', marginTop:'70px', marginBottom:'70px'}} />
      </NavLink>
      <NavLink to="/course">
              <button
                type="button"
                className="btn text-purple-700 fs-6 font-semibold"
                style={{ width:'40px', height:'40px', marginTop:'70px', marginBottom:'70px', backgroundColor: "white" }}
                
              >
              1
              </button>
            </NavLink>
            <NavLink to="/course1">
              <button
                type="button"
                className="btn text-purple-700 fs-6 font-semibold"
                style={{ width:'40px', height:'40px', marginTop:'70px', marginBottom:'70px', backgroundColor: "white" }}
                
              >
              2
              </button>
            </NavLink>
            <NavLink to="/course2">
              <button
                type="button"
                className="btn text-purple-700 fs-6 font-semibold"
                style={{ width:'40px', height:'40px', marginTop:'70px', marginBottom:'70px', backgroundColor: "white" }}
                
              >
              3
              </button>
            </NavLink>
      <NavLink to='/course2'>
      <GrNext className='text-white fs-6 rounded-circle mx-auto' style={{backgroundColor:'purple', padding:'12px', width:'40px', height:'40px', marginTop:'70px', marginBottom:'70px'}} />
      </NavLink>
       </div>
    </div>
  )
}

export default Course2