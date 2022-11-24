import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const OrderModal = ({ selectOrder, setSelectOrder }) => {
    const { user } = useContext(AuthContext)
    const { capacity, color, location, name, picture, reSalePrice, originalPrice, role, sellerName, years_of_use, _id } = selectOrder

    const handleBooking = async e => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;

        const booking = {
            slot,
            seller: name,
            email,
            number,
        };
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(booking)
        }).then(res => res.json()).then(data => {
            if (data.acknowledged) {
                toast.success('Your booking is Confirmed')
                // setTreatment(null);
                // refetch()
            } else {
                toast.error(data.message)
            }
        })
    };
    return (
        <div>
            <input type="checkbox" id="orderModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setSelectOrder(null)} htmlFor="orderModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg uppercase font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className="flex flex-col gap-4">
                        <input
                            required
                            disabled
                            type="text"
                            className="input w-full border-2 bg-gray-300  "
                        />


                        <input
                            name="name"
                            defaultValue={user?.displayName}
                            disabled={user?.displayName}
                            required
                            type="text"
                            placeholder="Full Name"
                            className="  input w-full border-2   border-gray-200 "
                        />
                        <input
                            name="email"
                            required
                            type="email"
                            defaultValue={user?.email}
                            disabled
                            placeholder="Email"
                            className="input w-full border-2   border-gray-200 "
                        />
                        <input
                            name="number"
                            required
                            type="number"
                            min="10"
                            minLength={10}
                            placeholder="Phone Number"
                            className="input w-full border-2   border-gray-200 "
                        />

                        <input
                            type="submit"
                            value="Submit"
                            className="input  btn btn-accent text-white uppercase w-full "
                        />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default OrderModal;