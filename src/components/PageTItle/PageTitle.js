import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title, description, canonical }) => {
    // rendering the page head title here
    return (
        <Helmet>
            <title>{title} | SNL International</title>
            <meta name='description' content={description} />
            <link rel='canonical' href={canonical} />
        </Helmet>
    );
};

export default PageTitle;