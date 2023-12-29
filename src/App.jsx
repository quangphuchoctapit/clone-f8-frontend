import React, { useState, useEffect } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import UserProfile from './components/User/UserProfile';
import AssistedWebMenu from './components/AssistedWebMenu';
import AccountSetting from './components/Setting/AccountSetting';
import SecuritySetting from './components/Setting/SecuritySetting';
import NotificationSetting from './components/Setting/NotificationSetting';
import LearningPath from './components/LearningPath';
import AllBlogs from './components/Blog/AllBlogs';
import WriteBlog from './components/Blog/WriteBlog';



const NotFound = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="bg-orange-primary-500 text-white p-24 rounded-3xl text-3xl font-extrabold">
      404 Not Found
    </div>
  </div>
);

const App = () => {
  const [showAssistedWebMenu, setShowAssistedWebMenu] = useState(false)
  const [displayAssistedWebMenu, setDisplayAssistedWebMenu] = useState(false)
  let location = useLocation()


  //check url to display left sided menu (1024px)
  useEffect(() => {
    if (location.pathname !== '/') {
      setDisplayAssistedWebMenu(true)
    }
    else {
      setDisplayAssistedWebMenu(false)
    }
  }, [location.pathname])

  // toggle show hide left side menu (1024px)
  useEffect(() => {
    const handleMouseMove = (event) => {

      if (event.clientY >= 84 && event.clientY <= 540 && event.clientX >= 0 && event.clientX <= 20) {
        if (!showAssistedWebMenu) {
          setShowAssistedWebMenu(true);
        }

      } else {
        if (showAssistedWebMenu) {
          setShowAssistedWebMenu(false);
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showAssistedWebMenu]);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-profile" element={<UserProfile displayAssistedWebMenu />} />
        <Route path="/setting/account" element={<AccountSetting />} />
        <Route path="/setting/security" element={<SecuritySetting />} />
        <Route path="/setting/notification" element={<NotificationSetting />} />
        <Route path="/learning-path" element={<LearningPath />} />
        <Route path="/blogs" element={<AllBlogs itemsPerPage={5} />} />

        <Route path="/write-blog" element={<WriteBlog />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
      <AssistedWebMenu displayAssistedWebMenu={displayAssistedWebMenu} isShowAssistedMenu={showAssistedWebMenu} />
    </>
  )
}

export default App
