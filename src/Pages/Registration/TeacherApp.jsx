import React, { useEffect, useState } from "react";
import "../../Styles/TeacherApp.css";
import tback from "../../Images/Registration/bacground.jpg";

import Basic from "./Basic";
import Education from "./Education";
import Experience from "./Experience";
import Misc from "./Misc";
import DropDown from "./Bar";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { postTeacher } from "../../api";

function Tapplication() {
	const [isActive, setActive] = useState(0);
	const [data,setData]=useState({married:'unmarried',gender:'female',experience:[]});
	const modifyData=(field,value)=>{
		setData({...data, [field]:value});
	}
	const handleSubmit=()=>{
	 postTeacher(data);
		
	}
	 console.log(data)
	return (
		<div>
			<div className="space-top"></div>
			<div className="Tback">
				<img className="tback_img" src={tback} alt="" />
				<div className="Tlayout">
					<div className="Ttitle">Teacher’s Application</div>
					<div className="Tbar">
						<button
							className={`bar-section ${isActive === 0 ? "Tactive" : ""}`}
							onClick={() => {
								setActive(0);
							}}
						>
							Basic Info
						</button>
						<button
							className={`bar-section ${isActive === 1 ? "Tactive" : ""}`}
							onClick={() => {
								setActive(1);
							}}
						>
							Education
						</button>
						<button
							className={`bar-section ${isActive === 2 ? "Tactive" : ""}`}
							onClick={() => {
								setActive(2);
							}}
						>
							Experience
						</button>
						<button
							className={`bar-section ${isActive === 3 ? "Tactive" : ""}`}
							onClick={() => {
								setActive(3);
							}}
						>
							Miscellaneous
						</button>

						<DropDown isActive={isActive} setActive={setActive} />
					</div>

					{
						{
							0: (
								<Basic
								data={data}
								setData={setData}
								modifyData={modifyData}
								/>
							),
							1: <Education 
							data={data}
								setData={setData}
								modifyData={modifyData}
							/>,
							2: <Experience data={data}
							setData={setData}
							modifyData={modifyData}/>,
							3: <Misc 	data={data}
							setData={setData}
							modifyData={modifyData}/>,
						}[isActive]
					}

					<button
						className="next-btn"
						onClick={() => {
							if (isActive !== 3) setActive(isActive + 1);
							else handleSubmit();
						}}
					>
						{isActive !== 3 ? "Next" : "Agree and Continue"}
					</button>
				</div>
			</div>
			<Navbar />
			<Footer />
		</div>
	);
}

export default Tapplication;
