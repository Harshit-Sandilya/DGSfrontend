import React, { useEffect, useState } from "react";
function Education(props) {
	const { data,modifyData  } = props;
	const [bach,setBach]=useState("");
	const [masters,setMasters]=useState("");
	const [doct,setDoct]=useState("");
	const [high,setHigh]=useState("");

	useEffect(()=>{
		
			modifyData('education',[bach,masters,doct,high]);
	},[bach,masters,doct,high])
	return (
		<div className="basic">
			<div className="sub-title">Class X/XII</div>
			<textarea
				className="text-area Etarea"
				placeholder={"Class \n Marks scored \n Board \n School"}
				onChange={(e)=>{setHigh(e.target.value)}}
				maxLength={20}
			></textarea>
			<div className="sub-title">Bachelors</div>
			<textarea
				className="text-area Etarea"
				placeholder={"Degree\nMarks scored\nCollege/University"}
				maxLength={20}
				onChange={(e)=>{setBach(e.target.value)}}
			></textarea>
			<div className="sub-title">Masters</div>
			<textarea
				className="text-area Etarea"
				placeholder={"Degree\nMarks scored\nCollege/University"}
				maxLength={20}
				onChange={(e)=>{setMasters(e.target.value)}}
			></textarea>
			<div className="sub-title">Doctrate</div>
			<textarea
				className="text-area Etarea"
				placeholder={"Subject\nCollege/University"}
				maxLength={20}
				onChange={(e)=>{setDoct(e.target.value)}}
			></textarea>
		</div>
	);
}

export default Education;
