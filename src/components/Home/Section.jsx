import React, { useEffect } from 'react'
import { Slide } from 'react-slideshow-image';
import { MdArrowForwardIos } from "react-icons/md";
import { FaUser, FaComment } from "react-icons/fa"
import { IoIosEye } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";



const responsiveSettings = [
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 340,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];


const Section = (props) => {
    let { sectionTitle, isShowViewMore, isShowNumberMembers, numberMembers, detailSection, isNew, viewMoreTitle } = props

    console.log('check data: ', detailSection[1].img)
    return (
        <div className="mt-16  w-full text-base border ">
            <div className="flex flex-col w-full ">
                <div className='flex justify-between p-5'>
                    <div className="flex gap-3 items-center justify-center">
                        <h2 className='font-bold md:text-3xl text-xl'>{sectionTitle}</h2>
                        <div className={isNew ? 'bg-blue-primary-300 px-2 py-1 md:px-3 md:py-1 text-white uppercase rounded-xl' : 'hidden'}>New</div>
                    </div>
                    <div className={isShowViewMore ? "gap-2 items-center justify-center hidden md:flex" : 'hidden'}>
                        <span className='text-orange-primary-500 text-lg font-semibold '>{viewMoreTitle ? viewMoreTitle : ""} </span>
                        <MdArrowForwardIos className='text-orange-primary-500' size={15} />
                    </div>
                </div>

                <div className=''>
                    {/* mobile */}
                    <div className='block lg:hidden'>
                        <Slide autoplay={false} slidesToScroll={1} slidesToShow={1} indicators={true} responsive={responsiveSettings}>
                            {detailSection && detailSection.length > 0 ?
                                detailSection.map((item) => (
                                    <div key={item.id} className='h-[350px] mx-3 p-6 rounded-2xl border shadow-xl sm:h-[450] md:h-[500] flex flex-col gap-4'>
                                        <div className="w-full h-[70%]">
                                            <div style={{ backgroundImage: `url(${item.img})` }} className={item.img ? ` rounded-lg sm:rounded-3xl bg-no-repeat bg-cover bg-center w-full h-full` : './assets/logo-f8.png'}></div>
                                        </div>
                                        <div className="h-[30%] mx-1 flex flex-col gap-3">
                                            <h3 className='text-xl font-bold text-gray-500'>{item.title}
                                            </h3>
                                            {item.members &&
                                                <div className='text-gray-500 font-normal text-lg flex gap-3 items-center '>
                                                    <FaUser size={15} />
                                                    {item.members}</div>
                                            }
                                            {item.author &&
                                                <div className=' font-normal text-lg flex gap-3 items-center '>
                                                    <p>{item.author}</p>
                                                    <p>{item.minutes} minutes read</p>
                                                </div>
                                            }
                                            {item.views &&
                                                <div className=' font-normal text-base flex gap-3 items-center '>
                                                    <p className='flex items-center text-gray-500 gap-1'><IoIosEye size={15} />{item.views}</p>
                                                    <p className='flex items-center text-gray-500 gap-1'><AiFillLike size={15} />{item.likes}</p>
                                                    <p className='flex items-center text-gray-500 gap-1'><FaComment size={15} />{item.comments}</p>
                                                </div>
                                            }
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
                            {detailSection && detailSection.length > 0 ?
                                detailSection.map((item) => (
                                    <div key={item.id} className=' mx-3 p-6 lg:pb-0 rounded-2xl border shadow-xl flex flex-col gap-4 mb-5'>
                                        <div className="w-full ">
                                            <div style={{ backgroundImage: `url(${item.img})` }} className={` rounded-lg sm:rounded-3xl bg-no-repeat bg-cover bg-center w-full lg:h-[160px] xl:h-[100px]`}></div>
                                        </div>
                                        <div className=" mx-1 flex flex-col gap-3">
                                            <h3 className='text-xl font-bold text-gray-500'>{item.title}
                                            </h3>
                                            {item.members &&
                                                <div className='text-gray-500 font-normal text-lg flex gap-3 items-center justify-start'>
                                                    <FaUser size={15} />
                                                    <div>{item.members}</div>
                                                </div>
                                            }
                                            {item.author &&
                                                <div className=' font-normal text-base flex gap-3 items-center '>
                                                    <p className='font-bold'>{item.author}</p>
                                                    <p>{item.minutes} minutes read</p>
                                                </div>
                                            }
                                            {item.views &&
                                                <div className=' font-normal text-base flex gap-3 items-center '>
                                                    <p className='flex items-center text-gray-500 gap-1'><IoIosEye size={15} />{item.views}</p>
                                                    <p className='flex items-center text-gray-500 gap-1'><AiFillLike size={15} />{item.likes}</p>
                                                    <p className='flex items-center text-gray-500 gap-1'><FaComment size={15} />{item.comments}</p>
                                                </div>
                                            }
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
                {isShowNumberMembers &&
                    <div className={isShowNumberMembers ? 'text-gray-400 mx-3 lg:mx-6' : 'hidden'}>{numberMembers ? numberMembers : 0} users enrolled</div>
                }
            </div>
        </div>
    )
}

export default Section
