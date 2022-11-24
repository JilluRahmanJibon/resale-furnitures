import React from 'react';
import { Link } from 'react-router-dom';

const FurnitureCard = ({ furniture }) => {
    console.log(furniture);
    const { _id, name, picture, capacity } = furniture
    return (
        <div>
            <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <Link to={`/furnitures/${''}`}>    <img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                </Link>
                <p className='pl-2'>Capacity: {capacity}</p>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">

                        <Link to={`/furnitures/${''}`}>
                            <h2 className="text-2xl text-center uppercase font-semibold tracking-wide">{name}</h2></Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default FurnitureCard;