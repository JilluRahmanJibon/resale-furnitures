import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { GoReport } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const FurnitureCard = ({ furniture, setSelectOrder }) => {
    const { capacity, color, location, name, picture, reSalePrice, originalPrice, role, sellerName, years_of_use, _id } = furniture
    return (
        <div>
            <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img title='Click for View full Image' src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                    </PhotoView>
                </PhotoProvider>

                <div className='flex px-2 justify-between'>
                    <p className=''>OriginalPrice: <del className='text-red-500 font-semibold '>${originalPrice}</del></p>
                    <p>ReSalePrice: <span className='font-semibold'>${reSalePrice}</span></p>
                </div>
                <div className="flex flex-col justify-between py-3 ">
                    <div className="flex justify-center">



                    </div>

                </div>
                <div className='p-3 justify-between items-center flex'>
                    <div className='flex gap-2'><FaRegHeart className='mt-2 cursor-pointer' /> <GoReport className='mt-2 cursor-pointer' /></div>
                    <p><label onClick={() => setSelectOrder(furniture)} htmlFor='orderModal' className=' bg-gray-800 py-2 px-3 cursor-pointer text-sm font-medium rounded-lg hover:bg-gray-700'>Book Now</label></p>

                </div>

            </div>
        </div>
    );
};

export default FurnitureCard;