import React, { useContext } from "react";
import {
    FaDatabase,
    FaPlus,
    FaRegHourglass,
    FaUsers,
} from "react-icons/fa";
import { MdReport } from 'react-icons/md';
import { MdManageAccounts } from 'react-icons/md'
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import verifyLogo from '../../assets/icons/verified.png';

const DashboardMenu = ({ singleUser }) => {
    const { user } = useContext(AuthContext);


    return (
        <div className="flex flex-col pl-4  ">
            <div className="flex flex-col border-b pb-3 items-center mt-6 -mx-2">
                <div className="relative ">
                    <img
                        className="object-cover border-2 border-gray-200 w-24 h-24 mx-2 rounded-full"
                        src={user?.photoURL}
                        alt="avatar"
                    />
                    {singleUser?.verified === 'true' && <img title='This Seller is Verified' className='absolute w-4 h-4 right-3  rounded-full bottom-2' src={verifyLogo} alt="" />}

                    <p className='text-xl text-center font-bold'>{singleUser?.role}</p>
                </div>

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
                            <NavLink
                                to="/dashboard/"
                                className={({ isActive }) => isActive ? 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform bg-white' : 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700'}
                            >
                                <FaRegHourglass />
                                <span className="mx-4 font-medium">My Orders </span>
                            </NavLink>
                            <NavLink
                                to='/dashboard/allProducts'
                                className={({ isActive }) => isActive ? 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform bg-white' : 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700'}
                            >
                                <FaDatabase />

                                <span className="mx-4 font-medium">All Products</span>
                            </NavLink>
                            <NavLink
                                to="/dashboard/allReports"
                                className={({ isActive }) => isActive ? 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform bg-white' : 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700'}
                            >
                                <MdReport />

                                <span className="mx-4 font-medium">All Reports</span>
                            </NavLink>
                            <NavLink
                                to="/dashboard/manageSellers"
                                className={({ isActive }) => isActive ? 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform bg-white' : 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700'}
                            >
                                <FaUsers />

                                <span className="mx-4 font-medium">Manage Sellers</span>
                            </NavLink>
                            <NavLink
                                to="/dashboard/manageBuyers"
                                className={({ isActive }) => isActive ? 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform bg-white' : 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700'}
                            >
                                <FaUsers />

                                <span className="mx-4 font-medium">Manage Buyers</span>
                            </NavLink>
                            <NavLink
                                to='/dashboard/manageUsers'
                                className={({ isActive }) => isActive ? 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform bg-white' : 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700'}
                            >
                                <MdManageAccounts className="text-xl" />

                                <span className="mx-4 font-medium">Manage All Users</span>
                            </NavLink>

                        </>
                    }

                    {
                        singleUser.role === 'seller' && <>
                            <NavLink
                                to="/dashboard/"
                                className={({ isActive }) => isActive ? 'flex items-center px-4 py-2 mt-4 text-gray-600 transition-colors duration-300 transform bg-white' : 'flex items-center px-4 py-2 mt-4 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700'}
                            >
                                <FaRegHourglass />
                                <span className="mx-4 font-medium">My Orders </span>
                            </NavLink>

                            <NavLink
                                to='/dashboard/myAllProducts'
                                className={({ isActive }) => isActive ? 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform bg-white' : 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700'}
                            >
                                <FaDatabase />

                                <span className="mx-4 font-medium">My All Product</span>
                            </NavLink>
                            <NavLink
                                to='/dashboard/addProduct'
                                className={({ isActive }) => isActive ? 'flex items-center px-4 py-2 mt-4 text-gray-600 transition-colors duration-300 transform bg-white' : 'flex items-center px-4 py-2 mt-4 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700'}
                            >
                                <FaPlus className="" />

                                <span className="mx-4 font-medium">Add Product</span>
                            </NavLink>

                            <NavLink
                                to='/dashboard/reportedProducts'
                                className={({ isActive }) => isActive ? 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform bg-white' : 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700'}
                            >
                                <MdReport />

                                <span className="mx-4 font-medium">Reported Products </span>
                            </NavLink>

                        </>
                    }


                    {
                        singleUser.role === 'buyer' &&
                        <> <NavLink
                            to="/dashboard/"
                            className={({ isActive }) => isActive ? 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform bg-white' : 'flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors duration-300 transform  hover:bg-white hover:text-gray-700'}
                        >
                            <FaRegHourglass />
                            <span className="mx-4 font-medium">My Orders </span>
                        </NavLink></>
                    }
                </nav>
            </div>
        </div>
    );
};

export default DashboardMenu;