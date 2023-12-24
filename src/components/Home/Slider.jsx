import React from 'react'
import { Slide } from 'react-slideshow-image';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"



const Slider = () => {
    const indicators = (index) => (<div className="indicator">{index + 1}</div>);
    const properties = {
        prevArrow: <button className='ml-[-1%] shadow-xl border border-gray-400 rounded-full text-white bg-black hover:text-orange-primary-500'><BsFillArrowLeftCircleFill size={25} /></button>,
        nextArrow: <button className='mr-[-1%] shadow-xl border border-gray-400 rounded-full text-white bg-black hover:text-orange-primary-500' ><BsFillArrowRightCircleFill size={25} /></button>
    }

    return (
        <div className="mt-5  w-full text-white ">
            <Slide {...properties} className='rounded-lg' transitionDuration={600} autoplay canSwipe indicators={index => <div className="indicator">{index + 1}</div>} scale={1.4}>
                <div className="tw-each-slide">
                    <div className="tw-each-slide-content bg-gradient-to-r from-pink-primary-800 to-orange-primary-400">
                        <div className="flex flex-col gap-5 ">
                            <h1 className='md:text-2xl text-xl font-bold'>Achievements from F8's members</h1>
                            <p className='text-sm md:text-lg'>Setting a clear path is the key for success. Programming is no exception.</p>
                            <button className='border-white border-2 font-semibold text-white bg-transparent rounded-3xl hover:bg-white hover:text-orange-primary-400 w-[230px] md:w-[250px] py-2 sm:py-3'>View results of F8's members</button>
                        </div>
                    </div>
                </div>

                <div className="tw-each-slide">
                    <div className="tw-each-slide-content bg-gradient-to-r from-purple-primary-500 to-blue-primary-300">
                        <div className="flex flex-col gap-5 ">
                            <h1 className='md:text-2xl text-xl font-bold'>Learn ReactJS for FREE!</h1>
                            <p className='text-sm md:text-lg'>Free ReactJS course covers from basic to magic. Usually F8's members can seek jobs after acomplishing this course.</p>
                            <button className='border-white border-2 font-semibold text-white bg-transparent rounded-3xl hover:bg-white hover:text-purple-primary-500 w-[230px] md:w-[250px] py-2 sm:py-3'>Enroll Now</button>
                        </div>
                    </div>
                </div>
                <div className="tw-each-slide">
                    <div className="tw-each-slide-content bg-gradient-to-r from-purple-primary-500 to-pink-primary-200">
                        <div className="flex flex-col gap-5 ">
                            <h1 className='md:text-2xl text-xl font-bold'>Free HTML & CSS course for beginners!</h1>
                            <p className='text-sm md:text-lg'>Parcipating in actual Figma projects, hundred of challenges which are 100% covered by Mr.Son Dang, flash cards gifts, etc.</p>
                            <button className='border-white border-2 font-semibold text-white bg-transparent rounded-3xl hover:bg-white hover:text-purple-primary-500 w-[230px] md:w-[250px] py-2 sm:py-3'>Enroll Now for Free</button>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slider
