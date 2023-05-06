import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import aboutJute1 from '../../assets/images/about-jute-1.JPG';
import aboutJute2 from '../../assets/images/about-jute-1.JPG';
import SectionImageDiv from '../SectionImageDiv/SectionImageDiv';

const AboutJute = () => {

    // rendering about jute component here
    return (
        <section className='w-[95%] md:w-[90%] mx-auto py-20'>
            <SectionTitle titleText={'What is Jute ?'} />
            <div className='flex flex-col xl:flex-row'>
                <div className='w-full xl:w-1/2 h-[40vh] xl:h-[60vh] flex justify-center mt-10'>
                    <SectionImageDiv image1={aboutJute1} image2={aboutJute2} />
                </div>
                <div className='w-full xl:w-[70%] flex items-center justify-center'>
                    <p className='w-full xl:w-[90%] text-sm lg:text-base text-center xl:text-left mt-10 xl:mt-0'>Jute is a natural fiber which is also referred to as the <span className='text-primary font-semibold'>"Golden Fiber"</span>. It is one of the most affordable and durable natural fibers available, and is regarded as the fiber of the future. Jute is not only a major textile fiber but also a raw material for non-traditional and value-added non-textile products. Jute is used extensively in the manufacture of different types of traditional packaging fabrics, manufacturing Hessian, sackings, carpet backing, mats, bags, tarpaulins, ropes and twines. Jute us a natural fiber with many intrinsic benefits, including luster, high tensile strength, low expandability, moderate heat and fire resistance, and long staple lengths. It is environmentally friendly and biodegradable. It outperforms synthetics in many ways, protects the environment, and upholds ecological harmony.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutJute;