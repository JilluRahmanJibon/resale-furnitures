import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import useSeller from "../Hooks/useSeller";

const SellerRoute = ({ children }) => {
    const { user, loading, } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email)
    const location = useLocation();
    if (loading || isSellerLoading) {
        return
    }
    if (user?.email && isSeller) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default SellerRoute;
