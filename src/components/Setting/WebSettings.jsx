import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HiOutlineUser } from "react-icons/hi2";
import { BsShieldShaded, BsBell } from "react-icons/bs";

const WebSettings = () => {
    let navigate = useNavigate()
    const handleRedirectUser = (data) => {
        console.log('chekc dataa; ,', data)
        if (data === 'setting account') {
            navigate('/setting/account')
        }
        if (data === 'setting security') {
            navigate('/setting/security')
        }
        if (data === 'setting notification') {
            navigate('/setting/notification')
        }
    }
    return (
        <div className="md:basis-5/12 hidden mb-5 md:mb-0  max-h-[80%] md:flex flex-col">
            <div onClick={() => handleRedirectUser('setting account')} className="flex flex-row gap-3 p-3 hover:bg-slate-200 font-semibold cursor-pointer rounded-2xl mx-2 items-center">
                <HiOutlineUser className='text-orange-primary-500 font-bold' size={20} />
                Account Setting
            </div>
            <div onClick={() => handleRedirectUser('setting security')} className="flex flex-row gap-3 p-3 hover:bg-slate-200 font-semibold cursor-pointer rounded-2xl mx-2 items-center">
                <BsShieldShaded className='text-orange-primary-500 font-bold' size={20} />
                Security and Authentication
            </div>
            <div onClick={() => handleRedirectUser('setting notification')} className="flex flex-row gap-3 p-3 hover:bg-slate-200 font-semibold cursor-pointer rounded-2xl mx-2 items-center">
                <BsBell className='text-orange-primary-500 font-bold' size={20} />
                Notification setting
            </div>
        </div>
    )
}

export default WebSettings
