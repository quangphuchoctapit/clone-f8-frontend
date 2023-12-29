import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Nav from '../Nav'
import Footer from '../Footer'
import { CiBookmark } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";

const blogs = [
    {
        id: 1,
        title: 'Authentication & Authorization in ReactJS',
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/8306/65299d0ce743e.png',
        content: 'Authentication and authorization play crucial roles in website development, as they enable the identification of users and grant appropriate access levels to each individual. Additionally, these processes ensure...',
        author: 'Alex',
        authorImg: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/309573/64af7196d84c6.png',
        topic: 'ReactJS',
        publishedDate: '2 months ago',
        minuteRead: '9',
    },
    {
        id: 2,
        title: 'How to use Dev Mode in Pro Course',
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/8334/64f01064b0724.png',
        content: 'Hi there! If you are members in F8\'s pro course, you might heard about "Dev Mode" - it assists practicing code in parallel with watching our videos bla bla blab bla',
        author: 'Son Dang',
        authorImg: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/1/64f9a2fd4e064.jpg',
        topic: 'Front-end',
        publishedDate: '4 months ago',
        minuteRead: '4',
    },
    {
        id: 3,
        title: 'Differences between var, let and const in JavaScript',
        img: null,
        content: 'I want to discuss about these common keywords var, let and const in JavaScript in Javascript hehehehehehehheheehheheheheheheheheheehehheheheeheheheheheheheheheehehehehe',
        author: 'TTnguyen',
        authorImg: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/328840/64b0b46673fe1.jpg',
        topic: 'JavaScript',
        publishedDate: '5 months ago',
        minuteRead: '3',
    },
    {
        id: 4,
        title: 'All you need to know about how to improve performance of your website',
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7940/64a645ea70312.png',
        content: 'In this blog, I will meticulously demonstrate and illustrate a step by step guide how to further improve overall performance of your website. First',
        author: 'Dev Quèn',
        authorImg: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/328840/64b0b46673fe1.jpg',
        topic: 'JavaScript',
        publishedDate: '6 months ago',
        minuteRead: '10',
    },
    {
        id: 5,
        title: `I'm exhausted when changing to new programming language`,
        img: null,
        content: 'My major is data analyst, in particular, I mostly have to deal with flows of data. SQL syntaxes, database, python are common objectives for me to work. However,',
        author: 'Alan King',
        authorImg: 'https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg',
        topic: 'ReactJS',
        publishedDate: '7 months ago',
        minuteRead: '2',
    },
    {
        id: 6,
        title: `Learning JavaScript while enjoy the game - Gamify Your Learning`,
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/6936/6422afa5a62f8.jpg',
        content: 'Within this blog, I will show you several websites, apps for learning not only JavaScript but also others that I found useful throughout the time I started to code.',
        author: 'Minh Trinh',
        authorImg: 'https://files.fullstack.edu.vn/f8-prod/user_photos/184722/62383632b8e58.jpg',
        topic: null,
        publishedDate: '9 months ago',
        minuteRead: '8',
    },
    {
        id: 7,
        title: `How good is web developer's salary and does it have more opportunities comparing to other occupations?`,
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/6626/63fc19cf0ecb7.jpg',
        content: 'In recent year, IT is renowned by its thrilling wage as it was globally broadcasted that this industry pay their employees good cash.',
        author: 'Vit Vit',
        authorImg: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/256991/63b63dc6657a1.jpg',
        topic: 'developer',
        publishedDate: '10 months ago',
        minuteRead: '6',
    },
    {
        id: 8,
        title: `How good is web developer's salary and does it have more opportunities comparing to other occupations?`,
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/6626/63fc19cf0ecb7.jpg',
        content: 'In recent year, IT is renowned by its thrilling wage as it was globally broadcasted that this industry pay their employees good cash.',
        author: 'Vit Vit',
        authorImg: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/256991/63b63dc6657a1.jpg',
        topic: 'developer',
        publishedDate: '10 months ago',
        minuteRead: '6',
    },
    {
        id: 9,
        title: `How good is web developer's salary and does it have more opportunities comparing to other occupations?`,
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/6626/63fc19cf0ecb7.jpg',
        content: 'In recent year, IT is renowned by its thrilling wage as it was globally broadcasted that this industry pay their employees good cash.',
        author: 'Vit Vit',
        authorImg: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/256991/63b63dc6657a1.jpg',
        topic: 'developer',
        publishedDate: '10 months ago',
        minuteRead: '6',
    },
    {
        id: 10,
        title: `What is fullstack, what skill to obtain to be a fullstack developer?`,
        img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/6560/63f57e237dd2b.jpg',
        content: 'It is undoubtedly that every F8\'s member have already heard about the term \'Full-stack\'. However, not many people know the intrinsic value of this terminology.',
        author: 'Vit Vit',
        authorImg: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/256991/63b63dc6657a1.jpg',
        topic: 'IT',
        publishedDate: '10 months ago',
        minuteRead: '6',
    },
]

