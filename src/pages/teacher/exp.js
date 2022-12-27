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
    </div>
  );
}

export default Experience;
