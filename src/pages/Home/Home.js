import React from 'react';
import AboutJute from '../../components/AboutJute/AboutJute';
import Banner from '../../components/Banner/Banner';
import FootprintsAroundTheWorld from '../../components/FootprintsAroundTheWorld/FootprintsAroundTheWorld';
import PageTitle from '../../components/PageTItle/PageTitle';
import SNLQuotes from '../../components/SNLQuotes/SNLQuotes';
import bgImg from '../../assets/images/banner-2.JPG';

const Home = () => {
    return (
        <section>
            <PageTitle title={'Home'} />
            <Banner />
            <AboutJute />
            <FootprintsAroundTheWorld />
            <SNLQuotes quote={'Working towards an eco-friendly world'} image={bgImg} />
        </section>
    );
};

export default Home;