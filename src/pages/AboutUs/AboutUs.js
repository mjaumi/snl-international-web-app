import React from 'react';
import AboutSNL from '../../components/AboutSNL/AboutSNL';
import PageTitle from '../../components/PageTItle/PageTitle';
import PageTopBanner from '../../components/PageTopBanner/PageTopBanner';
import SNLQuotes from '../../components/SNLQuotes/SNLQuotes';
import WordsFromCEO from '../../components/WordsFromCEO/WordsFromCEO';

const AboutUs = () => {

    // rendering about us component here
    return (
        <section>
            <PageTitle title={'About Us'} />
            <PageTopBanner bgImage={'bg-banner-3-img'} titleText={'About Us'} />
            <AboutSNL />
            <WordsFromCEO />
            <SNLQuotes quote={'your necessity, our responsibility'} bgImage={'bg-banner-3-img'} />
        </section>
    );
};

export default AboutUs;