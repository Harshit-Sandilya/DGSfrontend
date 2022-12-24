import React from "react";
import "./css/gall.css";
import Button from "react-bootstrap/Button";

export default function Gallery() {
  return (
    <div className="gall">
      <div className="Gtitle header">Photo Gallery</div>
      <div className="Gsearch">
        <input type="text" className="inputF" name="name" />
        <Button variant="secondary" className="btnG">
          Go
        </Button>{" "}
      </div>
      <div className="latest">
        <div className="Lthumb"> {/* <img></img>{" "} */}</div>
        <div className="Ldesc">
          <div className="titleT">Latest Album</div>
          <div className="line"></div>
          <div className="sub">
            <div className="Atitle"> Album title </div>
            <div>
              {" "}
              <span className="subH">Event Date:</span>dd-mm-yy
            </div>
            <div>
              {" "}
              <span className="subH"> Total Photos:</span> 54
            </div>
            <div className="auto">
              {" "}
              r
              <Button variant="primary" className="Vbtn">
                View All
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="prev">
        <div className="titleT">Previous Album</div>
        <div className="line1"></div>
        <div className="Palbums">
          <Acard />
          <Acard />
          <Acard />
          <Acard />
          <Acard />
          <Acard />
          <Acard />
          <Acard />
        </div>
      </div>
    </div>
  );
}

function Acard() {
  return (
    <div className="Acard">
      <div className="Pthumb"></div>
      <div className="Pdesc">
        <div className="sub">
          <div className="Atitle"> Album title </div>
          <div>
            <div className="line1"></div>{" "}
            <span className="subH">Event Date:</span>dd-mm-yy
          </div>
          <div>
            {" "}
            <span className="subH"> Total Photos:</span> 54
          </div>
          <div className="auto">
            {" "}
            <Button variant="primary" className="Vbtn">
              View All
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
