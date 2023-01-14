import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper';
import { animated } from '@react-spring/web';
import useHeaderLeftBorderScaleAnimation from '../../hooks/useHeaderLeftBorderScaleAnimation';
import useHeaderTextTransformAnimation from '../../hooks/useHeaderTextTransformAnimation';

const Banner = () => {

    // integration of first slide animation hooks here
    const firstSlideBorderScale = useHeaderLeftBorderScaleAnimation();
    const firstUpperHeaderAnim = useHeaderTextTransformAnimation(firstSlideBorderScale.isBorderAnimDone, 200);
    const firstLowerHeaderAnim = useHeaderTextTransformAnimation(firstSlideBorderScale.isBorderAnimDone, 600);

    // integration of second slide animation hooks here
    const secondSlideBorderScale = useHeaderLeftBorderScaleAnimation();
    const secondUpperHeaderAnim = useHeaderTextTransformAnimation(secondSlideBorderScale.isBorderAnimDone, 200);
    const secondLowerHeaderAnim = useHeaderTextTransformAnimation(secondSlideBorderScale.isBorderAnimDone, 600);

    // integration of third slide animation hooks here
    const thirdSlideBorderScale = useHeaderLeftBorderScaleAnimation();
    const thirdUpperHeaderAnim = useHeaderTextTransformAnimation(thirdSlideBorderScale.isBorderAnimDone, 200);
    const thirdLowerHeaderAnim = useHeaderTextTransformAnimation(thirdSlideBorderScale.isBorderAnimDone, 600);

    // rendering swiper carousal banner here
    return (
        <section>
            <Swiper
                speed={4000}
                cssMode={false}
                navigation={true}
                keyboard={true}
                loop={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                onTransitionEnd={(swiper) => {
                    switch (swiper.realIndex) {
                        case 0:
                            secondSlideBorderScale.setIsBorderAnimDone(false);
                            thirdSlideBorderScale.setIsBorderAnimDone(false);

                            firstSlideBorderScale.setHasSwipedToSlide(true);
                            secondSlideBorderScale.setHasSwipedToSlide(false);
                            thirdSlideBorderScale.setHasSwipedToSlide(false);

                            firstUpperHeaderAnim.setHasSwipedToSlide(true);
                            secondUpperHeaderAnim.setHasSwipedToSlide(false);
                            thirdUpperHeaderAnim.setHasSwipedToSlide(false);

                            firstLowerHeaderAnim.setHasSwipedToSlide(true);
                            secondLowerHeaderAnim.setHasSwipedToSlide(false);
                            thirdLowerHeaderAnim.setHasSwipedToSlide(false);

                            secondUpperHeaderAnim.setHasAnimRestarted(false);
                            thirdUpperHeaderAnim.setHasAnimRestarted(false);

                            secondLowerHeaderAnim.setHasAnimRestarted(false);
                            thirdLowerHeaderAnim.setHasAnimRestarted(false);

                            break;

                        case 1:
                            firstSlideBorderScale.setIsBorderAnimDone(false);
                            thirdSlideBorderScale.setIsBorderAnimDone(false);

                            firstSlideBorderScale.setHasSwipedToSlide(false);
                            secondSlideBorderScale.setHasSwipedToSlide(true);
                            thirdSlideBorderScale.setHasSwipedToSlide(false);

                            firstUpperHeaderAnim.setHasSwipedToSlide(false);
                            secondUpperHeaderAnim.setHasSwipedToSlide(true);
                            thirdUpperHeaderAnim.setHasSwipedToSlide(false);

                            firstLowerHeaderAnim.setHasSwipedToSlide(false);
                            secondLowerHeaderAnim.setHasSwipedToSlide(true);
                            thirdLowerHeaderAnim.setHasSwipedToSlide(false);

                            firstUpperHeaderAnim.setHasAnimRestarted(false);
                            thirdUpperHeaderAnim.setHasAnimRestarted(false);

                            firstLowerHeaderAnim.setHasAnimRestarted(false);
                            thirdLowerHeaderAnim.setHasAnimRestarted(false);

                            break;

                        case 2:
                            firstSlideBorderScale.setIsBorderAnimDone(false);
                            secondSlideBorderScale.setIsBorderAnimDone(false);

                            firstSlideBorderScale.setHasSwipedToSlide(false);
                            secondSlideBorderScale.setHasSwipedToSlide(false);
                            thirdSlideBorderScale.setHasSwipedToSlide(true);

                            firstUpperHeaderAnim.setHasSwipedToSlide(false);
                            secondUpperHeaderAnim.setHasSwipedToSlide(false);
                            thirdUpperHeaderAnim.setHasSwipedToSlide(true);

                            firstLowerHeaderAnim.setHasSwipedToSlide(false);
                            secondLowerHeaderAnim.setHasSwipedToSlide(false);
                            thirdLowerHeaderAnim.setHasSwipedToSlide(true);

                            firstUpperHeaderAnim.setHasAnimRestarted(false);
                            secondUpperHeaderAnim.setHasAnimRestarted(false);

                            firstLowerHeaderAnim.setHasAnimRestarted(false);
                            secondLowerHeaderAnim.setHasAnimRestarted(false);

                            break;

                        default:
                            break;
                    }

                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Navigation, Pagination, Keyboard]}
                className='h-screen w-screen'
            >
                <SwiperSlide className='bg-banner-1-img bg-no-repeat bg-center bg-cover mix-blend-multiply flex justify-center items-center'>
                    <div className='relative'>
                        <animated.div className={`absolute rounded-md w-1 md:w-2 bg-secondary -left-5 md:-left-10 top-0 ${firstSlideBorderScale.hasSwipedToSlide ? 'opacity-100' : 'opacity-0'}`} style={firstSlideBorderScale.leftBorderScaleAnimation}></animated.div>
                        <div className='text-3xl md:text-6xl 2xl:text-8xl text-white uppercase overflow-hidden'>
                            <animated.h1 className={`font-thin mb-4 md:mb-10 tracking-widest ${firstUpperHeaderAnim.hasAnimRestarted ? 'opacity-100' : 'opacity-0'}`} style={firstUpperHeaderAnim.HeaderTextTransformAnimation}>Welcome to</animated.h1>
                            <animated.h1 className={`tracking-wider font-light ${firstLowerHeaderAnim.hasAnimRestarted ? 'opacity-100' : 'opacity-0'}`} style={firstLowerHeaderAnim.HeaderTextTransformAnimation}>SNL International</animated.h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-banner-2-img bg-no-repeat bg-center bg-cover mix-blend-multiply flex justify-center items-center'>
                    <div className='relative'>
                        <animated.div className={`absolute rounded-md w-1 md:w-2 bg-secondary -left-5 md:-left-10 top-0 ${secondSlideBorderScale.hasSwipedToSlide ? 'opacity-100' : 'opacity-0'}`} style={secondSlideBorderScale.leftBorderScaleAnimation}></animated.div>
                        <div className='text-3xl md:text-6xl 2xl:text-8xl text-white uppercase overflow-hidden'>
                            <animated.h1 className={`font-thin mb-4 md:mb-10 tracking-widest ${secondUpperHeaderAnim.hasAnimRestarted ? 'opacity-100' : 'opacity-0'}`} style={secondUpperHeaderAnim.HeaderTextTransformAnimation}>Welcome to</animated.h1>
                            <animated.h1 className={`tracking-wider font-light ${secondLowerHeaderAnim.hasAnimRestarted ? 'opacity-100' : 'opacity-0'}`} style={secondLowerHeaderAnim.HeaderTextTransformAnimation}>SNL International</animated.h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-banner-3-img bg-no-repeat bg-center bg-cover mix-blend-multiply flex justify-center items-center'>
                    <div className='relative'>
                        <animated.div className={`absolute rounded-md w-1 md:w-2 bg-secondary -left-5 md:-left-10 top-0 ${thirdSlideBorderScale.hasSwipedToSlide ? 'opacity-100' : 'opacity-0'}`} style={thirdSlideBorderScale.leftBorderScaleAnimation}></animated.div>
                        <div className='text-3xl md:text-6xl 2xl:text-8xl text-white uppercase overflow-hidden'>
                            <animated.h1 className={`font-thin mb-4 md:mb-10 tracking-widest ${thirdUpperHeaderAnim.hasAnimRestarted ? 'opacity-100' : 'opacity-0'}`} style={thirdUpperHeaderAnim.HeaderTextTransformAnimation}>Welcome to</animated.h1>
                            <animated.h1 className={`tracking-wider font-light ${thirdLowerHeaderAnim.hasAnimRestarted ? 'opacity-100' : 'opacity-0'}`} style={thirdLowerHeaderAnim.HeaderTextTransformAnimation}>SNL International</animated.h1>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;