import React from "react";
import "../../Styles/AboutUs.css";

export default function AboutBar(props) {
	return (
		<div className="aboutBar">
			<div
				className={`about-bar-${props.page === 1 ? "active" : "inactive"}`}
				onClick={() => {
					props.change(1);
				}}
			>
				Chairman Message
			</div>
			<div
				className={`about-bar-${props.page === 2 ? "active" : "inactive"}`}
				onClick={() => {
					props.change(2);
				}}
			>
				Secratary Message
			</div>
			<div
				className={`about-bar-${props.page === 3 ? "active" : "inactive"}`}
				onClick={() => {
					props.change(3);
				}}
			>
				Principal Message
			</div>
			<div
				className={`about-bar-${props.page === 4 ? "active" : "inactive"}`}
				onClick={() => {
					props.change(4);
				}}
			>
				Other Branches
			</div>
		</div>
	);
}
