import React, { useEffect } from 'react';
import PageTitle from '../../components/PageTItle/PageTitle';
import PageTopBanner from '../../components/PageTopBanner/PageTopBanner';

const SisterConcerns = () => {
    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // rendering our sister concern page here
    return (
        <section>
            <PageTitle title={'Our Sister Concerns'} />
            <PageTopBanner bgImage={'bg-banner-2-img'} titleText={'Our Sister Concerns'} />
        </section>
    );
};

export default SisterConcerns;