import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Keyboard } from 'swiper';

const Banner = () => {

    // rendering swiper carousal banner here
    return (
        <section>
            <Swiper
                cssMode={false}
                navigation={true}
                pagination={true}
                keyboard={true}
                modules={[Navigation, Pagination, Keyboard]}
                className='h-screen w-screen'
            >
                <SwiperSlide className='bg-banner-1-img bg-no-repeat bg-center bg-cover mix-blend-multiply'></SwiperSlide>
                <SwiperSlide className='bg-banner-2-img bg-no-repeat bg-center bg-cover mix-blend-multiply'></SwiperSlide>
                <SwiperSlide className='bg-banner-3-img bg-no-repeat bg-center bg-cover mix-blend-multiply'></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;