import React from "react";
import female from "../../images/female.png";
import male from "../../images/male.png";
import married_img from "../../images/married.png";
import unmarried from "../../images/unmar.png";
function Basic(props) {
  const { gender, setgender, married, setmarried } = props;
  return (
    <div className="basic">
      <div className="brow">
        <input
          type="text"
          className="input_field"
          placeholder={"Full Name"}
        ></input>
        <input className="input_field" placeholder={"Post Applied For"}></input>
      </div>
      <div className="brow">
        <input
          type="text"
          className="input_field"
          placeholder={"Father’s Name"}
        ></input>
        <input className="input_field" placeholder={"Occupation"}></input>
      </div>
      <div className="dob">Date of Birth</div>
      <div className="brow">
        <input type="date" className="input_field" placeholder={""}></input>
        <input className="input_field" placeholder={"Nationality"}></input>
      </div>
      <div className="brow">
        <div className="switch">
          <div
            className={`ele ele1 ${gender === "female" ? "Sactive" : ""}`}
            onClick={() => {
              setgender("female");
            }}
          >
            <div className="Stext">Female</div>
            <img src={female} className="switchicon"></img>
          </div>
          <div
            className={`ele ele2 ${gender === "male" ? "Sactive" : ""}`}
            onClick={() => {
              setgender("male");
            }}
          >
            <img src={male} className="switchicon"></img>
            <div className="Stext">Male</div>
          </div>
        </div>
        <div className="switch">
          <div
            className={`ele ele1 ${married === "unmarried" ? "Sactive" : ""}`}
            onClick={() => {
              setmarried("unmarried");
            }}
          >
            <div className="Stext">Married</div>
            <img src={married_img} className="switchicon"></img>
          </div>
          <div
            className={`ele ele2 ${married === "married" ? "Sactive" : ""}`}
            onClick={() => {
              setmarried("married");
            }}
          >
            <img src={unmarried} className="switchicon"></img>
            <div className="Stext">Unmarried</div>
          </div>
        </div>
      </div>
      <div className="brow">
        <input
          type="text"
          className="input_field"
          placeholder={"Spouse’s Name"}
        ></input>
        <input className="input_field" placeholder={"Occupation"}></input>
      </div>
      <textarea
        className="text-area"
        placeholder={"Permanent Address........"}
        maxLength={20}
      ></textarea>
    </div>
  );
}

export default Basic;
