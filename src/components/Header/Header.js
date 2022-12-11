import React from 'react';
import { Link } from 'react-router-dom';
import SNLButton from '../SNLButton/SNLButton';

const Header = () => {
    return (
        <header className='sticky top-0 h-[90px] z-[99999] -mb-[90px]'>
            <nav className='h-full flex justify-between items-center'>
                <div className='navbar w-[90%] mx-auto'>
                    <div className='navbar-start w-auto'>
                        <div className='dropdown'>
                            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
                            </label>
                            <ul tabIndex={0} className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
                                <li><Link>Item 1</Link></li>
                                <li tabIndex={0}>
                                    <Link className='justify-between'>
                                        Parent
                                        <svg className='fill-current' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /></svg>
                                    </Link>
                                    <ul className='p-2'>
                                        <li><Link>Submenu 1</Link></li>
                                        <li><Link>Submenu 2</Link></li>
                                    </ul>
                                </li>
                                <li><Link>Item 3</Link></li>
                            </ul>
                        </div>
                        <Link className='btn btn-ghost normal-case text-xl'>SNL International</Link>
                    </div>
                    <div className='navbar-end w-full'>
                        <ul className='menu menu-horizontal px-1 text-white font-medium'>
                            <li><Link>About Us</Link></li>
                            <li><Link>About Jute</Link></li>
                            <li><Link>Our Products</Link></li>
                            <li><Link>CEO Quotes</Link></li>
                            <li tabIndex={0}>
                                <Link>
                                    Parent
                                    <svg className='fill-current' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' /></svg>
                                </Link>
                                <ul className='p-2 bg-white shadow-md text-secondary'>
                                    <li><Link>Submenu 1</Link></li>
                                    <li><Link>Submenu 1</Link></li>
                                </ul>
                            </li>
                            <li><Link>Find Us</Link></li>
                        </ul>
                        <SNLButton content='contact us' padX='12' />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;