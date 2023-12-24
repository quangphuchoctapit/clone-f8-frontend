import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { FaCirclePlus, FaRoad } from "react-icons/fa6";
import { FaHome, FaBlogger } from "react-icons/fa";
import Slider from './Slider';
import Courses from './Courses';

let detailProCourses = [
    {
        id: 1,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
        title: 'HTML CSS Pro',
        oldPrice: '2.500.000đ',
        newPrice: '1.299.000đ'
    },
    {
        id: 2,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/27/64e184ee5d7a2.png',
        title: 'CSS pre-processor SASS',
        oldPrice: '400.000đ',
        newPrice: '299.000đ'
    },
    {
        id: 3,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png',
        title: 'JavaScript Pro',
        oldPrice: null,
        newPrice: null
    },
    {
        id: 4,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
        title: 'NextJS Pro',
        oldPrice: null,
        newPrice: null
    },
]

const HomePage = () => {

    return (
        <div className='mt-20 w-full'>
            <div className='max-w-screen-xl xl:max-w-screen-2xl mx-auto'>
                <div className="border-2 border-red-300 w-full">
                    <div className="mx-5  grid-cols-12 grid">
                        {/* left menu (>1023px) */}
                        <div className="lg:col-span-2 hidden lg:block col-span-0 my-5 mr-5">
                            <div className="w-full bg-slate-100 rounded-xl h-full flex flex-col justify-start items-center">
                                <div className="my-5">
                                    <FaCirclePlus className='text-blue-600' size={50} />
                                </div>
                                <div className="my-5 flex flex-col w-32 py-4 rounded-2xl hover:bg-slate-300 justify-center items-center">
                                    <FaHome size={25} />
                                    <p className='text-lg'>Home</p>
                                </div>
                                <div className="my-5 flex flex-col w-32 py-4 rounded-2xl hover:bg-slate-300 justify-center items-center">
                                    <FaRoad size={25} />
                                    <p className='text-lg'>Road Map</p>
                                </div>
                                <div className="my-5 flex flex-col w-32 py-4 rounded-2xl hover:bg-slate-300 justify-center items-center">
                                    <FaBlogger size={25} />
                                    <p className='text-lg'>Blogs</p>
                                </div>
                            </div>
                        </div>


                        {/* homepage content */}
                        <div className="lg:col-span-10 col-span-12">
                            {/* slider main */}
                            <Slider />

                            {/* pro courses */}
                            <Courses detailCourses={detailProCourses} coursesTitle={'Pro Courses'} isShowViewRoadMap={true} isShowNumberMembers={true} numberMembers={'371,690+'} />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default HomePage
