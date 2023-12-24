import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20 w-full bg-black'>
            <div className='max-w-screen-xl xl:max-w-screen-2xl mx-auto  text-gray-400'>
                <div className="p-5 pb-24 mx-6 lg:flex text-center lg:text-left lg:gap-2 lg:justify-center lg:items-start">
                    <div className="basis-3/12  items-center lg:items-start lg:justify-start mt-8 flex flex-col gap-3">
                        <div className="flex items-center lg:items-start lg:justify-start gap-4">
                            <div style={{ backgroundImage: `url(${'https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'})` }} className={` bg-cover bg-no-repeat bg-center w-[40px] h-[40px] rounded-md`}></div>
                            <div className='font-bold text-lg '>Learn Programming to work</div>
                        </div>
                        <div className="">
                            <p class=''>Tel: 0246.329.1102</p>
                            <p class=''>Email: contact@fullstack.edu.vn</p>
                            <p class=''>Address: 11Dst, block A10, South Metropolitan Trung Yên, Yên Hòa, Cầu Giấy, Hà Nội</p>
                        </div>
                    </div>
                    <div className="basis-2/12  items-center lg:items-start lg:justify-start mt-8 flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                            <div className='font-bold text-lg '>About F8</div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p class='hover:text-white cursor-pointer'>Introduction</p>
                            <p class='hover:text-white cursor-pointer'>Contact Us</p>
                            <p class='hover:text-white cursor-pointer'>Policy</p>
                            <p class='hover:text-white cursor-pointer'>Confidentiality</p>
                            <p class='hover:text-white cursor-pointer'>Career's opportunities</p>
                        </div>
                    </div>
                    <div className="basis-2/12  items-center lg:items-start lg:justify-start mt-8 flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                            <div className='font-bold text-lg '>Products</div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p class='hover:text-white cursor-pointer'>Game Nester</p>
                            <p class='hover:text-white cursor-pointer'>Game CSS Diner</p>
                            <p class='hover:text-white cursor-pointer'>Game CSS Selectors</p>
                            <p class='hover:text-white cursor-pointer'>Game Froggy</p>
                            <p class='hover:text-white cursor-pointer'>Game Froggy Pro</p>
                            <p class='hover:text-white cursor-pointer'>Game Scoop</p>
                        </div>
                    </div>
                    <div className="basis-2/12 items-center lg:items-start lg:justify-start mt-8  flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                            <div className='font-bold text-lg '>Materials</div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p class='hover:text-white cursor-pointer'>CV Assistant</p>
                            <p class='hover:text-white cursor-pointer'>Shorten Links</p>
                            <p class='hover:text-white cursor-pointer'>Clip-path Maker</p>
                            <p class='hover:text-white cursor-pointer'>Snippet generator</p>
                            <p class='hover:text-white cursor-pointer'>CSS Grid generator</p>
                            <p class='hover:text-white cursor-pointer'>Alert 'Do not touch your face'</p>
                        </div>
                    </div>
                    <div className="basis-3/12  items-center lg:items-start lg:justify-start mt-8 flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                            <div className='font-bold text-lg '>F8 JSC Education</div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p class=''>Tax ID Number: 0109922901</p>
                            <p class=''>Established date: 04/03/2022</p>
                            <p class=''>Scope: Technology, education, programming. We prospect that our contributions may benefit the society.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
