import React, { useEffect } from 'react';
import AboutJute from '../../components/AboutJute/AboutJute';
import Banner from '../../components/Banner/Banner';
import FootprintsAroundTheWorld from '../../components/FootprintsAroundTheWorld/FootprintsAroundTheWorld';
import PageTitle from '../../components/PageTItle/PageTitle';
import SNLQuotes from '../../components/SNLQuotes/SNLQuotes';

const Home = () => {
    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // rendering the home page here
    return (
        <section className='overflow-x-hidden'>
            <PageTitle title={'Home'} description={'Home page of SNL International. Here, user can find all the information & short briefing about SNL International.'} canonical={process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://www.snlbd.com'} />
            <Banner />
            <AboutJute />
            <FootprintsAroundTheWorld />
            <SNLQuotes quote={'Working towards an eco-friendly world'} />
        </section>
    );
};

export default Home;