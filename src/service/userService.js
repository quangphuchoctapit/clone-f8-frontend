import axios from 'axios'

const getAllCourses = async () => {
    return await axios.get('http://localhost:8081/user/read/course')
}

const createNewCourse = async (data) => {
    return await axios.post('http://localhost:8081/user/create/course', data)
}



export {
    getAllCourses,
    createNewCourse,
    // getCourseById,
    // editCourse,
    // deleteCourse
}