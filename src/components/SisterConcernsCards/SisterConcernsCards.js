import React, { useEffect, useState } from 'react';
import CompanyCard from '../CompanyCard/CompanyCard';

const SisterConcernsCards = () => {
    // integration of react hooks here
    const [companies, setCompanies] = useState([]);

    // fetching the companies data here
    useEffect(() => {
        fetch('companies.json')
            .then(res => res.json())
            .then(data => setCompanies(data));
    }, []);

    return (
        <section className='w-[95%] md:w-[90%] mx-auto py-20'>
            {
                companies.map(c => <CompanyCard
                    key={c._id}
                    company={c}
                />)
            }
        </section>
    );
};

export default SisterConcernsCards;