function Blogs({ currentItems }) {
    return (
        <>
            {currentItems?.length > 0 && currentItems.map((item) => (
                <div key={item.id} className=" border rounded-lg p-3 ">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div style={{ backgroundImage: `url(${item?.authorImg ? item.authorImg : 'https://files.fullstack.edu.vn/f8-prod/user_avatars/18810/631175d26916f.png'})` }} className="w-[40px] h-[40px] border bg-cover bg-center bg-no-repeat border-red-300 rounded-full"></div>
                            <p>{item.author}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <CiBookmark size={20} />
                            <BsThreeDots size={20} />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className={item?.img ? "flex flex-col gap-3 md:w-[55%]" : 'flex flex-col gap-3 md:w-full'}>
                            <h2 className='text-xl font-bold'>{item.title}</h2>
                            <p className='line-clamp-3'>
                                {item.content}
                            </p>
                        </div>
                        <div className="md:w-[45%] flex md:justify-end ">
                            <div style={{ backgroundImage: `url(${item?.img ? item.img : ''})` }} className={item?.img && "w-[200px] border rounded-xl h-[120px] bg-no-repeat bg-cover bg-center"}></div>
                        </div>
                    </div>
                    <div className="max-w[320px] items-center flex gap-3 mt-4 md:mt-0">
                        <div className={item?.topic ? "p-2 font-semibold bg-slate-200 rounded-md" : 'hidden'}>{item?.topic}</div>
                        <p>{item.publishedDate}</p>
                        <p>{item.minuteRead} minutes read</p>
                    </div>
                </div>
            ))}
        </>
    )
}

const AllBlogs = ({ itemsPerPage }) => {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = blogs.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(blogs.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blogs.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Nav />
            <div className='mt-20 w-full'>
                <div className='max-w-screen-xl xl:max-w-screen-2xl mx-auto bg-white'>
                    <div className=" w-[95%] sm:w-[90%] md:w-[90%] mx-auto">
                        <div className="h-full w-full">
                            <div className="flex flex-col gap-5">
                                <div className="hidden md:flex md:flex-col md:gap-3 my-5 p-5">
                                    <h1 className="text-3xl font-extrabold">Highlighted Blogs</h1>
                                    <p className=' max-w-[50%]'>Blogs collection from dedicated bloggers sharing about experience in terms of IT career.</p>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-5">

                                    {/* blogs */}
                                    <div className="flex flex-col line-clamp-3 gap-3 lg:w-[65%] ">
                                        <Blogs currentItems={currentItems} />
                                        <ReactPaginate
                                            className='flex items-center gap-5 justify-between mt-5 mb-5'
                                            breakLabel="..."
                                            nextLabel="next >"
                                            onPageChange={handlePageClick}
                                            pageRangeDisplayed={5}
                                            pageCount={pageCount}
                                            // activeClassName={' px-3 py-'}
                                            activeLinkClassName={'bg-orange-primary-500  px-3 py-1 text-white rounded-lg'}
                                            pageLinkClassName={"text-black px-3 py-1"}
                                            previousClassName={'hover:underline  hover:duration-200 hover:text-orange-primary-500'}
                                            nextClassName={'hover:underline hover:duration-200  hover:text-orange-primary-500'}
                                            pageClassName={'flex justify-center items-center bg-white cursor-pointer font-semibold text-lg hover:border-2 text-black rounded-lg'}
                                            previousLabel="< previous"
                                            renderOnZeroPageCount={null}
                                        />
                                    </div>

                                    {/* advertise */}
                                    <div className="flex flex-col lg:w-[35%]">
                                        <div className="flex flex-col gap-3 ">
                                            <h2 className='text-gray-400 uppercase font-semibold'>Hot toptics</h2>
                                            <div className="flex flex-wrap gap-3 max-w-[80%]">
                                                <div className="bg-gray-100 cursor-pointer hover:bg-gray-200 hover:duration-200 font-semibold rounded-xl p-2">Front-end/Mobile apps</div>
                                                <div className="bg-gray-100 cursor-pointer hover:bg-gray-200 hover:duration-200 font-semibold rounded-xl p-2">Back-end/Devops</div>
                                                <div className="bg-gray-100 cursor-pointer hover:bg-gray-200 hover:duration-200 font-semibold rounded-xl p-2">UX/UI design</div>
                                                <div className="bg-gray-100 cursor-pointer hover:bg-gray-200 hover:duration-200 font-semibold rounded-xl p-2">Others</div>
                                            </div>
                                            <div className="flex w-full flex-col md:flex-row lg:flex-col gap-5">
                                                <div className="w-[50%]">
                                                    <div className="w-[320px] h-[270px] sm:w-[310px] sm:h-[260px] lg:w-[300px] lg:h-[250px] border bg-cover bg-no-repeat bg-center rounded-lg bg-[url('https://files.fullstack.edu.vn/f8-prod/banners/26/63dc61f2a061e.png')]"></div>
                                                </div>
                                                <div className="w-[50%]">
                                                    <div className="w-[320px] h-[270px] sm:w-[310px] sm:h-[260px] lg:w-[300px] lg:h-[250px] border bg-cover bg-no-repeat bg-center rounded-lg bg-[url('https://files.fullstack.edu.vn/f8-prod/banners/32/6421144f7b504.png')]"></div>
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

export default AllBlogs
