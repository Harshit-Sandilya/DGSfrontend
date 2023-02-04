import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "../../Styles/ContactUs.css";
import call from "../../Images/Home/contact_phone_FILL1_wght400_GRAD0_opsz48.png";
import mail from "../../Images/Home/contact_mail_FILL1_wght400_GRAD0_opsz48.png";
import { postContact } from "../../api";

export default function ContactUs() {
	const [formData, setFormData] = React.useState({
		fullname: "",
		email: "",
		subject: "",
		body: "",
	});
	function handleChange(e) {
		setFormData((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
			};
		});
	}
	function checkQuery(query) {
		const em = /^[\w.+\-]+@gmail\.com$/;
		const al = /^[A-Za-z]+$/;
		if (query.fullname === "") {
			window.alert("Please enter your fullname");
			return false;
		}
		if (!al.test(query.fullname)) {
			window.alert("Please enter your correct fullname");
			return false;
		}
		if (query.email === "") {
			window.alert("Please enter your email address");
			return false;
		}
		if (!em.test(query.email)) {
			window.alert("Please enter a valid email address");
			return false;
		}
		if (query.subject === "") {
			window.alert("Please enter a subject");
			return false;
		}
		if (query.body === "") {
			window.alert("Please fill out the details");
			return false;
		}
		return true;
	}
	function handleSubmit() {
		if (!checkQuery(formData)) return;
		console.log(formData);
		postContact(formData);
		window.alert("We shall contact you soon");
		setFormData({ fullname: "", email: "", subject: "", body: "" });
	}
	return (
		<div>
			<div className="contact-container">
				<div className="contact-info">
					<div className="contact-info-section">
						<img src={call} className="contact-info-img"></img>
						<div className="contact-info-text">
							<p className="conatct-info-text">Call us at:</p>
							<p className="conatct-info-text">+91-9314011566</p>
							<p className="conatct-info-text">01594-253561</p>
						</div>
					</div>
					<div className="contact-info-section">
						<img src={mail} className="contact-info-img"></img>
						<div className="contact-info-text">
							<p>Mail us at:</p>
							<p>dpsdundlod@gmail.com</p>
						</div>
					</div>
				</div>
				<div className="contact-seprator">
					<div className="contact-sep-line"></div>
					<div className="contact-sep-text">or</div>
					<div className="contact-sep-line"></div>
				</div>
				<div className="contact-write">
					<div className="contact-write-basic">
						<input
							className="contact-write-input"
							name="fullname"
							placeholder="Full Name"
							type="text"
							value={formData.fullname}
							onChange={(event) => handleChange(event)}
						/>
						<input
							className="contact-write-input"
							name="email"
							placeholder="Email-id"
							type="email"
							value={formData.email}
							onChange={(event) => handleChange(event)}
						/>
					</div>
					<div className="contact-write-sub">
						<p className="contact-write-sub-text">Re :</p>
						<input
							className="contact-write-sub-input"
							name="subject"
							placeholder="Subject"
							type="text"
							value={formData.subject}
							onChange={(event) => {
								handleChange(event);
							}}
						/>
					</div>
					<div className="contact-write-body">
						<textarea
							className="contact-write-body-input"
							name="body"
							type="text"
							placeholder="Body"
							value={formData.body}
							onChange={(event) => {
								handleChange(event);
							}}
						/>
					</div>
					<div className="contact-write-submit">
						<button
							className="contact-write-submit-btn"
							onClick={() => {
								handleSubmit();
							}}
						>
							Submit
						</button>
					</div>
				</div>
			</div>
			<Navbar page="Contact" />
			<Footer />
		</div>
	);
}
