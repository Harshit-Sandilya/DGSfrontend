import { Input } from "postcss";
import React from "react";
import "./css/form.css";
export default function Job() {
  const [english, setenglish] = React.useState(false);
  const [hindi, sethindi] = React.useState(false);

  const handleChangeOne = () => {
    setenglish(!english);
  };

  const handleChangeTwo = () => {
    sethindi(!hindi);
  };
  return (
    <div className="form_container">
      <form className="form">
        <div className="application">
          <label className="header2 application" style={{ margin: "0 10px" }}>
            Application Form
          </label>
        </div>
        <div className="field">
          <label
            className="block text-lr font-medium text-black-700"
            style={{ margin: "0 10px" }}
          >
            Name
          </label>
          <div className="row">
            <input
              name="Fname"
              className="input"
              placeholder=" First Name"
            ></input>
            <input
              name="Sname"
              className="input"
              placeholder=" Last Name"
            ></input>
          </div>
        </div>
        <div className="field">
          <label
            className="block text-sm font-medium text-black-700"
            style={{ margin: "0 10px" }}
          >
            Father's Name
          </label>
          <div className="row">
            <input
              name="Fname"
              className="input"
              placeholder=" First Name"
            ></input>
            <input
              name="Sname"
              className="input"
              placeholder=" Last Name"
            ></input>
          </div>
        </div>
        <div className="field">
          <label
            className="block text-sm font-medium text-black-700"
            style={{ margin: "0 10px" }}
          >
            Age
          </label>
          <div className="row">
            <input name="age" className="input" placeholder="Age"></input>
          </div>
        </div>
        <div className="field">
          <label
            className="block text-sm font-medium text-black-700"
            style={{ margin: "0 10px" }}
          >
            D.O.B
          </label>
          <div className="row">
            <input
              name="dob"
              className="input"
              type="date"
              id="start"
              min="1950-01-01"
              max="2010-12-31"
            ></input>
          </div>
        </div>
        <div>
          <div>
            <label
              className="block text-sm font-medium text-black-700"
              style={{ margin: "0 10px" }}
            >
              Languages
            </label>
          </div>
          <div className="check">
            <label className="check" style={{ margin: "0 10px" }}>
              English
            </label>
            <input
              className="checkbox"
              type={"checkbox"}
              value={english}
              onChange={handleChangeOne}
            />
          </div>
          <div className="check">
            <label
              className="block text-sm font-small text-grey-700"
              style={{ margin: "0 10px" }}
            >
              Hindi
            </label>
            <input
              className="checkbox"
              type={"checkbox"}
              label="Value 1"
              value={hindi}
              onChange={handleChangeTwo}
            />
          </div>
        </div>

        <div className="header2">Educational Qualifications</div>
        <div className="field">
          <label
            className="block text-sm font-medium text-black-700"
            style={{ margin: "0 10px" }}
          >
            Qualification
          </label>
          <div className="row">
            <input
              name="age"
              className="input"
              placeholder="Qualification"
            ></input>
          </div>
        </div>
        <div className="field">
          <label
            className="block text-sm font-medium text-black-700"
            style={{ margin: "0 10px" }}
          >
            Institute
          </label>
          <div className="row">
            <input name="age" className="input" placeholder="Institute"></input>
          </div>
        </div>
        <div className="field">
          <label
            className="block text-sm font-medium text-black-700"
            style={{ margin: "0 10px" }}
          >
            Board
          </label>
          <div className="row">
            <input name="age" className="input" placeholder="Board"></input>
          </div>
        </div>
        <div className="field">
          <label
            className="block text-sm font-medium text-black-700"
            style={{ margin: "0 10px" }}
          >
            Marks/Grade
          </label>
          <div className="row">
            <input
              name="age"
              className="input"
              placeholder="Marks/Grade
"
            ></input>
          </div>
        </div>

        <div className="header2">Expernience</div>
        <div className="field">
          <label
            className="block text-sm font-medium text-black-700"
            style={{ margin: "0 10px" }}
          >
            Organization And Address
          </label>
          <div className="row">
            <input
              name="age"
              className="input"
              placeholder="Organizations"
            ></input>
          </div>
        </div>
        <div className="field">
          <label
            className="block text-sm font-medium text-black-700"
            style={{ margin: "0 10px" }}
          >
            Designation
          </label>
          <div className="row">
            <input
              name="age"
              className="input"
              placeholder="Designation"
            ></input>
          </div>
        </div>
        <div className="field">
          <label
            className="block text-sm font-medium text-black-700"
            style={{ margin: "0 10px" }}
          >
            Personal Achievements ( if any)
          </label>
          <div className="row">
            <input
              name="age"
              className="input"
              placeholder="Achievements"
            ></input>
          </div>
        </div>
        <div className="field">
          <label
            className="block text-sm font-medium text-black-700"
            style={{ margin: "0 10px" }}
          >
            Upload Documents
          </label>
          <div className="row">
            <input type={"file"} name="upload" className="input upload"></input>
          </div>
        </div>
        <div>
          <div>
            <label className="header2" style={{ margin: "0 10px" }}>
              Declarations
            </label>
          </div>
          <div className="dec">
            <input
              style={{ margin: "5px" }}
              className="checkbox"
              type={"checkbox"}
              value={english}
              onChange={handleChangeOne}
            />
            <label className="dec" style={{ margin: "0 10px" }}>
              The information provided in this form is correct to the best of my
              knowledge.
            </label>
          </div>
        </div>
        <div className="button">
          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ">
            Button
          </button>
        </div>
      </form>
    </div>
  );
}
