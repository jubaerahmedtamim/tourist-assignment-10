import React, { useContext, useEffect, useState } from 'react';
import SpotCard from './SpotCard';
import { AuthContext } from '../providers/AuthProvider';
import Loading from './sharedComponents/Loading';



const SpotSection = () => {
    const {setLoading, loading} = useContext(AuthContext)
    const [touristSpots, setTouristSpots] = useState();

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/allTouristSpots')
            .then(res => res.json())
            .then(data => {
                setTouristSpots(data)
                setLoading(false)
            })
    }, [])

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div className='p-3 md:w-5/6 mx-auto mb-10'>
            <h1 className=' font-bold text-4xl text-center my-10'>Choose Next Place to <span className='text-[#52b788]'>Visit</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-14 gap-6'>
                {   
                touristSpots &&
                    touristSpots?.slice(0,6).map(spot => <SpotCard
                        key={spot._id}
                        spot={spot}>
                    </SpotCard>)
                }
            </div>
        </div>
    );
};

export default SpotSection;