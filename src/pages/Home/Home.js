import React from 'react';
import AboutJute from '../../components/AboutJute/AboutJute';
import Banner from '../../components/Banner/Banner';
import PageTitle from '../../components/PageTItle/PageTitle';

const Home = () => {
    return (
        <section>
            <PageTitle title={'Home'} />
            <Banner />
            <AboutJute />
        </section>
    );
};

export default Home;