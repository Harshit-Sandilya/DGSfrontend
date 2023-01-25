import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import JoinUs from "../../Components/JoinUs";
import AboutBar from "./AboutBar";
import "../../Styles/AboutUs.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

export default function AboutUs() {
	const [page, setPage] = React.useState(1);
	return (
		<div>
			<div className="about-container">
				<AboutBar page={page} change={setPage} />
				{page === 1 && <Page1 />}
				{page === 2 && <Page2 />}
				{page === 3 && <Page3 />}
				{page === 4 && <Page4 />}
			</div>
			<Navbar page="About" />
			<Footer />
			<JoinUs />
		</div>
	);
}
