import React from "react";

function Misc() {
  return (
    <div className="basic">
      <div className="brow center">
        <input
          type="text"
          className="input_field miscField"
          placeholder={"Last Salary Drawn"}
        ></input>
        <input
          className="input_field miscField"
          placeholder={"Expected Salary"}
        ></input>
      </div>

      <div className="Mtext1">
        I hereby certify that the particulars furnished above are correct to the
        best of my knowledge and belief. I have not concealed any information
        likely to impair my fitness for employment. It is revealed later that I
        have given false/incorrect details or concealed material information; my
        services are liable to summary termination without any notice or
        compensation.
      </div>
      <br></br>
      <div className="Mtext1 Aleft">
        If selected. I shall produce :<br></br>
        <br></br>
        <ol className="ol-misc">
          <li>1. Original Certificate for Verification</li>
          <li>
            2. Certificates from any last employer duly counter signed by the
            competent authority
          </li>
          <li>
            3. Xerox/Photostat copy of
            <ul className="ul-misc">
              <li> Medical Certificate from a recognized hospital</li>
              <li>Latest Character Certificate</li>
              <li>Aadhar Card Copy</li>
              <li>PAN Card Copy</li>
              <li>Marriage Certificate (if married)</li>
              <li>Police Verification Certificate</li>
              <li>
                Photos of I.D. Proof (Aadhar Card/Voter ID/Driving
                License/Passport)
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Misc;
