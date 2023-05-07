import React from 'react';

const SNLButton = ({ onClick, isLoading, btnType, icon, content, additionalClassNames }) => {

    // rendering the button component here
    return (
        <button onClick={onClick} type={btnType} className={`relative btn bg-transparent rounded-md normal-case border-2 font-medium hover:text-base-100 hover:bg-transparent after:w-0 after:h-full after:block after:absolute after:origin-center hover:after:w-full after:duration-500 ${additionalClassNames} ${isLoading && 'loading'}`}>
            {!isLoading && icon}
            <span className='z-50'>{content}</span>
        </button>
    );
};

export default SNLButton;