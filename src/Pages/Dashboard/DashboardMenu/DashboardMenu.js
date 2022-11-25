import React, { useContext } from "react";
import {
    FaDatabase,
    FaPlus,
    FaRegHourglass,
    FaRegTrashAlt,
    FaUserAlt,
} from "react-icons/fa";
import { MdManageAccounts } from 'react-icons/md'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const DashboardMenu = () => {
    const { user } = useContext(AuthContext);
    return (
        <div class="flex flex-col pl-4 bg-gray-100 ">
            <Link to="/">
                <div className="">

                </div>
            </Link>

            <div class="flex flex-col items-center mt-6 -mx-2">
                <img
                    class="object-cover w-24 h-24 mx-2 rounded-full"
                    src={user?.photoURL}
                    alt="avatar"
                />
                <h4 class="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                    {user?.displayName}
                </h4>
                <p class="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                    {user?.email}
                </p>
            </div>

            <div class="flex flex-col justify-between flex-1 mt-6">
                <nav>


                    <Link
                        to="/dashboard/allUsers"
                        class="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                    >
                        <FaUserAlt />

                        <span class="mx-4 font-medium">All User</span>
                    </Link>
                    <Link
                        to='/dashboard/manageUsers'
                        class="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                    >
                        <MdManageAccounts className="text-xl" />

                        <span class="mx-4 font-medium">Manage Users</span>
                    </Link>
                    <Link
                        to='/dashboard/addProduct'
                        class="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                    >
                        <FaPlus className="" />

                        <span class="mx-4 font-medium">Add Product</span>
                    </Link>
                    <Link
                        to='/dashboard/myAllProducts'
                        class="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                    >
                        <FaDatabase />

                        <span class="mx-4 font-medium">My All Product</span>
                    </Link>
                    <Link
                        to='/dashboard/allProducts'
                        class="flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                    >
                        <FaDatabase />

                        <span class="mx-4 font-medium">All Product</span>
                    </Link>

                    <Link
                        to="/dashboard/allReport"
                        class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                    >
                        <FaRegTrashAlt />

                        <span class="mx-4 font-medium">All Report</span>
                    </Link>

                    <Link
                        to="/dashboard/myOrders"
                        class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700"
                    >
                        <FaRegHourglass />
                        <span class="mx-4 font-medium">My Orders </span>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default DashboardMenu;