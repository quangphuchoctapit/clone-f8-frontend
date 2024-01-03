import axios from 'axios'

const getAllCourses = async () => {
    return await axios.get('http://localhost:8081/user/read/course')
}

const createNewCourse = async (data) => {
    return await axios.post('http://localhost:8081/user/create/course', data)
}

const getCourseById = async (id) => {
    return await axios.get(`http://localhost:8081/user/read/detail/course/${id}`)
}

const deleteCourse = async (id) => {
    return await axios.delete(`http://localhost:8081/user/delete/course/${id}`)
}

const editCourse = async (id, data) => {
    return await axios.put(`http://localhost:8081/user/edit/course/${id}`, data)
}


export {
    getAllCourses,
    createNewCourse,
    getCourseById,
    editCourse,
    deleteCourse
}