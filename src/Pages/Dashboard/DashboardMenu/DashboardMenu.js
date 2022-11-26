import React, { useContext } from "react";
import {
    FaDatabase,
    FaPlus,
    FaRegHourglass,
    FaRegTrashAlt,
    FaUsers,
} from "react-icons/fa";
import { MdManageAccounts } from 'react-icons/md'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const DashboardMenu = () => {
    const { user, userRoleManage } = useContext(AuthContext);
    return (
        <div className="flex flex-col pl-4 bg-gray-100 ">
            <Link to="/">
                <div className="">

                </div>
            </Link>

            <div className="flex flex-col items-center mt-6 -mx-2">
                <img
                    className="object-cover w-24 h-24 mx-2 rounded-full"
                    src={user?.photoURL}
                    alt="avatar"
                />
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                    {user?.displayName}
                </h4>
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                    {user?.email}
                </p>
            </div>

            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>


                    <Link
                        to="/dashboard/allSellers"
                        className="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                    >
                        <FaUsers />

                        <span className="mx-4 font-medium">All Sellers</span>
                    </Link>
                    <Link
                        to='/dashboard/manageUsers'
                        className="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                    >
                        <MdManageAccounts className="text-xl" />

                        <span className="mx-4 font-medium">Manage Users</span>
                    </Link>
                    <Link
                        to='/dashboard/allProducts'
                        className="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                    >
                        <FaDatabase />

                        <span className="mx-4 font-medium">All Products</span>
                    </Link>
                    <Link
                        to="/dashboard/allReport"
                        className="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                    >
                        <FaRegTrashAlt />

                        <span className="mx-4 font-medium">All Report</span>
                    </Link>
                    <Link
                        to='/dashboard/addProduct'
                        className="flex items-center px-4 py-2 mt-4 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                    >
                        <FaPlus className="" />

                        <span className="mx-4 font-medium">Add Product</span>
                    </Link>
                    <Link
                        to='/dashboard/myAllProducts'
                        className="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                    >
                        <FaDatabase />

                        <span className="mx-4 font-medium">My All Product</span>
                    </Link>




                    <Link
                        to="/dashboard/myOrders"
                        className="flex items-center px-4 py-2 mt-4 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                    >
                        <FaRegHourglass />
                        <span className="mx-4 font-medium">My Orders </span>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default DashboardMenu;