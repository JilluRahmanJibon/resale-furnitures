import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";

const Home = () => {
	useTitle("Home");
	return (
		<div>
			<Banner />
			<Gallery />
			<ContactUs />
		</div>
	);
};

export default Home;
