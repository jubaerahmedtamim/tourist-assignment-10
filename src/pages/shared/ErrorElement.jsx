import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorAnimation from '../../../public/error.json'
import Lottie from 'lottie-react';

const ErrorElement = () => {
    const error = useRouteError();
    return (
        <div className='text-center p-2 md:p-20'>
            <h1 className='text-2xl font-bold'>Something went wrong.</h1>
            <div className='flex justify-center'>
                <Lottie animationData={errorAnimation} loop={true} style={{ width: '600px', height: '600px' }} />
            </div>
            <p >Sorry, an unexpected error has occurred.</p>
            <p className='text-red-600'>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorElement;