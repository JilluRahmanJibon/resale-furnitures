import React, { useContext } from "react";
import {
    FaDatabase,
    FaPlus,
    FaRegHourglass,
    FaRegTrashAlt,
    FaUsers,
} from "react-icons/fa";
import { MdOutlineReportProblem, MdManageAccounts } from 'react-icons/md'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const DashboardMenu = ({ singleUser }) => {
    const { user } = useContext(AuthContext);


    return (
        <div className="flex flex-col pl-4  ">
            <div className="flex flex-col border-b pb-3 items-center mt-6 -mx-2">
                <img
                    className="object-cover w-24 h-24 mx-2 rounded-full"
                    src={user?.photoURL}
                    alt="avatar"
                />
                <p className='text-xl font-bold'>{singleUser?.role}</p>

                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                    {user?.displayName}
                </h4>
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                    {user?.email}
                </p>

            </div>

            <div className="flex flex-col justify-between flex-1 mt-3">
                <nav>


                    {
                        singleUser.role === 'Admin' && <>
                            <Link
                                to="/dashboard/"
                                className="flex items-center px-4 py-2 mt-4 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                            >
                                <FaRegHourglass />
                                <span className="mx-4 font-medium">My Orders </span>
                            </Link>
                            <Link
                                to='/dashboard/allProducts'
                                className="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                            >
                                <FaDatabase />

                                <span className="mx-4 font-medium">All Products</span>
                            </Link>
                            <Link
                                to="/dashboard/allReports"
                                className="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                            >
                                <FaRegTrashAlt />

                                <span className="mx-4 font-medium">All Reports</span>
                            </Link>
                            <Link
                                to="/dashboard/manageSellers"
                                className="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                            >
                                <FaUsers />

                                <span className="mx-4 font-medium">Manage Sellers</span>
                            </Link>
                            <Link
                                to="/dashboard/manageBuyers"
                                className="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                            >
                                <FaUsers />

                                <span className="mx-4 font-medium">Manage Buyers</span>
                            </Link>
                            <Link
                                to='/dashboard/manageUsers'
                                className="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                            >
                                <MdManageAccounts className="text-xl" />

                                <span className="mx-4 font-medium">Manage All Users</span>
                            </Link>

                        </>
                    }

                    {
                        singleUser.role === 'seller' && <>

                            <Link
                                to='/dashboard/myAllProducts'
                                className="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                            >
                                <FaDatabase />

                                <span className="mx-4 font-medium">My All Product</span>
                            </Link>
                            <Link
                                to='/dashboard/addProduct'
                                className="flex items-center px-4 py-2 mt-4 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                            >
                                <FaPlus className="" />

                                <span className="mx-4 font-medium">Add Product</span>
                            </Link>

                            <Link
                                to='/dashboard/reportedProducts'
                                className="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                            >
                                <MdOutlineReportProblem />

                                <span className="mx-4 font-medium">Reported Products </span>
                            </Link>

                        </>
                    }


                    {
                        singleUser.role === 'buyer' && <> <Link
                            to="/dashboard/"
                            className="flex items-center px-4 py-2 mt-4 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                        >
                            <FaRegHourglass />
                            <span className="mx-4 font-medium">My Orders </span>
                        </Link></>
                    }
                </nav>
            </div>
        </div>
    );
};

export default DashboardMenu;