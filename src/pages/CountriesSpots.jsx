import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpotCard from '../Components/SpotCard';
import Loading from '../Components/sharedComponents/Loading';
import { AuthContext } from '../providers/AuthProvider';

const CountriesSpots = () => {
    const { setLoading, loading } = useContext(AuthContext)
    const [touristSpots, setTouristSpots] = useState([]);
    const params = useParams()
    const { country_name } = params;

    useEffect(() => {
        fetch(`http://localhost:5000/allTouristSpotsByCountry?country_name=${country_name}`)
            .then(res => res.json())
            .then(data => {
                setTouristSpots(data)
                setLoading(false)
            })
    }, [])

    if(touristSpots.length === 0){
        return <h1 className=' font-bold text-xl text-center my-10'>No data found.</h1>
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-3 md:w-5/6 mx-auto mb-10'>
            <h1 className=' font-bold text-4xl text-center my-10'>All Tourist Spots in <span className='text-[#52b788]'>{country_name}</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-4 md:gap-14 gap-6'>
                {
                    touristSpots?.map(spot => <SpotCard
                        key={spot._id}
                        spot={spot}>
                    </SpotCard>)
                }
            </div>
        </div>
    );
};

export default CountriesSpots;