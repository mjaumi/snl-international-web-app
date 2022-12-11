import React from 'react';
import PageTitle from '../../components/PageTItle/PageTitle';
import SNLButton from '../../components/SNLButton/SNLButton';

const Home = () => {
    return (
        <section className='flex justify-center'>
            <PageTitle title={'Home'} />
            <p className='px-12'>this is home</p>
            <SNLButton content='Contact Us' padX='20' />
        </section>
    );
};

export default Home;