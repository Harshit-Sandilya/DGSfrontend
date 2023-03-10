import "../../Styles/StuReg.css";
import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import { postStudent } from "../../api";

export default function StuReg() {
	const [formData, setFormData] = React.useState({
		fullname: "",
		email: "",
		class: "",
		fathername: "",
		mothername: "",
		dob: "",
		phone: "",
		iswhatsapp: true,
		whatsapp: "",
		address: "",
	});
	const navigate = useNavigate();

	function handleChange(e) {
		setFormData((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
			};
		});
	}
	function isValid(data) {
		let keys = Object.keys(data);
		const em = /^[\w.+\-]+@gmail\.com$/;
		const al = /^[A-Za-z ]+$/;
		const dt =
			/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
		const ph = /^\+\d{12}$/;
		for (let i = 0; i < keys.length; i++) {
			if (data[keys[i]] === "") {
				window.alert("Please enter " + keys[i]);
				return false;
			}
		}
		if (!al.test(data.fullname) || !al.test(data.fathername) || !al.test(data.mothername)) {
			window.alert("Names should be alphabets");
			return false;
		}
		if (!em.test(data.email)) {
			window.alert("Please enter valid email");
			return false;
		}
		// if (!dt.test(data.date)) {
		// 	window.alert("Please enter valid date format (dd-mm-yyyy;dd.mm.yyyy;dd/mm/yyyy)");
		// 	return false;
		// }
		if (!ph.test(data.phone)) {
			window.alert("Please enter valid phone number");
			return false;
		}
		if (!ph.test(data.whatsapp)) {
			window.alert("Please enter valid phone number");
			return false;
		}
		return true;
	}
	function handleSubmit() {
		let sendData = formData;
		if (sendData.iswhatsapp)
			sendData = {
				...sendData,
				whatsapp: sendData.phone,
			};
		if (!isValid(sendData)) return;
		console.log(sendData);
		postStudent(sendData);
		navigate("/", { replace: true });
	}

	return (
		<div>
			<div className="reg-container">
				<div className="form-container">
					<h1 className="form-head">Student Registration</h1>
					<div className="form-body">
						<div className="row1">
							<div className="name">
								<input
									className="student-text-input"
									name="fullname"
									placeholder="Full Name"
									type="text"
									value={formData.fullname}
									onChange={(event) => handleChange(event)}
								></input>
							</div>
							<div className="student-email">
								<input
									className="student-text-input"
									name="email"
									placeholder="Email"
									type="email"
									value={formData.email}
									onChange={(event) => handleChange(event)}
								></input>
							</div>
							<div className="class">
								<label htmlFor="class" className="labels">
									Class
								</label>
								<select
									className="class-input"
									name="class"
									value={formData.class}
									onChange={(event) => {
										handleChange(event);
									}}
								>
									<option vlaue="">--</option>
									<option value="III">III</option>
									<option value="IV">IV</option>
									<option value="V">V</option>
									<option value="VI">VI</option>
									<option value="VII">VII</option>
									<option value="VIII">VIII</option>
								</select>
							</div>
						</div>
						<div className="row2">
							<div className="father-name">
								<input
									className="student-text-input"
									name="fathername"
									placeholder="Father's Name"
									type="text"
									value={formData.fathername}
									onChange={(event) => handleChange(event)}
								></input>
							</div>
							<div className="mother-name">
								<input
									className="student-text-input"
									name="mothername"
									placeholder="Mother's Name"
									type="text"
									value={formData.mothername}
									onChange={(event) => handleChange(event)}
								></input>
							</div>
						</div>
						<div className="row3">
							<div className="student-dob">
								<label htmlFor="dob" className="labels">
									Date of Birth
								</label>
								<input
									className="student-text-input"
									name="dob"
									placeholder="dd.mm.yyyy"
									type="text"
									value={formData.dob}
									onChange={(event) => handleChange(event)}
								></input>
							</div>
							<div className="phone-number">
								<label htmlFor="phone" className="labels">
									Phone Number
								</label>
								<input
									className="student-text-input"
									name="phone"
									placeholder="+91XXXXXXXXXX"
									type="text"
									value={formData.phone}
									onChange={(event) => handleChange(event)}
								></input>
							</div>
						</div>
						<div className="row4">
							<div className="check">
								<input
									className="check-input"
									name="iswhatsapp"
									checked={formData.iswhatsapp}
									type="checkbox"
									onChange={(event) => handleChange(event)}
								></input>
								<h6 className="check-text">This is also my WhatsApp number</h6>
							</div>
							{!formData.iswhatsapp && (
								<div className="whatsapp-number" id="whatsapp-id">
									<label htmlFor="whatsapp" className="labels">
										WhatsApp Number
									</label>
									<input
										className="student-text-input"
										name="whatsapp"
										placeholder="+91XXXXXXXXXX"
										type="text"
										value={formData.whatsapp}
										onChange={(event) => handleChange(event)}
									></input>
								</div>
							)}
						</div>
						<div className="row5">
							<label className="labels" htmlFor="address">
								Address
							</label>
							<textarea
								className="address"
								name="address"
								type="text"
								value={formData.address}
								onChange={(event) => handleChange(event)}
							></textarea>
						</div>
						<div className="row6">
							<button
								className="submit"
								onClick={() => {
									handleSubmit();
								}}
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<Navbar />
		</div>
	);
}
