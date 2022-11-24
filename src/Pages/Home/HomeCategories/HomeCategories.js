import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const HomeCategories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_ApiUrl}categories`).then(res => {
            setCategories(res.data)
        }).catch(function (error) {
            console.log(error);
        })
    }, [])
    return (
        <div className='pb-12 border-y pt-5 border-gray-300'>
            <h1 className='sm:text-3xl text-xl font-bold pl-2 pb-5 '>Top Categories</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    categories.map(category => <CategoryCard key={category._id} category={category} />)
                }
            </div>
        </div>
    );
};

export default HomeCategories;