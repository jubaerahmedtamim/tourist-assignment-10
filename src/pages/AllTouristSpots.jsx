import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SpotCard from '../Components/SpotCard';
import { FaFilter } from 'react-icons/fa';

const AllTouristSpots = () => {
    const loadedTouristSpots = useLoaderData();
    const [touristSpots, setTouristSpots] = useState(loadedTouristSpots);
    
    return (
        <div className='p-3 md:w-5/6 mx-auto mb-10'>
            <h1 className=' font-bold text-4xl text-center my-10'>Choose your tourist <span className='text-[#52b788]'>Spot</span></h1>
            <div className="dropdown mb-6 flex justify-center">
                <div tabIndex={0} role="button" className="btn m-1 text-white text-lg font-medium bg-[#52b788]">Sort <FaFilter></FaFilter> </div>
                <ul tabIndex={0} className="dropdown-content mt-16 z-[1] menu p-2 shadow bg-[#52b788] font-medium text-white rounded-box w-52">
                    <li><button onClick={() => setTouristSpots([...touristSpots].sort((a, b) => a.average_cost > b.average_cost ? -1 : 1))}>High to low</button></li>
                    <li><button onClick={() => setTouristSpots([...touristSpots].sort((a, b) => a.average_cost < b.average_cost ? -1 : 1))}>Low to high</button></li>
                </ul>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 md:gap-14 gap-6'>
                {
                    touristSpots.map(spot => <SpotCard
                        key={spot._id}
                        spot={spot}>
                    </SpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpots;