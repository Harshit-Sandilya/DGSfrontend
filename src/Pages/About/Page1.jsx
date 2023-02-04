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
				<div className="about-leaflet-name">-Mr B L Arya</div>
			</div>
			<div className="about-msg-content">
				<div className="about-content-header">
					“Education is not the filling of the mind with facts but initiating the mind”
				</div>
				<div className="about-content-body">
					Dundlod Public School was founded in 2002 with the main mission of rural
					education development through value based quality education with specific
					emphasis on holistic personality development. I decipher that the immediate
					requirement of present day’s smart student is to exploit the challenges and
					opportunities at hand at the outside in his/her personal and professional life
					so as to carve a niche in the society. In this way, every student will be able
					to shoulder the onus which they would be assigned in the times to come once they
					complete their schooling. After completing a successful and eventful journey of
					fifteen years, it is reckoned number one in India. It draws its students not
					only from Rajasthan but from other states of India also. DPS provides an
					environment conducive to active learning and personal growth with
					state-of-the-art infrastructure. We inspire the students to develop
					communication skills and groom their personality which enables them to stand out
					with their heads up in the world outside and face with courage and confidence
					the challenges that confront them in their future life. Our education system has
					phenomenal powers to bring substantial benefits to the individual and the
					society. DPS’ prime objective is to meet the intellectual, social and academic
					needs of every student through appropriate and relevant quality inputs. I extend
					a warm welcome to our students and wish them a great future after a rewarding
					stint of educational career at DPS.
				</div>
			</div>
		</div>
	);
}
