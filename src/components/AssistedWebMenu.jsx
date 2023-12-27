import React, { useState, useEffect, useRef } from 'react'
import { FaCirclePlus, FaRoad } from "react-icons/fa6";
import { useNavigate, useLocation } from 'react-router-dom'
import { FaHome, FaBlogger } from "react-icons/fa";

const AssistedWebMenu = (props) => {
    let navigate = useNavigate()
    const handleRedirectUser = (data) => {
        if (data === 'user profile') {
            navigate('/user-profile')
        }
        if (data === 'home page') {
            navigate('/')
        }
        if (data === 'learning path') {
            navigate('/learning-path')
        }
    }
    let [isShow, setIsShow] = useState(false)
    let menuRef = useRef()

    // check mouse over at the exact position
    useEffect(() => {
        setIsShow(props.isShowAssistedMenu)
    }, [props.isShowAssistedMenu])

    useEffect(() => {
        const checkIfMouseOver = (event) => {
            if (menuRef && menuRef?.current) {
                const { left, top, right, bottom } = menuRef?.current?.getBoundingClientRect();
                if (event.clientX >= left && event.clientX <= right && event.clientY >= top && event.clientY <= bottom) {
                    setIsShow(true);
                } else {
                    setIsShow(false);
                }
            }
        };

        document.addEventListener('mousemove', checkIfMouseOver);

        return () => {
            document.removeEventListener('mousemove', checkIfMouseOver);
        };
    }, []);

    let { displayAssistedWebMenu } = props


    return (
        <>
            {displayAssistedWebMenu ? <div ref={menuRef} className={isShow ? "fixed top-20 left-5 duration-300 ease-in-out lg:block hidden" : 'left-[-120px] fixed top-20 duration-300 ease-in-out lg:block hidden'}>
                <div className={isShow ? "w-full bg-slate-100 rounded-xl h-full flex-col lg:flex hidden justify-start items-center" : "w-full lg:flex hidden bg-slate-400 duration-[800ms] rounded-xl h-full flex-col justify-start items-center"}>
                    <div className="my-5 cursor-pointer ">
                        <FaCirclePlus className='text-blue-600 hover:duration-200 hover:text-blue-400 hover:rounded-full' size={50} />
                    </div>
                    <div onClick={() => handleRedirectUser('home page')} className="my-5 flex flex-col w-32 py-4 rounded-2xl hover:duration-300 hover:bg-slate-300 cursor-pointer justify-center items-center">
                        <FaHome size={25} />
                        <p className='text-lg'>Home</p>
                    </div>
                    <div  onClick={() => handleRedirectUser('learning path')} className="my-5 flex flex-col w-32 py-4 rounded-2xl hover:duration-300 hover:bg-slate-300 cursor-pointer justify-center items-center">
                        <FaRoad size={25} />
                        <p className='text-lg'>Road Map</p>
                    </div>
                    <div className="my-5 flex flex-col w-32 py-4 rounded-2xl hover:duration-300 hover:bg-slate-300 cursor-pointer justify-center items-center">
                        <FaBlogger size={25} />
                        <p className='text-lg'>Blogs</p>
                    </div>
                </div>
            </div> : ''}
        </>
    )
}

export default AssistedWebMenu
