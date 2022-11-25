import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Shared/Loader/Loader';

const AddProduct = () => {
    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch(`${process.env.REACT_APP_ApiUrl}categories`).then(res => res.json())
    })

    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <section className="max-w-4xl p-6   rounded-md shadow-md  mt-20">
                <h1 className="text-xl font-bold  capitalize ">Add Product</h1>
                <htmlForm>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="" htmlFor="Name">Name</label>
                            <input id="Name" type="text" placeholder='Product Name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="" htmlFor="location">Location </label>
                            <input id="location" type="text" placeholder='Your Location' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="" htmlFor="originalPrice">Original Price</label>
                            <input id="originalPrice" placeholder='$Original Price' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="" htmlFor="reSalePrice">ReSale Price</label>
                            <input id="reSalePrice" placeholder='$ReSale Price' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="" htmlFor="useOf">Uses Of ?</label>
                            <input id="useOf" type="text" placeholder='How many years uses ?' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="" htmlFor="color">Product Color </label>
                            <input id="color" type="test" placeholder='Product Color' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="" htmlFor="brand">Brand </label>
                            <input id="brand" placeholder='Brand of product' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="" htmlFor="passwordConfirmation">Select Category</label>
                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                {categories.map(category => <option value={category.categoryName} key={category._id}>{category.categoryName}</option>)}

                            </select>
                        </div>



                        <div>
                            <label className="block text-sm font-medium ">
                                Image
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 " stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span className="">Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1 ">or drag and drop</p>
                                    </div>
                                    <p className="text-xs ">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5  transition-colors duration-200 transhtmlForm bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </htmlForm>
            </section>
        </div>
    );
};

export default AddProduct;