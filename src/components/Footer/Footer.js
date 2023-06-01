import React from 'react';
import { BsTelephoneFill, BsClockFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import logo from '../../assets/images/snl-logo.png';
import facebookIcon from '../../assets/images/facebook.svg';
import instagramIcon from '../../assets/images/instagram.svg';
import whatsappIcon from '../../assets/images/whatsapp.svg';

const Footer = () => {

    // rendering footer component here
    return (
        <footer className='bg-accent'>
            <div className='w=[95%] xl:w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-4 py-10'>
                <div>
                    <div className='flex justify-center xl:justify-start w-full xl:h-[30%] xl:w-[60%]'>
                        <img className='xl:h-full xl:w-full w-2/3 md:w-2/5 lg:w-1/5' src={logo} alt='logo' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='mt-5 text-sm text-center xl:text-left px-5 md:w-2/3 lg:w-full xl:px-0 xl:pr-10'>This is a trademark authorized website of SNL International, Bangladesh. Any kind of copyright infringement will cause taking legal actions against the person or group of persons.</p>
                    </div>
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
                            <h5 className='text-lg font-medium mb-2'>Call us today:</h5>
                            <p className='mb-1'><BsTelephoneFill className='inline mr-2' /> (+8802) 47110171</p>
                            <p className='mb-1'><BsTelephoneFill className='inline mr-2' /> (+8802) 47120573</p>
                        </div>
                        <div className='my-4 ml-0 xl:ml-5'>
                            <h5 className='text-lg font-medium mb-2'>Mail us now:</h5>
                            <p className='mb-1 underline'>
                                <MdEmail className='inline mr-2 h-5 w-5' />
                                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=snljute@gmail.com' target='_blank' rel='noreferrer'>
                                    snljute@gmail.com
                                </a>
                            </p>
                            <p className='mb-1 underline'>
                                <MdEmail className='inline mr-2 h-5 w-5' />
                                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=jutetex@gmail.com' target='_blank' rel='noreferrer'>
                                    jutetex@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-center xl:text-left'>
                        <h5 className='text-xl font-semibold'>Find us on Google Maps:</h5>
                        <div className='my-4 ml-0 xl:ml-5 border-primary h-[200px] w-full'>
                            <iframe title='google map location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.7248450482984!2d90.4189191760008!3d23.721518089883315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b851fa34fe41%3A0xfb72a0638ff9ca2f!2sLilypond%20Center!5e0!3m2!1sen!2sbd!4v1683131219839!5m2!1sen!2sbd' width='300' height='200' style={{ border: 0 }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
                        </div>
                        <h5 className='text-xl font-semibold'>Follow us on Social Media:</h5>
                        <div className='my-4 ml-0 xl:ml-5'>
                            <div className='flex justify-center xl:justify-start'>
                                <a href='https://www.facebook.com/profile.php?id=100087734663658' className='h-10 w-10 flex items-center justify-center mr-4 hover:scale-125 duration-300' target='_blank' rel='noreferrer'>
                                    <img src={facebookIcon} alt='facebook' />
                                </a>
                                <a href='https://instagram.com/snl_bangladesh?igshid=YmMyMTA2M2Y=' className='h-10 w-10 flex items-center justify-center mr-4 hover:scale-125 duration-300' target='_blank' rel='noreferrer'>
                                    <img src={instagramIcon} alt='instagram' />
                                </a>
                                <a href='https://Wa.me/8801713488672' className='h-10 w-10 flex items-center justify-center hover:scale-125 duration-300' target='_blank' rel='noreferrer'>
                                    <img src={whatsappIcon} alt='whats app' />
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