import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import WebSettings from './WebSettings'


const SecuritySetting = () => {
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
                                    <h1 className="text-2xl font-semibold p-5 relative after:absolute after:bottom-0 after:left-0 after:bg-slate-500 after:h-[1px] after:w-[100%]">Connect login accounts</h1>
                                    <div className="flex flex-col">
                                        <div className="flex flex-col md:flex-row gap-5 p-5">
                                            <div className="lg:basis-8/12">
                                                <div className="flex flex-col gap-3">
                                                    <h2 className='text-xl font-semibold'>Facebook</h2>
                                                    <input placeholder='Eg. https://www.facebook.com/tommyle1310' type="text" disabled className='p-3 border-transparent border-b-slate-500 border bg-transparent' />
                                                </div>
                                            </div>
                                            <div className="lg:basis-4/12  lg:flex lg:justify-end lg:items-start">
                                                <button className='px-4 py-2 bg-transparent border-black border rounded-3xl text-black'>Update</button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-5 p-5">
                                            <div className="lg:basis-8/12">
                                                <div className="flex flex-col gap-3">
                                                    <h2 className='text-xl font-semibold'>Facebook</h2>
                                                    <input placeholder='Eg. https://www.facebook.com/tommyle1310' type="text" disabled className='p-3 border-transparent border-b-slate-500 border bg-transparent' />
                                                </div>
                                            </div>
                                            <div className="lg:basis-4/12  lg:flex lg:justify-end lg:items-start">
                                                <button className='px-4 py-2 bg-transparent border-black border rounded-3xl text-black'>Update</button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-5 p-5">
                                            <div className="lg:basis-8/12">
                                                <div className="flex flex-col gap-3">
                                                    <h2 className='text-xl font-semibold'>Youtube</h2>
                                                    <input placeholder='Eg. https://www.youtube.com/tommyle1310' type="text" disabled className='p-3 border-transparent border-b-slate-500 border bg-transparent' />
                                                </div>
                                            </div>
                                            <div className="lg:basis-4/12  lg:flex lg:justify-end lg:items-start">
                                                <button className='px-4 py-2 bg-transparent border-black border rounded-3xl text-black'>Update</button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-5 p-5">
                                            <div className="lg:basis-8/12">
                                                <div className="flex flex-col gap-3">
                                                    <h2 className='text-xl font-semibold'>Instagram</h2>
                                                    <input placeholder='Eg. https://www.instagram.com/tommyle1310' type="text" disabled className='p-3 border-transparent border-b-slate-500 border bg-transparent' />
                                                </div>
                                            </div>
                                            <div className="lg:basis-4/12   lg:flex lg:justify-end lg:items-start">
                                                <button className='px-4 py-2 bg-transparent border-black border rounded-3xl text-black'>Update</button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-5 p-5">
                                            <div className="lg:basis-8/12">
                                                <div className="flex flex-col gap-3">
                                                    <h2 className='text-xl font-semibold'>Twitter</h2>
                                                    <input placeholder='Eg. https://www.twitter.com/tommyle1310' type="text" disabled className='p-3 border-transparent border-b-slate-500 border bg-transparent' />
                                                </div>
                                            </div>
                                            <div className="lg:basis-4/12 lg:flex lg:justify-end lg:items-start">
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

export default SecuritySetting
