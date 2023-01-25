import React from "react";
import "../../Styles/AboutUs.css";
import dundlod from "../../Images/About/dps-dundlod.jpg";
import jhunjhunu from "../../Images/About/dps-jhunjhunu.jpeg";

export default function Page4() {
	const [over, setOver] = React.useState({
		dundlod: window.matchMedia("(max-width:900px)").matches,
		jhunjhunu: window.matchMedia("(max-width:900px)").matches,
	});
	function handleDundlod() {
		setOver((prev) => {
			return { ...prev, dundlod: !prev.dundlod };
		});
	}
	function handleJhunjhunu() {
		setOver((prev) => {
			return { ...prev, jhunjhunu: !prev.jhunjhunu };
		});
	}
	return (
		<div className="about-branch-container">
			<div
				className="about-branch-tile"
				onMouseEnter={handleDundlod}
				onMouseLeave={handleDundlod}
			>
				<div className="about-branch-tile-shown">
					<div className="about-tile-image">
						<img src={dundlod} className="about-tile-image" />
					</div>
					<div className="about-tile-text">
						Praesent sed nisl posuere, tempus velit vel, auctor nulla. Aenean ac neque
						lorem. Maecenas lacinia ligula neque, non tempus nisi pharetra et. Etiam in
						felis in nisl pretium rutrum et ac metus. Phasellus vehicula quam eu
						fermentum ullamcorper. Fusce fringilla non enim efficitur consequat.
						Phasellus vel enim vestibulum, mattis erat.
					</div>
				</div>
				{over.dundlod && (
					<div className="about-branch-tile-hidden">
						<a
							className="about-branch-tile-link"
							href="https://dundlodpublicschool.com/dundlod-school/"
						>
							Visit for yourself
						</a>
					</div>
				)}
			</div>
			<div
				className="about-branch-tile"
				onMouseEnter={handleJhunjhunu}
				onMouseLeave={handleJhunjhunu}
			>
				<div className="about-branch-tile-shown">
					<div className="about-tile-image">
						<img src={jhunjhunu} className="about-tile-image" />
					</div>
					<div className="about-tile-text">
						Praesent sed nisl posuere, tempus velit vel, auctor nulla. Aenean ac neque
						lorem. Maecenas lacinia ligula neque, non tempus nisi pharetra et. Etiam in
						felis in nisl pretium rutrum et ac metus. Phasellus vehicula quam eu
						fermentum ullamcorper. Fusce fringilla non enim efficitur consequat.
						Phasellus vel enim vestibulum, mattis erat.
					</div>
				</div>
				{over.jhunjhunu && (
					<div className="about-branch-tile-hidden">
						<a
							className="about-branch-tile-link"
							href="https://dundlodpublicschool.com/jhunjhunu-school/"
						>
							Visit for yourself
						</a>
					</div>
				)}
			</div>
		</div>
	);
}
