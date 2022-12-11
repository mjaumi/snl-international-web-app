import React from 'react';

const SNLButton = ({ content, padX, bgColor }) => {

    // rendering the button component here
    return (
        <button className={`relative btn btn-secondary bg-${bgColor} text-secondary rounded-none capitalize border-2 text-lg font-medium hover:text-white hover:bg-transparent px-${padX} after:w-0 after:h-full after:origin-center hover:after:w-full after:bg-secondary after:block after:absolute after:duration-500`}>
            <span className='z-50'>{content}</span>
        </button>
    );
};

export default SNLButton;