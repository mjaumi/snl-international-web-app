import React from 'react';

const SectionImageDiv = ({ image1, image2 }) => {
    return (
        <div className='relative h-full w-[90%] md:w-[75%] xl:w-[90%]'>
            <img className='absolute left-3 bottom-3 md:left-6 md:bottom-6 h-[200px] w-[200px] md:h-[300px] md:w-[300px] 2xl:h-[400px] 2xl:w-[400px] shadow-snl' src={image1} alt='our office' />
            <div className='absolute w-1 md:w-2 h-20 bg-primary left-0 bottom-0'></div>
            <div className='absolute w-20 h-1 md:h-2 bg-primary left-0 bottom-0'></div>

            <img className='absolute top-3 right-3 md:top-6 md:right-6 h-[200px] w-[200px] md:h-[300px] md:w-[300px] 2xl:h-[400px] 2xl:w-[400px] shadow-snl' src={image2} alt='meeting room' />
            <div className='absolute w-1 md:w-2 h-20 bg-primary right-0 top-0'></div>
            <div className='absolute w-20 h-1 md:h-2 bg-primary right-0 top-0'></div>
        </div>
    );
};

export default SectionImageDiv;