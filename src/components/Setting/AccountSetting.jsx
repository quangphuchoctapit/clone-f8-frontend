import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import { HiOutlineUser } from "react-icons/hi2";
import { BsShieldShaded, BsBell } from "react-icons/bs";
import WebSettings from './WebSettings';

const AccountSetting = () => {
    return (
        <>
            <Nav />
            <div className='mt-20 w-full'>
                <div className='max-w-screen-xl xl:max-w-screen-2xl mx-auto bg-white'>
                    <div className=" w-[95%] sm:w-[90%] md:w-[90%] mx-auto">
                        <div className="h-full w-full">
                            <div className="hidden md:block p-5 text-3xl font-extrabold">Setting</div>
                            <div className='flex flex-col md:flex-row md:gap-5 w-full h-full'>
                                <WebSettings />
                                <div className="md:basis-7/12 border shadow-lg rounded-lg">
                                    <h1 className="text-2xl font-semibold p-5 relative after:absolute after:bottom-0 after:left-0 after:bg-slate-500 after:h-[1px] after:w-[100%] mx-5">Account Information</h1>
                                    <div className="flex flex-col">
                                        <div className="flex flex-col md:flex-row gap-5 p-5 md:justify-between w-full">
                                            <div className="lg:basis-8/12">
                                                <div className="flex flex-col gap-3">
                                                    <h2 className='text-xl font-semibold'>Full Name</h2>
                                                    <input placeholder='Tommy Le' type="text" disabled className='p-3 border-transparent border-b-slate-500 border bg-transparent' />
                                                    <p>Your name (username) will be displayed on your profile and next to all of your comments.</p>
                                                </div>
                                            </div>
                                            <div className="lg:basis-4/12 flex justify-end items-start">
                                                <button className='px-4 py-2 bg-transparent border-black border rounded-3xl text-black'>Update</button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-5 p-5">
                                            <div className="lg:basis-8/12">
                                                <div className="flex flex-col gap-3">
                                                    <h2 className='text-xl font-semibold'>Bio</h2>
                                                    <input placeholder='Enter something...' type="text" disabled className='p-3 border-transparent border-b-slate-500 border bg-transparent' />
                                                    <p>Your bio will be displayed on your profile and all of your blogs.</p>
                                                </div>
                                            </div>
                                            <div className="lg:basis-4/12  flex justify-end items-start">
                                                <button className='px-4 py-2 bg-transparent border-black border rounded-3xl text-black'>Update</button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-5 p-5">
                                            <div className="lg:basis-8/12">
                                                <div className="flex flex-col gap-3">
                                                    <h2 className='text-xl font-semibold'>Avatar</h2>
                                                    <div className="flex gap-3">
                                                        <p className='bass-6/12  sm:basis-7/12 md:basis-8/12 text-lg'>Image should be in square shape, accept the following image types: JPG, PNG or GIF.</p>
                                                        <div className="basis-6/12 sm:basis-5/12 md:basis-4/12 ">
                                                            <div className="bg-[url('https://files.fullstack.edu.vn/f8-prod/user_photos/220943/62c981426797d.jpg')] bg-cover bg-no-repeat bg-center w-[100px] h-[100px] rounded-full"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="lg:basis-4/12  flex justify-end items-start">
                                                <button className='px-4 py-2 bg-transparent border-black border rounded-3xl text-black'>Update</button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-5 p-5">
                                            <div className="">
                                                <div className="flex flex-col gap-3">
                                                    <h2 className='text-xl font-semibold'>Email</h2>
                                                    <input placeholder='tommyle@gmail.com' type="text" disabled className='p-3 border-transparent border-b-slate-500 border bg-transparent' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-5 p-5">
                                            <div className="">
                                                <div className="flex flex-col gap-3">
                                                    <h2 className='text-xl font-semibold'>Username</h2>
                                                    <input placeholder='Tommy Le' type="text" disabled className='p-5 relative after:absolute after:bg-slate-500 after:h-[1px] after:w-full border-transparent border-b-slate-500 border bg-transparent' />
                                                    <div className="w-full flex items-center gap-2">
                                                        <span className='text-xl text-slate-500 font-semibold'>URL: </span> <p className='text-gray-500 line-clamp-2'>https://fullstack.edu.vn/@12a106vuminhdung</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-5 p-5">
                                            <div className="lg:basis-8/12">
                                                <div className="flex flex-col gap-3">
                                                    <h2 className='text-xl font-semibold'>Phone Number</h2>
                                                    <input placeholder='Add phone number...' type="text" disabled className='p-3 border-transparent border-b-slate-500 border bg-transparent' />
                                                    <p className='text-gray-500'>Your phone number will be linked to F8.</p>
                                                </div>
                                            </div>
                                            <div className="lg:basis-4/12  flex justify-end items-start">
                                                <button className='px-4 py-2 bg-transparent border-black border rounded-3xl text-black'>Update</button>
                                            </div>
                                        </div>
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

export default AccountSetting
