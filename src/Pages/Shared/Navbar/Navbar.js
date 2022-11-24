import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import logo from '../../../Pages/assets/logo.png'
import person from '../../../Pages/assets/icons/person.svg'
const Navbar = () => {
	const { user, userLogOut } = useContext(AuthContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div>
			<div className="">
				<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
					<div className="relative flex items-center justify-between">
						<div className="lg:w-0 w-full">
							<Link
								to="/"
								aria-label="Bengal Furniture"
								title="Bengal Furniture"
								className="inline-flex items-center">
								<img className="sm:w-10 w-8" src={logo} alt="" />
								<span className="ml-2 sm:block hidden sm:text-xl font-bold tracking-wide">
									BengalFurniture
								</span>
							</Link>
						</div>
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
						</ul>

						<div className="lg:hidden z-50 mr-3">
							<button
								aria-label="Open Menu"
								title="Open Menu"
								className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
								onClick={() => setIsMenuOpen(true)}>
								<FaBars />
							</button>
							{isMenuOpen && (
								<div className="absolute top-0 left-0 w-full">
									<div className="p-5 bg-white border rounded shadow-sm">
										<div className="flex items-center justify-between mb-4">
											<div>
												<Link
													to=""
													aria-label="Bengal Furniture"
													title="Bengal Furniture"
													className="inline-flex items-center">
													{" "}
													<img className="w-10" src={logo} alt="" />
													<span className="ml-2 text-xl font-bold tracking-wide uppercase">
														Bengal Furniture
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
										<nav>
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
						<ul className="flex items-center  space-x-8 lg:flex">
							{user?.email ? (
								<div className="flex gap-2 items-center ">
									{" "}
									<button
										onClick={() => userLogOut()}
										className="shadow-xl hidden lg:block px-3 rounded h-9">
										Log Out
									</button>
									<div className="">
										<img
											title={user?.displayName}
											className="sm:w-12  sm:h-12 w-10 h-10  cursor-pointer rounded-full"
											src={user?.photoURL}
											alt=""
										/>{" "}
									</div>
								</div>
							) : (
								<>
									<li>
										<NavLink
											to="signin"
											className="inline-flex hidden lg:block items-center justify-center py-2 font-semibold px-6 tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
											aria-label="Sign In"
											title="Sign In">
											Sign In
										</NavLink>
									</li>
									<img className="sm:w-12  sm:h-12 w-10 h-10" src={person} alt="" />
								</>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
