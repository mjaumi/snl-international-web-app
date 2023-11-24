import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title }) => {
    return (
        <Helmet>
            <title>{title} | SNL International</title>
            <meta name='description' content='Home page of SNL International' />
            <link rel='canonical' href='/' />
        </Helmet>
    );
};

export default PageTitle;