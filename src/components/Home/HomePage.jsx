import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css'
import { FaCirclePlus, FaRoad } from "react-icons/fa6";
import { FaHome, FaBlogger } from "react-icons/fa";
import Slider from './Slider';
import Section from './Section';
import Nav from '../Nav'
import Footer from '../Footer'

let courses = [
    {
        id: 1,
        alreadyEnrolled: false,
        isPro: true,
        img: "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
        comingSoon: false,
        title: 'HTML CSS Pro',
        oldPrice: '2.500.000đ',
        newPrice: '1.299.000đ'
    },
    {
        id: 2,
        alreadyEnrolled: false,
        isPro: true,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/27/64e184ee5d7a2.png',
        comingSoon: false,
        title: 'CSS pre-processor SASS',
        oldPrice: '400.000đ',
        newPrice: '299.000đ'
    },
    {
        id: 3,
        alreadyEnrolled: false,
        isPro: true,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png',
        comingSoon: true,
        title: 'JavaScript Pro',
        oldPrice: null,
        newPrice: null
    },
    {
        id: 4,
        alreadyEnrolled: false,
        isPro: true,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/20/648020fc16597.png',
        comingSoon: true,
        title: 'NextJS Pro',
        oldPrice: null,
        newPrice: null
    },
    {
        id: 5,
        alreadyEnrolled: true,
        isPro: false,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
        title: 'Basic Programming Concepts',
        members: '121,575'
    },
    {
        id: 6,
        alreadyEnrolled: true,
        isPro: false,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png',
        title: 'Basic and Advanced C++ Programming Language',
        members: '21,148'
    },
    {
        id: 7,
        alreadyEnrolled: true,
        isPro: false,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
        title: 'HTML CSS From Zero to Hero',
        members: '182,832'
    },
    {
        id: 8,
        alreadyEnrolled: true,
        isPro: false,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/3.png',
        title: 'Responsive with Grid System',
        members: '41,478'
    },
    {
        id: 9,
        alreadyEnrolled: true,
        isPro: false,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/1.png',
        title: 'Basic JavaScript',
        members: '125,198'
    },
    {
        id: 10,
        alreadyEnrolled: true,
        isPro: false,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/12.png',
        title: 'Advanced JavaScript',
        members: '55,822'
    },
    {
        id: 11,
        alreadyEnrolled: false,
        isPro: false,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png',
        title: 'Working with WSL Ubuntu & Terminal',
        members: '31,121'
    },
    {
        id: 12,
        alreadyEnrolled: true,
        isPro: false,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
        title: 'Build Website with ReactJS',
        members: '53,777'
    },
    {
        id: 13,
        alreadyEnrolled: true,
        isPro: false,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
        title: 'NodeJS & ExpressJS',
        members: '38,405'
    },
    {
        id: 14,
        alreadyEnrolled: false,
        isPro: false,
        img: 'https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png',
        title: `'Don't touch your face' App`,
        members: '6,696'
    },
]

let detailBlogs = [
    {
        id: 1,
        viewBlog: 'View Blog',
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png',
        title: `Prominent F8's blogs collections`,
        minutes: 6,
        author: 'Son Dang'
    },
    {
        id: 2,
        viewBlog: 'View Blog',
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f692d366e.jpg',
        title: '[P1] Create ReactJS & Project and implement Babel',
        minutes: 12,
        author: 'Son Dang'
    },
    {
        id: 3,
        viewBlog: 'View Blog',
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/677/615436b218d0a.png',
        title: 'Push codes to github and create github page',
        minutes: 3,
        author: 'khadev27'
    },
    {
        id: 4,
        viewBlog: 'View Blog',
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/51/6139c6453456e.png',
        title: 'Day 28 learning at F8',
        minutes: 4,
        author: 'Son Son'
    },
    {
        id: 5,
        viewBlog: 'View Blog',
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/107/613a1f3685814.png',
        title: 'Useful materials and resources for developers',
        minutes: 2,
        author: 'Vuong Duong'
    },
    {
        id: 6,
        viewBlog: 'View Blog',
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/1671/61b6368983c16.jpg',
        title: 'Time management and Motivation',
        minutes: 5,
        author: 'Dong Ngo'
    },
]

