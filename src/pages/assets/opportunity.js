import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

import { useState } from "react";

// const ReadMore = ({ children }) => {
//   const text = children;
//   const [isReadMore, setIsReadMore] = useState(true);
//   const toggleReadMore = () => {
//     setIsReadMore(!isReadMore);
//   };
//   return (
//     <p className="text">
//       {isReadMore ? text.slice(0, 150) : text}
//       <span onClick={toggleReadMore} className="read-or-hide">
//         {isReadMore ? "...read more" : " show less"}
//       </span>
//     </p>
//   );
// };

function Oppor({ data }) {
  var array = data.qualifications;
  return (
    <div style={{ width: 500 }}>
      <div className="header3">{data.title}</div>
      <div className="header2">Mission</div>
      <div className="text1">
        {/* <ReactReadMoreReadLess
          charLimit={200}
          readMoreText={"Read more ▼"}
          readLessText={"Read less ▲"}
          readMoreClassName="read-more-less--more"
          readLessClassName="read-more-less--less"
        > */}
        {data.mission}
        {/* </ReactReadMoreReadLess> */}
      </div>
      <div className="header2">Position Overview</div>
      <div className="text1">{data.overview}</div>
      <div className="header2">Qualifications</div>
      <div className="text1">
        <div>
          {array.map((value) => (
            <div key={value}>
              {" "}
              <span>*</span>
              {value}{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="header2">Job Type</div>
      <div className="text1">{data.job}</div>
    </div>
  );
}

export default Oppor;
