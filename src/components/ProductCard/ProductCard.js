import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/images/image_67200001-min.JPG';
import SNLButton from '../SNLButton/SNLButton';

const ProductCard = ({ product }) => {
    //integration of react router hooks here
    const navigate = useNavigate();

    const handleNavigateToContactPage = () => {

        navigate('/contact-us');
    }

    // rendering product card here
    return (
        <div className='grid grid-rows-snl-product-card border-2 border-primary rounded-md p-3 lg:p-5 shadow-snl bg-accent'>
            <div className='rounded-md overflow-hidden'>
                <img src={product.productImageUrl ? product.productImageUrl : image} alt={product.productName} />
            </div>
            <div className='flex items-center justify-center my-3'>
                <h3 className='font-bold text-xl text-center text-primary capitalize'>{product.productName}</h3>
            </div>
            <div className='mb-3'>
                <p className='text-center text-sm'>{product.productDescription}</p>
            </div>
            <div>
                <SNLButton onClick={() => handleNavigateToContactPage()} content={'Contact us to learn more'} icon={<BiSupport className='z-50 w-4 h-4 2xl:h-6 2xl:w-6 mr-2' />} additionalClassNames={'w-full btn-neutral text-neutral after:bg-neutral text-sm 2xl:text-lg'} />
            </div>
        </div>
    );
};

export default ProductCard;