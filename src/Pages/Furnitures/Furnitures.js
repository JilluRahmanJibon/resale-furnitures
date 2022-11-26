import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import OrderModal from '../Modals/OrderModal/OrderModal';
import FurnitureCard from './FurnitureCard';
import { IoIosArrowForward } from "react-icons/io";

const Furnitures = () => {
    const [selectOrder, setSelectOrder] = useState(null)
    const furnitures = useLoaderData()
    return (
        <section className='py-8'>
            <p className='pb-1 mb-3 transition-all border-b border-gray-200 flex items-center  '><Link className='hover:border-b border-white border-b hover:border-gray-900 ' to='/'>Home</Link> <span><IoIosArrowForward /></span> <span className='hover:border-b border-b border-white hover:border-gray-900  '>{furnitures[3].name}</span></p>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    furnitures.map(furniture => <FurnitureCard key={furniture._id} setSelectOrder={setSelectOrder} furniture={furniture} />)
                }
            </div>
            {selectOrder && <OrderModal selectOrder={selectOrder} setSelectOrder={setSelectOrder} />}
        </section>
    );
};

export default Furnitures;