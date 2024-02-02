import '../../App.css'
import './Home.css'
import {motion} from 'framer-motion'

function Home() {

  return (
    <>
       <div className='container-fluid '>
        <div className="row ">

          <div className="col-6">
          
          <motion.div
          animate={{ y: 50 ,opacity: 1, scale: 1}}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.4 }}>
          <h2 className='text-white fw-bold fs-3' style={{marginTop:'100px', marginLeft:'150px'}}>Learn with<br/></h2>
          <span className='text-white fw-bold fs-3' id='color' style={{ marginLeft:'150px'}}>Experts Anytime,<br/></span>
          <span className='text-white fw-bold fs-3' style={{ marginLeft:'150px'}}>Anywhere<br/></span>
          </motion.div>
          

          <motion.div
          animate={{ y: -50 ,opacity: 1, scale: 1  }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.4 }}
          style={{marginTop:'100px'}}
          >
          <span className='font-semibold opacity-60 text-white' style={{marginLeft:'150px', fontSize:'15px'}}>Our mission is to help people to find the best course online &</span><br/>
          <span className='font-semibold opacity-60 text-white' style={{marginLeft:'150px', fontSize:'15px'}}>learn with expert anytime, anywhere.</span>
          </motion.div>
          </div>

          <motion.div className="col-6 "
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          >
          <img src="/img/photo_2024-01-24_21-18-20-removebg-preview.png" style={{marginLeft:'40px', width:'500px', paddingBottom:'100px', marginTop:'30px'}} alt=""  />
          </motion.div>
        </div>    
    </div>
    </>
  )
}

export default Home;
