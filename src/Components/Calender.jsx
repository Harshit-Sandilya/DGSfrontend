import React, { useState } from "react";
import Calendar from "react-calendar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import JoinUs from "./JoinUs";
import "react-calendar/dist/Calendar.css";
import "../Styles/Calender.css";

function Calender() {
	const [date, setDate] = useState(new Date());

	return (
		<div>
			<div className="Calender">
				<h1 className="text-center">Calendar</h1>
				<div className="calendar-container">
					<Calendar onChange={setDate} value={date} selectRange={false} />
				</div>
				{date.length > 0 ? (
					// <p className='text-center'>
					{
						/* <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()} */
					}
				) : (
					// </p>
					<p className="text-center">
						<span className="bold">Selected date:</span> {date.toDateString()}
					</p>
				)}
			</div>
			<Navbar page="Calender" />
			<Footer />
			<JoinUs />
		</div>
	);
}

export default Calender;
