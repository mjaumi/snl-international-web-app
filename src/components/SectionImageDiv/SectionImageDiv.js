import React from 'react';

const SectionImageDiv = ({ image1 }) => {
    return (
        <div className='relative h-fit w-fit p-5'>
            <img className='h-[200px] w-[200px] md:h-[300px] md:w-[300px] 2xl:h-[400px] 2xl:w-[400px] shadow-snl' src={image1} alt='our office' />

            <div className='absolute rounded-tl-md rounded-tr-md w-1 md:w-2 h-20 bg-primary left-0 bottom-0'></div>
            <div className='absolute rounded-br-md rounded-tr-md w-20 h-1 md:h-2 bg-primary left-0 bottom-0'></div>

            <div className='absolute rounded-bl-md rounded-br-md w-1 md:w-2 h-20 bg-primary right-0 top-0'></div>
            <div className='absolute rounded-tl-md rounded-bl-md w-20 h-1 md:h-2 bg-primary right-0 top-0'></div>
        </div>
    );
};

export default SectionImageDiv;