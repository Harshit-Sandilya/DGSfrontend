import React, { useEffect, useState } from "react";

function Experience(props) {
	const {data,modifyData}=props;
	const [addExp,setAdd]=useState(1);
	
	const handleChange=(index,value)=>{
		console.log(index)
		const newValues = data.experience;
  newValues[index] = value;
  modifyData('experience',newValues);
  console.log(data)
		
	}
	useEffect(()=>
	{
		modifyData('experience',[...data.experience,''])

	},[addExp])
	useEffect(()=>{
		modifyData('experience',[])
	},[])
	return (
		<div className="basic">
			{
			Array.from(Array(addExp)).map((value,index)=>
			(
		
				<textarea
				className="text-area Exparea"
				placeholder={
					"Post\n Years Worked\nOrganization\nAccomplishment during the period(if any)"
				}
				maxLength={60}
				onChange={(e)=>{handleChange(index,e.target.value)}}
			></textarea>

			))
			}
			
			{/* <input type="file" name="file" id="file" className="inputfile" /> */}
			<label  className="filetext" onClick={()=>{setAdd(addExp+1)}}>
				Add experience
			</label>
		</div>
	);
}

export default Experience;
