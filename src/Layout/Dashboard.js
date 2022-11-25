import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle lg:hidden" />
                <div className="drawer-content">
                    {/* Page content here  */}

                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay lg:hidden"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* Sidebar content here  */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;