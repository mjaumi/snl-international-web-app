import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Products = () => {
    // integration of react hooks here
    const [juteProducts, setJuteProducts] = useState([]);
    const [moreJuteProducts, setMoreJuteProducts] = useState([]);

    // integration of react router hooks here
    const location = useLocation();

    // rendering product page here
    return (
        <section className='h-screen'>
            {
                !location.pathname.includes('diversified') && 'this is jute products'
            }
            {
                location.pathname.includes('diversified') && 'this is diversified jute products'
            }
        </section>
    );
};

export default Products;