let detailVideos = [
    {
        id: 1,
        viewVideo: 'Watch Video',
        img: 'https://i.ytimg.com/vi/FxJ3zPUU6Y4/maxresdefault.jpg',
        title: `Set max width for screen`,
        views: '736,204',
        likes: '9,791',
        comments: '2004'
    },
    {
        id: 2,
        viewVideo: 'Watch Video',
        img: 'https://i.ytimg.com/vi/YH-E4Y3EaT4/maxresdefault.jpg',
        title: `Tips for intern students`,
        views: '246,888',
        likes: '6,097',
        comments: '212'
    },
    {
        id: 3,
        viewVideo: 'Watch Video',
        img: 'https://i.ytimg.com/vi/DpvYHLUiZpc/maxresdefault.jpg',
        title: `Son Dang's approaches to programming industry`,
        views: '121,014',
        likes: '5,935',
        comments: '340'
    },
    {
        id: 4,
        viewVideo: 'Watch Video',
        img: 'https://i.ytimg.com/vi/sgq7BH6WxL8/maxresdefault.jpg',
        title: `'Codes for babies' battle`,
        views: '272,639',
        likes: '5,671',
        comments: '179'
    },
    {
        id: 5,
        viewVideo: 'Watch Video',
        img: 'https://i.ytimg.com/vi/R6plN3FvzFY/maxresdefault.jpg',
        title: `What can I obtain after accomplishing this course`,
        views: '846,924',
        likes: '5,132',
        comments: '1321'
    },
    {
        id: 6,
        viewVideo: 'Watch Video',
        img: 'https://i.ytimg.com/vi/0SJE9dYdpps/maxresdefault.jpg',
        title: `How powerfull is JavaScript. Introduction to JavaScript.`,
        views: '676,259',
        likes: '3,723',
        comments: '1188'
    },
    {
        id: 7,
        viewVideo: 'Watch Video',
        img: 'https://i.ytimg.com/vi/oF7isq9IjZM/maxresdefault.jpg',
        title: `How to increase salary and seek more opportunities`,
        views: '81,136',
        likes: '3,412',
        comments: '238'
    },
    {
        id: 8,
        viewVideo: 'Watch Video',
        img: 'https://i.ytimg.com/vi/x0fSBAgBrOQ/maxresdefault.jpg',
        title: `What is React? Why should we learn it`,
        views: '368,461',
        likes: '3,333',
        comments: '363'
    },
]

let heroSlider = [
    {
        id: 1,
        title: 'Learn ReactJS for FREE!',
        detail: `Free ReactJS course covers from basic to magic. Usually F8's members can seek jobs after acomplishing this course.`,
        img: '',
        linearColor: `"linear-gradient(to right, purple-primary-500, blue-primary-300)"`,
        colorTo: 'rgb(136, 40, 250)',
        colorFrom: 'rgb(89, 169, 250)',
        btnTitle: 'Enroll Now'
    },
    {
        id: 2,
        title: 'Free HTML & CSS course for beginners!',
        detail: `Parcipating in actual Figma projects, hundred of challenges which are 100% covered by Mr.Son Dang, flash cards gifts, etc.`,
        img: '',
        colorTo: 'rgb(136, 40, 250)',
        colorFrom: 'rgb(255, 186, 164)',
        btnTitle: 'Enroll Now for Free'
    },
    {
        id: 3,
        title: `Achievements of F8's members`,
        detail: `Setting a clear path is the key for success. Programming is no exception.`,
        img: '',
        colorTo: 'rgb(253, 144, 4)',
        colorFrom: 'rgb(253, 34, 92)',
        btnTitle: `View results of F8's members`
    },
    {
        id: 4,
        title: 'F8 Clone Frontend',
        detail: `Using Tailwindcss, ReactJS, react-slider-show-image.`,
        img: '',
        colorTo: '#c895f9',
        colorFrom: '#6cbbff',
        btnTitle: 'View more'
    },
    {
        id: 5,
        title: 'F8 Clone Backend',
        detail: `Coming soon.`,
        img: '',
        colorTo: '#04424c',
        colorFrom: '#05202b',
        btnTitle: 'View moew'
    },
    {
        id: 6,
        title: 'About Tommy Le',
        detail: `Một sáng thức dậy, được thấy em bên cạnh mình...`,
        img: '',
        colorTo: '#a67f36',
        colorFrom: '#624d2a',
        btnTitle: 'Follow Tommy Le'
    },
]

