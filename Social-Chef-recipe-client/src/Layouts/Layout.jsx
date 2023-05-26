import React from 'react';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/shared/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />

        </div>
    );
};

export default Layout;