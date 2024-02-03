// import React from 'react'
// import Video from '../../assets/ep1.mp4'

import Accordionn from "../../components/Accordion";

const CourseDetail = () => {
    return (
        <div className='flex  h-screen items-stretch bg-slate-900 px-5'>
            <div className='w-3/4 flex flex-col justify-center p-24 self-center'>
                <div>
                    <video className='border-2 w-full' controls >
                        <source src="" type="video/mp4" />
                    </video>
                </div>
                <div className='text-white my-3'>
                    <h1>Chapter 1</h1>
                    <h4 className='mt-3'>Episode-1 Introduction</h4>
                </div>
            </div>
            <div className='w-1/3 self-start mt-5'>
                <Accordionn/>
            </div>
        </div>
    )
}

export default CourseDetail;