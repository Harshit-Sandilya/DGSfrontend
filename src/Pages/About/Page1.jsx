import React from "react";
import "../../Styles/AboutUs.css";
import chairman from "../../Images/About/chairmen_img.jpg";

export default function Page1() {
	return (
		<div className="about-message-container">
			<div className="about-msg-leaflet">
				<div className="about-leaflet-img">
					<img src={chairman} className="about-leaflet-img" />
				</div>
				<div className="about-leaflet-name">-Mr S S Ranwa</div>
			</div>
			<div className="about-msg-content">
				<div className="about-content-header">
					“Education is not the learning of facts, but the training of the mind to think.”
				</div>
				<div className="about-content-body">
					Dear All With the sole raison d'être to give easy access to the girls to the
					crème de la creme education that can catapult them to a new height where they
					can carve a niche in society on par with their potential, Dundlod Girls' School
					has come into existence. Riding high on a vision that claims to provide a
					congenial environment for each girl child to develop fearless intellectual
					curiosity and a mission to build a strong foundation for life – long learning,
					the school vows to leave an everlasting imprint on the Shekhawati region. Little
					wonder the immediate requirement of the present day's smart student is to
					exploit the challenges and opportunities at hand at the outside in her personal
					and professional life to be on the top of the tree. In this way, every student
					will be able to shoulder the onus which they would be assigned in the times to
					come once they complete their schooling. Our education system has phenomenal
					powers to bring substantial benefits to the individual and the society. DGS'
					prime objective is to meet the intellectual, social and academic needs of every
					student through appropriate and relevant quality inputs. DGS has shaped itself
					into a brand and is sine qua non for quality and successful life. I extend a
					warm welcome to our students and wish them a great future after a rewarding
					stint of educational career at DGS.
				</div>
			</div>
		</div>
	);
}
