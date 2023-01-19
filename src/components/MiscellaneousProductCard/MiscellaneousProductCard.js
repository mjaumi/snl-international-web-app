import React from 'react';

const MiscellaneousProductCard = ({ product }) => {
    return (
        <div className='grid grid-rows-snl-miscellaneous-product-card border-2 border-primary rounded-md p-3 lg:p-5 shadow-snl bg-accent'>
            <div className='flex items-center justify-center'>
                <h3 className='font-bold text-xl text-center text-primary capitalize'>{product.productName}</h3>
            </div>
        </div>
    );
};

export default MiscellaneousProductCard;