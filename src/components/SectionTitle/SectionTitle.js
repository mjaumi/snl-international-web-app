import React, { useRef } from 'react';
import { animated } from '@react-spring/web';
import { useInViewport } from 'react-in-viewport';
import useTitleUnderlineAnimation from '../../hooks/useTitleUnderlineAnimation';

const SectionTitle = ({ titleText }) => {
    // declaration of react hooks here
    const titleRef = useRef();

    // declaration of react-in-viewport hook here
    const titleViewportChecker = useInViewport(titleRef);

    // declaration of custom react-spring hooks here
    const titleAnimation = useTitleUnderlineAnimation(titleViewportChecker.inViewport);

    // rendering section title component here
    return (
        <div ref={titleRef} className='relative font-bold text-4xl md:text-6xl capitalize flex justify-center my-10 w-fit mx-auto'>
            <h1 className='text-primary px-4 pb-3'>{titleText}</h1>
            <animated.div style={titleAnimation.titleUnderlineAnimation} className='absolute h-1 md:h-2 bg-primary bottom-0 left-0'></animated.div>
        </div>
    );
};

export default SectionTitle;