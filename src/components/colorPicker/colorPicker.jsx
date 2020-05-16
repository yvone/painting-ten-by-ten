import React from 'react';

function ColorPicker() {
    return (
        <div className="flex flex-1 justify-between items-center bg-gray-200 p-2">
            <p>Choose a color to start painting: </p>
            <div className="flex flex-1 justify-end">
                <div className="color-pill bg-black p-4 h-12"></div>
                <div className="color-pill bg-white p-4 h-12"></div>
                <div className="color-pill bg-gray-400 p-4 h-12"></div>
                <div className="color-pill bg-red-500 p-4 h-12"></div>
                <div className="color-pill bg-orange-400 p-4 h-12"></div>
                <div className="color-pill bg-yellow-500 p-4 h-12"></div>
                <div className="color-pill bg-green-400 p-4 h-12"></div>
                <div className="color-pill bg-teal-500 p-4 h-12"></div>
                <div className="color-pill bg-blue-400 p-4 h-12"></div>
                <div className="color-pill bg-indigo-500 p-4 h-12"></div>
                <div className="color-pill bg-purple-400 p-4 h-12"></div>
                <div className="color-pill bg-pink-500 p-4 h-12"></div>
            </div>
        </div>
    )
}

export default ColorPicker;