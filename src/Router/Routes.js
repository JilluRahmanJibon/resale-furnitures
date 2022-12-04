import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllProducts from "../Pages/Dashboard/AllProducts/AllProducts";
import AllReports from "../Pages/Dashboard/AllReports/AllReports";
import ManageBuyers from "../Pages/Dashboard/ManageBuyers/ManageBuyers";
import ManageSellers from "../Pages/Dashboard/ManageSellers/ManageSellers";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import MyAllProducts from "../Pages/Dashboard/MyAllProducts/MyAllProducts";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ReportedProducts from "../Pages/Dashboard/ReportedProducts/ReportedProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Furnitures from "../Pages/Furnitures/Furnitures";
import SingleFurniture from "../Pages/Furnitures/SingleFurniture";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/Login/SignIn/Signin";
import SignUp from "../Pages/Login/SignUp/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRouter from "./PrivateRouter";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/home", element: <Home /> },
			{ path: "/furnitures/:id", element: <PrivateRouter><Furnitures /></PrivateRouter>, loader: async ({ params }) => fetch(`${process.env.REACT_APP_ApiUrl}categoriesProducts/${params.id}`) },
			{ path: "/singleFurniture/:id", element: <SingleFurniture />, loader: async ({ params }) => fetch(`${process.env.REACT_APP_ApiUrl}furnitures/${params.id}`) },
			{ path: "/blog", element: <Blog /> },
			{ path: "/signup", element: <SignUp /> },
			{ path: "/signin", element: <SignIn /> },


		],
	}, {
		path: `/dashboard/`, element: <PrivateRouter><Dashboard /></PrivateRouter>, children: [
			{ path: '/dashboard/', element: <MyOrders /> },
			{ path: '/dashboard/', element: <MyOrders /> },
			{ path: '/dashboard/manageSellers', element: <AdminRoute><ManageSellers /> </AdminRoute> },
			{ path: '/dashboard/manageUsers', element: <AdminRoute><ManageUsers /></AdminRoute> },
			{ path: '/dashboard/manageBuyers', element: <AdminRoute><ManageBuyers /></AdminRoute> },
			{ path: '/dashboard/allProducts', element: <AdminRoute><AllProducts /></AdminRoute> },
			{ path: '/dashboard/allReports', element: <AdminRoute><AllReports /></AdminRoute> },
			{ path: '/dashboard/reportedProducts', element: <SellerRoute><ReportedProducts /></SellerRoute> },
			{ path: '/dashboard/addProduct', element: <SellerRoute><AddProduct /></SellerRoute> },
			{ path: '/dashboard/', element: <MyOrders /> },
			{ path: '/dashboard/payment/:id', element: <PrivateRouter><Payment /></PrivateRouter>, loader: async ({ params }) => fetch(`${process.env.REACT_APP_ApiUrl}singleOrder/${params.id}`) },
			{ path: '/dashboard/myAllProducts', element: <SellerRoute><MyAllProducts /> </SellerRoute> },
		]
	}
]);
export default router;
