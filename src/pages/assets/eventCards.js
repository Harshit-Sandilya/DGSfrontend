import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "../css/event_Cards.css";
function EventCard({ item }) {
  console.log("hello");

  let months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let eventTypeList = ["Music events", "Sports events", "Music"];
  let colors = ["#F08080", "#ADD8E6", "#FFFACD"];
  const mon = new Date(item.date);
  let month = months[mon.getMonth()];
  let date = mon.getDate();
  let indexColor = eventTypeList.indexOf(item.event_type);
  console.log(date);
  console.log(indexColor);

  return (
    <div>
      <Card
        style={{ backgroundColor: colors[indexColor] }}
        className="event-card"
      >
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <h3 className="event-type">{item.event_type}</h3>
        </Card.Body>
      </Card>
      <Card className="event-card date-card">
        <Card.Body className="date-body">
          <h3 className="event-type month">{month}</h3>
          <h3 className="event-type date">{date}</h3>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EventCard;
