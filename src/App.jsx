import React, { useState, useEffect } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import UserProfile from './components/User/UserProfile';
import AssistedWebMenu from './components/AssistedWebMenu';

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

  useEffect(() => {
    console.log('check window:', location)
    if (location.pathname === '/user-profile') {
      setDisplayAssistedWebMenu(true)
    } else {
      setDisplayAssistedWebMenu(false)
    }
  }, [location.pathname])

  // toggle show hide left side menu (1024px)
  useEffect(() => {
    const handleMouseMove = (event) => {
      // console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`); // Debugging log

      if (event.clientY >= 84 && event.clientY <= 540 && event.clientX >= 0 && event.clientX <= 14) {
        if (!showAssistedWebMenu) {
          // console.log("Setting visible to true");
          setShowAssistedWebMenu(true);
        }

      } else {
        if (showAssistedWebMenu) {
          // console.log("Setting visible to false", 84 < event.clientY && event.clientY < 540 && 0 < event.clientX && event.clientX < 14);
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <AssistedWebMenu displayAssistedWebMenu={displayAssistedWebMenu} isShowAssistedMenu={showAssistedWebMenu} />
    </>
  )
}

export default App
