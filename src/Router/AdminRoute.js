import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading, } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();
    if (loading || isAdminLoading) {
        return
    }
    if (user?.email && isAdmin) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default AdminRoute;
