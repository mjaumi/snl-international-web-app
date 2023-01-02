import React from 'react';
import AboutJute from '../../components/AboutJute/AboutJute';
import Banner from '../../components/Banner/Banner';
import FootprintsAroundTheWorld from '../../components/FootprintsAroundTheWorld/FootprintsAroundTheWorld';
import PageTitle from '../../components/PageTItle/PageTitle';
import SNLQuotes from '../../components/SNLQuotes/SNLQuotes';

const Home = () => {
    return (
        <section>
            <PageTitle title={'Home'} />
            <Banner />
            <AboutJute />
            <FootprintsAroundTheWorld />
            <SNLQuotes quote={'Working towards an eco-friendly world'} bgImage={'bg-banner-2-img'} />
        </section>
    );
};

export default Home;