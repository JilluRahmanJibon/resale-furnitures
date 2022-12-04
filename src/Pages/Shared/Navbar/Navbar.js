import React, { useContext, useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import logo from '../../../Pages/assets/logo.jpg'
import person from '../../../Pages/assets/icons/person.svg'
const Navbar = () => {
	const { user, userLogOut } = useContext(AuthContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const profileRef = useRef();
	useEffect(() => {
		let handler = e => {
			if (!profileRef.current.contains(e.target)) {
				setIsMenuOpen(false);
			} else {
			}
		};
		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	}, []);
	return (
		<div>
			<div>
				<div className="px-4 py-5 mx-auto  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
					<div className="relative flex items-center gap-3 justify-between">
						{user?.email && <label tabIndex={0} htmlFor="dashboard-drawer" className=" lg:hidden"><FaBars className="text-xl mb-1" /></label>}
						<div className="lg:w-0 w-full">
							<Link
								to="/"
								aria-label="Resale Furniture"
								title="Resale Furniture"
								className="inline-flex items-center">
								<img className="sm:w-10 w-8" src={logo} alt="" />
								<span className="ml-2 sm:block hidden sm:text-xl font-bold tracking-wide">
									ResaleFurniture
								</span>
							</Link>
						</div>


						<div className="flex gap-5 z-50 mr-3">
							<ul className="flex items-center hidden space-x-8 lg:flex">
								<li>
									<NavLink
										to="/home"
										aria-label="Home"
										title="Home"
										className={({ isActive }) =>
											isActive
												? "font-medium tracking-wide text-red-400  transition-colors duration-200 hover:text-teal-accent-400"
												: "font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
										}>
										Home
									</NavLink>
								</li>


								<li>
									<NavLink
										to="/blog"
										aria-label="Blog"
										title="Blog"
										className={({ isActive }) =>
											isActive
												? "font-medium tracking-wide text-red-400  transition-colors duration-200 hover:text-teal-accent-400"
												: "font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
										}>
										Blog
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/dashboard"
										aria-label="Dashboard"
										title="Dashboard"
										className={({ isActive }) =>
											isActive
												? "font-medium tracking-wide text-red-400  transition-colors duration-200 hover:text-teal-accent-400"
												: "font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
										}>
										Dashboard
									</NavLink>
								</li>
							</ul>
							<button

								aria-label="Open Menu"
								title="Open Menu"
								className=" -mr-1 w-12 border-2 overflow-hidden border-red-500 h-12 transition duration-200 rounded-full focus:outline-none focus:shadow-outline"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								{user?.email ? (
									<img
										title={user?.displayName}
										className="  w-12 h-12 -mr-1 cursor-pointer rounded-full"
										src={user?.photoURL}
										alt=""
									/>
								) : (
									<>
										<img className=" cursor-pointer  rounded-full w-12 h-12" src={person} alt="" />
									</>
								)}
							</button>
							{isMenuOpen && (
								<div className="absolute top-12 right-5 mx-2 sm:mx-0 w-full sm:w-[400px]">

									<div ref={profileRef} className="p-5 ml-8 sm:ml-0 bg-white border rounded-tr-none  rounded-xl  shadow-sm">
										<div className="flex items-center justify-between mb-4">

											<div>

												<Link
													to=""
													aria-label="Resale Furniture"
													title="Resale Furniture"
													className="inline-flex items-center">
													{" "}
													<img className="w-10" src={logo} alt="" />
													<span className="ml-2 sm:text-xl font-bold tracking-wide uppercase">
														Resale Furniture

													</span>
												</Link>
											</div>
											<div>
												<button
													aria-label="Close Menu"
													title="Close Menu"
													className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
													onClick={() => setIsMenuOpen(false)}>
													<FaTimes className="text-2xl" />
												</button>
											</div>
										</div>
										<nav >
											<ul className="space-y-4">
												<li>
													<NavLink
														className={({ isActive }) =>
															isActive
																? "font-medium tracking-wide text-red-500   transition-colors duration-200 hover:text-deep-purple-accent-400"
																: "font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
														}
														to="/"
														aria-label="Home"
														title="Home">
														Home
													</NavLink>
												</li>


												<li>
													<NavLink
														to="/blog"
														aria-label="Blog"
														title="Blog"
														className={({ isActive }) =>
															isActive
																? "font-medium tracking-wide text-red-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
																: "font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
														}>
														Blog
													</NavLink>
												</li>

												<li>
													<NavLink
														to="/dashboard"
														aria-label="Dashboard"
														title="Dashboard"
														className={({ isActive }) =>
															isActive
																? "font-medium tracking-wide text-red-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
																: "font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
														}>
														Dashboard
													</NavLink>
												</li>

												{user?.email ? (
													<li>
														<button
															onClick={() => userLogOut()}
															className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
															aria-label="Log Out"
															title="Log Out">
															Log Out
														</button>
													</li>
												) : (
													<>
														<li>
															<Link
																to="/signin"
																className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
																aria-label="Sign up"
																title="Sign up">
																Sign In
															</Link>
														</li>

													</>
												)}
											</ul>
										</nav>
									</div>
								</div>
							)}
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
