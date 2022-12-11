import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

// rendering the main component here
const Main = () => {
    return (
        <section>
            <Header />
            <Outlet />
        </section>
    );
};

export default Main;