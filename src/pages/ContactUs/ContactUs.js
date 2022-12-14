import React, { useEffect } from 'react';
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm';
import PageTitle from '../../components/PageTItle/PageTitle';
import PageTopBanner from '../../components/PageTopBanner/PageTopBanner';
import SNLQuotes from '../../components/SNLQuotes/SNLQuotes';

const ContactUs = () => {
    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // rendering contact us page here
    return (
        <section>
            <PageTitle title={'Contact Us'} />
            <PageTopBanner bgImage={'bg-banner-2-img'} titleText={'Get In Touch With Us'} />
            <ContactUsForm />
            <SNLQuotes subQuote={'We believe in,'} quote={'Leaving a better world for future'} />
        </section>
    );
};

export default ContactUs;