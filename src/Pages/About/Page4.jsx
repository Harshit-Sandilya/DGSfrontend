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
						Dundlod Public School for Excellence. Since our establishment, we have been
						continuously honoured with the first prize in both Independence Day and the
						Republic Day parade held at headquarter confirming our belief in building
						disciplined and decent citizens. Given our unique process of imparting
						education and inculcating good manners and etiquette in our students, we
						have been every now and then felicitated by local administration reflecting
						our stress on working at grass root.
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
						Aching for an institution that people can claim its own and genuine, the
						school management ,in an earnest endeavor, tries to seek all possible means
						to give a platform to its students for their self-exposure which in return
						paves a way for their self and independent growth. Jhunjhunu School strives
						hard to cash on the co-curricular activities that are within its access so
						as to have a glittering collection of memoir. Be it school, district, state
						or national level, it undoubtedly avails itself of these activities and
						students bring laurels to school.
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
