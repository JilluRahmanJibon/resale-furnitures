import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const ManageUsers = () => {
    const { user } = useContext(AuthContext)
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_ApiUrl}users?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        }).then(res => res.json()).then(result => {
            setUsers(result)
        })
    }, [user?.email])
    return (
        <div>
            <h1 className='text-3xl font-bold pb-5'>Manage Users </h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th >SL</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((person, idx) => <tr key={person._id}>
                                <th> {idx + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={person?.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{person?.name}</div>
                                            <div className="text-sm opacity-50">{person?.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td> {person?.role}</td>
                                <td> delete</td>

                            </tr>)
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default ManageUsers;