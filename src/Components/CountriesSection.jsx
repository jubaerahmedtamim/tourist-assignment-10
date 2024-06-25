import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import { Link } from 'react-router-dom';

const CountriesSection = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/countries')
        .then(res => res.json())
        .then(data => {
            setCountries(data)
        })

    },[])
    return (
        <div className='p-3 md:w-5/6 mx-auto mb-10'>
            <h1 className=' font-bold text-4xl text-center my-10'>Top <span className='text-[#52b788]'>Destinations.</span></h1>
            {/* country card */}
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-14 gap-6'>
                {
                    countries?.map((country, index) => <Link to={`/country-spots/${country?.country_name}`} key={index}><CountryCard country={country}></CountryCard></Link>)
                }
            </div>
        </div>
    );
};

export default CountriesSection;