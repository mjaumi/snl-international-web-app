import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import SNLButton from '../SNLButton/SNLButton';
import logo from '../../assets/images/snl-logo.png';

const StickyHeader = ({ isHeaderInViewport }) => {

    // rendering sticky header component here
    return (
        <header className={`w-full bg-accent -mb-[90px] ${isHeaderInViewport ? 'opacity-0 absolute -top-[90px]' : 'sticky top-0'} h-[90px] z-[99999] shadow-snl duration-300`}>
            <nav className='h-full flex justify-between items-center'>
                <div className='navbar w-[90%] mx-auto'>
                    <div className='navbar-start w-auto'>
                        <div className='dropdown'>
                            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='#FFFFFF' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
                            </label>
                            <div>
                                <ul tabIndex={0} className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-md w-52'>
                                    <li><Link to={'/about-us'}>About Us</Link></li>
                                    <li tabIndex={0} className='relative group/productBtn'>
                                        <div>
                                            <p>Our Products</p>
                                            <div className='group-hover/productBtn:rotate-180 duration-300'>
                                                <svg className='fill-current' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' /></svg>
                                            </div>
                                        </div>
                                        <div className='absolute top-full left-1/4 min-w-[250px] p-2 bg-base-100 shadow-md text-primary scale-y-0 group-hover/productBtn:scale-y-100 duration-300 origin-top rounded-md z-[9999999]'>
                                            <ul className='w-full'>
                                                <li className='block w-full'><Link to={'/jute-products'}>Jute Products</Link></li>
                                                <li className='block w-full'><Link to={'/diversified-jute-products'}>Diversified Jute Products</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to={'/sister-concerns'}>Our Sister Concerns</Link></li>
                                    <li><Link to={'/blogs'}>Blogs</Link></li>
                                    <li>
                                        <Link to={'/contact-us'}>
                                            <SNLButton icon={<BiSupport className='z-50 w-4 h-4 2xl:h-6 2xl:w-6 mr-2' />} content='Contact us' additionalClassNames={'px-6 btn-neutral text-neutral after:bg-neutral text-sm 2xl:text-lg'} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Link to={'/'} className='btn btn-ghost normal-case text-xl'>
                            <img className='h-full w-full' src={logo} title='Our Brand Logo' height={518} width={1309} loading='lazy' alt='Our Brand Logo' />
                        </Link>
                    </div>
                    <div className='navbar-end hidden lg:w-full lg:flex justify-end'>
                        <ul className='menu menu-horizontal px-1 text-neutral font-medium'>
                            <li><Link to={'/about-us'}>About Us</Link></li>
                            <li tabIndex={0} className='relative group/productBtn'>
                                <Link>
                                    Our Products
                                    <div className='group-hover/productBtn:rotate-180 duration-300'>
                                        <svg className='fill-current' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' /></svg>
                                    </div>
                                </Link>
                                <div className='absolute top-full left-1/4 min-w-[250px] p-2 bg-base-100 shadow-md text-primary scale-y-0 group-hover/productBtn:scale-y-100 duration-300 origin-top rounded-md'>
                                    <ul className='w-full'>
                                        <li className='block w-full'><Link to={'/jute-products'}>Jute Products</Link></li>
                                        <li className='block w-full'><Link to={'/diversified-jute-products'}>Diversified Jute Products</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to={'/sister-concerns'}>Our Sister Concerns</Link></li>
                            <li><Link to={'/blogs'}>Blogs</Link></li>
                        </ul>
                        <Link to={'/contact-us'}>
                            <SNLButton icon={<BiSupport className='z-50 h-6 w-6 mr-2' />} content='Contact us' additionalClassNames={'px-6 btn-neutral text-neutral after:bg-neutral text-sm md:text-lg'} />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default StickyHeader;