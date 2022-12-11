import React from 'react';
import Banner from '../../components/Banner/Banner';
import PageTitle from '../../components/PageTItle/PageTitle';

const Home = () => {
    return (
        <section className='flex justify-center'>
            <PageTitle title={'Home'} />
            <Banner />
        </section>
    );
};

export default Home;