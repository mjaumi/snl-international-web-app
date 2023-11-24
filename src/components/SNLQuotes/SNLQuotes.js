import React from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { Background, Parallax } from 'react-parallax';

const SNLQuotes = ({ subQuote, quote }) => {

    // rendering SNL quotes component here
    return (
        <div className='relative h-40 md:h-[250px] xl:h-[500px] border-t-4 border-b-4 border-primary'>
            <Parallax strength={500} className='h-full'>
                <Background className='w-full h-full'>
                    <div className='bg-quotes-img w-screen h-[1000px] bg-no-repeat bg-center bg-cover'>
                    </div>
                </Background>
            </Parallax>
            <div className='w-full'>
                <div className='absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex justify-center text-white'>
                        <div>
                            {
                                subQuote &&
                                <h1 className='capitalize font-dancing-script text-xl md:text-3xl xl:text-6xl font-bold xl:mt-2 mb-2'>{subQuote}</h1>
                            }
                            <div className='flex justify-center'>
                                <RiDoubleQuotesL className='h-4 w-4 xl:h-8 xl:w-8' />
                                <h1 className='capitalize font-dancing-script text-xl md:text-3xl xl:text-6xl font-bold xl:mt-2'>{quote}</h1>
                                <RiDoubleQuotesR className='ml-2 h-4 w-4 xl:h-8 xl:w-8' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SNLQuotes;