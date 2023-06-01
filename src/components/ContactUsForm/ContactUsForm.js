import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md';
import { IoIosSend } from 'react-icons/io';
import SNLButton from '../SNLButton/SNLButton';
import { FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

const ContactUsForm = () => {
    // integration of react hooks here
    const [sendingMail, setSendingMail] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    // handling form submission here
    const submitForm = e => {
        e.preventDefault();

        const data = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }

        setFirstNameError(data.firstName === '' ? true : false);
        setLastNameError(data.lastName === '' ? true : false);
        setEmailError(data.email === '' ? true : false);
        setSubjectError(data.subject === '' ? true : false);
        setMessageError(data.message === '' ? true : false);

        if (Object.values(data).filter(val => val === '').length === 0) {

            setSendingMail(true);

            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
                .then(res => {
                    toast.success('Got Your Email!! We Will Contact With You Soon.');
                    e.target.reset();
                    setSendingMail(false);
                })
                .catch(err => {
                    toast.error('Something Went Wrong!! Please, Try Again Later');
                    e.target.reset();
                    setSendingMail(false);
                });
        }
    }

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
                                        <p className='mb-1 w-[70%]'><FaMapMarkerAlt className='inline mr-2  xl:hidden' /> 3 R. K. Mission Road
                                            <br />
                                            Lily Pond Center, Level 22
                                            <br />
                                            Motijheel, Dhaka-1203, Bangladesh.
                                        </p>
                                    </div>
                                </div>
                                <div className='my-4'>
                                    <h5 className='text-lg font-medium mb-2'>Call us today:</h5>
                                    <p className='mb-1'><BsTelephoneFill className='inline mr-2' /> (+8802) 47110171</p>
                                    <p className='mb-1'><BsTelephoneFill className='inline mr-2' /> (+8802) 47120573</p>
                                </div>
                                <div className='my-4'>
                                    <h5 className='text-lg font-medium mb-2'>Mail us now:</h5>
                                    <p className='mb-1 underline'>
                                        <MdEmail className='inline mr-2 h-5 w-5' />
                                        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=snljute@gmail.com' target='_blank' rel='noreferrer'>
                                            snljute@gmail.com
                                        </a>
                                    </p>
                                    <p className='mb-1 underline'>
                                        <MdEmail className='inline mr-2  h-5 w-5' />
                                        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=jutetex@gmail.com' target='_blank' rel='noreferrer'>
                                            jutetex@gmail.com
                                        </a>
                                    </p>
                                </div>
                                <div className='my-4'>
                                    <h5 className='text-lg font-medium mb-2'>Attention:</h5>
                                    <p className='mb-1'>
                                        <FaUser className='inline mr-2' />
                                        Mr. Shohrab Hossain
                                    </p>
                                    <p className='mb-1'>
                                        <BsTelephoneFill className='inline mr-2' />
                                        (+880)1711564900
                                    </p>
                                    <p className='mb-1 underline'>
                                        <MdEmail className='inline mr-2 h-5 w-5' />
                                        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=shohrabhossaindac@gmail.com' target='_blank' rel='noreferrer'>
                                            shohrabhossaindac@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-8 xl:mt-0'>
                            <form onSubmit={submitForm}>
                                <div className='xl:flex'>
                                    <div className='form-control w-full xl:mr-3'>
                                        <label className='label'>
                                            <span className='label-text'>
                                                First Name
                                                <span className='font-bold text-lg'>*</span>
                                            </span>
                                        </label>
                                        <input type='text' name='firstName' placeholder='Your First Name Here' className='input input-bordered w-full bg-transparent border-neutral border-2 font-medium text-neutral placeholder:text-neutral/50' autoComplete='off' />
                                        <label className='label'>
                                            <span className={`${firstNameError ? 'visible' : 'invisible'} label-text-alt text-red-600`}>First name is required</span>
                                        </label>
                                    </div>
                                    <div className='form-control w-full'>
                                        <label className='label'>
                                            <span className='label-text'>
                                                Last Name
                                                <span className='font-bold text-lg'>*</span>
                                            </span>
                                        </label>
                                        <input type='text' name='lastName' placeholder='Your Last Name Here' className='input input-bordered w-full bg-transparent border-neutral border-2 font-medium text-neutral placeholder:text-neutral/50' autoComplete='off' />
                                        <label className='label'>
                                            <span className={`${lastNameError ? 'visible' : 'invisible'}  label-text-alt text-red-600`}>Last name is required</span>
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
                                        <input type='email' name='email' placeholder='Your Email Here' className='input input-bordered w-full bg-transparent border-neutral border-2 font-medium text-neutral placeholder:text-neutral/50' autoComplete='off' />
                                        <label className='label'>
                                            <span className={`${emailError ? 'visible' : 'invisible'}  label-text-alt text-red-600`}>Email is required</span>
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
                                        <input type='text' name='subject' placeholder='Your Email Subject Here' className='input input-bordered w-full bg-transparent border-neutral border-2 font-medium text-neutral placeholder:text-neutral/50' autoComplete='off' />
                                        <label className='label'>
                                            <span className={`${subjectError ? 'visible' : 'invisible'}  label-text-alt text-red-600`}>Subject is required</span>
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
                                        <textarea name='message' className='textarea textarea-bordered h-40 bg-transparent border-neutral border-2 font-medium text-neutral placeholder:text-neutral/50' placeholder='Type Your Message Here...' autoComplete='off'></textarea>
                                        <label className='label'>
                                            <span className={`${messageError ? 'visible' : 'invisible'}  label-text-alt text-red-600`}>Message is required</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='mt-4 flex justify-center'>
                                    <SNLButton isLoading={sendingMail} btnType='submit' icon={<IoIosSend className='z-50 h-6 w-6 mr-2' />} content='Send Mail' additionalClassNames={'w-full xl:w-fit px-12 btn-neutral text-neutral after:bg-neutral'} />
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