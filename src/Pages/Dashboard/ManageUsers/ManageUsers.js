import React, { useContext, useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import SmallLoader from '../../Shared/Loader/SmallLoader';
import useTitle from '../../../Hooks/useTitle';

const ManageUsers = () => {
    const { user, setLoading } = useContext(AuthContext)
    useTitle('Manage All Users')
    const [removeUser, setRemoveUser] = useState(null)
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: () => fetch(`${process.env.REACT_APP_ApiUrl}users?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            },


        }).then(res => res.json())
    })

    const handleRemoveUser = () => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_ApiUrl}users/${removeUser?._id}?email=${user?.email}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            },
        }).then(res => res.json()).then(result => {
            if (result.acknowledged) {
                setLoading(false)
                toast.success(`${removeUser?.name} deleted successfully.`, { duration: 3000 })
                refetch()
            }
            else {
                toast.error(`${result.message}.`, { duration: 3000 })
            }
        })
    }
    const closeModal = () => {
        setRemoveUser(null)
    }

    if (isLoading) {
        return <SmallLoader />
    }
    const handleMakeAdmin = () => {
        toast.error('Sorry this feature are not available at the moment, it will be add very soon..thanks', { duration: 3000 })
    }
    return (
        <div>
            <h1 className='text-3xl font-bold pb-5'>Manage All Users </h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th >SL</th>
                            <th>Name</th>
                            <th>MakeAdmin</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((person, idx) => <tr key={person._id}>
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
                                <td> {person?.role === "Admin" ? <MdOutlineAdminPanelSettings title='Admin' className='sm:text-2xl text-xl  ' /> : <button onClick={handleMakeAdmin} className='btn btn-sm border-none '>Admin</button>}</td>
                                <td> {person?.role}</td>
                                <td> <label htmlFor="confirm-modal"><BsTrash title='remove user' onClick={() => setRemoveUser(person)} className='cursor-pointer text-red-500 text-lg' /></label></td>

                            </tr>)
                        }

                    </tbody>



                </table>
            </div>
            {removeUser && <ConfirmationModal successAction={handleRemoveUser} closeModal={closeModal} title={`Are you sure You want to delete?`} message={`If you want to delete "${removeUser.name}". It can't be recover.`} />}
        </div>
    );
};

export default ManageUsers;