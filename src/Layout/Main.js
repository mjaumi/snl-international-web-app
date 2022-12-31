import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

// rendering the main component here
const Main = () => {
    return (
        <section>
            <Header />
            <Outlet />
            <Footer />
        </section>
    );
};

export default Main;