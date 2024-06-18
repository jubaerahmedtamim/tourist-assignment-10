import React, { useContext, useEffect, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { GrView } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';

const MyList = () => {
    const { user } = useContext(AuthContext)
    const { email } = user;
    const [touristSpots, setTouristSpots] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/touristspots/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTouristSpots(data)
            })
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/spot/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your data has been deleted.",
                                icon: "success"
                            });
                            const remainingSpots = touristSpots.filter(spot => spot._id !== id)
                            setTouristSpots(remainingSpots)
                        }
                    })

            }
        });
    }
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
                        touristSpots?.map((spot, index) => <tr className='hover:bg-green-50' key={spot._id}>
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