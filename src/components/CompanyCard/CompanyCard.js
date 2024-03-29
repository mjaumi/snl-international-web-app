import React from 'react';
import { TiPointOfInterest } from 'react-icons/ti';

const CompanyCard = ({ company }) => {
    // destructuring the company data here
    const { companyName, companyImageUrl, companyDescription, companyMembership } = company;

    // rendering company card here
    return (
        <div className='w-full xl:w-[90%] mx-auto my-20 p-5'>
            <div className='flex flex-col xl:flex-row'>
                <div className='mx-auto xl:mx-0 w-[300px] rounded-md overflow-hidden'>
                    <img className='w-full' src={companyImageUrl} alt={companyName} title={companyName} height={4032} width={3024} loading='lazy' />
                </div>
                <div className='xl:ml-10 w-full xl:w-[80%]'>
                    <div className='h-fit mt-8 xl:mt-0'>
                        <div>
                            <h2 className='mx-auto xl:mx-0 text-center xl:text-left md:w-fit border-b-2 border-primary text-2xl xl:text-4xl font-bold text-primary'>{companyName}</h2>
                        </div>
                        <div className='mt-4 text-center xl:text-left'>
                            <p>{companyDescription}</p>
                        </div>
                    </div>
                    <div className='mt-4 h-fit'>
                        <h3 className='font-semibold text-primary text-center xl:text-left'>Member of:</h3>
                        <div className='my-2'>
                            {
                                companyMembership.map((m, index) => <div key={index} className='font-medium mb-1'>
                                    <p className='text-center xl:text-left'>
                                        <TiPointOfInterest className='inline mr-2 h-5 w-5' />
                                        {m}
                                    </p>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;