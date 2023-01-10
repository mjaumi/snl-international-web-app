import React from 'react';
import SNLButton from '../SNLButton/SNLButton';
import { IoIosSend } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const ContactUsForm = () => {

    // rendering contact us form here
    return (
        <section>
            <div className='w-[90%] mx-auto py-20'>
                <div className='w-full 2xl:w-4/5 mx-auto bg-accent py-10 rounded-md shadow-snl'>
                    <div className='w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-5'>
                        <div className='flex flex-col justify-center'>
                            <div className='text-center xl:text-left'>
                                <h2 className='font-semibold text-3xl'>Curious about learning more?</h2>
                                <p className='w-full xl:w-3/5'>Just send us a mail us anytime or call us. We are ready to hear from you.</p>
                            </div>
                            <div className='mt-5 text-center xl:text-left'>
                                <div className='my-4'>
                                    <h5 className='text-lg font-medium mb-2'>Office Address:</h5>
                                    <div className='flex justify-center xl:justify-start'>
                                        <FaMapMarkerAlt className='mr-2 mt-1 hidden xl:block' />
                                        <p className='mb-1 w-[70%]'><FaMapMarkerAlt className='inline mr-2  xl:hidden' /> 3 R. K. Mission Road, Lily Pond Center,Level 22, Motijheel , Dhaka,Bangladesh 1204 Dhaka, Dhaka Division, Bangladesh</p>
                                    </div>
                                </div>
                                <div className='my-4'>
                                    <h5 className='text-lg font-medium mb-2'>Call Us Today:</h5>
                                    <p className='mb-1'><BsTelephoneFill className='inline mr-2' /> +8801788744803 (Hotline)</p>
                                    <p className='mb-1'><BsTelephoneFill className='inline mr-2' /> +8801788744803 (Queries)</p>
                                    <p><BsTelephoneFill className='inline mr-2' /> +8801788744803 (Toll Free)</p>
                                </div>
                                <div className='my-4'>
                                    <h5 className='text-lg font-medium mb-2'>Mail Us Now:</h5>
                                    <p className='mb-1'><MdEmail className='inline mr-2' /> snljute@gmail.com</p>
                                    <p><MdEmail className='inline mr-2' /> snljute@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-8 xl:mt-0'>
                            <form>
                                <div className='xl:flex'>
                                    <div className='form-control w-full xl:mr-3'>
                                        <label className='label'>
                                            <span className='label-text'>
                                                First Name
                                                <span className='font-bold text-lg'>*</span>
                                            </span>
                                        </label>
                                        <input type='text' placeholder='Your Name Here' className='input input-bordered w-full bg-transparent border-neutral border-2 font-medium text-neutral placeholder:text-neutral/50' />
                                        <label className='label'>
                                            <span className='label-text-alt text-red-600'>Alt label</span>
                                        </label>
                                    </div>
                                    <div className='form-control w-full'>
                                        <label className='label'>
                                            <span className='label-text'>
                                                Last Name
                                                <span className='font-bold text-lg'>*</span>
                                            </span>
                                        </label>
                                        <input type='text' placeholder='Your Name Here' className='input input-bordered w-full bg-transparent border-neutral border-2 font-medium text-neutral placeholder:text-neutral/50' />
                                        <label className='label'>
                                            <span className='label-text-alt text-red-600'>Alt label</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className='form-control w-full'>
                                        <label className='label'>
                                            <span className='label-text'>
                                                Email
                                                <span className='font-bold text-lg'>*</span>
                                            </span>
                                        </label>
                                        <input type='email' placeholder='Your Email Here' className='input input-bordered w-full bg-transparent border-neutral border-2 font-medium text-neutral placeholder:text-neutral/50' />
                                        <label className='label'>
                                            <span className='label-text-alt text-red-600'>Alt label</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className='form-control w-full'>
                                        <label className='label'>
                                            <span className='label-text'>
                                                Subject
                                                <span className='font-bold text-lg'>*</span>
                                            </span>
                                        </label>
                                        <input type='text' placeholder='Your Email Subject Here' className='input input-bordered w-full bg-transparent border-neutral border-2 font-medium text-neutral placeholder:text-neutral/50' />
                                        <label className='label'>
                                            <span className='label-text-alt text-red-600'>Alt label</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className='form-control'>
                                        <label className='label'>
                                            <span className='label-text'>
                                                Your Message
                                                <span className='font-bold text-lg'>*</span>
                                            </span>
                                        </label>
                                        <textarea className='textarea textarea-bordered h-40 bg-transparent border-neutral border-2 font-medium text-neutral placeholder:text-neutral/50' placeholder='Type Your Message Here...'></textarea>
                                        <label className='label'>
                                            <span className='label-text-alt text-red-600'>Your bio</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='mt-4 flex justify-center'>
                                    <SNLButton btnType='submit' icon={<IoIosSend className='z-50 h-6 w-6 mr-2' />} content='Send Mail' additionalClassNames={'w-full xl:w-fit px-12 btn-neutral text-neutral after:bg-neutral'} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsForm;