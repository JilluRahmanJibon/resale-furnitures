import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { BsTrash } from 'react-icons/bs';

const ManageSellers = () => {
    const { user } = useContext(AuthContext)
    const [sellers, setSellers] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_ApiUrl}users/sellers?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        }).then(res => res.json()).then(result => {
            setSellers(result)
        })
    }, [user?.email])
    return (
        <div>
            <h1 className='text-3xl pb-5 font-bold'>Manage All Sellers </h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th >SL</th>
                            <th>Name</th>
                            <th>Verified</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((person, idx) => <tr key={person._id}>
                                <th> {idx + 1}</th>
                                <td >
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img title='User image' src={person?.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div title='User Name' className="font-bold">{person?.name}</div>
                                            <div title='User Email' className="text-sm opacity-50">{person?.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>false </td>
                                <td> {person?.role}</td>
                                <td> <BsTrash title='remove user ' className='cursor-pointer text-red-500 text-lg' /></td>

                            </tr>)
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default ManageSellers;