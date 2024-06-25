import React from 'react';

const CountryCard = ({country}) => {
    const {country_name, image, description}=country
    return (
        <div className="card bg-base-100 image-full lg:w-96 h-48 relative shadow-xl">
            <figure>
                <img className='w-full'
                    src={image}
                    alt="image fo country" />
            </figure>
            <div className="card-body absolute text-center">
                <h2 className="text-2xl font-medium">{country_name}</h2>
                <p>{description.slice(0, 70)}...</p>
            </div>
        </div>
    );
};

export default CountryCard;