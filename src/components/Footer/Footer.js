import React from 'react';
import { BsTelephoneFill, BsClockFill, BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt, FaFacebookF } from 'react-icons/fa';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { SiWhatsapp } from 'react-icons/si';

const Footer = () => {

    // rendering footer component here
    return (
        <footer className='bg-accent'>
            <div className='w=[95%] xl:w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-4 py-10'>
                <div className='flex items-center justify-center xl:justify-start'>
                    <h3 className='text-4xl font-semibold'>SNL International</h3>
                </div>
                <div className='flex justify-center mt-5 xl:mt-0'>
                    <div className='text-center xl:text-left'>
                        <h5 className='text-xl font-semibold'>Office Information:</h5>
                        <div className='my-4 ml-0 xl:ml-5'>
                            <h5 className='text-lg font-medium mb-2'>Office Address:</h5>
                            <div className='flex justify-center xl:justify-start'>
                                <FaMapMarkerAlt className='mr-2 mt-1 hidden xl:block' />
                                <p className='mb-1 w-[70%]'><FaMapMarkerAlt className='inline mr-2  xl:hidden' /> 3 R. K. Mission Road
                                    <br />
                                    Lily Pond Center, Level 22
                                    <br />
                                    Motijheel, Dhaka-1203, Bangladesh.
                                </p>
                            </div>
                        </div>
                        <div className='my-4 ml-0 xl:ml-5'>
                            <h5 className='text-lg font-medium mb-2'>Working Hours:</h5>
                            <div className='flex justify-center xl:justify-start'>
                                <BsClockFill className='mr-2 mt-1 hidden xl:block' />
                                <p className='mb-1 w-[70%]'><BsClockFill className='inline mr-2  xl:hidden' />  Saturday - Thursday: 10:00 AM (BDT) - 05:00 PM (BDT)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-center xl:text-left'>
                        <h5 className='text-xl font-semibold'>Contact Information:</h5>
                        <div className='my-4 ml-0 xl:ml-5'>
                            <h5 className='text-lg font-medium mb-2'>Call Us Today:</h5>
                            <p className='mb-1'><BsTelephoneFill className='inline mr-2' /> (+8802)47110171 (Hotline)</p>
                            <p className='mb-1'><BsTelephoneFill className='inline mr-2' /> (+8802)47120573 (Queries)</p>
                            <p><BsTelephoneFill className='inline mr-2' /> +8801788744803 (Toll Free)</p>
                        </div>
                        <div className='my-4 ml-0 xl:ml-5'>
                            <h5 className='text-lg font-medium mb-2'>Mail Us Now:</h5>
                            <p className='mb-1 underline'>
                                <MdEmail className='inline mr-2' />
                                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=snljute@gmail.com' target='_blank' rel='noreferrer'>
                                    snljute@gmail.com
                                </a>
                            </p>
                            <p className='mb-1 underline'>
                                <MdEmail className='inline mr-2' />
                                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=snljute@gmail.com' target='_blank' rel='noreferrer'>
                                    jutetex@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div>
                        <h5 className='text-xl font-semibold'>Find Us On Google Maps:</h5>
                        <div className='my-4 ml-0 xl:ml-5 border-2 border-primary h-32 w-full'>
                            <span>Google maps instance here</span>
                        </div>
                        <h5 className='text-xl font-semibold'>Follow Us On Social Media:</h5>
                        <div className='my-4 ml-0 xl:ml-5'>
                            <div className='flex justify-center xl:justify-start'>
                                <a href='https://www.facebook.com/profile.php?id=100087734663658' className='bg-neutral h-10 w-10 flex items-center justify-center rounded-md mr-4 hover:scale-125 duration-300' target='_blank' rel='noreferrer'>
                                    <FaFacebookF className='text-accent h-5 w-5' />
                                </a>
                                <a href='https://instagram.com/snl_bangladesh?igshid=YmMyMTA2M2Y=' className='bg-neutral h-10 w-10 flex items-center justify-center rounded-md mr-4 hover:scale-125 duration-300' target='_blank' rel='noreferrer'>
                                    <BsInstagram className='text-accent h-5 w-5' />
                                </a>
                                <a href='https://instagram.com/snl_bangladesh?igshid=YmMyMTA2M2Y=' className='bg-neutral h-10 w-10 flex items-center justify-center rounded-md hover:scale-125 duration-300' target='_blank' rel='noreferrer'>
                                    <SiWhatsapp className='text-accent h-5 w-5' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-primary/70'></div>
            <div className='w-[95%] xl:w-[90%] mx-auto py-2'>
                <p className='text-sm font-medium text-center xl:text-left'><AiOutlineCopyrightCircle className='inline mr-1' />SNL International, 2022.</p>
            </div>
        </footer>
    );
};

export default Footer;