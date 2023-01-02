import React from 'react';
import PageTitle from '../../components/PageTItle/PageTitle';
import PageTopBanner from '../../components/PageTopBanner/PageTopBanner';

const AboutUs = () => {

    // rendering about us component here
    return (
        <section>
            <PageTitle title={'About Us'} />
            <PageTopBanner bgImage={'bg-banner-3-img'} titleText={'About Us'} />
        </section>
    );
};

export default AboutUs;