import React from 'react'
import { Slide } from 'react-slideshow-image';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"



const Slider = (props) => {
    const indicators = (index) => (<div className="indicator">{index + 1}</div>);
    const properties = {
        prevArrow: <button className='ml-[-1%] shadow-xl border border-gray-300 rounded-full text-white bg-black hover:text-orange-primary-500'><BsFillArrowLeftCircleFill size={40} /></button>,
        nextArrow: <button className='mr-[-1%] shadow-xl border border-gray-300 rounded-full text-white bg-black hover:text-orange-primary-500' ><BsFillArrowRightCircleFill size={40} /></button>
    }

    let { slider } = props

    return (
        <div className="mt-5 rounded-lg w-full text-white ">
            <Slide {...properties} className='rounded-lg' transitionDuration={600} autoplay canSwipe indicators={index => <div className="indicator">{index + 1}</div>} scale={1.4}>
                {slider && slider.length > 0 ?
                    slider.map((item) => (
                        <div key={item.id} className="tw-each-slide rounded-lg">
                            <div style={{
                                background: `linear-gradient(to top right, ${item.colorFrom}, ${item.colorTo})`
                            }} className="tw-each-slide-content rounded-lg">
                                <div className="flex flex-col gap-5 rounded-lg">
                                    <h1 className='md:text-2xl text-xl font-bold'>{item.title}</h1>
                                    <p className='text-sm md:text-lg'>{item.detail}</p>
                                    <button className='border-white border-2 hover:duration-200 font-semibold text-white bg-transparent rounded-3xl hover:bg-white hover:text-black w-[230px] md:w-[250px] py-2 sm:py-3'>{item.btnTitle}</button>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <div>No result.</div>
                }


            </Slide>
        </div>
    )
}

export default Slider
