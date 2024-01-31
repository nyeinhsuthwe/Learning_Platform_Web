import '../../App.css'
import { FaUserGraduate } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import './Home.css'

function Home() {

  return (
    <>
       <div className='container-fluid '>
        <div className="row ">

          <div className="col-6" >
          <h2 className='text-white fw-bold fs-3' style={{marginTop:'150px', marginLeft:'150px'}}>Learn with<br/></h2>
          <span className='text-white fw-bold fs-3' id='color' style={{ marginLeft:'150px'}}>Experts Anytime,<br/></span>
          <span className='text-white fw-bold fs-3' style={{ marginLeft:'150px'}}>Anywhere<br/></span>
          <span className='font-semibold opacity-60 text-white' style={{marginLeft:'150px', fontSize:'15px'}}>Our mission is to help people to find the best course online &</span><br/>
          <span className='font-semibold opacity-60 text-white' style={{marginLeft:'150px', fontSize:'15px'}}>learn with expert anytime, anywhere.</span>
          </div>

          <div className="col-6 ">
    
          <img src="/img/photo_2024-01-24_21-18-20-removebg-preview.png" style={{marginLeft:'40px'}} alt=""  />
          </div>
        </div>

        {/* for course section */}
        <div>
        <h3 className='text-white text-center font-semibold fs-4'>Popular Courses</h3>
        </div>

        {/* benefit */}
        <div className="row mx-auto">
          <div className="col-6">
           <img src="/img/photo_2024-01-31_17-26-03-removebg-preview.png" style={{marginLeft:'180px' ,width:'400px', height:'380px'}} alt="" />
          </div>
          <div className="col-6">
            <h5 className='text-white font-semibold mt-7 mb-7 fw-bold'>Benefit from our Online Learning</h5>

            <div className='d-flex mb-4'>
            <div><FaCode className='text-white mb-4 fs-6 rounded-circle bg-blue-500' style={{ padding:'12px', width:'40px', height:'40px'}} /></div>
             <div className='me-7'>
             <span className='ml-4 text-white font-semibold'>Short Courses</span><br/>
             <span className='ml-4 text-white font-semibold opacity-60' style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span><br/>
             <span className='ml-4 text-white font-semibold opacity-60' style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
             </div>
            </div>
            <div className='d-flex mb-4'>
            <div><FaUserGraduate className='text-white mb-4 fs-6 rounded-circle' style={{backgroundColor:'purple', padding:'12px', width:'40px', height:'40px'}} /></div>
             <div className=''>
             <span className='ml-4 text-white font-semibold'>Online Degrees</span><br/>
             <span className='ml-4 text-white font-semibold opacity-60' style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span><br/>
             <span className='ml-4 text-white font-semibold opacity-60' style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
             </div>
            </div>


            <div className='d-flex mb-4'>
            <div><FaUserTie className='text-white mb-4 fs-6 rounded-circle bg-blue-800' style={{ padding:'12px', width:'40px', height:'40px'}} /></div>
             <div className='me-7'>
             <span className='ml-4 text-white font-semibold'>Online Degrees</span><br/>
             <span className='ml-4 text-white font-semibold opacity-60' style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span><br/>
             <span className='ml-4 text-white font-semibold opacity-60' style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
             </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home;
