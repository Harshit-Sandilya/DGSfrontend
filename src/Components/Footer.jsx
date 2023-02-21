import "../Styles/Footer.css";
import React from "react";
import Mess from "../FoodMenu.pdf";
import Brochure from "../brochure.pdf";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer-logo"></div>
			<div className="seprator"></div>
			<div className="quick-links">
				<div className="quick-links-head">
					<h6 className="links-heading">Quick Links</h6>
				</div>
				<div className="links-list">
					<Link to={Brochure} target="_blank" className="link">
						Brochure
					</Link>
					<Link to="/hostel" className="link">
						Hostel
					</Link>
					<Link to={Mess} target="_blank" className="link">
						Mess Menu
					</Link>
					<Link to="/location" className="link">
						Location
					</Link>
					<Link to="/rules" className="link">
						Rules and Regulations
					</Link>
					<Link to="/scholarship" className="link">
						Scholarships
					</Link>
					<Link to="/uniform" className="link">
						Uniform
					</Link>
				</div>
			</div>
			<div className="vertical-sep"></div>
			<div className="seprator"></div>
			<div className="footer-contact-info">
				<div className="phone">
					<div className="phone-logo"></div>
					<div className="phone-text">+91-9314011566/01594-253561</div>
				</div>
				<div className="mail">
					<div className="mail-logo"></div>
					<div className="mail-text">dpsdundlod@gmail.com</div>
				</div>
			</div>
		</div>
	);
}
