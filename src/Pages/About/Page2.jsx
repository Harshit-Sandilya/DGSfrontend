import React from "react";
import "../../Styles/AboutUs.css";
import secratary from "../../Images/About/sec-dps.jpg";

export default function Page2() {
	return (
		<div className="about-message-container">
			<div className="about-msg-leaflet">
				<div className="about-leaflet-img">
					<img src={secratary} className="about-leaflet-img" />
				</div>
				<div className="about-leaflet-name">-Mr B L Ranwa</div>
			</div>
			<div className="about-msg-content">
				<div className="about-content-header">
					"Education is to equip young minds with tools to soar high and think beyond
					thinking."
				</div>
				<div className="about-content-body">
					Education is essential for every individual. Without education no country can
					prosper and vie with the challenges that lie ahead in the rapidly growing
					globalised economy. Education enables one to realize one's talents and
					understand one's responsibilities to propel one's personal growth and to make
					one a worthy citizen. Over the past decade, the environment of education has
					dramatically changed. We now live in an era where a critical understanding of
					the global dimensions to learning and development of students as global citizens
					are gaining importance. Quality education system encompassing quality pedagogy
					is vital for achieving success in the global arena. At the same time locating a
					quality service provider is critical in attaining success. In an attempt to
					provide quality service, Dundlod Girls’ School strives hard to generate good
					citizens. Besides, DGS inculcates the social and moral values in the students
					and ignites their minds to perform their best. DGS firmly believes in adherence
					to values that are most relevant to the academic community, anchored on the
					concept of integrity. DGS is centre of excellence and aims to dedicate itself
					fully to meet the vision of India by transforming students into highly talented
					individuals with commitment, unity and patriotism. I whole heartedly welcome
					everyone whoever seeks admission to DGS and wish them for their bright future.
				</div>
			</div>
		</div>
	);
}
