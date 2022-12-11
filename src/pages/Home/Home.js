import React from 'react';
import PageTitle from '../../components/PageTItle/PageTitle';

const Home = () => {
    return (
        <section className='flex justify-center'>
            <PageTitle title={'Home'} />
            <p>this is home</p>
            <button className='btn btn-secondary text-white rounded-none hover:bg-white capitalize border-4 text-lg font-normal hover:text-secondary'>button</button>
        </section>
    );
};

export default Home;