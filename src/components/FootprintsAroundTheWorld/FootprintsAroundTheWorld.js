import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import SNLGlobe from '../SNLGlobe/SNLGlobe';

const FootprintsAroundTheWorld = () => {
    // integration of react hooks here
    const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

    const targetDiv = useRef();

    // getting the targeted div dimensions
    useEffect(() => {
        if (targetDiv.current) {
            setDimensions({
                height: targetDiv.current.offsetHeight,
                width: targetDiv.current.offsetWidth
            });
        }
    }, []);


    // rendering foot prints around the world component here
    return (
        <section className='bg-white py-10'>
            <SectionTitle titleText={'Our Footprints across the globe'} />
            <div className='w-[95%] md:w-[90%] mx-auto flex flex-col-reverse xl:flex-row justify-center items-center'>
                <div className='w-full xl:w-2/3'>
                    <h1 className='2xl:text-9xl font-bold'>Hello World!!!</h1>
                </div>
                <div ref={targetDiv} className='w-full xl:w-1/3 md:h-[50vh] xl:h-[60vh] 2xl:h-[80vh] overflow-hidden'>
                    <SNLGlobe dimensions={dimensions} />
                </div>
            </div>
        </section>
    );
};

export default FootprintsAroundTheWorld;