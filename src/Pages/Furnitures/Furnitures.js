import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FurnitureCard from './FurnitureCard';

const Furnitures = ({ name }) => {
    const furnitures = useLoaderData()
    return (
        <section className='py-8'>
            <h1 className='text-3xl font-bold pl-2 pb-5 uppercase'>{furnitures[0].name}</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    furnitures.map(furniture => <FurnitureCard key={furniture._id} furniture={furniture} />)
                }
            </div>
        </section>
    );
};

export default Furnitures;