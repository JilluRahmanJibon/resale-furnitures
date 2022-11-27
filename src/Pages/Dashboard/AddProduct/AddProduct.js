import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const AddProduct = () => {
    const { user, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch(`${process.env.REACT_APP_ApiUrl}categories`).then(res => res.json())
    })
    const { register, formState: { errors }, handleSubmit, } = useForm();
    function formatDate(date) {
        const yyyy = date.getFullYear();
        let dd = date.getDate() + 1;
        if (dd < 10) dd = "0" + dd;
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        let strTime =
            monthNames[date.getMonth()] + "/" + dd + "/" + yyyy;
        return strTime;
    }
    const currentDate = formatDate(new Date());

    const handleAddProduct = data => {

        // setLoading(true)
        const formData = new FormData()
        formData.append('image', data.productImage[0])
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImageKey}`, { method: 'POST', body: formData }).then(res => res.json()).then(img => {
            if (img.success) {
                const image = img.data.url;

                axios.post(`${process.env.REACT_APP_ApiUrl}furnitures`, {
                    categoryName: data.category,
                    name: data.productName,
                    color: data.productColor,
                    verified: "false",
                    brand: data.brand,
                    originalPrice: data.originalPrice,
                    reSalePrice: data.reSalePrice,
                    years_of_use: data.useOf,
                    location: data.location,
                    role: 'Seller',
                    publishedDate: currentDate,
                    sellerEmail: user?.email,
                    sellerImage: user?.photoURL,
                    sellerName: user?.displayName,
                    picture: image,
                }).then(res => {
                    if (res.data.acknowledged) {
                        navigate('/dashboard/allProducts')
                        setLoading(false)
                        console.log(res);
                        toast.success('success')
                    }
                }).catch(err => {
                    setLoading(false)
                    toast.error(err.message)
                })
            }
        })

    }




    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <section className="max-w-4xl p-6   rounded-md shadow-md">
                <h1 className="text-xl font-bold  capitalize ">Add Product</h1>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="" htmlFor="Name">Name</label>
                            <input id="Name" type="text" placeholder='Product Name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("productName", { required: "Product Name is required" })} />
                            {errors.productName && (
                                <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                    <FaTimes />	{errors.productName?.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="" htmlFor="location">Location </label>
                            <input id="location" type="text" placeholder='Your Location' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("location", { required: "Location is required" })} />
                            {errors.location && (
                                <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                    <FaTimes />	{errors.location?.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="" htmlFor="originalPrice">Original Price</label>
                            <input id="originalPrice" placeholder='$Original Price' type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("originalPrice", { required: "Original Price is required", })} />
                            {errors.originalPrice && (
                                <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                    <FaTimes />	{errors.originalPrice?.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="" htmlFor="reSalePrice">ReSale Price</label>
                            <input id="reSalePrice" placeholder='$ReSale Price' type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"  {...register("reSalePrice", { required: "ReSale Price is required" })} />
                            {errors.reSalePrice && (
                                <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                    <FaTimes />	{errors.reSalePrice?.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="" htmlFor="useOf">Uses Of ?</label>
                            <input id="useOf" type="number" placeholder='How many years uses ?' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"    {...register("useOf", {
                                required: "Uses of is required", maxLength: {
                                    value: 2,
                                },
                            })} />
                            {errors.useOf && (
                                <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                    <FaTimes />	{errors.useOf?.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="" htmlFor="color">Product Color </label>
                            <input id="color" type="test" placeholder='Product Color' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"  {...register("productColor", { required: "Product Color is required" })} />
                            {errors.productColor && (
                                <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                    <FaTimes />	{errors.productColor?.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="" htmlFor="brand">Brand </label>
                            <input id="brand" placeholder='Brand of product' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"  {...register("brand", { required: "Brand is required" })} />
                            {errors.brand && (
                                <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                    <FaTimes />	{errors.brand?.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="" htmlFor="passwordConfirmation">Select Category</label>
                            <select  {...register("category", { required: "Category is required" })} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                {categories.map(category => <option value={category.categoryName} key={category._id}>{category.categoryName}</option>)}

                            </select>
                            {errors.category && (
                                <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                    <FaTimes />	{errors.category?.message}
                                </p>
                            )}
                        </div>



                        <div>
                            <label className="block text-sm font-medium ">
                                Image
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 " stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span className="">Upload a file</span>
                                            <input accept='image/*'   {...register("productImage", { required: "Product Image is required" })} id="file-upload" name="productImage" type="file" className="sr-only" hidden />
                                        </label>
                                        {errors.productImage && (
                                            <p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
                                                <FaTimes />	{errors.productImage?.message}
                                            </p>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5  transition-colors duration-200 transhtmlForm bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddProduct;