import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import SmallLoader from '../../Shared/Loader/SmallLoader';

const OrderModal = ({ selectOrder, setSelectOrder }) => {
    const { user, loading, setLoading } = useContext(AuthContext)
    const { name: productName, picture, reSalePrice, _id } = selectOrder
    function formatDate(date) {
        const yyyy = date.getFullYear();
        let dd = date.getDate();
        if (dd < 10) dd = "0" + dd;
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        let strTime =
            monthNames[date.getMonth()] + "/" + dd + "/" + yyyy;
        return strTime;
    }
    const currentDate = formatDate(new Date());
    const handleBooking = async e => {
        setLoading(true)
        e.preventDefault();
        const form = e.target;
        const buyerName = form.name.value;
        const buyerEmail = form.email.value;
        const sellerEmail = selectOrder?.sellerEmail;
        const number = form.number.value;


        axios.post(`${process.env.REACT_APP_ApiUrl}orders?email=${selectOrder?.sellerEmail}`, {
            buyerName,
            buyerEmail,
            productId: _id,
            productName,
            price: reSalePrice,
            number,
            orderDate: currentDate,
            sellerEmail,
            productImage: picture,
        }).then(res => {
            if (res.data.acknowledged) {
                setLoading(false)
                toast.success('Your order is Confirmed', { duration: 1500 })
                setSelectOrder(null);

            } else {
                setLoading(false)
                toast.error(res.data.message)
            }
        })

    };
    return (
        <div>
            <input type="checkbox" id="orderModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setSelectOrder(null)} htmlFor="orderModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg uppercase font-bold pb-3">{productName}</h3>
                    <form onSubmit={handleBooking} className="flex flex-col gap-4">


                        <input
                            name="name"
                            defaultValue={user?.displayName}
                            disabled={user?.displayName}
                            required
                            type="text"
                            placeholder="Full Name"
                            className="  input w-full border-2 border-gray-200 "
                        />

                        <input
                            name="email"
                            required
                            type="email"
                            defaultValue={user?.email}
                            disabled={user?.email}
                            placeholder="Email"
                            className="input w-full border-2 border-gray-200 "
                        />
                        <input
                            name="price"
                            defaultValue={`Price: $${reSalePrice}`}
                            disabled={reSalePrice}
                            required
                            type="text"
                            placeholder="Full Name"
                            className="  input w-full border-2 border-gray-200 "
                        />
                        <input
                            name="address"
                            required
                            type="text"
                            placeholder="Give your address"
                            className="input w-full border-2 border-gray-200 "
                        />
                        <input
                            name="number"
                            required
                            type="number"
                            min="10"
                            minLength={10}
                            placeholder="Phone Number"
                            className="input w-full border-2 border-gray-200 "
                        />


                        <button type="submit" className="input  btn btn-accent text-white uppercase w-full "> {loading ? <SmallLoader /> : "Submit"}</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default OrderModal;