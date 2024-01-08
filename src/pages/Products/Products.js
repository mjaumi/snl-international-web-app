import { BiSearchAlt } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import PageTitle from '../../components/PageTItle/PageTitle';
import ProductCard from '../../components/ProductCard/ProductCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MiscellaneousProductCard from '../../components/MiscellaneousProductCard/MiscellaneousProductCard';

const Products = () => {
    // integration of react hooks here
    const [juteProducts, setJuteProducts] = useState([]);
    const [juteProductsBackUp, setJuteProductsBackUp] = useState([]);
    const [moreJuteProducts, setMoreJuteProducts] = useState([]);
    const [moreJuteProductsBackUp, setMoreJuteProductsBackUp] = useState([]);

    const searchRef = useRef();

    // integration of react router hooks here
    const location = useLocation();

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // fetching products here
    useEffect(() => {
        if (!location.pathname.includes('diversified')) {
            fetch('juteProducts.json')
                .then(res => res.json())
                .then(data => {
                    setJuteProducts(data);
                    setJuteProductsBackUp(data);
                });
        } else {
            fetch('diversifiedJuteProducts.json')
                .then(res => res.json())
                .then(data => {
                    setJuteProducts(data);
                    setJuteProductsBackUp(data);
                });

            fetch('moreDiversifiedJuteProducts.json')
                .then(res => res.json())
                .then(data => {
                    setMoreJuteProducts(data);
                    setMoreJuteProductsBackUp(data);
                });
        }
    }, [location.pathname]);

    // handling product search here
    const handleSearchProducts = () => {
        if (searchRef.current.value !== '') {
            setJuteProducts(juteProductsBackUp.filter(p => p.productName.toLowerCase().includes(searchRef.current.value.toLowerCase())));
        } else {
            setJuteProducts(juteProductsBackUp);
        }

        if (location.pathname.includes('diversified')) {
            if (searchRef.current.value !== '') {
                setMoreJuteProducts(moreJuteProductsBackUp.filter(p => p.productName.toLowerCase().includes(searchRef.current.value.toLowerCase())));
            } else {
                setMoreJuteProducts(moreJuteProductsBackUp);
            }
        }
    }

    // rendering product page here
    return (
        <section className='mt-[90px] min-h-screen'>
            <PageTitle title={!location.pathname.includes('diversified') ? 'Jute Products' : 'Diversified Jute products'} description={'Products page of SNL International. Here, user can get to know about sister concerns of SNL International.'} canonical={process.env.NODE_ENV === 'development' ? !location.pathname.includes('diversified') ? 'http://localhost:3000/jute-products' : 'http://localhost:3000/diversified-jute-products' : !location.pathname.includes('diversified') ? 'http://www.snlbd.com/jute-products' : 'http://www.snlbd.com/diversified-jute-products'} />

            <div>
                <div className='fixed top-[90px] z-[999] w-full py-5 shadow-snl bg-base-100'>
                    <div className='w-[95%] md:w-[90%] mx-auto flex flex-col-reverse md:flex-row justify-end'>
                        <div className='w-full md:w-2/5 lg:w-1/5 flex items-center border-2 border-neutral rounded-md px-3'>
                            <BiSearchAlt className='h-5 w-5 text-neutral/50 mr-1' />
                            <input onKeyUp={() => handleSearchProducts()} ref={searchRef} type='text' name='search' placeholder='Search Here...' className='input input-ghost w-full bg-transparent font-medium text-neutral placeholder:text-neutral/50 focus:bg-base-100 focus:outline-none p-0' autoComplete='off' />
                        </div>
                    </div>
                </div>
                {
                    (juteProducts.length || (location.pathname.includes('diversified') && moreJuteProducts.length)) ?
                        <>
                            <div className={`w-[95%] md:w-[90%] mx-auto mt-[250px] ${!location.pathname.includes('diversified') ? 'mb-20' : '-mb-20'}`}>
                                <SectionTitle titleText={!location.pathname.includes('diversified') ? 'Jute Products' : 'Diversified Jute products'} />
                                <div className='md:w-full 2xl:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'>
                                    {
                                        juteProducts.map(p => <ProductCard
                                            key={p._id}
                                            product={p}
                                        />)
                                    }
                                </div>
                            </div>
                            {
                                location.pathname.includes('diversified') &&

                                <div className='w-[95%] md:w-[90%] mx-auto mt-[250px] mb-20'>
                                    <div className='mb-10'>
                                        <SectionTitle titleText={'More Diversified Jute products'} />
                                        <p className='text-center -mt-8 font-semibold text-neutral'>Are available only on demand</p>
                                    </div>
                                    <div className='md:w-full 2xl:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'>
                                        {
                                            moreJuteProducts.map(mp => <MiscellaneousProductCard
                                                key={mp._id}
                                                product={mp}
                                            />)
                                        }
                                    </div>
                                </div>
                            }
                        </>
                        :
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
                            <h1 className='font-bold text-center text-2xl md:text-3xl lg:text-7xl capitalize text-neutral/70'>no such product found!</h1>
                        </div>
                }
            </div>


        </section>
    );
};

export default Products;