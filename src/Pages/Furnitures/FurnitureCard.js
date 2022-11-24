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
                    <div className="flex justify-center space-y-2">

                        <Link to={`/furnitures/${''}`}>
                            <button className="text-lg bg-gray-800 py-2 px-4 rounded-lg hover:bg-gray-700 transition-all text-center font-semibold tracking-wide">More Info</button></Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default FurnitureCard;