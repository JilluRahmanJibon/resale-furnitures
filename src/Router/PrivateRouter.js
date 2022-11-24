import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const PrivateRouter = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	if (loading) {
		return true;
	}
	if (user?.email) {
		return children;
	}
	return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivateRouter;
