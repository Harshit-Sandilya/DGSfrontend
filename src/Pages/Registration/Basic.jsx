import React from "react";
import female from "../../Images/Registration/female.png";
import male from "../../Images/Registration/male.png";
import married_img from "../../Images/Registration/married.png";
import unmarried from "../../Images/Registration/unmar.png";
function Basic(props) {
	const { data,modifyData  } = props;
	return (
		<div className="basic">
			<div className="brow">
				<input type="text" className="input_field" placeholder={"Full Name"} onChange={(e)=>{modifyData('name',e.target.value)}}></input>
				<input className="input_field" placeholder={"Post Applied For" } onChange={(e)=>{modifyData('post',e.target.value)}} ></input>
			</div>
			<div className="brow">
			<input className="input_field" placeholder={"Email"} onChange={(e)=>{modifyData('email',e.target.value)}} ></input>
				<input type="text" className="input_field" placeholder={"Father’s Name"} onChange={(e)=>{modifyData('fatherName',e.target.value)}} ></input>
				
			</div>
			<div className="dob">Date of Birth</div>
			<div className="brow">
				<input type="date" className="input_field" placeholder={""} onChange={(e)=>{modifyData('dob',e.target.value.toString())}} ></input>
				<input className="input_field" placeholder={"Nationality"} onChange={(e)=>{modifyData('nationality',e.target.value)}} ></input>
			</div>
			<div className="brow">
				<div className="switch">
					<div
						className={`ele ele1 ${data.gender === "female" ? "Sactive" : ""}`}
						onClick={() => {
							modifyData('gender','female')

						}}
					>
						<div className="Stext">Female</div>
						<img src={female} className="switchicon"></img>
					</div>
					<div
						className={`ele ele2 ${data.gender === "male" ? "Sactive" : ""}`}
						onClick={() => {
							modifyData('gender','male')
						}}
					>
						<img src={male} className="switchicon"></img>
						<div className="Stext">Male</div>
					</div>
				</div>
				<div className="switch">
					<div
						className={`ele ele1 ${data.married === "married" ? "Sactive" : ""}`}
						onClick={() => {
							modifyData('married','married')
						}}
					>
						<div className="Stext">Married</div>
						<img src={married_img} className="switchicon"></img>
					</div>
					<div
						className={`ele ele2 ${data.married === "unmarried" ? "Sactive" : ""}`}
						onClick={() => {
							modifyData('married','unmarried')
						}}
					>
						<img src={unmarried} className="switchicon"></img>
						<div className="Stext">Unmarried</div>
					</div>
				</div>
			</div>
			{data.married=='married'&&<div className="brow">
				<input type="text" className="input_field" placeholder={"Spouse’s Name"} onChange={(e)=>{modifyData('spouse',e.target.value)}} ></input>
				<input className="input_field" placeholder={"Occupation"} onChange={(e)=>{modifyData('spouseOcc',e.target.value)}} ></input>
			</div>}
			
			<textarea
				className="text-area"
				placeholder={"Permanent Address........"}
				maxLength={20}
				onChange={(e)=>{modifyData('address',e.target.value)}} 
			></textarea>
		</div>
	);
}

export default Basic;
