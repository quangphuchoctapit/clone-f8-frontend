import React, { useState, useEffect } from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import { getAllCourses, getCourseById, deleteCourse, editCourse } from '../../service/userService';
import 'react-responsive-modal/styles.css';
import Select from 'react-select'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Modal } from 'react-responsive-modal';


const ManageCourse = () => {
    const [courses, setCourses] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const [openModalConfirmDelete, setOpenModalConfirmDelete] = useState(false);

    const [action, setAction] = useState('VIEW')
    const [confirmDeleteText, setConfirmDeleteText] = useState('')

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [detail, setDetail] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [subImage, setSubImage] = useState('')
    const [selectedIsPro, setSelectedIsPro] = useState(null);
    const handleSelectedIsPro = (selectedIsPro) => {
        setSelectedIsPro(selectedIsPro);
    };

    const onOpenModal = async (id) => {
        setOpenModal(true);
        let courseDetail = await getCourseById(id)
        if (courseDetail?.data?.DT && courseDetail?.data.EC === 0) {
            let { name, description, detail, image, is_pro, price, _id } = courseDetail.data.DT
            console.log('check ', courseDetail?.data?.DT)
            setName(name)
            setId(_id)
            setDetail(detail)
            setDescription(description)
            setPrice(price)
            setImage(image)
            setSubImage(subImage)
            setSelectedIsPro(is_pro)
        }
    }
    const onCloseModal = () => {
        setOpenModal(false)
        setAction('VIEW')
    };

    const onOpenModalConfirmDelete = () => setOpenModalConfirmDelete(true);
    const onCloseModalConfirmDelete = () => setOpenModalConfirmDelete(false);


    const fetchAllCourses = async () => {
        let response = await getAllCourses()
        if (response?.data?.DT && response?.data.EC === 0) {
            setCourses(response.data.DT)
        }
    }

    useEffect(() => {
        fetchAllCourses()
    }, [])

    useEffect(() => {
        fetchAllCourses()
    }, [courses])

    const handleEdit = async () => {
        setAction('EDIT')
    }

    const handleDelete = () => {
        onOpenModalConfirmDelete()
    }

    const handleUploadImage = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertBase64(file)
        setImage(base64)
    }

    const handleconfirmDelete = async () => {
        if (confirmDeleteText === name) {
            console.log('checkid:', id)
            let dataServer = await deleteCourse(id)
            if (dataServer?.data.EC === 0) {
                onCloseModalConfirmDelete()
                onCloseModal()
            }
        } else {
            alert('Wrong confirm key... Try again.')
        }
    }

    const handleConfirmEdit = async () => {
        let courseData = {
            name, detail, description, price, is_pro: selectedIsPro.value, image, sub_image: subImage
        }
        let dataServer = await editCourse(id, courseData)
        console.log('dataServer', dataServer)
    }

    return (
        <>
            <Nav />
            <div className='mt-20 w-full'>
                <div className='max-w-screen-xl  mx-auto'>
                    <div className=" w-full bg-orange-100">
                        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto p-5">
                            {courses?.length > 0 && courses.map((item) => (
                                <div onClick={() => onOpenModal(item._id)} key={item._id} className="flex flex-col gap-3 mx-auto p-3 border cursor-pointer hover:duration-200 hover:bg-opacity-[0.8] bg-white shadow-xl rounded-lg">
                                    <div style={{ backgroundImage: `url('${item.image}')` }} className="w-[280px] h-[200px] sm:w-[260px] sm:h-[190px] md:w-[220px] md:h-[120px] lg:w-[220px] lg:h-[140px] bg-center bg-no-repeat bg-cover rounded-xl"></div>
                                    <div className="flex flex-col gap-3 max-w-[220px] justify-end">
                                        <div className="line-clamp-2">{item.name}</div>
                                        <div className="">{item.price ? item.price + 'VND' : 'Free'}</div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <Modal open={openModal} onClose={onCloseModal} center>
                <div className="grid grid-cols-2 gap-5">
                    <h1 className="col-span-2 text-xl font-semibold text-center my-5">Manage Course</h1>
                    <div className="flex flex-col gap-2 px-2 col-span-2 sm:col-span-1">
                        <label htmlFor="">Name</label>
                        <input disabled={action === 'VIEW' ? true : false}
                            value={name} onChange={e => setName(e.target.value)}
                            type="text" placeholder='Name' className='rounded-lg p-3 border-2' />
                    </div>
                    <div className="flex flex-col gap-2 px-2 col-span-2 sm:col-span-1">
                        <label htmlFor="">Description</label>
                        <input disabled={action === 'VIEW' ? true : false}
                            value={description} onChange={e => setDescription(e.target.value)}
                            type="text" placeholder='Description' className='rounded-lg p-3 border-2' />
                    </div>
                    <div className="flex flex-col col-span-2 gap-2 px-2 ">
                        <label htmlFor="">Detail</label>
                        <textarea disabled={action === 'VIEW' ? true : false} onChange={e => setDetail(e.target.value)} placeholder='Detail' className='rounded-lg p-3 border-2' value={detail}></textarea>
                    </div>
                    <div className="flex flex-col gap-2 px-2 col-span-2 sm:col-span-1">
                        <label htmlFor="">Pro Course?</label>
                        <Select isDisabled={action === 'VIEW' ? true : false}
                            value={selectedIsPro} onChange={handleSelectedIsPro}
                            className='' options={[
                                { value: true, label: 'Pro course' },
                                { value: false, label: 'Ordinary course' },
                            ]} />
                    </div>
                    <div className="flex flex-col gap-2 px-2 col-span-2 sm:col-span-1">
                        <label htmlFor="">Price</label>
                        <input disabled={action === 'VIEW' ? true : false}
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            type="text" placeholder='Price' className='rounded-lg p-3 border-2' />
                    </div>
                    <div className="flex flex-col gap-2 px-2 col-span-2 sm:col-span-1">
                        <label htmlFor="">Image</label>
                        <input disabled={action === 'VIEW' ? true : false} value={image} onChange={e => setImage(e.target.value)} type="text" placeholder='Price' className='rounded-lg p-3 border-2' />
                        <form onSubmit={() => { }}>
                            <input disabled={action === 'VIEW' ? true : false}
                                type="file" label='Image'
                                name='myImage' id='img-upload'
                                accept='.jpg, .png, .jpeg'
                                onChange={e => handleUploadImage(e)}
                            />
                        </form>
                    </div>
                    <div className="flex flex-col gap-2 px-2 col-span-2 sm:col-span-1">
                        <label htmlFor="">Image (backup optional)</label>
                        <input disabled={action === 'VIEW' ? true : false}
                            value={subImage}
                            onChange={e => setSubImage(e.target.value)}
                            type="text" placeholder='Image (backup optional)' className='rounded-lg p-3 border-2' />
                    </div>
                    <div className="flex col-span-2 gap-2 px-2">
                        {action === 'VIEW' ?
                            <button
                                onClick={handleEdit}
                                className='flex gap-2 items-center justify-center text-xl rounded-xl bg-orange-primary-400 hover:duration-200 hover:bg-orange-primary-500 text-white w-full md:w-[40%] mx-auto p-3'>
                                Edit
                                <CiEdit size={25} />
                            </button> :
                            <button
                                onClick={handleConfirmEdit}
                                className='flex gap-2 items-center justify-center text-xl text-black rounded-xl bg-green-primary-500 hover:duration-200 hover:bg-green-200 w-full md:w-[40%] mx-auto p-3'>
                                Save Changes
                                <CiEdit size={25} />
                            </button>
                        }
                        <button
                            onClick={handleDelete}
                            className='flex gap-2 items-center justify-center text-xl rounded-xl bg-red-500 hover:bg-red-600 text-white w-full md:w-[40%] mx-auto p-3'>
                            Delete
                            <MdDeleteOutline size={25} />
                        </button>
                    </div>
                </div>
            </Modal>
            <Modal open={openModalConfirmDelete} onClose={onCloseModalConfirmDelete} center>
                <div className='p-5 flex flex-col gap-5'>
                    <div>Are you sure you want to delete this course?</div>
                    <div className="">Type "<span className='text-orange-700'>{name}</span>" to proceed deleting this course</div>
                    <input value={confirmDeleteText} onChange={e => setConfirmDeleteText(e.target.value)} className='p-3 rounded-lg border-2' type="text" />
                    <button onClick={handleconfirmDelete} className='rounded-xl p-3 text-white bg-black hover:duration-200 hover:bg-gray-700'>Delete</button>
                </div>
            </Modal>
            <Footer />
        </>
    )
}

export default ManageCourse

const convertBase64 = file => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (e) => reject(e)
    })
}