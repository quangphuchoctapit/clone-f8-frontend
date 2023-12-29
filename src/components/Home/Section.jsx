import React, { useEffect } from 'react'
import { Slide } from 'react-slideshow-image';
import { useNavigate } from 'react-router-dom';
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
    let { sectionTitle, isShowViewMore, isShowNumberMembers, numberMembers, detailSection, isNew, viewMoreTitle, hoverBtnTitle } = props


    let navigate = useNavigate()
    const handleRedirectUser = (data) => {
        // 'View more blogs'
        // 'View more videos'
        if (data === 'View road map') {
            navigate('/learning-path')
        }
    }

    return (
        <div className="mt-16  w-full text-base ">
            <div className="flex flex-col w-full ">
                <div className='flex justify-between p-5'>
                    <div className="flex gap-3 items-center justify-center">
                        <h2 className='font-bold md:text-3xl text-xl'>{sectionTitle}</h2>
                        <div className={isNew ? 'bg-blue-primary-300 px-2 py-1 md:px-3 md:py-1 text-white uppercase rounded-xl' : 'hidden'}>New</div>
                    </div>
                    <div onClick={() => handleRedirectUser(viewMoreTitle)} className={isShowViewMore ? "gap-2 items-center justify-center hidden md:flex" : 'hidden'}>
                        <span className='text-orange-primary-500 text-lg font-semibold cursor-pointer'>{viewMoreTitle ? viewMoreTitle : ""} </span>
                        <MdArrowForwardIos className='text-orange-primary-500' size={15} />
                    </div>
                </div>

                <div className=''>
                    {/* mobile */}
                    <div className='block lg:hidden'>
                        <div className='flex flex-row w-full overflow-x-auto'>
                            {detailSection && detailSection.length > 0 ?
                                detailSection.map((item) => {
                                    if (props.isPro === true) {
                                        if (item.isPro) {
                                            return (<div key={item.id} className='h-[350px] mx-3 p-6 rounded-2xl border shadow-xl sm:h-[450] md:h-[500] flex flex-col gap-4'>
                                                <div className={item.author || item.views ? "w-full h-[50%] " : "w-full h-[70%] "}>
                                                    <div style={{ backgroundImage: `url(${item.img})` }} className={item.comingSoon ? ` rounded-lg sm:rounded-3xl bg-no-repeat bg-cover bg-center w-[300px] md:w-[340px] lg:w-[200px] h-full` : ` cursor-pointer group rounded-lg sm:rounded-3xl bg-no-repeat bg-cover bg-center w-[300px] md:w-[340px] lg:w-[200px] h-full`}>
                                                        <div className='group-hover:bg-gray-800 group-hover:bg-opacity-40 group-hover:duration-300 w-full h-full rounded-3xl relative'>
                                                            <div className='group-hover:absolute hidden group-hover:block text-center group-hover:bg-white rounded-2xl group-hover:duration-300 group-hover:text-black right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[60%] md:w-[50%] h-[30%]'>
                                                                {item.alreadyEnrolled ? (item.alreadyEnrolled === true &&
                                                                    <div className="w-full h-full flex justify-center items-center text-lg font-semibold group-hover:animate-fade group-hover:duration-200">
                                                                        Continue
                                                                    </div>)
                                                                    : (hoverBtnTitle &&
                                                                        <div className="w-full h-full flex justify-center items-center text-lg font-semibold group-hover:animate-fade group-hover:duration-200">
                                                                            {hoverBtnTitle}
                                                                        </div>)
                                                                }
                                                                {item.alreadyEnrolled === false && !item.viewBlog && !item.viewVideo &&
                                                                    <div className="w-full h-full flex justify-center items-center text-lg font-semibold group-hover:animate-fade group-hover:duration-200">
                                                                        View this course
                                                                    </div>
                                                                }
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={item.author || item.views ? '"h-[50%] mx-1 flex flex-col gap-3"' : "h-[30%] mx-1 flex flex-col gap-3"}>
                                                    <h3 className='text-xl font-bold text-gray-500 line-clamp-2'>{item.title}
                                                    </h3>
                                                    {item.members &&
                                                        <div className='text-gray-500 font-normal text-lg flex gap-3 items-center '>
                                                            <FaUser size={15} />
                                                            {item.members}</div>
                                                    }
                                                    {item.author &&
                                                        <div className=' font-normal text-lg flex gap-3 items-center '>
                                                            <p className='font-semibold text-sm sm:text-lg'>{item.author}</p>
                                                            <p className='text-sm sm:text-base'>{item.minutes} minutes read</p>
                                                        </div>
                                                    }
                                                    {item.views &&
                                                        <div className=' font-normal text-base flex gap-3 items-center '>
                                                            <p className='flex items-center text-gray-500 gap-1'><IoIosEye size={15} />{item.views}</p>
                                                            <p className='flex items-center text-gray-500 gap-1'><AiFillLike size={15} />{item.likes}</p>
                                                            <p className='sm:flex hidden items-center text-gray-500 gap-1'><FaComment size={15} />{item.comments}</p>
                                                        </div>
                                                    }
                                                    <div className="flex gap-2 items-center">
                                                        <h2 className='sm:text-xl text-sm text-gray-400 font-semibold line-through'>{item.oldPrice}</h2>
                                                        <h1 className='sm:text-2xl text-lg font-bold text-orange-primary-500'>{item.newPrice}</h1>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        }
                                    } else {
                                        if (!item.isPro) {
                                            return (<div key={item.id} className='h-[350px] mx-3 p-6 rounded-2xl border shadow-xl sm:h-[450] md:h-[500] flex flex-col gap-4'>
                                                <div className={item.author || item.views ? "w-full h-[50%] " : "w-full h-[70%] "}>
                                                    <div style={{ backgroundImage: `url(${item.img})` }} className={item.comingSoon ? ` rounded-lg sm:rounded-3xl bg-no-repeat bg-cover bg-center w-[300px] md:w-[340px] lg:w-[200px] h-full` : ` cursor-pointer group rounded-lg sm:rounded-3xl bg-no-repeat bg-cover bg-center w-[300px] md:w-[340px] lg:w-[200px] h-full`}>
                                                        <div className='group-hover:bg-gray-800 group-hover:bg-opacity-40 group-hover:duration-300 w-full h-full rounded-3xl relative'>
                                                            <div className='group-hover:absolute hidden group-hover:block text-center group-hover:bg-white rounded-2xl group-hover:duration-300 group-hover:text-black right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[60%] md:w-[50%] h-[30%]'>
                                                                {item.alreadyEnrolled ? (item.alreadyEnrolled === true &&
                                                                    <div className="w-full h-full flex justify-center items-center text-lg font-semibold group-hover:animate-fade group-hover:duration-200">
                                                                        Continue
                                                                    </div>)
                                                                    : (hoverBtnTitle &&
                                                                        <div className="w-full h-full flex justify-center items-center text-lg font-semibold group-hover:animate-fade group-hover:duration-200">
                                                                            {hoverBtnTitle}
                                                                        </div>)
                                                                }
                                                                {item.alreadyEnrolled === false && !item.viewBlog && !item.viewVideo &&
                                                                    <div className="w-full h-full flex justify-center items-center text-lg font-semibold group-hover:animate-fade group-hover:duration-200">
                                                                        View this course
                                                                    </div>
                                                                }
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={item.author || item.views ? '"h-[50%] mx-1 flex flex-col gap-3"' : "h-[30%] mx-1 flex flex-col gap-3"}>
                                                    <h3 className='text-xl font-bold text-gray-500 line-clamp-2'>{item.title}
                                                    </h3>
                                                    {item.members &&
                                                        <div className='text-gray-500 font-normal text-lg flex gap-3 items-center '>
                                                            <FaUser size={15} />
                                                            {item.members}</div>
                                                    }
                                                    {item.author &&
                                                        <div className=' font-normal text-lg flex gap-3 items-center '>
                                                            <p className='font-semibold text-sm sm:text-lg'>{item.author}</p>
                                                            <p className='text-sm sm:text-base'>{item.minutes} minutes read</p>
                                                        </div>
                                                    }
                                                    {item.views &&
                                                        <div className=' font-normal text-base flex gap-3 items-center '>
                                                            <p className='flex items-center text-gray-500 gap-1'><IoIosEye size={15} />{item.views}</p>
                                                            <p className='flex items-center text-gray-500 gap-1'><AiFillLike size={15} />{item.likes}</p>
                                                            <p className='sm:flex hidden items-center text-gray-500 gap-1'><FaComment size={15} />{item.comments}</p>
                                                        </div>
                                                    }
                                                    <div className="flex gap-2 items-center">
                                                        <h2 className='sm:text-xl text-sm text-gray-400 font-semibold line-through'>{item.oldPrice}</h2>
                                                        <h1 className='sm:text-2xl text-lg font-bold text-orange-primary-500'>{item.newPrice}</h1>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        }
                                    }
                                })
                                :
                                <div className="">No Data... Please try again later...</div>
                            }
                        </div>
                    </div>

                    {/* web */}
                    <div className="hidden lg:block">
                        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-2">
                            {detailSection && detailSection.length > 0 ?
                                detailSection.map((item) => {
                                    if (props.isPro === true) {
                                        if (item.isPro) {
                                            return (
                                                <div key={item.id} className=' mx-3 p-6 lg:pb-0 rounded-2xl border shadow-xl flex flex-col gap-4 mb-5'>
                                                    <div className="w-full ">
                                                        <div style={{ backgroundImage: `url(${item.img})` }} className={item.comingSoon ? `  rounded-lg sm:rounded-3xl bg-no-repeat bg-cover bg-center w-full lg:h-[160px] xl:h-[120px]` : `cursor-pointer group rounded-lg sm:rounded-3xl bg-no-repeat bg-cover bg-center w-full lg:h-[160px] xl:h-[100px]`}>
                                                            <div className='group-hover:bg-gray-800 group-hover:bg-opacity-40 group-hover:duration-300 w-full h-full rounded-3xl relative'>
                                                                <div className='group-hover:absolute hidden group-hover:block text-center group-hover:duration-200 group-hover:bg-white rounded-2xl group-hover:animate-fade group-hover:text-black right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[60%] md:w-[80%] md:h-[40%] lg:h-[30%] h-[30%]'>
                                                                    <div className="w-full h-full flex justify-center items-center">
                                                                        {item.alreadyEnrolled ? (item.alreadyEnrolled === true &&
                                                                            <div className="w-full h-full group-hover:duration-200 flex justify-center items-center text-lg font-semibold ">
                                                                                Continue
                                                                            </div>)
                                                                            : (hoverBtnTitle &&
                                                                                <div className="w-full h-full group-hover:duration-200 flex justify-center items-center text-lg font-semibold ">
                                                                                    {hoverBtnTitle}
                                                                                </div>)
                                                                        }
                                                                        {item.alreadyEnrolled === false && !item.viewBlog && !item.viewVideo &&
                                                                            <div className="w-full h-full flex group-hover:duration-200 justify-center items-center text-lg font-semibold ">
                                                                                View this course
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className=" mx-1 flex flex-col flex-grow justify-between gap-3 md:pb-3">
                                                        <h3 className='text-xl font-bold text-gray-500 line-clamp-2'>{item.title}
                                                        </h3>
                                                        {item.members &&
                                                            <div className='text-gray-500 font-normal text-lg flex gap-3 items-center justify-start'>
                                                                <FaUser size={15} />
                                                                <div>{item.members}</div>
                                                            </div>
                                                        }
                                                        {item.author &&
                                                            <div className=' font-normal text-base flex gap-3 items-center '>
                                                                <p className='font-bold text-gray-500'>{item.author}</p>
                                                                <p className='text-sm'>{item.minutes} minutes read</p>
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
                                            )
                                        }
                                    } else {
                                        if (!item.isPro) {
                                            return (
                                                <div key={item.id} className=' mx-3 p-6 lg:pb-0 rounded-2xl border shadow-xl flex flex-col gap-4 mb-5'>
                                                    <div className="w-full ">
                                                        <div style={{ backgroundImage: `url(${item.img})` }} className={item.comingSoon ? `  rounded-lg sm:rounded-3xl bg-no-repeat bg-cover bg-center w-full lg:h-[160px] xl:h-[120px]` : `cursor-pointer group rounded-lg sm:rounded-3xl bg-no-repeat bg-cover bg-center w-full lg:h-[160px] xl:h-[100px]`}>
                                                            <div className='group-hover:bg-gray-800 group-hover:bg-opacity-40 group-hover:duration-300 w-full h-full rounded-3xl relative'>
                                                                <div className='group-hover:absolute hidden group-hover:block text-center group-hover:bg-white rounded-2xl group-hover:duration-300 group-hover:text-black right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[60%] md:w-[80%] md:h-[40%] lg:h-[30%] h-[30%]'>
                                                                    <div className="w-full h-full flex justify-center items-center">
                                                                        {item.alreadyEnrolled ? (item.alreadyEnrolled === true &&
                                                                            <div className="w-full h-full flex justify-center items-center text-lg font-semibold F">
                                                                                Continue
                                                                            </div>)
                                                                            : (hoverBtnTitle &&
                                                                                <div className="w-full h-full flex justify-center items-center text-lg font-semibold group-hover:animate-fade group-hover:duration-200">
                                                                                    {hoverBtnTitle}
                                                                                </div>)
                                                                        }
                                                                        {item.alreadyEnrolled === false && !item.viewBlog && !item.viewVideo &&
                                                                            <div className="w-full h-full flex justify-center items-center text-lg font-semibold group-hover:animate-fade group-hover:duration-200">
                                                                                View this course
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className=" mx-1 flex flex-col flex-grow justify-between gap-3 md:pb-3">
                                                        <h3 className='text-xl font-bold text-gray-500 line-clamp-2'>{item.title}
                                                        </h3>
                                                        {item.members &&
                                                            <div className='text-gray-500 font-normal text-lg flex gap-3 items-center justify-start'>
                                                                <FaUser size={15} />
                                                                <div>{item.members}</div>
                                                            </div>
                                                        }
                                                        {item.author &&
                                                            <div className=' font-normal text-base flex gap-3 items-center '>
                                                                <p className='font-bold text-gray-500'>{item.author}</p>
                                                                <p className='text-sm'>{item.minutes} minutes read</p>
                                                            </div>
                                                        }
                                                        {item.views &&
                                                            <div className=' font-normal text-base flex gap-3 items-center flex-wrap'>
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
                                            )
                                        }
                                    }
                                }
                                ) :
                                <div>No data... Please try again later...</div>
                            }

                        </div>
                    </div>
                </div>
                {isShowNumberMembers &&
                    <div className={isShowNumberMembers ? 'text-gray-500 mx-3 lg:mx-6 text-lg' : 'hidden'}>{numberMembers ? numberMembers : 0} users enrolled</div>
                }
            </div>
        </div>
    )
}

export default Section