const HomePage = () => {
    let navigate = useNavigate()
    const handleRedirectUser = (data) => {
        if (data === 'learning path') {
            navigate('/learning-path')
        }
        if (data === 'blogs') {
            navigate('/blogs')
        }
    }

    return (
        <>
            <Nav />
            <div className='mt-20 w-full'>
                <div className='max-w-screen-xl xl:max-w-screen-2xl mx-auto'>
                    <div className=" w-full">
                        <div className="mx-5  grid-cols-12 grid">
                            {/* left menu (>1023px) */}
                            <div className="lg:col-span-2 hidden lg:block col-span-0 my-5 mr-5">
                                <div className="w-full bg-slate-100 rounded-xl h-full flex flex-col justify-start items-center">
                                    <div className="my-5 cursor-pointer ">
                                        <FaCirclePlus className='text-blue-600 hover:duration-200 hover:text-blue-400 hover:rounded-full' size={50} />
                                    </div>
                                    <div className="my-5 flex flex-col w-32 py-4 rounded-2xl hover:duration-300 hover:bg-slate-300 cursor-pointer justify-center items-center">
                                        <FaHome size={25} />
                                        <p className='text-lg'>Home</p>
                                    </div>
                                    <div onClick={() => handleRedirectUser('learning path')} className="my-5 flex flex-col w-32 py-4 rounded-2xl hover:duration-300 hover:bg-slate-300 cursor-pointer justify-center items-center">
                                        <FaRoad size={25} />
                                        <p className='text-lg'>Road Map</p>
                                    </div>
                                    <div onClick={() => handleRedirectUser('blogs')} className="my-5 flex flex-col w-32 py-4 rounded-2xl hover:duration-300 hover:bg-slate-300 cursor-pointer justify-center items-center">
                                        <FaBlogger size={25} />
                                        <p className='text-lg'>Blogs</p>
                                    </div>
                                </div>
                            </div>


                            {/* homepage content */}
                            <div className="lg:col-span-10 col-span-12">
                                {/* slider main */}
                                <Slider slider={heroSlider} />

                                {/* pro courses */}
                                <Section viewMoreTitle={null} isPro={true} isNew={true} detailSection={courses} sectionTitle={'Pro Courses'} isShowViewMore={false} isShowNumberMembers={true} numberMembers={'371,690+'} />
                                {/* Normal courses */}
                                <Section viewMoreTitle={'View road map'} isPro={false} isNew={false} detailSection={courses} sectionTitle={'Free Courses'} isShowViewMore={true} isShowNumberMembers={false} />
                                {/* prominent blogs */}
                                <Section viewMoreTitle={'View more blogs'} isNew={false} detailSection={detailBlogs} hoverBtnTitle={'View this blog'} sectionTitle={'Prominent Blogs'} isShowViewMore={true} isShowNumberMembers={false} />
                                {/* prominent videos */}
                                <Section viewMoreTitle={'View more videos'} isNew={false} detailSection={detailVideos} hoverBtnTitle={'Watch this video'} sectionTitle={'Prominent Videos'} isShowViewMore={true} isShowNumberMembers={false} />

                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default HomePage
export { courses }