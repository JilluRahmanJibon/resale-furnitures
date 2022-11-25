import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import MyAllProducts from "../Pages/Dashboard/MyAllProducts/MyAllProducts";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Furnitures from "../Pages/Furnitures/Furnitures";
import SingleFurniture from "../Pages/Furnitures/SingleFurniture";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/Login/SignIn/Signin";
import SignUp from "../Pages/Login/SignUp/Signup";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/home", element: <Home /> },
			{ path: "/furnitures/:id", element: <Furnitures />, loader: async ({ params }) => fetch(`${process.env.REACT_APP_ApiUrl}categoriesProducts/${params.id}`) },
			{ path: "/singleFurniture/:id", element: <SingleFurniture />, loader: async ({ params }) => fetch(`${process.env.REACT_APP_ApiUrl}furnitures/${params.id}`) },
			{ path: "/blog", element: <Blog /> },
			{ path: "/signup", element: <SignUp /> },
			{ path: "/signin", element: <SignIn /> },


		],
	}, {
		path: '/dashboard', element: <PrivateRouter><Dashboard /></PrivateRouter>, children: [
			{ path: '/dashboard/myOrders', element: <MyOrders /> },
			{ path: '/dashboard/allUsers', element: <AllUsers /> },
			{ path: '/dashboard/manageUsers', element: <ManageUsers /> },
			{ path: '/dashboard/addProduct', element: <AddProduct /> },
			{ path: '/dashboard/myAllProducts', element: <MyAllProducts /> },
		]
	}
]);
export default router;
