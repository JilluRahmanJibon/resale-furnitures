import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import useTitle from '../Hooks/useTitle';
import DashboardMenu from '../Pages/Dashboard/DashboardMenu/DashboardMenu';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    useTitle("Dashboard")
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle lg:hidden" />
                <div className="drawer-content p-4 ">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay lg:hidden"></label>
                    <ul className="menu  w-80 ">
                        <DashboardMenu />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;