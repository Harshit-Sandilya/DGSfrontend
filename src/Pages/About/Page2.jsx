import React from "react";
import "../../Styles/AboutUs.css";
import principal from "../../Images/About/sec-dps.jpg";

export default function Page2() {
	return (
		<div className="about-message-container">
			<div className="about-msg-leaflet">
				<div className="about-leaflet-img">
					<img src={principal} className="about-leaflet-img" />
				</div>
				<div className="about-leaflet-name">-Shipra Sharma </div>
			</div>
			<div className="about-msg-content">
				<div className="about-content-header"></div>
				<div className="about-content-body">
					In today's scenario, children live in a world where values are changing fast. So
					we have to recognize the importance of aesthetics and strive hard for the
					student's mental and spiritual development. Nothing can be taken for granted
					that makes students responsible and sensible human beings who have much to
					contribute towards the growth of society and the nation. DGS fraternity welcomes
					every new productive association with the school. DUNDLOD GIRLS' SCHOOL
					Balwantpura is a temple of learning that radiates knowledge and excellence for
					the pupils who come here to grow and develop. The holistic development in the
					salubrious environs of the huge campus brings each innocent heart closer to
					nature in a melodious song of unison. Academic excellence is a must-do on our
					priority list, while we encompass the core with a strong value system that shall
					sustain these young minds in the journey of their lives. We strengthen their
					foundations with the bulwark of our Indian culture and tradition but teach
					changes with an open, yet, discerning mind. them to embrace progressive Every
					girl who steps into this veritable wonderland of rambling paths, trees, flowers,
					and exotic birds gets to enjoy best of both the world's privacy and peace
					combined with modern links. She celebrates diversity in the learning environment
					which promotes independent thinkers with a happy mind and compassion towards
					other beings. She understands that she needs to compete with herself by
					stretching her boundaries, rather competing with others to be successful and
					attain excellence in life. She must aspire to attain new heights, not for the
					world to see her at the top rather for her to see the world from the top. I am
					confident enough that the DGS will make every new entity stronger day by day,
					adding a new leaf to the grandeur of the school.
				</div>
			</div>
		</div>
	);
}
