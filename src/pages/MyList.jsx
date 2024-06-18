import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { GrView } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';

const MyList = () => {
    const loadedTouristSpots = useLoaderData();
    return (
        <div className="overflow-x-auto w-5/6 mx-auto mb-10">
            <h1 className=' font-bold text-4xl text-center my-10'>My <span className='text-[#52b788]'>Tourist Spot</span> List</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Added By</th>
                        <th>Spot Name</th>
                        <th>Location</th>
                        <th>Country</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loadedTouristSpots.map((spot, index) => <tr className='hover:bg-green-50' key={spot._id}>
                            <th>{index + 1}</th>
                            <td>{spot?.userName}</td>
                            <td>{spot?.spot_name}</td>
                            <td>{spot?.location}</td>
                            <td>{spot?.country_name}</td>
                            <td className='space-x-2'>
                                <Link to={`/spot/${spot?._id}`}>
                                    <button className="btn btn-circle btn-outline ">
                                        <CiEdit />
                                    </button>
                                </Link>
                                <Link to={`/spot-details/${spot?._id}`}>
                                    <button className="btn btn-circle btn-outline">
                                        <GrView />
                                    </button>
                                </Link>
                                <button onClick={() => handleDelete(spot?._id)} className="btn btn-circle btn-outline">
                                    <MdDeleteOutline />
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyList;