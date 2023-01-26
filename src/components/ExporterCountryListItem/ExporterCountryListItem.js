import React from 'react';
import { MdLocationPin } from 'react-icons/md';

const ExporterCountryListItem = ({ countryName }) => {
    return (
        <p className='text-base mt-2 text-center xl:text-left font-medium'>
            <MdLocationPin className='h-5 w-5 inline mr-2' />
            {countryName}
        </p>
    );
};

export default ExporterCountryListItem;