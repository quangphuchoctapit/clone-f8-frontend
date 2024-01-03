import React, { useState } from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import Select from 'react-select'
import { TiPlus } from "react-icons/ti";
import { createNewCourse } from '../../service/userService'

const CreateCourse = () => {
    const [name, setName] = useState('')
    const [detail, setDetail] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [isPro, setIsPro] = useState(false)
    const [image, setImage] = useState('')
    const [subImage, setSubImage] = useState('')

    const [selectedIsPro, setSelectedIsPro] = useState(null);
    const handleSelectedIsPro = (selectedIsPro) => {
        setSelectedIsPro(selectedIsPro);
    };

    const handleUploadImage = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertBase64(file)
        setImage(base64)
    }

    const handleSubmit = async () => {
        if (!name || !detail || !description || !selectedIsPro || !image) {
            alert('Please enter all fields')
        }
        let isPro = selectedIsPro?.value
        let courseData = {
            name, detail, description, price, is_pro: isPro, image, sub_image: subImage
        }
        let response = await createNewCourse(courseData)
        console.log('chcek res: ', response)
    }

    return (
        <>
            <Nav />
            <div className='mt-20 w-full'>
                <div className='max-w-screen-xl xl:max-w-screen-lg mx-auto'>
                    <div className=" w-full p-3">
                        <div className="grid grid-cols-2 gap-5">
                            <h1 className="col-span-2 text-xl font-semibold text-center my-5">Create New Course</h1>
                            <div className="flex flex-col gap-2 px-2 col-span-2 sm:col-span-1">
                                <label htmlFor="">Name</label>
                                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Name' className='rounded-lg p-3 border-2' />
                            </div>
                            <div className="flex flex-col gap-2 px-2 col-span-2 sm:col-span-1">
                                <label htmlFor="">Detail</label>
                                <input value={detail} onChange={e => setDetail(e.target.value)} type="text" placeholder='Detail' className='rounded-lg p-3 border-2' />
                            </div>
                            <div className="flex flex-col gap-2 px-2 col-span-2 sm:col-span-1">
                                <label htmlFor="">Description</label>
                                <input value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder='Description' className='rounded-lg p-3 border-2' />
                            </div>
                            <div className="flex flex-col gap-2 px-2 col-span-2 sm:col-span-1">
                                <label htmlFor="">Pro Course?</label>
                                <Select value={selectedIsPro} onChange={handleSelectedIsPro} className='' options={[
                                    { value: true, label: 'Pro course' },
                                    { value: false, label: 'Ordinary course' },
                                ]} />
                            </div>
                            <div className="flex flex-col gap-2 px-2 col-span-2 sm:col-span-1">
                                <label htmlFor="">Price</label>
                                <input value={price} onChange={e => setPrice(e.target.value)} type="text" placeholder='Price' className='rounded-lg p-3 border-2' />
                            </div>
                            <div className="flex flex-col gap-2 px-2 col-span-2 sm:col-span-1">
                                <label htmlFor="">Image</label>
                                {/* <input value={image} onChange={e => setImage(e.target.value)} type="text" placeholder='Price' className='rounded-lg p-3 border-2' /> */}
                                <form onSubmit={() => { }}>
                                    <input
                                        type="file" label='Image'
                                        name='myImage' id='img-upload'
                                        accept='.jpg, .png, .jpeg'
                                        onChange={e => handleUploadImage(e)} />
                                </form>
                            </div>
                            <div className="flex flex-col gap-2 px-2 col-span-2 sm:col-span-1">
                                <label htmlFor="">Image (backup optional)</label>
                                <input value={subImage} onChange={e => setSubImage(e.target.value)} type="text" placeholder='Image (backup optional)' className='rounded-lg p-3 border-2' />
                            </div>
                            <div className="flex flex-col col-span-2 gap-2 px-2">
                                <button onClick={handleSubmit} className='flex gap-2 items-center justify-center text-xl rounded-xl bg-green-primary-400 hover:bg-green-primary-500 text-white w-full md:w-[40%] mx-auto p-3'>
                                    Create
                                    <TiPlus size={25} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CreateCourse

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