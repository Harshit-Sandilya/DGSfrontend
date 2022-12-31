import React from "react";
import "../Styles/Location.css";
import Footer from "./Footer";
import JoinUs from "./JoinUs";
import Navbar from "./Navbar";

function Location() {
	return (
		<div>
			<div className="Location-Container">
				<iframe
					style={{ width: "100%", height: "500px" }}
					id="gmap_canvas"
					src="https://maps.google.com/maps?q=Dundlod%20Girl's%20School&t=&z=13&ie=UTF8&iwloc=&output=embed"
					frameborder="0"
					scrolling="no"
					marginheight="0"
					marginwidth="0"
				></iframe>
			</div>
			<Navbar />
			<Footer />
			<JoinUs />
		</div>
	);
}
export default Location;
