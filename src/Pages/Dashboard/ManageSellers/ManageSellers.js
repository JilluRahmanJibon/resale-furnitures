import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { BsTrash } from 'react-icons/bs';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import SmallLoader from '../../Shared/Loader/SmallLoader';

const ManageSellers = () => {
    const { user } = useContext(AuthContext)
    const [removeUser, setRemoveUser] = useState(null)
    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['users/sellers'],
        queryFn: () => fetch(`${process.env.REACT_APP_ApiUrl}users/sellers?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        }).then(res => res.json())
    })
    const handleRemoveUser = () => {
        fetch(`${process.env.REACT_APP_ApiUrl}users/${removeUser?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        }).then(res => res.json()).then(result => {
            if (result.acknowledged) {
                toast.success(`${removeUser?.name} deleted successfully.`, { duration: 3000 })
                refetch()

            }
        })
    }
    const closeModal = () => {
        setRemoveUser(null)
    }
    if (isLoading) {
        return <SmallLoader />
    }
    return (
        <div>
            {sellers.length > 0 ? <>   <h1 className='text-3xl pb-5 font-bold'>Manage All Sellers </h1>
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
                                    <td> <label htmlFor="confirm-modal"><BsTrash title='remove user' onClick={() => setRemoveUser(person)} className='cursor-pointer text-red-500 text-lg' /></label></td>

                                </tr>)
                            }

                        </tbody>



                    </table>
                </div>
                {removeUser && <ConfirmationModal successAction={handleRemoveUser} closeModal={closeModal} title={`Are you sure You want to delete?`} message={`If you want to delete "${removeUser.name}". It can't be recover.`} />}</> : <h1 className='sm:text-4xl text-2xl lg:pt-12 text-center lg:text-left pt-10 lg:pl-8 font-semibold text-red-500'>No Seller Found !</h1>}
        </div>
    );
};

export default ManageSellers;