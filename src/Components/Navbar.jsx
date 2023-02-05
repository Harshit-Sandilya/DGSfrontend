import "../Styles/Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
	const [open, setOpen] = React.useState(false);
	function handleLogin() {
		alert("Coming soon....");
	}
	function handleMenu() {
		let x = window.matchMedia("(max-width: 900px)");
		let styling = document.getElementById("menu-list").style;
		if (x.matches) {
			styling.display = open ? "none" : "flex";
			setOpen((prev) => !prev);
		}
	}

	return (
		<div className="nav">
			<div className="menu">
				<Link to="#">
					<div className="menu-icon" onClick={handleMenu}></div>
				</Link>
			</div>
			<div className="logo"></div>
			<div className="login">
				<button className="login-btn" onClick={handleLogin}>
					<div className="btn-icon"></div>
					<Link className="btn-txt" to="#">
						Login
					</Link>
				</button>
			</div>
			<div className="pages" id="menu-list">
				<Link
					to={"/"}
					className={props.page == "Home" ? "active" : "page-links"}
				>
					Home
				</Link>
				<Link
					to={ "/aboutus"}
					className={props.page == "About" ? "active" : "page-links"}
				>
					About us
				</Link>
				<Link
					to={"/activites"}
					className={props.page == "Activities" ? "active" : "page-links"}
				>
					Activities
				</Link>
				<Link
					to={ "/admissiondetails"}
					className={props.page == "Admission" ? "active" : "page-links"}
				>
					Admission
				</Link>
				<Link
					to={"/calender"}
					className={props.page == "Calender" ? "active" : "page-links"}
				>
					Calender
				</Link>
				<Link
					to={"/gallery"}
					className={props.page == "Gallery" ? "active" : "page-links"}
				>
					Gallery
				</Link>
				<Link
					to={ "/contactus"}
					className={props.page == "Contact" ? "active" : "page-links"}
				>
					Contact us
				</Link>
			</div>
		</div>
	);
}
