import React, { useRef } from 'react';
import { animated } from '@react-spring/web';
import SectionTitle from '../SectionTitle/SectionTitle';
import aboutImage1 from '../../assets/images/about-1.jpg';
import aboutImage2 from '../../assets/images/about-2.jpg';
import useSectionImageAnimation from '../../hooks/useSectionImageAnimation';
import { useInViewport } from 'react-in-viewport';

const AboutJute = () => {
    // declaration of react hooks here
    const firstImgRef = useRef();
    const secondImgRef = useRef();

    // declaration of react-in-viewport hook here
    const firstImgViewportChecker = useInViewport(firstImgRef);
    const secondImgViewportChecker = useInViewport(secondImgRef);

    // declaration of custom react-spring hooks here
    const firstImageAnim = useSectionImageAnimation({
        top: '50%',
        right: '0%'
    }, {
        top: '40%',
        right: '-15%'
    }, firstImgViewportChecker.inViewport);

    const secondImageAnim = useSectionImageAnimation({
        top: '50%',
        left: '50%'
    }, {
        top: '65%',
        left: '30%'
    }, secondImgViewportChecker.inViewport);

    // rendering about jute component here
    return (
        <section className='w-[95%] md:w-[90%] mx-auto py-10'>
            <SectionTitle titleText={'What is jute ?'} />
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 h-[67vh] relative flex justify-center'>
                    <animated.img ref={firstImgRef} style={firstImageAnim.sectionImageAnimation} className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] shadow-snl' src={aboutImage2} alt='our office' />
                    <div className='absolute w-2 h-20 bg-primary left-9 bottom-0'></div>
                    <div className='absolute w-20 h-2 bg-primary left-9 bottom-0'></div>

                    <animated.img ref={secondImgRef} style={secondImageAnim.sectionImageAnimation} className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] shadow-snl' src={aboutImage1} alt='meeting room' />
                    <div className='absolute w-2 h-20 bg-primary right-14 top-8'></div>
                    <div className='absolute w-20 h-2 bg-primary right-14 top-8'></div>
                </div>
                <div className='w-full md:w-1/2 flex items-center'>
                    <p className='text-base lg:text-lg text-center md:text-left'>Jute is a natural fiber which is also referred to as the <span className='text-primary font-semibold'>"Golden Fiber"</span>. It is one of the most affordable and durable natural fibers available, and is regarded as the fiber of the future. Jute is not only a major textile fiber but also a raw material for non-traditional and value-added non-textile products. Jute is used extensively in the manufacture of different types of traditional packaging fabrics, manufacturing Hessian, sackings, carpet backing, mats, bags, tarpaulins, ropes and twines. Jute us a natural fiber with many intrinsic benefits, including luster, high tensile strength, low expandability, moderate heat and fire resistance, and long staple lengths. It is environmentally friendly and biodegradable. It outperforms synthetics in many ways, protects the environment, and upholds ecological harmony.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutJute;