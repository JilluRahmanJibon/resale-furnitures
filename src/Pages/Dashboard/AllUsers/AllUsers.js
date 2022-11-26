import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const AllUsers = () => {
    const { user } = useContext(AuthContext)
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_ApiUrl}users?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        }).then(res => res.json()).then(result => {
            // console.log(result);
        })
    }, [user?.email])
    return (
        <div>
            <h1 className='text-3xl font-bold'>All Sellers </h1>

        </div>
    );
};

export default AllUsers;