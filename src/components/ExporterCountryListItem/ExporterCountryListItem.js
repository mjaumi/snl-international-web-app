import React from 'react';
import { FaShip } from 'react-icons/fa';

const ExporterCountryListItem = ({ countryName }) => {
    return (
        <p className='mt-2 text-center xl:text-left'>
            <FaShip className='inline mr-2' />
            {countryName}
        </p>
    );
};

export default ExporterCountryListItem;