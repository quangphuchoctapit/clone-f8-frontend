import React from 'react'
import Nav from './components/Nav'
import HomePage from './components/Home/HomePage'
import Footer from './components/Footer'

let navData = {
  dataNotification: [
    {
      id: 1,
      img: 'https://fullstack.edu.vn/assets/images/f8_avatar.png',
      detail: 'New lesson Noob Course has just been uploaded. Check it out!',
      isRead: false,
      date: 'A month ago'
    },
    {
      id: 2,
      img: 'https://fullstack.edu.vn/assets/images/f8_avatar.png',
      detail: 'New lesson Noob Course has just been uploaded. Check it out!',
      isRead: false,
      date: '2 month ago'
    },
    {
      id: 3,
      img: 'https://fullstack.edu.vn/assets/images/f8_avatar.png',
      detail: 'New lesson Noob Course has just been uploaded. Check it out!',
      isRead: true,
      date: '3 month ago'
    },
    {
      id: 4,
      img: 'https://fullstack.edu.vn/assets/images/f8_avatar.png',
      detail: 'New lesson Noob Course has just been uploaded. Check it out!',
      isRead: false,
      date: '4 month ago'
    }, {
      id: 5,
      img: 'https://fullstack.edu.vn/assets/images/f8_avatar.png',
      detail: 'New lesson Noob Course has just been uploaded. Check it out!',
      isRead: false,
      date: '5 months ago'
    }
  ],
  dataMyCourses: [
    {
      id: 1,
      img: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
      detail: 'Build Websites with ReactJS',
      lastAccessed: 3
    },
    {
      id: 2,
      img: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
      detail: 'NodeJS & ExpressJS',
      lastAccessed: 4
    },
    {
      id: 3,
      img: 'https://files.fullstack.edu.vn/f8-prod/courses/12.png',
      detail: 'Advanced Javascript',
      lastAccessed: 5
    },
    {
      id: 4,
      img: 'https://files.fullstack.edu.vn/f8-prod/courses/3.png',
      detail: 'Responsive Programming',
      lastAccessed: 6
    },
    {
      id: 5,
      img: 'https://files.fullstack.edu.vn/f8-prod/courses/1.png',
      detail: 'Fundamental Javascript',
      lastAccessed: 7
    },
    {
      id: 6,
      img: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
      detail: 'HTML & CSS - From zero to Hero',
      lastAccessed: 'A year'
    },
  ]
}

const App = () => {
  return (
    <>
      <Nav navData={navData} />
      <HomePage />
      <Footer />
    </>
  )
}

export default App
