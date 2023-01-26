import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import aboutImage1 from '../../assets/images/about-1.jpg';
import aboutImage2 from '../../assets/images/about-2.jpg';
import SectionImageDiv from '../SectionImageDiv/SectionImageDiv';

const AboutSNL = () => {

    // rendering about snl component here
    return (
        <section className='w-[95%] md:w-[90%] mx-auto py-20'>
            <SectionTitle titleText={'We are SNL International'} />
            <div className='flex flex-col xl:flex-row'>
                <div className='w-full xl:w-1/2 h-[40vh] xl:h-[60vh] flex justify-center mt-10'>
                    <SectionImageDiv image1={aboutImage1} image2={aboutImage2} />
                </div>
                <div className='w-full xl:w-[70%] flex items-center justify-center'>
                    <p className='w-full xl:w-[90%] text-sm lg:text-base text-center xl:text-left mt-10 xl:mt-0'>We can proudly say that Bangladesh is the home of Jute and it is an honor for us to work to elevate the reputation of this natural Golden fiber. Bangladeshi Jute is known as the “Golden Fiber” due to the high quality. Because of the superior fiber quality of Bangladeshi Jute, it has dominated the global market for so long.
                        We believe in Sustainability. Our sustainability initiatives for both our current and future company operation as well as for environmental and social challenges are fundamentally the foundation of our priorities.  Our purpose is to do business without causing any harm to the environment so that we can leave a better world for our future generation.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSNL;