import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
const SingleFurniture = () => {
    const { capacity,
        categoryId,
        color,
        location,
        name,
        originalPrice,
        picture,
        reSalePrice,
        role,
        sellerName,
        years_of_use,
        _id } = useLoaderData()

    return (
        <section className='my-8'>
            <p className='pb-4 transition-all flex items-center  '><Link className='hover:border-b border-white border-b hover:border-gray-900 ' to='/'>Home</Link> <span><IoIosArrowForward /></span> <span className='hover:border-b border-b border-white hover:border-gray-900  '>{name}</span></p>
            <div className='sm:flex border-t gap-4 border-gray-300 pt-8'>
                <div className=''>
                    <PhotoProvider>
                        <PhotoView src={picture}>
                            <img title='Click for Full Image ' className='sm:w-96 rounded-md sm:max-h-96' src={picture} alt={name} />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className=''>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                </div>
            </div>
        </section>
    );
};

export default SingleFurniture;