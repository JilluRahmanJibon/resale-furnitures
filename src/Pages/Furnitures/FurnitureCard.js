import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { GoReport, GoLocation } from 'react-icons/go';
import { FiClock } from 'react-icons/fi';
import badge from '../../Pages/assets/icons/verified.png'
import { PhotoProvider, PhotoView } from 'react-photo-view';
const FurnitureCard = ({ furniture, setSelectOrder, setReported }) => {
    const { color, location, verified, publishedDate, name, picture, reSalePrice, originalPrice, sellerEmail, sellerName, sellerImage, years_of_use, brand, description, condition } = furniture
    return (
        <div>
            <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img title='Click for View full Image' src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                    </PhotoView>
                </PhotoProvider>

                <div className='sm:text-[13px] text-[12px] flex flex-col gap-1 mt-2 font-semibold'>
                    <div className='flex px-2 justify-between'>
                        <p className=''>OriginalPrice: <del className='text-red-500 font-semibold '>${originalPrice}</del></p>
                        <p>ReSalePrice: <span className='font-semibold'>${reSalePrice}</span></p>
                    </div>
                    <div className='flex px-2 justify-between'>
                        <p className=''>Name: {name}</p>
                        <p>Uses of: <span className='text-red-500 font-bold'> {years_of_use}</span>{years_of_use > 1 ? 'years' : 'year'} </p>
                    </div>
                    <div className='flex px-2 justify-between'>
                        <p>Brand:  {brand ? <small>{brand}</small> : 'N/A'}   </p>
                        <p className=''>Color:  {color ? <small>{color}</small> : 'N/A'} </p>
                    </div>
                    <div className='flex px-2 justify-between'>
                        <p>Condition: {condition ? <small>{condition}</small> : 'N/A'}  </p>

                    </div>
                    <div className='  px-2 '>
                        <p className='text-justify'><span className='font-bold'>Description:</span>  {description ? <small>{description}</small> : 'N/A'} </p>
                    </div>

                </div>

                <fieldset className='border border-gray-700 rounded-sm mt-4  mx-5'>
                    <legend className='font-semibold'>Seller</legend>
                    <figcaption className="flex items-center  pl-4 space-x-2">
                        <div className='relative'>
                            <img title={sellerName} alt="" className="rounded-full w-9 h-9" src={sellerImage} />
                            {verified === 'true' && <img title='This Seller is Verified' className='absolute w-4 h-4 top-0 -right-1  rounded-full' src={badge} alt="" />}
                        </div>
                        <div className="font-medium dark:text-white text-left">
                            <div title={sellerEmail}>{sellerName}</div>
                            <div className="  flex items-center   text-gray-500 dark:text-gray-400"> <GoLocation title='Location' className='mt-1 ' /> <span title='Location'>{location} </span> </div>
                        </div>
                    </figcaption>
                    <div className='flex gap-1 pb-1 pl-4'><FiClock title='Published Date' className='mt-1 text-gray-500 ' /> <span title='Published Date' className='text-sm font-semibold text-gray-500'>{publishedDate}</span></div>
                </fieldset>


                <div className='p-3 pt-4 justify-between items-center flex'>
                    <div className='flex gap-2'>
                        <FaRegHeart className='mt-2 cursor-pointer' />
                        <label htmlFor='report-modal'><GoReport onClick={() => setReported(furniture)} className='mt-2 cursor-pointer' /></label>

                    </div>
                    <p><label onClick={() => setSelectOrder(furniture)} htmlFor='orderModal' className=' bg-gray-800 py-2 px-3 cursor-pointer text-sm font-medium rounded-lg hover:bg-gray-700'>Book Now</label></p>

                </div>

            </div>

        </div>
    );
};

export default FurnitureCard;