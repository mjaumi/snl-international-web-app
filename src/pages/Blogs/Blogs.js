import React, { useEffect } from 'react';
import PageTitle from '../../components/PageTItle/PageTitle';
import PageTopBanner from '../../components/PageTopBanner/PageTopBanner';

const Blogs = () => {
    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // rendering blogs page here
    return (
        <section>
            <PageTitle title={'Blogs'} />
            <PageTopBanner bgImage={'bg-banner-4-img'} titleText={'Our Blogs'} />
        </section>
    );
};

export default Blogs;