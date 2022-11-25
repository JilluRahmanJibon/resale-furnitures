import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { GoReport } from 'react-icons/go';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import badge from '../../Pages/assets/icons/verified.png'
const FurnitureCard = ({ furniture, setSelectOrder }) => {
    const { color, location, verified, publishedDate, name, picture, reSalePrice, originalPrice, capacity, role, sellerName, sellerImage, years_of_use, } = furniture
    return (
        <div>
            <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img title='Click for View full Image' src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                    </PhotoView>
                </PhotoProvider>

                <div className='sm:text-[13px] text-[12px] font-semibold'>
                    <div className='flex px-2 justify-between'>
                        <p className=''>OriginalPrice: <del className='text-red-500 font-semibold '>${originalPrice}</del></p>
                        <p>ReSalePrice: <span className='font-semibold'>${reSalePrice}</span></p>
                    </div>
                    <div className='flex px-2 justify-between'>
                        <p className=''>Name: {name}</p>
                        <p>Uses of: <span className='text-red-500 font-bold'> {years_of_use}</span>{years_of_use > 1 ? 'years' : 'year'} </p>
                    </div>
                    <div className='flex px-2 justify-between'>
                        <p>Capacity:  {capacity} </p>
                        <p className=''>Color: {color}</p>
                    </div>
                </div>

                <fieldset className='border border-gray-700 rounded-sm mt-4  mx-5'>
                    <legend className='font-semibold'>Seller</legend>
                    <figcaption className="flex items-center pb-2 pl-4 space-x-2">
                        <div className='relative'>
                            <img alt="" className="rounded-full w-9 h-9" src={sellerImage} />
                            {verified === 'true' && <img title='This Seller is Verified' className='absolute w-4 h-4 top-0 -right-1  rounded-full' src={badge} alt="" />}
                        </div>
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>{sellerName}</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400"> {publishedDate}</div>
                        </div>
                    </figcaption>
                </fieldset>


                <div className='p-3 pt-4 justify-between items-center flex'>
                    <div className='flex gap-2'><FaRegHeart className='mt-2 cursor-pointer' /> <GoReport className='mt-2 cursor-pointer' /></div>
                    <p><label onClick={() => setSelectOrder(furniture)} htmlFor='orderModal' className=' bg-gray-800 py-2 px-3 cursor-pointer text-sm font-medium rounded-lg hover:bg-gray-700'>Book Now</label></p>

                </div>

            </div>
        </div>
    );
};

export default FurnitureCard;