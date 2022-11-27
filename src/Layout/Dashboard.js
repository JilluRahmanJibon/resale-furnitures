import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import useTitle from '../Hooks/useTitle';
import DashboardMenu from '../Pages/Dashboard/DashboardMenu/DashboardMenu';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [singleUser, setSingleUser] = useState({})
    useEffect(() => {
        fetch(`${process.env.REACT_APP_ApiUrl}user/${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        }).then(res => res.json()).then(result => {
            setSingleUser(result);
        })
    }, [user?.email])
    useTitle("Dashboard")
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle lg:hidden" />
                <div className="drawer-content p-4 ">
                    <Outlet />
                </div>
                <div className="drawer-side  ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay lg:hidden"></label>
                    <ul className="menu bg-gray-100 lg:bg-transparent border-r w-80 ">
                        <DashboardMenu singleUser={singleUser} />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;