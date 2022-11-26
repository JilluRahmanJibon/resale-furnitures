import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import useBuyer from "../Hooks/useBuyer";

const BuyerRoute = ({ children }) => {
    const { user, loading, } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)
    const location = useLocation();
    if (loading || isBuyerLoading) {
        return
    }
    if (user?.email && isBuyer) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default BuyerRoute;
