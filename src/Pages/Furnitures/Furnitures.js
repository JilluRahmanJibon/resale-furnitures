import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import OrderModal from '../Modals/OrderModal/OrderModal';
import FurnitureCard from './FurnitureCard';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import { CategoryContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReportModal from '../Dashboard/AllReports/ReportedModal';

const Furnitures = () => {
    const { setCategory } = useContext(CategoryContext)
    const [selectOrder, setSelectOrder] = useState(null)
    const [reported, setReported] = useState(null);
    const params = useParams()
    const furnitures = useLoaderData()
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_ApiUrl}categories`).then(res => {
            setCategories(res.data)
        })
    }, [params])
    const handleCategory = (category) => {
        setCategory(category);
    }
    console.log(reported);
    return (
        <section className='py-8 '>
            <div className=' border-b flex justify-between pr-2 pb-3 border-gray-200  mb-3 '>
                <p className=' transition-all flex items-center  '><Link className='hover:border-b border-white border-b hover:border-gray-900 ' to='/'>Home</Link> <span><IoIosArrowForward /></span> <span className='hover:border-b border-b border-white hover:border-gray-900  '>{furnitures[3].name}</span></p>
                <select onChange={(e) => handleCategory(e.target.value)} className='px-3' name="" id=""><option disabled selected>Select Category</option> {categories?.map(cate => <option key={cate._id} value={cate?.categoryName}>{cate?.name}</option>)} </select>

            </div>


            <div className='grid md:grid-cols-2 gap-5'>
                {
                    furnitures.map(furniture => <FurnitureCard key={furniture._id} setReported={setReported} setSelectOrder={setSelectOrder} furniture={furniture} />)
                }
            </div>
            {selectOrder && <OrderModal selectOrder={selectOrder} setSelectOrder={setSelectOrder} />}
            {reported && (
                <ReportModal
                    reported={reported}
                    setReported={setReported}
                ></ReportModal>
            )}
        </section>
    );
};

export default Furnitures;