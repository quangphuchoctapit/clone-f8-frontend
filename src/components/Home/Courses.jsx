import React from 'react'
import { Slide } from 'react-slideshow-image';
import { MdArrowForwardIos } from "react-icons/md";



const responsiveSettings = [
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 360,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];


const Courses = (props) => {
    let { coursesTitle, isShowViewRoadMap, isShowNumberMembers, numberMembers, detailCourses } = props
    return (
        <div className="mt-16  w-full text-base border-green-300 border ">
            <div className="flex flex-col w-full ">
                <div className='flex justify-between p-5'>
                    <div className="flex gap-3 items-center justify-center">
                        <h2 className='font-bold md:text-3xl text-xl'>{coursesTitle}</h2>
                        <div className='bg-blue-primary-300 px-2 py-1 md:px-3 md:py-1 text-white uppercase rounded-xl'>New</div>
                    </div>
                    <div className={isShowViewRoadMap ? "gap-2 items-center justify-center hidden md:flex" : 'hidden'}>
                        <span className='text-orange-primary-500 text-lg font-semibold '>View road map </span>
                        <MdArrowForwardIos className='text-orange-primary-500' size={15} />
                    </div>
                </div>

                <div className='pro-courses'>
                    {/* mobile */}
                    <div className='block lg:hidden'>
                        <Slide autoplay={false} slidesToScroll={1} slidesToShow={1} indicators={true} responsive={responsiveSettings}>
                            {detailCourses && detailCourses.length > 0 ?
                                detailCourses.map((item) => (
                                    <div key={item.id} className='h-[200px] mx-3 p-6 rounded-2xl border shadow-xl sm:h-[250px] md:h-[300px] flex flex-col gap-4'>
                                        <div className="w-full h-[70%]">
                                            <div className={`bg-[url('${item.img}')] rounded-lg sm:rounded-3xl bg-no-repeat bg-cover bg-center w-full h-full`}></div>
                                        </div>
                                        <div className="h-[30%] mx-1 flex flex-col gap-3">
                                            <h3 className='text-xl font-bold text-gray-500'>{item.title}</h3>
                                            <div className="flex gap-2 items-center">
                                                <h2 className='sm:text-xl text-sm text-gray-400 font-semibold line-through'>{item.oldPrice}</h2>
                                                <h1 className='sm:text-2xl text-lg font-bold text-orange-primary-500'>{item.newPrice}</h1>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                :
                                <div className="">No Data... Please try again later...</div>
                            }

                        </Slide>
                    </div>

                    {/* web */}
                    <div className="hidden lg:block">
                        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-2">
                            {detailCourses && detailCourses.length > 0 ?
                                detailCourses.map((item) => (
                                    <div className=' mx-3 p-6 rounded-2xl border shadow-xl flex flex-col gap-4 mb-5'>
                                        <div className="w-full ">
                                            <div className={`bg-[url('${item.img}')] rounded-lg sm:rounded-3xl bg-no-repeat bg-cover bg-center w-full lg:h-[160px] xl:h-[100px]`}></div>
                                        </div>
                                        <div className=" mx-1 flex flex-col gap-3">
                                            <h3 className='text-xl font-bold text-gray-500'>{item.title}</h3>
                                            <div className="flex gap-2 items-center">
                                                <h2 className='sm:text-base text-sm text-gray-400 font-semibold line-through'>{item.oldPrice}</h2>
                                                <h1 className='sm:text-lg text-lg font-bold text-orange-primary-500'>{item.newPrice}</h1>
                                            </div>
                                        </div>
                                    </div>
                                )) :
                                <div>No data... Please try again later...</div>
                            }

                        </div>
                    </div>
                </div>
                <div className={isShowNumberMembers ? 'text-gray-400 mx-3 lg:mx-6' : 'hidden'}>{numberMembers ? numberMembers : 0} users enrolled</div>
            </div>
        </div>
    )
}

export default Courses
