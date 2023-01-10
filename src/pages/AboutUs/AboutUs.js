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
            <PageTitle title={'About Us'} />
            <PageTopBanner bgImage={'bg-banner-3-img'} titleText={'About Us'} />
            <AboutSNL />
            <WordsFromCEO />
            <SNLQuotes quote={'your necessity, our responsibility'} />
        </section>
    );
};

export default AboutUs;