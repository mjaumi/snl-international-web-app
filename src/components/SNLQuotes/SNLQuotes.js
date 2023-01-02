import React from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { Parallax } from 'react-parallax';

const SNLQuotes = ({ quote, image }) => {

    // rendering SNL quotes component here
    return (
        <div className='border-t-4 border-b-4 border-primary'>
            <Parallax bgImage={image} strength={1500} bgClassName='bg-no-repeat bg-center bg-cover'>
                <div className='relative h-40 xl:h-64 w-full'>
                    <div className='w-full absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <div className='flex justify-center text-white'>
                            <RiDoubleQuotesL className='h-4 w-4 xl:h-8 xl:w-8' />
                            <h1 className='capitalize font-dancing-script text-xl md:text-3xl xl:text-6xl font-bold xl:mt-2'>{quote}</h1>
                            <RiDoubleQuotesR className='ml-2 h-4 w-4 xl:h-8 xl:w-8' />
                        </div>
                    </div>
                    <div className='absolute h-full w-full bg-black/40'></div>
                </div>
            </Parallax>
        </div>
    );
};

export default SNLQuotes;