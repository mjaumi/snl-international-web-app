import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const ExporterCountryListItem = ({ countryName }) => {
    return (
        <p className='mt-2 text-center xl:text-left font-medium'>
            <FaLeaf className='inline mr-2' />
            {countryName}
        </p>
    );
};

export default ExporterCountryListItem;