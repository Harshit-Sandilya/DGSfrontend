import React from "react";
function Education() {
  return (
    <div className="basic">
      <div className="sub-title">Class X/XII</div>
      <textarea
        className="text-area Etarea"
        placeholder={"Class \n Marks scored \n Board \n School"}
        maxLength={20}
      ></textarea>
      <div className="sub-title">Bachelors</div>
      <textarea
        className="text-area Etarea"
        placeholder={"Degree\nMarks scored\nCollege/University"}
        maxLength={20}
      ></textarea>
      <div className="sub-title">Masters</div>
      <textarea
        className="text-area Etarea"
        placeholder={"Degree\nMarks scored\nCollege/University"}
        maxLength={20}
      ></textarea>
      <div className="sub-title">Doctrate</div>
      <textarea
        className="text-area Etarea"
        placeholder={"Subject\nCollege/University"}
        maxLength={20}
      ></textarea>
    </div>
  );
}

export default Education;