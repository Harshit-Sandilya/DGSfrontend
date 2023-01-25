import React from "react";

function Experience() {
	return (
		<div className="basic">
			<textarea
				className="text-area Exparea"
				placeholder={
					"Post\n Years Worked\nOrganization\nAccomplishment during the period(if any)"
				}
				maxLength={20}
			></textarea>
			<input type="file" name="file" id="file" className="inputfile" />
			<label for="file" className="filetext">
				Add experience
			</label>
		</div>
	);
}

export default Experience;
