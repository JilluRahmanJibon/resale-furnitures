import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { picture, name, categoryName } = category
    return (
        <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <Link to={`/furnitures/${categoryName}`}>    <img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
            </Link>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <Link to={`/furnitures/${categoryName}`}>
                        <h2 className="text-3xl text-center uppercase font-semibold tracking-wide">{name}</h2></Link>

                </div>
            </div>
        </div>
    );
};

export default CategoryCard;