import Lottie from 'lottie-react';
import React from 'react';
import loadingAnimation from '../../../public/loading.json';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-294px)]'>
            <Lottie animationData={loadingAnimation} loop={true}></Lottie>
        </div>
    );
};

export default Loading;