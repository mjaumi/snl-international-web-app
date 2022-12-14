import React from 'react';
import AboutUs from '../../components/AboutUs/AboutUs';
import Banner from '../../components/Banner/Banner';
import PageTitle from '../../components/PageTItle/PageTitle';

const Home = () => {
    return (
        <section>
            <PageTitle title={'Home'} />
            <Banner />
            <AboutUs />
        </section>
    );
};

export default Home;