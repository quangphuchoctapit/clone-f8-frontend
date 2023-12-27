import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const programmingCourses = {
    frontend: [
        {
            id: 1,
            title: 'Overview about the IT industry',
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/7/6200b81f52d83.png',
            learningPercent: ''
        },
        {
            id: 2,
            title: 'HTML CSS Pro',
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62385d6c63dfa.png',
            learningPercent: ''
        },
        {
            id: 3,
            title: 'Responsive Web Design',
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/3/6200afe1240bb.png',
            learningPercent: ''
        }, {
            id: 4,
            title: 'Fundamental Javascript',
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/1/6200ad9d8a2d8.png',
            learningPercent: ''
        },
        {
            id: 5,
            title: 'Advanced Javascript',
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/1/6200ad9d8a2d8.png',
            learningPercent: ''
        },
        {
            id: 6,
            title: 'Working with Terminal & Ubuntu',
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac2ee23d.png',
            learningPercent: ''
        },
        {
            id: 7,
            title: 'Build website with ReactJS',
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/13/6200af9262b30.png',
            learningPercent: ''
        }
    ],
    backend: [
        {
            id: 1,
            title: 'Overview about the IT industry',
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/7/6200b81f52d83.png',
            learningPercent: ''
        }, {
            id: 2,
            title: 'Fundamental Javascript',
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/1/6200ad9d8a2d8.png',
            learningPercent: ''
        },
        {
            id: 3,
            title: 'Advanced Javascript',
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/1/6200ad9d8a2d8.png',
            learningPercent: ''
        },
        {
            id: 4,
            title: 'Working with Terminal & Ubuntu',
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac2ee23d.png',
            learningPercent: ''
        },
        {
            id: 5,
            title: 'NodeJS & ExpressJS',
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/6/6200afb926038.png',
            learningPercent: ''
        }
    ]
}

const LearningPath = () => {
    return (
        <>
            <Nav />
            <div className='mt-20 w-full'>
                <div className='max-w-screen-xl xl:max-w-screen-2xl mx-auto bg-white'>
                    <div className=" w-[95%] sm:w-[90%] md:w-[90%] mx-auto">
                        <div className="h-full w-full">
                            <div className="flex w-full flex-col">
                                <div className="flex mt-12 flex-col gap-3 p-4 mb-8 lg:mb-5">
                                    <div className="text-3xl font-bold">Learning paths</div>
                                    <p>Establishing a definite roadmap is essential for acquiring extensive knowledge in a reduced timeframe. For instance, if you aim to become a front-end developer, it's crucial to first grasp the basics of front-end development.</p>
                                </div>
                                <div className="flex w-full flex-col lg:flex-row gap-5 mb-32">
                                    <div className="flex lg:w-[50%] rounded-xl p-3 border shadow-2xl gap-3">
                                        <div className="lg:basis-5/12 xl:basis-10/12 flex flex-col gap-3 p-3">
                                            <div className="mb-4">
                                                <div className="text-xl font-bold">Front-end</div>
                                                <p>A Front-end developer is responsible for creating the user interface of a website. By engaging in this educational journey, F8 will guide you through a structured roadmap towards becoming a proficient front-end developer.</p>
                                            </div>
                                            <div className="hidden md:flex md:gap-3 md:items-center">
                                                {programmingCourses?.frontend && programmingCourses.frontend.map((item) => (
                                                    <div key={item.id} className="p-2 rounded-full border-2 border-l-pink-primary-800 ">
                                                        <div style={{ backgroundImage: `url('${item.img}')` }} className="w-5 h-5 bg-center bg-no-repeat bg-cover bg-white"></div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="w-full md:flex md:gap-3 md:items-center">
                                                <button className='w-full xs:max-w-[150px] px-3 py-2 flex justify-center items-center rounded-xl text-white hover:border-orange-primary-500 hover:border bg-orange-primary-500 hover:text-orange-primary-400 hover:duration-100 hover:bg-white'>View Detail</button>
                                            </div>
                                        </div>
                                        <div className="hidden lg:flex lg:basis-5/12 xl:basis-2/12 lg:justify-center xl:justify-end lg:items-center xl:items-start">
                                            <div className=" border-4 rounded-full border-red-500 flex justify-center items-center p-2 xl:w-[140px] xl:h-[140px] lg:w-[80px] lg:h-[80px]">
                                                <div className=" lg:w-[60px]  xl:w-[100px] lg:h-[60px]  xl:h-[100px] bg-[url('https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png')] bg-center bg-cover bg-no-repeat"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex lg:w-[50%] rounded-xl p-3 border shadow-2xl gap-3">
                                        <div className="lg:basis-5/12 xl:basis-10/12 flex flex-col gap-3 p-3">
                                            <div className="mb-4">
                                                <div className="text-xl font-bold">Back-end</div>
                                                <p>A backend developer focuses on data management, meaning their role requires a greater emphasis on logical reasoning. Without delay, let's dive into exploring this area.</p>
                                            </div>
                                            <div className="hidden md:flex md:gap-3 md:items-center">
                                                {programmingCourses?.frontend && programmingCourses.backend.map((item) => (
                                                    <div key={item.id} className="p-2 rounded-full border-2 border-l-pink-primary-800 ">
                                                        <div style={{ backgroundImage: `url('${item.img}')` }} className="w-5 h-5 bg-center bg-no-repeat bg-cover bg-white"></div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="w-full md:flex md:gap-3 md:items-center">
                                                <button className='w-full xs:max-w-[150px] px-3 py-2 flex justify-center items-center rounded-xl hover:border-orange-primary-500 hover:border text-white bg-orange-primary-500 hover:text-orange-primary-400 hover:duration-100 hover:bg-white'>View Detail</button>
                                            </div>
                                        </div>
                                        <div className="hidden lg:flex lg:basis-5/12 xl:basis-2/12 lg:justify-center xl:justify-end lg:items-center xl:items-start">
                                            <div className=" border-4 rounded-full border-red-500 flex justify-center items-center p-2 xl:w-[140px] xl:h-[140px] lg:w-[80px] lg:h-[80px]">
                                                <div className=" lg:w-[60px]  xl:w-[100px] lg:h-[60px]  xl:h-[100px] bg-[url('https://files.fullstack.edu.vn/f8-prod/learning-paths/3/63b4641535b16.png')] bg-center bg-cover bg-no-repeat"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex">
                                    <div className="lg:basis-6/12 flex flex-col gap-5">
                                        <h1 className='text-2xl font-bold leading-10'>Join F8's community on Facebook</h1>
                                        <p>There are thousands of people who are following the same path as yours. Hence, be proactively ask and answer posts, share and support each other in your learning progress. :3</p>
                                        <div className="w-full md:flex md:gap-3 md:items-center">
                                            <button className='w-full xs:max-w-[150px] px-3 py-2 flex justify-center items-center rounded-xl text-white bg-black hover:text-black hover:duration-100 border-2 hover:border-black hover:bg-white'>Join</button>
                                        </div>
                                    </div>
                                    <div className="lg:basis-6/12 ">
                                        <div className="flex lg:justify-end xl:justify-center">
                                            <div className="bg-[url('https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png')] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] bg-no-repeat bg-cover bg-center"></div>

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

export default LearningPath
