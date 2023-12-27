import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import WebSettings from './WebSettings'
import ToggleButton from '../HTMLElements/ToggleBtn'


const NotificationSetting = () => {
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
                                    <div className="flex flex-col">
                                        <div className="flex flex-col md:flex-row gap-5 p-5">
                                            <div className="w-full">
                                                <div className="flex flex-col gap-3">
                                                    <h2 className='text-xl font-semibold'>Email</h2>
                                                    <p>Send me email(s) when:</p>
                                                    <div className="pl-4 flex gap-4 items-center justify-between flex-grow w-full">
                                                        <p className=''>New lesson(s)</p>
                                                        <ToggleButton />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-5 p-5">
                                            <div className="w-full">
                                                <div className="flex flex-col gap-3">
                                                    <h2 className='text-xl font-semibold'>Notification</h2>
                                                    <p>Send me email(s) when:</p>
                                                    <div className="pl-4 mt-5 flex gap-4 items-center justify-between flex-grow w-full">
                                                        <p className='w-[50%] md:max-w-[70%]'>New lesson(s)</p>
                                                        <ToggleButton className='w-[50%] md:w-[30%]' />
                                                    </div>
                                                    <div className="pl-4 mt-5 flex gap-4 items-center justify-between flex-grow w-full">
                                                        <p className='w-[50%] md:max-w-[70%]'>Tag(s) in other's post, comment.</p>
                                                        <ToggleButton className='w-[50%] md:w-[30%]' />
                                                    </div>
                                                    <div className="pl-4 mt-5 flex gap-4 items-center justify-between flex-grow w-full">
                                                        <p className='w-[50%] md:max-w-[70%]'>Replied comment(s)</p>
                                                        <ToggleButton className='w-[50%] md:w-[30%]' />
                                                    </div>
                                                    <div className="pl-4 mt-5 flex gap-4 items-center justify-between flex-grow w-full">
                                                        <p className='w-[50%] md:max-w-[70%]'>Emoji(s) in your comment</p>
                                                        <ToggleButton className='w-[50%] md:w-[30%]' />
                                                    </div>
                                                    <div className="pl-4 mt-5 flex gap-4 items-center justify-between flex-grow w-full">
                                                        <p className='w-[50%] md:max-w-[70%]'>Emoji(s) in your blog</p>
                                                        <ToggleButton className='w-[50%] md:w-[30%]' />
                                                    </div>
                                                    <div className="pl-4 mt-5 flex gap-4 items-center justify-between flex-grow w-full">
                                                        <p className='w-[50%] md:max-w-[70%]'>Chosen answer in a discussion</p>
                                                        <ToggleButton className='w-[50%] md:w-[30%]' />
                                                    </div>
                                                </div>
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

export default NotificationSetting
