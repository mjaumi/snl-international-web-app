import React, { useEffect } from 'react';
import AboutSNL from '../../components/AboutSNL/AboutSNL';
import PageTitle from '../../components/PageTItle/PageTitle';
import PageTopBanner from '../../components/PageTopBanner/PageTopBanner';
import SNLQuotes from '../../components/SNLQuotes/SNLQuotes';
import WordsFromCEO from '../../components/WordsFromCEO/WordsFromCEO';

const AboutUs = () => {
    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // rendering about us page here
    return (
        <section>
            <PageTitle title={'About Us'} description={'About us page of SNL International. Here, user can find all the information about SNL International.'} canonical={process.env.NODE_ENV === 'development' ? 'http://localhost:3000/about-us' : 'http://www.snlbd.com/about-us'} />
            <PageTopBanner bgImage={'bg-banner-3-img'} titleText={'About Us'} />
            <AboutSNL />
            <WordsFromCEO />
            <SNLQuotes quote={'your necessity, our responsibility'} />
        </section>
    );
};

export default AboutUs;