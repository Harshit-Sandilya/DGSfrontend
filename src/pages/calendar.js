import React from "react";
import "./css/gall.css";
import Button from "react-bootstrap/Button";
import Calendar from "react-calendar";
import moment from "moment/moment";
import "react-calendar/dist/Calendar.css";
import { Checkbox } from "@material-tailwind/react";
import EventCard from "./assets/eventCards";

export default function Cal() {
  const [query, setquery] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const mark = ["04-10-2022", "12-10-2022"];
  const event = [
    { name: "Music Program", event_type: "Music events", date: "10-04-2022" },
    { name: "Sports Program", event_type: "Sports events", date: "10-12-2022" },
  ];

  return (
    <div className="gall">
      <div className="Gtitle header">School Calendar</div>

      <div className="latest">
        <div className="cal">
          {" "}
          <Calendar
            onChange={setDate}
            value={date}
            tileClassName={({ date, view }) => {
              if (mark.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
                return "highlight";
              }
            }}
          />
        </div>
        <div className="Ldesc">
          <div className="Gsearch">
            <input
              type="text"
              className="inputF"
              name="name"
              placeholder="event"
              value={query}
              onChange={(e) => setquery(e.target.value)}
            />
            <Button variant="secondary" className="btnG">
              Go
            </Button>{" "}
          </div>
          <div className="titleT marginT">Category</div>
          <div className="line"></div>
          <div className="sub">
            <div className="Atitle"> Album title </div>
            <div className="marginT">
              {" "}
              <Checkbox id="sports" ripple={true} />
              <span className="subH marginR">Sports</span>
            </div>
            <div className="marginT">
              {" "}
              <Checkbox id="sports" ripple={true} />
              <span className="subH marginR"> Music</span>
            </div>
            <div className="marginT">
              {" "}
              <Checkbox id="sports" ripple={true} />
              <span className="subH marginR"> Academic</span>
            </div>
          </div>
        </div>
      </div>
      <div className="prev">
        <div className="titleT">Events this Month</div>
        <div className="line1"></div>
        <div className="events">
          {event.map((value) => (
            <div className="event" key={value}>
              {" "}
              <EventCard item={value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
