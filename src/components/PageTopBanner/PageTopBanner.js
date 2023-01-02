import React, { useRef } from 'react';
import { animated } from '@react-spring/web';
import { useInViewport } from 'react-in-viewport';
import { Background, Parallax } from 'react-parallax';
import useTitleUnderlineAnimation from '../../hooks/useTitleUnderlineAnimation';

const PageTopBanner = ({ bgImage, titleText }) => {
    // declaration of react hooks here
    const titleRef = useRef();

    // declaration of react-in-viewport hook here
    const titleViewportChecker = useInViewport(titleRef);

    // declaration of custom react-spring hooks here
    const titleAnimation = useTitleUnderlineAnimation(titleViewportChecker.inViewport);

    // rendering top page banner component here
    return (
        <div className='relative h-[70vh] w-full'>
            <Parallax strength={500} className='h-full'>
                <Background className='w-full h-full'>
                    <div className={`w-screen h-[2000px] bg-no-repeat bg-center bg-cover ${bgImage}`}>
                    </div>
                </Background>
            </Parallax>
            <div className='absolute top-0 w-full h-full'>
                <div className='absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex justify-center'>
                        <div ref={titleRef} className='relative font-bold text-3xl md:text-6xl capitalize flex justify-center w-fit mx-auto'>
                            <h1 className='text-secondary text-center px-4 pb-3'>{titleText}</h1>
                            <animated.div style={titleAnimation.titleUnderlineAnimation} className='absolute h-1 md:h-2 bg-secondary bottom-0 left-0'></animated.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTopBanner;