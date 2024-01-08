import React, { useEffect } from 'react';
import PageTitle from '../../components/PageTItle/PageTitle';
import PageTopBanner from '../../components/PageTopBanner/PageTopBanner';
import SisterConcernsCards from '../../components/SisterConcernsCards/SisterConcernsCards';
import SNLQuotes from '../../components/SNLQuotes/SNLQuotes';

const SisterConcerns = () => {
    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // rendering our sister concern page here
    return (
        <section>
            <PageTitle title={'Our Sister Concerns'} description={'Sister concerns page of SNL International. Here, user can get to know about sister concerns of SNL International.'} canonical={process.env.NODE_ENV === 'development' ? 'http://localhost:3000/sister-concerns' : 'http://snlbd.com/sister-concerns'} />
            <PageTopBanner bgImage={'bg-banner-2-img'} titleText={'Our Sister Concerns'} />
            <SisterConcernsCards />
            <SNLQuotes quote={'anything you ask, we deliver'} />
        </section>
    );
};

export default SisterConcerns;