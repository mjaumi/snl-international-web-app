import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { Background, Parallax } from 'react-parallax';
import SplitType from 'split-type';
import gsap from 'gsap';

const PageTopBanner = ({ bgImage, titleText }) => {
    // declaration of react hooks here
    const titleRef = useRef();

    // declaration of react-in-viewport hook here
    useInViewport(titleRef);

    const text = SplitType.create('#title');

    text.chars.map((item) =>
        item.classList.add('translate-y-[110%]')
    );

    // animating the title text here
    if (text.chars[0]?.classList.contains('char')) {
        gsap.to('.char', {
            y: 0,
            stagger: 0.05,
            delay: 0.02,
            duration: 0.5,
        });
    }

    // rendering top page banner component here
    return (
        <div className='relative h-[80vh] w-full'>
            <Parallax strength={500} className='h-full'>
                <Background className='w-full h-full'>
                    <div className={`w-screen h-[2000px] bg-no-repeat bg-center bg-cover ${bgImage}`}>
                    </div>
                </Background>
            </Parallax>
            <div className='absolute top-0 w-full h-full'>
                <div className='absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex justify-center'>
                        <div className='relative font-bold text-4xl md:text-8xl flex justify-center w-fit mx-auto'>
                            <h1 id='title' ref={titleRef} className='clip-path-snl-polygon font-solitreo text-secondary text-center px-4'>{titleText}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTopBanner;