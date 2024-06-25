import React, { useContext } from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';

const Root = () => {
    return (
        <div>

            <Navbar></Navbar>

            <div className='min-h-[calc(100vh-294px)] '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;