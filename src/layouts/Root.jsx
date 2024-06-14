import React, { useContext } from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import { AuthContext } from '../providers/AuthProvider';

const Root = () => {
    const {user} = useContext(AuthContext);
    if(!user){
        return <h1 className='text-9xl text-center'>Loading......</h1>
    }
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;