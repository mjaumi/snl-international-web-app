import React from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { Background, Parallax } from 'react-parallax';

const SNLQuotes = ({ quote, bgImage }) => {

    // rendering SNL quotes component here
    return (
        <div className='relative h-40 xl:h-64 border-t-4 border-b-4 border-primary'>
            <Parallax strength={500} className='h-full'>
                <Background className='w-full h-full'>
                    <div className={`w-screen h-[2000px] bg-no-repeat bg-center bg-cover ${bgImage}`}>
                    </div>
                </Background>
            </Parallax>
            <div className='w-full h-full'>
                <div className='absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex justify-center text-white'>
                        <RiDoubleQuotesL className='h-4 w-4 xl:h-8 xl:w-8' />
                        <h1 className='capitalize font-dancing-script text-xl md:text-3xl xl:text-6xl font-bold xl:mt-2'>{quote}</h1>
                        <RiDoubleQuotesR className='ml-2 h-4 w-4 xl:h-8 xl:w-8' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SNLQuotes;