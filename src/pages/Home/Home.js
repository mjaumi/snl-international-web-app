import React from 'react';
import AboutJute from '../../components/AboutJute/AboutJute';
import Banner from '../../components/Banner/Banner';
import FootprintsAroundTheWorld from '../../components/FootprintsAroundTheWorld/FootprintsAroundTheWorld';
import PageTitle from '../../components/PageTItle/PageTitle';

const Home = () => {
    return (
        <section>
            <PageTitle title={'Home'} />
            <Banner />
            <AboutJute />
            <FootprintsAroundTheWorld />
        </section>
    );
};

export default Home;