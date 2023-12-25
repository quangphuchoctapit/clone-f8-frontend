import React, { useEffect, useState } from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import { IoPeople } from "react-icons/io5";
import { courses } from '../Home/HomePage';


const UserProfile = () => {

    return (
        <>
            <Nav />
            <div className='mt-20 w-full overflow-hidden'>
                <div className='max-w-screen-xl xl:max-w-screen-2xl mx-auto'>
                    <div className=" w-[95%] sm:w-[90%] md:w-[80%] mx-auto">

                        <div className="flex flex-col ">
                            {/* profile introduction */}
                            <div className="w-full flex flex-col h-[500px] mb-5">
                                <div className="w-[100vw] relative left-[calc(-50vw+50%)] md:w-full md:static h-[60%] max-h-[300px] bg-[url('https://fullstack.edu.vn/static/media/cover-profile.3fb9fed576da4b28386a.png')] bg-center bg-no-repeat bg-cover mx-auto md:rounded-3xl"></div>
                                <div className="flex-col gap-4 mt-[-70px] md:mt-[-70px] md:ml-32 z-10 justify-center items-center flex md:flex-row md:items-end md:justify-start">
                                    <div style={{ backgroundImage: `url('https://files.fullstack.edu.vn/f8-prod/user_photos/220943/62c981426797d.jpg')` }}
                                        className='w-[140px] h-[140px] rounded-full border-white border-4 '></div>
                                    <h1 className='text-3xl font-bold'>Tommy Le</h1>
                                </div>
                            </div>

                            {/* activities & enrolled courses */}
                            <div className="flex flex-col lg:flex-row w-full bg-white">
                                <div className="flex flex-col gap-5 lg:basis-5/12">
                                    <div className="p-6 flex flex-col gap-3 items-start shadow-2xl border  rounded-2xl">
                                        <h1 className='text-gray-600 text-xl font-semibold'>Introduction</h1>
                                        <div className="flex gap-2 items-center justify-center">
                                            <IoPeople className='text-gray-600 text-[2.5rem] sm:text-[1.5rem]' />
                                            <p>Participated in F8 - Learn programming to work about a year ago.</p>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col gap-3 items-start border shadow-2xl rounded-2xl">
                                        <h1 className='text-gray-600 text-xl font-semibold'>Recent activity</h1>
                                        <div className="flex gap-2 items-center justify-center">
                                            <p>No resut.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 lg:basis-6/12 w-full flex-grow lg:ml-5">
                                    <div className="p-6 flex flex-col gap-5 border shadow-2xl rounded-lg">
                                        <h1 className='text-gray-600 text-xl font-semibold'>Participated Courses</h1>
                                        {courses && courses.length > 0 && courses.map((item) => {
                                            if (item.alreadyEnrolled) {
                                                return (
                                                    <div key={item.id} className="relative after:absolute after:bg-slate-300 ater:bottom-0 after:left-0 after:w-full after:h-[1px]">
                                                        <div className="flex flex-col w-full md:flex-row gap-4 p-4 rounded-2xl ">
                                                            <div className="md:w-[40%]">
                                                                <div style={{ backgroundImage: `url('${item.img}')` }} className="cursor-pointer w-full mx-auto sm:h-[240px] lg:h-[100px] xl:h-[140px] h-[120px] md:h-[140px] xs:h-[180px] bg-cover bg-no-repeat bg-center rounded-3xl "></div>
                                                            </div>
                                                            <div className="py-5 md:py-3 md:max-w-[60%] flex flex-col gap-3 ">
                                                                <h1 className='text-xl font-semibold cursor-pointer '>{item.title}</h1>
                                                                <div className="lg:max-w-[200px] flex flex-wrap flex-1 h-[300px]">
                                                                    <p className='line-clamp-4 block'>asdsadasd</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UserProfile
