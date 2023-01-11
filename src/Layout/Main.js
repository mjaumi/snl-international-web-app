import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import 'react-toastify/dist/ReactToastify.min.css';

// rendering the main component here
const Main = () => {
    return (
        <section>
            <Header />
            <Outlet />
            <Footer />
            <ToastContainer position='bottom-right' />
        </section>
    );
};

export default Main;