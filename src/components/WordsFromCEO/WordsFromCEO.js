import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import aboutImage1 from '../../assets/images/about-1.jpg';
import aboutImage2 from '../../assets/images/about-2.jpg';
import SectionImageDiv from '../SectionImageDiv/SectionImageDiv';

const WordsFromCEO = () => {
    return (
        <section className='pt-20 pb-40 bg-white'>
            <div className='w-[95%] md:w-[90%] mx-auto'>
                <SectionTitle titleText={'Words from CEO'} />
                <div className='flex flex-col xl:flex-row'>
                    <div className='w-full xl:w-1/2 h-[40vh] xl:h-[60vh] flex justify-center mt-10'>
                        <SectionImageDiv image1={aboutImage1} image2={aboutImage2} />
                    </div>
                    <div className='w-full xl:w-[70%] flex items-center justify-center'>
                        <p className='w-full xl:w-[90%] text-sm lg:text-base text-center xl:text-left mt-10 xl:mt-0'>I, Md. Shohrab Hossain being a son of Haji Mohammad Ali who was one of the few Bengali entrepreneurs to establish Textile and Jute Mills before 1971 liberation war of Bangladesh and also the pioneer in exporting Jute Goods all over the world, had the privilege to learn about business and morals from my father. We have grown up seeing my father working hard to establish ‘Shamsher Jute Mill Ltd’ as a brand without compromising his strict business principles. After completing my higher studies abroad I came back to Bangladesh for my parents and joined ‘Shamsher Jute Mill Ltd’ as a Director and currently serving as a Chairman of the Board of Directors ‘Shamsher Jute Mills Ltd. Other than that, I am also engaged in share trading business being a member of Dhaka Stock Exchange Ltd. Later I started an individual journey of SNL International as a trading concern of Jahan Group of Companies. Now we are exporting Jute Goods all over the world with the finest quality. It’s an absolute honor for me to be a small part of Go Green movement as we are working with Jute which is completely a natural biodegradable fiber.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WordsFromCEO;