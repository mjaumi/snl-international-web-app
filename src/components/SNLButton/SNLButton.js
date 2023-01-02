import React from 'react';

const SNLButton = ({ content, additionalClassNames }) => {

    // rendering the button component here
    return (
        <button className={`relative btn bg-transparent rounded-md capitalize border-2 text-lg font-medium hover:text-base-100 hover:bg-transparent after:w-0 after:h-full after:block after:absolute after:origin-center hover:after:w-full after:duration-500 ${additionalClassNames}`}>
            <span className='z-50'>{content}</span>
        </button>
    );
};

export default SNLButton;