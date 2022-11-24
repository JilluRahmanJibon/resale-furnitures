import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";
import HomeCategories from "../HomeCategories/HomeCategories";

const Home = () => {
	useTitle("Home");
	return (
		<div>
			<Banner />
			<HomeCategories />
			<Gallery />
			<ContactUs />
		</div>
	);
};

export default Home;
