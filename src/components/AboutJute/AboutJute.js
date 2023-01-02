import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import aboutImage1 from '../../assets/images/about-1.jpg';
import aboutImage2 from '../../assets/images/about-2.jpg';
import SectionImageDiv from '../SectionImageDiv/SectionImageDiv';

const AboutJute = () => {

    // rendering about jute component here
    return (
        <section className='w-[95%] md:w-[90%] mx-auto py-10'>
            <SectionTitle titleText={'What is jute ?'} />
            <div className='flex flex-col xl:flex-row'>
                <div className='w-full xl:w-1/2 h-[40vh] xl:h-[65vh] flex justify-center'>
                    <SectionImageDiv image1={aboutImage1} image2={aboutImage2} />
                </div>
                <div className='w-full xl:w-1/2 flex items-center'>
                    <p className='text-base lg:text-lg text-center xl:text-left mt-10 xl:mt-0'>Jute is a natural fiber which is also referred to as the <span className='text-primary font-semibold'>"Golden Fiber"</span>. It is one of the most affordable and durable natural fibers available, and is regarded as the fiber of the future. Jute is not only a major textile fiber but also a raw material for non-traditional and value-added non-textile products. Jute is used extensively in the manufacture of different types of traditional packaging fabrics, manufacturing Hessian, sackings, carpet backing, mats, bags, tarpaulins, ropes and twines. Jute us a natural fiber with many intrinsic benefits, including luster, high tensile strength, low expandability, moderate heat and fire resistance, and long staple lengths. It is environmentally friendly and biodegradable. It outperforms synthetics in many ways, protects the environment, and upholds ecological harmony.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutJute;