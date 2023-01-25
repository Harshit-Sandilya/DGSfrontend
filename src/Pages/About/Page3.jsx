import React from "react";
import "../../Styles/AboutUs.css";
import principal from "../../Images/About/principal-dps.jpg";

export default function Page3() {
	return (
		<div className="about-message-container">
			<div className="about-msg-leaflet">
				<div className="about-leaflet-img">
					<img src={principal} className="about-leaflet-img" />
				</div>
				<div className="about-leaflet-name">-Mr ------</div>
			</div>
			<div className="about-msg-content">
				<div className="about-content-header">
					“Education is not the words in a book but it is how to lead the world”
				</div>
				<div className="about-content-body">
					It is indeed a unique opportunity for me to communicate to you and I accord a
					very warm welcome to those who are eager to come into our fold. Every creation
					is a self-portrait of the person who created it. Needless to say that Dundlod
					Public School is a class of its own and a ‘self –portrait of excellence in
					Education’. DPS has been in the field of education since 2002 and our insatiable
					thirst for achieving excellence in education has taken us to greater heights of
					glory. I feel elated that in recognition of our excellence in education, we have
					been awarded with many prestigious awards from different walks of life. As you
					are aware, education bestows man with knowledge and reason, makes the mind
					creative, provides opportunity to understand the world better and guide one to
					the right path. Globalization and increasing diversity in man’s needs generate
					enhanced demands for competitive skill and DPS provides the platform that
					fulfils such needs of the students. DPS steers the ship of knowledge and guides
					the students in the right direction to provide them the acumen that is needed
					for the ever-changing world. We understand the significance of learning and
					enable students to use their potentials to optimum levels, and commit to develop
					knowledge, leadership and other professional skills which are vital for the
					transformation of the students into worthy citizens. Our focused attention,
					excellent teaching and able guidance will provide the students with requisite
					knowledge and skills and make them true citizens.
				</div>
			</div>
		</div>
	);
}
