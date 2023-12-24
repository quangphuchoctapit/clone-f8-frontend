import React, { useState, useRef, useEffect } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoInformationCircle, IoPeople } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaRoad } from "react-icons/fa6";
import { FaSearch, FaBell, FaUser, FaBookOpen, FaHome, FaBlogger, FaBookmark } from "react-icons/fa";

const Nav = () => {
    const [showSubmenuMobile, setShowSubmenuMobile] = useState(false)
    const [showSubmenuWeb, setShowSubmenuWeb] = useState(false)
    const [showSubmenuWebMyCourses, setShowSubmenuWebMyCourses] = useState(false)
    const [showSubmenuWebNotification, setShowSubmenuWebNotification] = useState(false)



    let menuMobileRef = useRef()
    let menuWebRef = useRef()
    let toggleWebRefBtn = useRef()
    let toggleWebRefBtnMyCourses = useRef()
    let menuWebRefMyCourses = useRef()
    let menuWebRefNotification = useRef()

    const handleShowSubmenu = () => {
        setShowSubmenuMobile(true)
    }

    const handleShowSubmenuWeb = () => {
        setShowSubmenuWebMyCourses(false)
        setShowSubmenuWeb(!showSubmenuWeb)
    }

    const handleShowSubmenuWebNotification = () => {
        setShowSubmenuWebMyCourses(false)
        setShowSubmenuWebNotification(!showSubmenuWebNotification)
    }

    const handleShowSubmenuWebMyCourses = () => {
        setShowSubmenuWeb(false)
        setShowSubmenuWebMyCourses(!showSubmenuWebMyCourses)
    }

    const handleClickOutsideMenuWebMyCourses = e => {
        if (menuWebRefMyCourses && !menuWebRefMyCourses.current.contains(e.target)) {
            setShowSubmenuWebMyCourses(false)
        }
    }

    const handleClickOutsideMenuMobile = e => {
        if (menuMobileRef && !menuMobileRef.current.contains(e.target)) {
            setShowSubmenuMobile(false)
        }
    }

    const handleClickOutsideMenuWeb = e => {
        if (menuWebRef && !menuWebRef.current.contains(e.target)) {
            setShowSubmenuWeb(false)
        }
    }

    const handleClickOutsideMenuWebNotification = e => {
        if (menuWebRefNotification && !menuWebRefNotification.current.contains(e.target)) {
            setShowSubmenuWebNotification(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', (e) => handleClickOutsideMenuMobile(e))
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMenuMobile);
        };
    }, [])

    useEffect(() => {
        document.addEventListener('mousedown', (e) => handleClickOutsideMenuWeb(e))
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMenuWeb);
        };
    })

    useEffect(() => {
        document.addEventListener('mousedown', (e) => handleClickOutsideMenuWebMyCourses(e))
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMenuWebMyCourses);
        };
    })

    useEffect(() => {
        document.addEventListener('mousedown', (e) => handleClickOutsideMenuWebNotification(e))
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMenuWebNotification);
        };
    })

    return (
        <div className='fixed top-0 left-0 h-20 border-b-2 w-full z-10 bg-white'>
            <div className="flex justify-between mx-auto max-w-screen-xl xl:max-w-screen-2xl px-6 items-center p-6 md:py-2 ">
                <div onClick={handleShowSubmenu} className='submenu-toggle block lg:hidden'>
                    <IoMdMenu size={25} className='text-gray-600' />
                </div>
                <div className="hidden lg:flex justify-center items-center gap-4">
                    <div className={`bg-[url('./assets/logo-f8.png')] bg-cover bg-no-repeat bg-center w-[40px] h-[40px] rounded-md`}></div>
                    <div className='font-bold text-lg '>Learn Programming to work</div>
                </div>
                <div className="relative hidden md:block">
                    <input type="text"
                        className="pl-16 pr-4 py-4 border-2 border-gray-300 focus:border-l-orange-primary-500 rounded-3xl md:w-[300px] lg:w-[500px]"
                        placeholder="Search..." />
                    <div className="absolute inset-y-0 left-0 pl-5
                        flex items-center  
                        pointer-events-none">
                        <FaSearch size={25} className='text-gray-400' />
                    </div>
                </div>
                <div className="flex gap-4 items-center justify-center relative">
                    <div className="hidden lg:block">

                        {/* toggle submenu mycourses */}
                        <h4 ref={toggleWebRefBtnMyCourses} onClick={handleShowSubmenuWebMyCourses} className='text-lg font-semibold text-gray-600 cursor-pointer'>My Courses</h4>
                        <div ref={menuWebRefMyCourses} className={showSubmenuWebMyCourses ? 'bg-white p-5 absolute right-0 mt-3 mr-[2rem] origin-bottom-right w-[450px] max-h-[40rem] overflow-y-scroll shadow-2xl rounded-md ease-in-out duration-300 animate-fade' : 'hidden animate-fade'}>
                            <div className="flex flex-col my-3">
                                <div className="flex justify-between items-center">
                                    <h4 className='text-xl font-semibold'>My courses</h4>
                                    <p className='text-orange-primary-500 font-normal text-lg cursor-pointer'>View All</p>
                                </div>
                            </div>
                            <div className="flex mt-5">
                                <div className="basis-2/5 rounded-lg bg-[url('https://files.fullstack.edu.vn/f8-prod/courses/13/13.png')] bg-no-repeat bg-cover bg-center w-[150px] h-[80px]"></div>
                                <div className="basis-3/5 flex flex-col gap-1 ml-5">
                                    <h3 className='text-lg font-semibold'>Build Websites with ReactJS</h3>
                                    <p className='text-gray-500'>Last accessed: 3 months ago</p>
                                </div>
                            </div>
                            <div className="flex mt-5">
                                <div className="basis-2/5 rounded-lg bg-[url('https://files.fullstack.edu.vn/f8-prod/courses/6.png')] bg-no-repeat bg-cover bg-center w-[150px] h-[80px]"></div>
                                <div className="basis-3/5 flex flex-col gap-1 ml-5">
                                    <h3 className='text-lg font-semibold'>NodeJS & ExpressJS</h3>
                                    <p className='text-gray-500'>Last accessed: 4 months ago</p>
                                </div>
                            </div>
                            <div className="flex mt-5">
                                <div className="basis-2/5 rounded-lg bg-[url('https://files.fullstack.edu.vn/f8-prod/courses/12.png')] bg-no-repeat bg-cover bg-center w-[150px] h-[80px]"></div>
                                <div className="basis-3/5 flex flex-col gap-1 ml-5">
                                    <h3 className='text-lg font-semibold'>Advanced Javascript</h3>
                                    <p className='text-gray-500'>Last accessed: 5 months ago</p>
                                </div>
                            </div>
                            <div className="flex mt-5">
                                <div className="basis-2/5 rounded-lg bg-[url('https://files.fullstack.edu.vn/f8-prod/courses/3.png')] bg-no-repeat bg-cover bg-center w-[150px] h-[80px]"></div>
                                <div className="basis-3/5 flex flex-col gap-1 ml-5">
                                    <h3 className='text-lg font-semibold'>Responsive Programming</h3>
                                    <p className='text-gray-500'>Last accessed: 6 months ago</p>
                                </div>
                            </div>
                            <div className="flex mt-5">
                                <div className="basis-2/5 rounded-lg bg-[url('https://files.fullstack.edu.vn/f8-prod/courses/1.png')] bg-no-repeat bg-cover bg-center w-[150px] h-[80px]"></div>
                                <div className="basis-3/5 flex flex-col gap-1 ml-5">
                                    <h3 className='text-lg font-semibold'>Fundamental Javascript</h3>
                                    <p className='text-gray-500'>Last accessed: 7 months ago</p>
                                </div>
                            </div>
                            <div className="flex mt-5">
                                <div className="basis-2/5 rounded-lg bg-[url('https://files.fullstack.edu.vn/f8-prod/courses/2.png')] bg-no-repeat bg-cover bg-center w-[150px] h-[80px]"></div>
                                <div className="basis-3/5 flex flex-col gap-1 ml-5">
                                    <h3 className='text-lg font-semibold'>HTML & CSS - From zero to Hero</h3>
                                    <p className='text-gray-500'>Last accessed: a year ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FaSearch className='block md:hidden text-gray-600' size={25} />
                    <div onClick={handleShowSubmenuWebNotification} className="cursor-pointer">
                        <FaBell size={25} className='text-gray-600' />
                    </div>
                    <div className="hidden lg:block relative">
                        <div ref={toggleWebRefBtn} onClick={handleShowSubmenuWeb} className="cursor-pointer toggle-submenu-web bg-[url('https://files.fullstack.edu.vn/f8-prod/user_photos/220943/62c981426797d.jpg')] w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] bg-no-repeat bg-center bg-cover rounded-full"></div>
                        {/* web submenu */}
                        <div ref={menuWebRef} className={showSubmenuWeb ? 'absolute right-0 mt-3 bg-white origin-bottom-right w-[250px] shadow-2xl rounded-md ease-in-out duration-300 animate-fade' : 'hidden animate-fade'}>
                            <div className="flex p-5 flex-col justify-center">
                                <div className="tw-each-submenu-web">
                                    <div className="tw-each-submenu-web-content">
                                        <p>My Profile</p>
                                    </div>
                                </div>
                                <div className="tw-each-submenu-web">
                                    <div className="tw-each-submenu-web-content">
                                        <p>Write Bblog</p>
                                    </div>
                                    <div className="tw-each-submenu-web-content mt-5">
                                        <p>My Blogs</p>
                                    </div>
                                </div>
                                <div className="tw-each-submenu-web">
                                    <div className="tw-each-submenu-web-content">
                                        <p>Bookmarked Blogs</p>
                                    </div>
                                </div>
                                <div className="tw-each-submenu-web">
                                    <div className="tw-each-submenu-web-content">
                                        <p>Settings</p>
                                    </div>

                                </div>
                                <div className="tw-each-submenu-web-content">
                                    <p>Log out</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* notification menu */}
            <div className=' w-full '>
                <div className='relative max-w-screen-xl mx-4 md:mx-auto'>
                    <div ref={menuWebRefNotification} className={showSubmenuWebNotification ? 'absolute right-0 bg-white p-5 shadow-2xl rounded-md ease-in-out duration-300 animate-fade' : 'hidden animate-fade'}>
                        <div className="flex flex-col my-3 text-xs sm:text-base md:text-lg">
                            <div className="flex justify-between items-center">
                                <h4 className='text-xl font-semibold'>Notifications</h4>
                                <p className='text-orange-primary-500 font-normal text-lg'>Mark as all read</p>
                            </div>
                            <div className="flex mt-5 bg-orange-primary-200 p-3 rounded-xl">
                                <div className="basis-3/12 sm:basis-1/5 flex justify-center items-center">
                                    <div className="md:w-[60px] md:h-[60px] w-[40px] h-[40px] bg-[url('https://fullstack.edu.vn/assets/images/f8_avatar.png')] bg-no-repeat bg-cover bg-center rounded-full "></div>
                                </div>
                                <div className="basis-7/12 md:ml-4 sm:basis-3/5 flex flex-col gap-1 text-xs">
                                    <h3 className='text-sm font-normal'>New lesson <span className='font-semibold'>Noob Course</span> has just been uploaded. Check it out!</h3>
                                    <p className='text-orange-primary-500 font-bold'>A month ago</p>
                                </div>
                                <div className="basis-2/12 sm:basis-1/5 flex justify-center items-center">
                                    <div className="rounded-full w-3 h-3 bg-status-blue-500"></div>
                                </div>
                            </div>
                            <div className="flex mt-5 bg-orange-primary-200 p-3 rounded-xl">
                                <div className="basis-3/12 sm:basis-1/5 flex justify-center items-center">
                                    <div className="md:w-[60px] md:h-[60px] w-[40px] h-[40px] bg-[url('https://fullstack.edu.vn/assets/images/f8_avatar.png')] bg-no-repeat bg-cover bg-center rounded-full "></div>
                                </div>
                                <div className="basis-7/12 md:ml-4 sm:basis-3/5 flex flex-col gap-1 text-xs">
                                    <h3 className='text-sm font-normal'>New lesson <span className='font-semibold'>Noob Course</span> has just been uploaded. Check it out!</h3>
                                    <p className='text-orange-primary-500 font-bold'>A month ago</p>
                                </div>
                                <div className="basis-2/12 sm:basis-1/5 flex justify-center items-center">
                                    <div className="rounded-full w-3 h-3 bg-status-blue-500"></div>
                                </div>
                            </div>
                            <div className="flex mt-5  p-3 rounded-xl">
                                <div className="basis-3/12 sm:basis-1/5 flex justify-center items-center">
                                    <div className="md:w-[60px] md:h-[60px] w-[40px] h-[40px] bg-[url('https://fullstack.edu.vn/assets/images/f8_avatar.png')] bg-no-repeat bg-cover bg-center rounded-full "></div>
                                </div>
                                <div className="basis-7/12 md:ml-4 sm:basis-3/5 flex flex-col gap-1 text-xs">
                                    <h3 className='text-sm font-normal'>New lesson <span className='font-semibold'>Noob Course</span> has just been uploaded. Check it out!</h3>
                                    <p className='text-orange-primary-500 font-bold'>A month ago</p>
                                </div>
                                <div className="basis-2/12 sm:basis-1/5 flex justify-center items-center">
                                    {/* <div className="rounded-full w-3 h-3 bg-status-blue-500"></div> */}
                                </div>
                            </div>
                            <div className="flex mt-5 bg-orange-primary-200 p-3 rounded-xl">
                                <div className="basis-3/12 sm:basis-1/5 flex justify-center items-center">
                                    <div className="md:w-[60px] md:h-[60px] w-[40px] h-[40px] bg-[url('https://fullstack.edu.vn/assets/images/f8_avatar.png')] bg-no-repeat bg-cover bg-center rounded-full "></div>
                                </div>
                                <div className="basis-7/12 md:ml-4 sm:basis-3/5 flex flex-col gap-1 text-xs">
                                    <h3 className='text-sm font-normal'>New lesson <span className='font-semibold'>Noob Course</span> has just been uploaded. Check it out!</h3>
                                    <p className='text-orange-primary-500 font-bold'>A month ago</p>
                                </div>
                                <div className="basis-2/12 sm:basis-1/5 flex justify-center items-center">
                                    <div className="rounded-full w-3 h-3 bg-status-blue-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile submenu */}
            <div ref={menuMobileRef} className={!showSubmenuMobile ? 'mobile-submenu fixed px-10 top-0 left-[-100%] p-4 w-[80%] h-screen lg:hidden bg-white duration-300 ease-in-out shadow-2xl ' : ' shadow-2xl mobile-submenu fixed px-10 top-0 left-0 p-4 w-[80%] sm:w-[40%] h-screen lg:hidden bg-white duration-300 ease-in-out'}>
                <div className="flex flex-col items-start gap-4">
                    <div className="bg-[url('https://files.fullstack.edu.vn/f8-prod/user_photos/220943/62c981426797d.jpg')] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-no-repeat bg-center bg-cover rounded-full"></div>
                    <h4 className='text-xl font-semibold'>Noob User</h4>
                </div>
                <div className="tw-each-submenu-mobile">
                    <div className="tw-each-submenu-mobile-content">
                        <FaUser size={15} />
                        <p>My Profile</p>
                    </div>
                    <div className="tw-each-submenu-mobile-content">
                        <FaBookOpen size={15} />
                        My courses
                    </div>
                </div>
                <div className="tw-each-submenu-mobile">
                    <div className="tw-each-submenu-mobile-content">
                        <FaHome size={15} />
                        <p>Homepage</p>
                    </div>
                    <div className="tw-each-submenu-mobile-content">
                        <FaRoad size={15} />
                        Road Map
                    </div>
                    <div className="tw-each-submenu-mobile-content">
                        <FaBlogger size={15} />
                        <p>Blogs</p>
                    </div>
                </div>
                <div className="tw-each-submenu-mobile">
                    <div className="tw-each-submenu-mobile-content">
                        <FaBookmark size={15} />
                        <p>Bookmarked Blogs</p>
                    </div>
                </div>
                <div className="tw-each-submenu-mobile">
                    <div className="tw-each-submenu-mobile-content">
                        <IoInformationCircle size={15} />
                        <p>About</p>
                    </div>
                    <div className="tw-each-submenu-mobile-content">
                        <IoPeople size={15} />
                        Career Opportunities
                    </div>
                    <div className="tw-each-submenu-mobile-content">
                        <AiFillSetting size={15} />
                        <p>Setting</p>
                    </div>
                </div>
                <div className="tw-each-submenu-mobile-content">
                    <RiLogoutBoxLine size={15} className='font-extrabold' />
                    <div className="">Log out</div>
                </div>
            </div>

        </div>
    )
}

export default Nav
