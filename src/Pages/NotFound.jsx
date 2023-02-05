import "../Styles/NotFound.css";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<div className="nf-container">
				<div className="nf-number">404</div>
				<div className="nf-message">The page you are looking for doesn't exist</div>
				<div
					className="nf-redirect"
					onClick={() => {
						navigate("/", { replace: true });
					}}
				>
					<Link className="nf-link" to="/">Go to Home</Link>
				</div>
			</div>
			<Navbar />
			<Footer />
		</div>
	);
}
