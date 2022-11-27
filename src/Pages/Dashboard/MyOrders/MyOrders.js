import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import SmallLoader from '../../Shared/Loader/SmallLoader';
import { BsTrash } from 'react-icons/bs'
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
const MyOrders = () => {
    const { user } = useContext(AuthContext)
    useTitle("My Orders ")
    const [removeCardProduct, setRemoveCardProduct] = useState(null)
    const { data: orders, isLoading, refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: () => fetch(`${process.env.REACT_APP_ApiUrl}orders/${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            },


        }).then(res => res.json())
    })

    const handleRemoveCardProduct = () => {
        fetch(`${process.env.REACT_APP_ApiUrl}orders/${removeCardProduct?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            },
        }).then(res => res.json()).then(result => {
            if (result.acknowledged) {
                toast.success(`${removeCardProduct?.productName} deleted successfully.`, { duration: 3000 })
                refetch()
            }
            else {
                toast.error(`${result.message}.`, { duration: 3000 })
            }
        })
    }
    const closeModal = () => {
        setRemoveCardProduct(null)
    }

    if (isLoading) {
        return <SmallLoader />
    }
    return (
        <div>
            {orders?.length > 0 ? <> <h1 className='text-3xl font-bold pb-5'>My All Orders : {orders?.length}</h1>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th >SL</th>
                                <th>Product</th>
                                <th>OrderDate</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, idx) => <tr key={order._id}>
                                    <th> {idx + 1}</th>
                                    <td >
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img title='product image' src={order?.productImage} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div title='product Name' className="font-bold">{order?.productName}</div>
                                                <div title='My Email' className="text-sm opacity-50">{order?.buyerEmail}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td> <small className='font-semibold'>{order?.orderDate}</small></td>

                                    <td> ${order?.price}</td>
                                    <td> <label htmlFor="confirm-modal"><BsTrash title='remove product' onClick={() => setRemoveCardProduct(order)} className='cursor-pointer text-red-500 text-lg' /></label></td>
                                    <td> <button className='bg-primary btn btn-sm border-none text-black hover:text-white'>Pay</button></td>
                                </tr>)
                            }


                        </tbody>



                    </table>
                </div>
                {removeCardProduct && <ConfirmationModal successAction={handleRemoveCardProduct} closeModal={closeModal} title={`Are you sure You want to delete?`} message={`If you want to delete "${removeCardProduct.productName}". It can't be recover.`} />}</> : <h1 className='sm:text-4xl text-2xl lg:pt-12 text-center lg:text-left pt-10 lg:pl-8 font-semibold text-red-500'>No Order were Found !</h1>}
        </div>
    );
};

export default MyOrders;