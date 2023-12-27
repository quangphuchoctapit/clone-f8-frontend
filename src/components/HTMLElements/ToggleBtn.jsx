import React, { useState } from 'react';

const ToggleButton = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div
            className={`w-14 h-8 flex items-center ${isToggled ? 'bg-orange-primary-500 duration-300' : 'bg-gray-300 duration-300'}  rounded-full p-1 cursor-pointer`}
            onClick={handleToggle}
        >
            {/* Toggle Circle */}
            <div
                className={`bg-white w-6 h-6 rounded-full shadow-md cursor-pointer transform duration-300 ease-in-out
                    ${isToggled ? 'translate-x-6' : 'translate-x-0'}`}
            ></div>
        </div>
    );
};

export default ToggleButton;
